import { ReactNode } from 'react';
import styles from './Card.module.scss';
import { useInView } from 'react-intersection-observer';

type CardRootProps = {
    children: ReactNode,
    i: number;
}

const CardRoot: React.FC<CardRootProps> = ({ children, i }) =>
{
    const { ref, inView } = useInView({ threshold: 0.4 });

    return (
        <div ref={ref} className={`${styles.card} slide-init`} style={{
            animation: inView ? `slideright 0.5s forwards ${0.1 * i}s ease-out` : null
        }}>
            { children }
        </div>
    );
}

export default CardRoot;