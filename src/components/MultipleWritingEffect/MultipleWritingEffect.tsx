import { ReactNode, useEffect, useState } from "react";
import { WritingEffect, GeneralWritingEffectProps, defaultValues, PersonalWritingEffectProps } from "../WritingEffect/WritingEffect"

type SubChildren = PersonalWritingEffectProps & {
    text: string;
}

type Children = PersonalWritingEffectProps & {
    text: string | SubChildren[],
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

        return childrens.map((child, i) =>
        {
            let el;
            // Verifica sub-elementos
            if(typeof child.text === 'string') {
                // Cria elemento
                el = (
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
            }
            else {
                el = (
                    <div style={{ display: 'flex' }}>
                        {child.text.map(subChild =>
                        {
                            // Cria sub-elemento
                            const subEl = (
                                <WritingEffect key={i}
                                    {...gen}
                                    className={subChild.className ? subChild.className : (child.className ? child.className : gen.className)}
                                    styles={subChild.styles ? subChild.styles : (child.styles ? child.styles : gen.styles)}

                                    timming={timming}
                                    delay={startTime}
                                    endDelay={endDelay}
                                    hideCursorOnEnd={i !== childrens.length - 1}
                                    hideCursorWhileInitialDelay={i !== 0}
                                >{ subChild.text }</WritingEffect>
                            );
                            // Atualiza delay a ser utilizado pelos próximos elementos
                            startTime += delay + (subChild.text.length * timming);// !+ endDelay;

                            return subEl;
                        })}
                    </div>
                );
            }
            
            return el;
        });
    });

    return (
        <>{effects ? effects : ''}</>
    )
}