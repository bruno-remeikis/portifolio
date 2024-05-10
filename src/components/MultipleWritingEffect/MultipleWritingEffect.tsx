import { ReactNode, useEffect, useState } from "react";
import { WritingEffect, GeneralWritingEffectProps, defaultValues, PersonalWritingEffectProps } from "../WritingEffect/WritingEffect"

type Children = PersonalWritingEffectProps & {
    text: string,
}

type MultipleWritingEffetcProps = GeneralWritingEffectProps & PersonalWritingEffectProps & {
    //childrens: string[];
    childrens: Children[];
}

export const MultipleWritingEffetc = ({ childrens, ...gen }: MultipleWritingEffetcProps) =>
{
    const [effects, setEffects] = useState<any>(() =>
    {
        const timming = gen.timming ? gen.timming : defaultValues.timming;
        const delay = gen.delay ? gen.delay : defaultValues.delay;
        const endDelay = gen.endDelay ? gen.endDelay : 100;

        let startTime = delay;

        return childrens.map((child, i) => {
            console.log(delay);
            // Cria elemento
            const el = (
                <WritingEffect key={i}
                    {...gen}
                    className={child.className ? child.className : gen.className}
                    styles={child.styles ? child.styles : gen.styles}

                    timming={timming}
                    delay={startTime}
                    endDelay={endDelay}
                    hideCursorOnEnd={i !== childrens.length - 1}
                    hideCursorWhileInitialDelay={i !== 0}
                >{ child.text }</WritingEffect>
            );
            // Atualiza delay a ser utilizado pelos próximos elementos
            startTime += delay + (child.text.length * timming) + endDelay;
            
            return el;
        });
    });

    return (
        <>{effects ? effects : ''}</>
    )
}