import { useState, useEffect, DependencyList, CSSProperties } from 'react';

import styles from './TypingEffect.module.scss';

type TypingEffectProps = {
    children: string;
    className?: string;
    style?: CSSProperties;

    timming?: number;
    delay?: number;
    infinite?: boolean;
    infiniteDelay?: number;

    hideCursorOnEnd?: boolean;
    hideCursorWhileInitialDelay?: boolean;
    endDelay?: number;

    hideCursor?: boolean;
    cursorClassName?: string;
    cursorStyle?: CSSProperties;

    deps?: DependencyList;
}

export const TypingEffect = ({
    children: text,
    className = '',
    style = {},
    timming = 100,
    delay = 0,
    infinite = false,
    infiniteDelay = 1000,
    hideCursorOnEnd = false,
    hideCursorWhileInitialDelay = false,
    endDelay = 0,
    hideCursor = false,
    cursorClassName = '',
    cursorStyle = {},
    deps = []
}: TypingEffectProps) =>
{
    const [fullText, setFullText] = useState('');
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cursorVisible, setCursorVisible] = useState(!hideCursor);

    // const typing = currentIndex < fullText.length;

    function init() {
        setCurrentText('');
        setCurrentIndex(0);
        initCursor();
    }

    function initCursor() {
        if(currentIndex === 0 && hideCursorWhileInitialDelay && cursorVisible) {
            setCursorVisible(false);
            setTimeout(() => {
                setCursorVisible(true);
            }, delay);
        }
    }

    useEffect(() => {
        setFullText(text);
        init();
    },
    [text, ...deps]);

    useEffect(() => {
        if(currentIndex >= fullText.length) {
            if(hideCursorOnEnd && cursorVisible)
                setTimeout(() => {
                    setCursorVisible(false);
                }, endDelay);
        }
    }, [currentIndex]);


    // useEffect(() => initCursor(), []);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if(currentIndex < fullText.length) {
            timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + fullText[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, currentIndex === 0 ? (delay + timming) : timming);
        }
        else if(infinite)
            timeout = setTimeout(() => init(), infiniteDelay);

        return () => clearTimeout(timeout);
    },
    [currentIndex, timming, infinite, fullText]);

    /*useEffect(() => {
        
    },
    [currentIndex]);*/

    return <div className={styles.container}>
        <span className={`${styles.text} ${className}`} style={style}>{currentText}</span>
        {cursorVisible && <span
            className={`${styles.cursor} ${cursorClassName}`}
            style={{
                ...cursorStyle,
                animationPlayState: currentIndex < fullText.length ? 'paused' : 'running' //typing ? 'running' : 'paused',
                // height: fontHeight ? fontHeight : 'inherit'
            }}
        />}
    </div>;
};