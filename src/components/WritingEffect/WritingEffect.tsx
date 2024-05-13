import styles from './WritingEffect.module.scss';

import { CSSProperties, useEffect, useRef, useState } from "react";

export type GeneralWritingEffectProps = {
    timming?: number;
    delay?: number;

    hideCursorOnEnd?: boolean;
    hideCursorWhileInitialDelay?: boolean;
    endDelay?: number;

    hideCursor?: boolean;
    cursorClassName?: string;
    cursorStyle?: CSSProperties;
}

export type PersonalWritingEffectProps = {
    className?: string;
    styles?: CSSProperties;
}

type WritingEffectProps =
    GeneralWritingEffectProps &
    PersonalWritingEffectProps & {
        children: string;
    };

export const defaultValues = {
    timming: 100,
    delay: 100,
    endDelay: 0
};

export const WritingEffect = ({
    children: text,
    timming = defaultValues.timming,
    hideCursorOnEnd = false,
    hideCursorWhileInitialDelay = false,
    endDelay = defaultValues.endDelay,
    delay = defaultValues.delay,
    className,
    styles: cssStyles,
    hideCursor = false,
    cursorClassName,
    cursorStyle
}: WritingEffectProps) =>
{
    const textRef = useRef();

    const [fontHeight, setFontHeight] = useState('');
    const [texting, setTexting] = useState<string>('');
    const [cursorVisible, setCursorVisible] = useState<boolean>(!hideCursor);

    useEffect(() => {
        for(let i = 0; i < text.length; i++) {
            setTimeout(() =>
                setTexting(prev => prev + text.charAt(i)),
                timming * i + delay
            );
        }

        if(hideCursorWhileInitialDelay && delay > 0) {
            setCursorVisible(false);
            setTimeout(() =>
                setCursorVisible(true),
                delay
            );
        }

        if(hideCursorOnEnd)
            setTimeout(() =>
                setCursorVisible(false),
                delay + timming * text.length + endDelay
            );
    }, []);

    useEffect(() =>
    {
        if(textRef && textRef.current) {
            const fontSize = window
                .getComputedStyle(textRef.current, null)
                .getPropertyValue("font-size");
            setFontHeight(fontSize);
        }
    }, [textRef]);

    return(
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <p ref={textRef} className={`${styles.text} ${className}`} style={cssStyles}>
                { texting }
            </p>

            {cursorVisible && <span
                className={`${styles.cursor} ${cursorClassName}`}
                style={{
                    ...cursorStyle,
                    animationPlayState: texting.length === text.length ? 'running' : 'paused',
                    height: fontHeight
                }}
            />}
        </div>
    );
}