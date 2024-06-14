import { useState, useEffect, DependencyList, CSSProperties } from 'react';

import styles from './Typing.module.scss';
import { Cursor, CursorProps } from '../Cursor/Cursor';

type TypingProps = {
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

    cursor?: CursorProps;

    hideCursor?: boolean;
    cursorClassName?: string;
    cursorStyle?: CSSProperties;

    deps?: DependencyList;
}

export const Typing = ({
    children: text,
    className = '',
    style = {},
    timming = 100,
    delay = 0,
    infinite = false,
    //infiniteDelay = 1000,
    hideCursorOnEnd = false,
    hideCursorWhileInitialDelay = false,
    endDelay = 0,
    hideCursor = false,
    //cursorClassName = '',
    //cursorStyle = {},
    cursor,
    deps = []
}: TypingProps) =>
{
    const [fullText, setFullText] = useState('');
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cursorVisible, setCursorVisible] = useState(/*!hideCursor*/!hideCursorWhileInitialDelay);

    function init() {
        setCurrentText('');
        setCurrentIndex(0);
        if(!hideCursor)
            initCursor();
    }

    function initCursor() {
        //currentIndex === 0 &&
        if(delay > 0 && hideCursorWhileInitialDelay/* && cursorVisible*/) {
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

    /*useEffect(() => {
        if(currentIndex >= fullText.length) {
            if(hideCursorOnEnd && cursorVisible)
                setTimeout(() => {
                    setCursorVisible(false);
                }, endDelay);
        }
    }, [currentIndex]);*/

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if(fullText.length === 0)
            return;

        if(currentIndex < fullText.length) {
            timeout = setTimeout(() => {
                setCurrentText(prevText => prevText.concat(fullText[currentIndex]));
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, currentIndex === 0 ? (delay + timming) : timming);
        }
        else {
            if(infinite)
                /*timeout = */setTimeout(() => init(), endDelay);
            
            if(hideCursorOnEnd && cursorVisible) {
                // console.log("aaa")
                /*timeout = */setTimeout(() => {
                    setCursorVisible(false);
                }, endDelay);
            }
        }

        return () => clearTimeout(timeout);
    },
    [currentIndex, timming, infinite, fullText]);

    /*useEffect(() => {
        
    },
    [currentIndex]);*/

    return <div className={styles.container}>

        <span className={`${styles.text} ${className}`} style={style}>{currentText}</span>

        {cursorVisible &&
            <Cursor
                className={cursor?.className}
                style={cursor?.style}
                blinking={currentIndex >= fullText.length}
            />}
    </div>;
};