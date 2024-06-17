export const createFallDownDot = (maxWidth: number) =>
    new Dot(
        Math.floor(Math.random() * maxWidth),
        Math.floor(Math.random() * 600) * -1,
        0.5 + Math.random() * 0.5,
        4 + Math.floor(Math.random() * 2)
    );

export const createDot = (width: number, height: number) =>
    new Dot(
        Math.floor(Math.random() * width),
        Math.floor(Math.random() * height),
        0.5 + Math.random() * 0.5,
        4,
        Math.floor(Math.random() * 360),
        'rgba(255, 255, 255, 0.25)',
        // 5000 + Math.floor(Math.random() * 5000)
    );

export class Dot
{
    public creationDt: number;

    constructor(
        public x: number,
        public y: number,
        public speed: number = 1,
        public size: number = 5,
        public direction: number = 0,
        public color: string = 'white',
        // public maxLifetime: number = 8000,
    ){
        this.creationDt = Date.now();
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    // Calcula relação linear entre y e altura, gerando um valor alpha para RGB (de 0 a 1)
    calcAlpha = (height: number): number => 1 - (this.y / height);

    calcDistance(dot: Dot): number {
        const dX = dot.x - this.x;
        const dY = dot.y - this.y;
        const tamanhoReta = Math.sqrt(dX * dX + dY * dY);
        return tamanhoReta;
    }

    moveDown(): void {
        this.y += this.speed;
    }

    move(): void {
        const radians = this.direction * (Math.PI / 180);

        const deltaX = this.speed * Math.cos(radians);
        const deltaY = this.speed * Math.sin(radians);

        this.x += deltaX;
        this.y += deltaY;
    }

    getLifetime = () => Date.now() - this.creationDt;

    hovers(x: number, y: number, range: number = 1) {
        const dist = Math.sqrt((this.x - x) ** 2 + (this.y - y) ** 2);
        return dist <= this.size * range;
    }

    setLocation(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}