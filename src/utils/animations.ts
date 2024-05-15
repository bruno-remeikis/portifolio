import { CSSProperties } from "react"

type Direction = 'up' | 'left' | 'down' | 'right';

type ElementProps = {
    className?: string,
    style?: CSSProperties
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
export const slide = (direction: Direction, active: boolean, i?: number, elementProps?: ElementProps): ElementProps =>
({
    className:
        `slide${direction}-init ` +
        (elementProps && elementProps.className ? elementProps.className : ''),
    style: {
        ...(elementProps && elementProps.style ? elementProps.style : {}),
        animation: active
            ? `slide${direction} 0.5s forwards ${i ? (i * 0.1) : 0}s ease-in-out`
            : null
    }
})
    