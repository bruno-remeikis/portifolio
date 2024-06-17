import { MouseEvent, MutableRefObject, useEffect, useRef, useState } from "react";

import styles from '../HomeCanvas.module.scss';
import { SuperAnimation } from "./SuperAnimation";

type HomeCanvasProps = {
    parentRef: MutableRefObject<any>;
    dotsAmount?: number;
}

// % da altura referente à altura do pai (`parentRef`)
// Ex.: Se o pai possuir 1000 de altura, o canvas possuirá `1000 * persentageOfHeight`
const persentageOfHeight = 0.7;

export const SuperCanvas = ({ parentRef, dotsAmount = 20 }: HomeCanvasProps) =>
{
    const canvasRef = useRef(null);

    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [animation, setAnimation] = useState<SuperAnimation>();

    function handleHoldDot(e: MouseEvent<HTMLElement>) {
        animation.holdDot(e.clientX, e.clientY);
    }

    function handleLeaveDot(e: MouseEvent<HTMLElement>) {
        animation.leaveDot();
    }

    function handleMoveDot(e: MouseEvent<HTMLElement>) {
        animation.moveHoldedDot(e.clientX, e.clientY);
    }

    useEffect(() => {
        if(!width || !height || !canvasRef || !canvasRef.current)
            return;

        const canvas: HTMLCanvasElement = canvasRef.current;
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

        const animation = new SuperAnimation(ctx, dotsAmount);
        setAnimation(animation);
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
            onMouseDown={handleHoldDot}
            onMouseUp={handleLeaveDot}
            onMouseMove={handleMoveDot}
        />
    )
}