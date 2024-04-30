import { CSSProperties, ComponentProps, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const blank = (obj: any, otherCondition: boolean = true) =>
    obj && otherCondition ? obj : ''

type DivProps = ComponentProps<'div'>

type InViewAnimationProps = DivProps & {
    inViewClassName?: string;
    inViewStyle?: CSSProperties;
}

type SlideProps = DivProps & {
    to?: 'left' | 'right' | 'up' | 'down',
    delay?: number;
}

export const InViewAnimation = ({ children, className, inViewClassName, style, inViewStyle }: InViewAnimationProps) =>
{
    const { ref, inView } = useInView({ threshold: 0.4 });

    /*const ref = useRef();

    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach((entry: any) => {
                if(entry.intersectionRatio > 0) {
                    console.log('entrou')
                    entry.target.style.animation = 'slideleft 0.6s forwards 0.2s ease-out'
                }
                else {
                    console.log('saiu')
                    entry.target.style.animation = 'none'
                }
            });
        });

        obs.observe(ref.current);
    })*/

    return (
        <div
            ref={ref}
            className={`${className ? className : ''} ${inViewClassName && inView ? inViewClassName : ''}`}
            style={{...blank(style), ...blank(inViewStyle, inView)}}
        >
            { children }
        </div>
    );
}

export const Slide = ({ children, to = 'left', delay, ...props }: SlideProps) =>
{
    return (
        <InViewAnimation
            style={{ opacity: 0 }}
            inViewStyle={{
                animation: `slide${to} 0.6s forwards ${delay ? delay : 0}s ease-out`
            }}
            {...props}
        >
            { children }
        </InViewAnimation>
    );
}