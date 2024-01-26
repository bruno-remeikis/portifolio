import styles from './styles.module.scss';

type CardLangProps = {
    leitura: number;
    escrita: number;
    conversacao: number;
}

const CardLang: React.FC<CardLangProps> = ({ leitura, escrita, conversacao }) =>
{
    const max = 4;

    const attrs = [
        { title: 'Leitura', points: leitura },
        { title: 'Escrita', points: escrita },
        { title: 'Conversação', points: conversacao },
    ];

    return (
        <div className={styles.lang}>

            {attrs.map(a =>
            <div className={styles.lang__attr}>
                <span>{ a.title }</span>
                <div className={styles.points}>
                    {[...Array(max)].map((_, i) =>
                        <div className={styles.point} data-checked={i < leitura} />
                    )}
                </div>
            </div>)}
            
        </div>
    );
}

export default CardLang;