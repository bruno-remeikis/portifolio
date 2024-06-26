import { Dot, createDot } from "../Dot";

const minConnectionDist = 200;
const maxDotAlpha = 0.25;
const maxConnectionAlpha = 0.75;
const dotBeginsToDisappearAfter = 0.9;
const timeToDotAppear = 1500;

export class SuperAnimation
{
    // Attributes

    private _animationFrameId: number;
    private _startDt: number;

    private dots: Dot[];
    private holdedDot: Dot | null = null;

    // Getters & Setters

    get animationFrameId() {
        return this._animationFrameId;
    }

    // Constructor

    constructor(
        private ctx: CanvasRenderingContext2D,
        private dotsAmount: number,
    ){}

    // Methods

    init() {
        this.dots = [];
        for(let i = 0; i < this.dotsAmount; i++)
            this.dots.push(createDot(this.ctx.canvas.width, this.ctx.canvas.height));
    }

    start() {
        if(!this._startDt)
            this._startDt = Date.now();

        // Limpar canvas
        this.clear();
    
        this.dots.forEach((dot, i) =>
        {
            this.renderConnections(dot, i);

            this.renderDot(dot);
            
            if(dot !== this.holdedDot)
                dot.move();
        
            // if(dot.getLifetime() >= dot.maxLifetime) {
            //     this.dots[i] = createDot(this.ctx.canvas.width, this.ctx.canvas.height);
            // }

            this.recreateFugitiveDot(dot, i);
        });
        
        this._animationFrameId = requestAnimationFrame(() => this.start());
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    private renderDot(dot: Dot) {
        // A partir de certa altura, o ponto começa a sumir
        if(dot.y >= this.ctx.canvas.height * dotBeginsToDisappearAfter) {
            dot.color = `rgba(255, 255, 255, ${this.calcAlphaForHeight(dot)}`;
        }
        else {
            dot.color = dot.getLifetime() <= timeToDotAppear
                ? `rgba(255, 255, 255, ${this.calcAlphaForLifetime(dot) * 0.25})`
                : 'rgba(255, 255, 255, 0.25)';
        }

        dot.render(this.ctx);
    }

    private renderConnections(dot: Dot, i: number) {
        for(let j = i + 1; j < this.dots.length; j++) {
            const dist = dot.calcDistance(this.dots[j]);
            if(dist <= minConnectionDist)
                this.renderConnector(dist, dot, this.dots[j]);
        }
    }

    private renderConnector(dist: number, dot1: Dot, dot2: Dot) {
        const alpha = maxConnectionAlpha - (dist / 200);

        this.ctx.beginPath();
        this.ctx.strokeStyle = `rgba(255, 255, 255, ${alpha}`;
        this.ctx.moveTo(dot1.x, dot1.y);
        this.ctx.lineTo(dot2.x, dot2.y);
        this.ctx.stroke();
    }

    private recreateFugitiveDot(dot: Dot, i: number) {
        if(dot.x < 0 || dot.x > this.ctx.canvas.width
        || dot.y < 0 || dot.y > this.ctx.canvas.height) {
            this.recreateDot(i);
        }
    }

    private recreateDot(i: number) {
        this.dots[i] = createDot(this.ctx.canvas.width, this.ctx.canvas.height);
    }

    private calcAlphaForHeight(dot: Dot) {
        // Definindo a porcentagem de altura
        const percentage = (dot.y / this.ctx.canvas.height) * 100;
        // Calculando o progresso com base na porcentagem em uma única fórmula
        return maxDotAlpha * Math.max(0, 1 - (percentage - dotBeginsToDisappearAfter * 100) / 5);
    }

    private calcAlphaForLifetime(dot: Dot) {
        return dot.getLifetime() / timeToDotAppear;
    }

    holdDot(x: number, y: number): void {
        for(const dot of this.dots) {
            if(dot.hovers(x, y, 4)) {
                this.holdedDot = dot;
                this.holdedDot.setLocation(x, y);
                return;
            }
        }
    }

    moveHoldedDot(x: number, y: number): void {
        if(!this.holdedDot)
            return;
        this.holdedDot.setLocation(x, y);
    }

    leaveDot() {
        this.holdedDot = null;
    }
}