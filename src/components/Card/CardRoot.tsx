import { ReactNode } from 'react';
import styles from './Card.module.scss';
import { Slide } from '../InViewAnimation';

type CardRootProps = {
    children: ReactNode
}

const CardRoot: React.FC<CardRootProps> = ({ children }) => {
    return (
        <Slide className={styles.card}>
            { children }
        </Slide>
    );
}

export default CardRoot;