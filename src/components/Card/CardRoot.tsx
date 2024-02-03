import { ReactNode } from 'react';
import styles from './styles.module.scss';

type CardRootProps = {
    children: ReactNode
}

const CardRoot: React.FC<CardRootProps> = ({ children }) => {
    return (
        <div className={styles.card}>
            { children }
        </div>
    );
}

export default CardRoot;