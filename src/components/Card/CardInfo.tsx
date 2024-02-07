import { CiCalendar } from 'react-icons/ci';
import styles from './Card.module.scss';

type CardInfoProps = {
    title: string;
    institution?: string;
    office?: string;
    local: string;
    period: string;
}

const CardInfo: React.FC<CardInfoProps> = ({ title, institution, office, local, period }) => {
    return (
        <div className={styles.info}>
            <p className={styles.info__main}>{ title }</p>

            {office &&
                <p className={styles.info__office}>{ office }</p>}

            <p className={styles.info__sub}>
                <span>{ institution } { institution && local ? String.fromCodePoint(0x2022) : '' } { local }</span>
                <span className={styles.info__date}><CiCalendar /> { period }</span>
            </p>
        </div>
    );
}

export default CardInfo;