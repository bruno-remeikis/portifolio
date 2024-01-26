import styles from './styles.module.scss';

const CardRoot: React.FC = ({ children }) => {
    return (
        <div className={styles.card}>
            { children }
        </div>
    );
}

export default CardRoot;