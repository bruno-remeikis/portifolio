import { MutableRefObject, useEffect, useRef, useState } from "react";

import styles from '../HomeCanvas.module.scss';
import { Dot, createFallDownDot } from "../Dot";

type FallDownCanvasProps = {
    parentRef: MutableRefObject<any>;
}

// % da altura referente à altura do pai (`parentRef`)
// Ex.: Se o pai possuir 1000 de altura, o canvas possuirá `1000 * persentageOfHeight`
const persentageOfHeight = 0.7;

export const FallDownCanvas = ({ parentRef }: FallDownCanvasProps) =>
{
    const canvasRef = useRef(null);

    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
        if(!width || !height)
            return;

        console.log(height);

        const canvas: HTMLCanvasElement = canvasRef.current;
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

        let animationFrameId;

        let dots: Dot[] = [];
        for(let i = 0; i < 10; i++)
            dots.push(createFallDownDot(width));

        const animate = () =>
        {
            // Limpar canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            dots.forEach((dot, i) =>
            {
                dot.color = `rgba(255, 255, 255, ${dot.calcAlpha(height)})`;
                dot.render(ctx);
                dot.moveDown();
            
                if(dot.y >= height + 10)
                    dots[i] = createFallDownDot(width);
            });
            
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationFrameId);
    }, [width, height]);

    // Configura e atualiza dimensões do canvas
    useEffect(() =>
    {
        if(!parentRef || !parentRef.current)
            return;

        if(parentRef.current.offsetWidth !== width)
            setWidth(parentRef.current.offsetWidth);

        if(parentRef.current.offsetHeight * persentageOfHeight !== height)
            setHeight(parentRef.current.offsetHeight * persentageOfHeight);
    },
    [parentRef, parentRef.current, parentRef.current?.offsetWidth, parentRef.current?.offsetHeight]);


    return (
        <canvas
            ref={canvasRef}
            className={styles.canvas}
            width={width}
            height={height}
        />
    )
}