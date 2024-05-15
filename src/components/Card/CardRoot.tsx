import { ReactNode } from 'react';
import styles from './Card.module.scss';
import { useInView } from 'react-intersection-observer';
import { slide } from '../../utils/animations';

type CardRootProps = {
    children: ReactNode;
    i: number;
    highlighted?: boolean;
}

const CardRoot: React.FC<CardRootProps> = ({ children, i, highlighted = false }) =>
{
    const { ref, inView } = useInView({ threshold: 0.4 });

    return (
        <div ref={ref} 
            {...slide('left', inView, i, {
                className: `${styles.card} ${highlighted ? styles.highlighted : ''}`,
            })}
        >
            { children }
        </div>
    );
}

export default CardRoot;