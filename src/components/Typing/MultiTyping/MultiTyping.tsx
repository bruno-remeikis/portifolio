import { CSSProperties, DependencyList, useEffect, useMemo, useState } from "react";
import { Typing } from "../Typing/Typing";
import { Cursor } from "../Cursor/Cursor";

import styles from './MultiTyping.module.scss';

class MultitypintText {
    constructor(
        public text: string,
        public className?: string,
        public style?: CSSProperties
    ) {}
}

type MultiTypingProps = {
    rows: (MultitypintText | MultitypintText[])[];

    defaultClassName?: string;
    defaultStyle?: CSSProperties;
    deps?: DependencyList;

    timming?: number;
}

export const MultiTyping = ({ rows, defaultClassName = '', defaultStyle = {}, deps = [], timming = 100 }: MultiTypingProps) =>
{
    const endDelay = timming;

    const effects = useMemo((): JSX.Element[] =>
    {
        let delay: number = 0;

        const flatRows = rows.flat();
        let itemCount = 0;

        function createTypingEffect(item: MultitypintText, cursor: boolean): JSX.Element {
            itemCount++;
            console.log(itemCount);
            const el = (
                <Typing
                    key={itemCount}
                    className={item.className ? item.className : defaultClassName}
                    style={defaultStyle}
                    timming={timming}
                    hideCursor={!cursor}
                    delay={delay}
                    endDelay={endDelay}
                    hideCursorWhileInitialDelay
                    hideCursorOnEnd={itemCount < flatRows.length}
                    deps={deps}
                >{ item.text }</Typing>
            );
            delay += item.text.length * timming + endDelay;
            return el;
        }

        return rows.map((row, i) =>
        {
            if(row instanceof Array) {
                const initialDelay = delay;
                return (
                    <div key={`multi-${i}`} className={styles.multiItemsRow}>
                        {row.map(item => createTypingEffect(item, false))}
                        {/* <Cursor animationRunning={false} /> */}
                        <CustomCursor init={initialDelay} end={delay} /*delay={delay}*/ />
                    </div>
                );
            } else
                return createTypingEffect(row, true);
        });
    }, deps);

    return (
        <div>{ effects }</div>
    );
}

type CustomCursorProps = {
    init: number;
    end: number;
}

const CustomCursor = ({ init, end }: CustomCursorProps) => {
    const [a, setA] = useState(false);

    useEffect(() => {
        setTimeout(
            () => setA(true), init
        );

        setTimeout(
            () => setA(false), end
        );
    }, []);

    return (
        <>
            {a && <Cursor blinking={false} />}
        </>
    )
}