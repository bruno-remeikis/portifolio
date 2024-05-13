import { MutableRefObject, useEffect, useRef, useState } from "react";

import styles from '../DefaultCanvas.module.scss';
import { Dot, createDot } from "../Dot";
import { SuperAnimation } from "./SuperAnimation";

type HomeCanvasProps = {
    parentRef: MutableRefObject<any>;
}

// % da altura referente à altura do pai (`parentRef`)
// Ex.: Se o pai possuir 1000 de altura, o canvas possuirá `1000 * persentageOfHeight`
const persentageOfHeight = 0.7;

export const SuperCanvas = ({ parentRef }: HomeCanvasProps) =>
{
    const canvasRef = useRef(null);

    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
        if(!width || !height || !canvasRef || !canvasRef.current)
            return;

        const canvas: HTMLCanvasElement = canvasRef.current;
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

        const animation = new SuperAnimation(ctx, 20);
        animation.init();
        animation.start();

        return () => cancelAnimationFrame(animation.animationFrameId);
    },
    [width, height, canvasRef, canvasRef.current]);

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