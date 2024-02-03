import styles from './styles.module.scss';

type LangAttribute = {
    title: string;
    points: number;
}

type CardLangProps = {
    reading: LangAttribute;
    writing: LangAttribute;
    conversation: LangAttribute;
}

const CardLang: React.FC<CardLangProps> = ({ reading, writing, conversation }) =>
{
    const max = 5;

    const attrs = [ reading, writing, conversation ];

    return (
        <div className={styles.lang}>

            {attrs.map((a, i) =>
            <div key={i} className={styles.lang__attr}>
                <span>{ a.title }</span>
                <div className={styles.points}>
                    {[...Array(max)].map((_, i) =>
                        <div key={i} className={styles.point} data-checked={i < a.points} />
                    )}
                </div>
            </div>)}
            
        </div>
    );
}

export default CardLang;