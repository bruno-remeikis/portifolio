import { CSSProperties } from "react"

type Direction = 'up' | 'left' | 'down' | 'right';

type ElementProps = {
    className?: string,
    style?: CSSProperties
}

type AnimationProps = {
    timming?: number;
}

/**
 * Aplica animação de slide a um elemento.
 * 
 * IMPORTANTE: Utilize este método com spread no elemento que deseja animar.
 * 
 * @param direction Direção do slide ('up' | 'left' | 'down' | 'right')
 * @param active Se a animação está ativa ou não
 * @param i Índice para delay da animação
 * @param elementProps Propriedades do elemento (passe aqui a `className` e `style` do elemento ao invés de passar diretamente no elemento)
 * @returns Propriedades `className` e `style`
 */
export const slide = (direction: Direction, active: boolean, i?: number, elementProps?: ElementProps, animationProps?: AnimationProps): ElementProps =>
    animate(`slide${direction}`, active, i, elementProps, animationProps);

/**
 * Aplica animação de grow a um elemento.
 * 
 * IMPORTANTE: Utilize este método com spread no elemento que deseja animar.
 * 
 * @param active Se a animação está ativa ou não
 * @param i Índice para delay da animação
 * @param elementProps Propriedades do elemento (passe aqui a `className` e `style` do elemento ao invés de passar diretamente no elemento)
 * @returns Propriedades `className` e `style`
 */
export const grow = (active: boolean, i?: number, elementProps?: ElementProps, animationProps?: AnimationProps): ElementProps =>
    animate(`grow`, active, i, elementProps, animationProps);

/**
 * Aplica animação a um elemento.
 * Para este método funcionar, é necessário:
 * - keyframe com mesmo nome passado no primeiro parâmetro (`animation`)
 * - Classe CSS com mesmo nome passado no primeiro parâmetro (`animation`) e final "-init". Exemplo:
 *   - `animation`: "slide"
 *   - Classe CSS: "slide-init"
 * 
 * IMPORTANTE: Utilize este método com spread no elemento que deseja animar.
 * 
 * @param animation Direção do slide ('up' | 'left' | 'down' | 'right')
 * @param active Se a animação está ativa ou não
 * @param i Índice para delay da animação
 * @param elementProps Propriedades do elemento (passe aqui a `className` e `style` do elemento ao invés de passar diretamente no elemento)
 * @returns Propriedades `className` e `style`
 */
const animate = (animation: string, active: boolean, i?: number, elementProps?: ElementProps, animationProps?: AnimationProps): ElementProps =>
({
    className:
        `${animation}-init ` +
        (elementProps?.className || ''),
    style: {
        ...(elementProps?.style || {}),
        animation: active
            ? `${animation} ${animationProps?.timming || 0.5}s forwards ${i ? (i * 0.1) : 0}s ease-in-out`
            : null
    }
})