import { useState, useEffect, DependencyList, CSSProperties } from 'react';

import styles from './Typing.module.scss';
import { Cursor, CursorProps } from '../Cursor/Cursor';

type CustomCursorProps = CursorProps & {
    hide?: boolean;
    hideOnEnd?: boolean,
    hideBeforeStarting?: boolean;
}

type TypingProps = {
    children: string;
    className?: string;
    style?: CSSProperties;

    timming?: number;
    delay?: number;
    endDelay?: number;
    infinite?: boolean;

    cursor?: CustomCursorProps;

    deps?: DependencyList;
}

export const Typing = ({
    children: text,
    className = '',
    style = {},
    timming = 100,
    delay = 0,
    endDelay = 0,
    infinite = false,
    cursor,
    deps = []
}: TypingProps) =>
{
    const [fullText, setFullText] = useState('');
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cursorVisible, setCursorVisible] = useState(!cursor.hideBeforeStarting);

    function init() {
        setCurrentText('');
        setCurrentIndex(0);
        if(!cursor.hide)
            initCursor();
    }

    function initCursor() {
        if(delay > 0 && cursor.hideBeforeStarting) {
            setCursorVisible(false);
            setTimeout(() => {
                setCursorVisible(true);
            }, delay);
        }
        else
            setCursorVisible(true);
    }

    useEffect(() => {
        setFullText(text);
        init();
    },
    [text, ...deps]);

    useEffect(() => {
        if(fullText.length === 0)
            return;

        if(currentIndex < fullText.length) {
            setTimeout(() => {
                setCurrentText(prevText => prevText.concat(fullText[currentIndex]));
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, currentIndex === 0 ? (delay + timming) : timming);
        }
        else {
            if(infinite)
                setTimeout(() => init(), endDelay);
            
            if(cursor.hideOnEnd && cursorVisible) {
                setTimeout(() => {
                    setCursorVisible(false);
                }, endDelay);
            }
        }
    },
    [currentIndex, timming, infinite, fullText]);

    return <div className={styles.container}>

        <span className={`${styles.text} ${className}`} style={style}>{currentText}</span>

        {cursorVisible &&
            <Cursor
                className={cursor?.className}
                style={cursor?.style}
                blinking={cursor.blinking !== undefined
                    ? cursor.blinking
                    : currentIndex >= fullText.length
                }
            />}
    </div>;
};