import { CSSProperties } from 'react';
import styles from './Cursor.module.scss';

export type CursorProps = {
    className?: string;
    style?: CSSProperties;
    blinking?: boolean;
}

export const Cursor = ({ className = '', style = {}, blinking = true }: CursorProps) =>
{
    return (
        <span
            className={`${styles.cursor} ${className}`}
            style={{
                ...style,
                animationPlayState: blinking ? 'running' : 'paused'
                // height: fontHeight ? fontHeight : 'inherit'
            }}
        />
    ); 
}