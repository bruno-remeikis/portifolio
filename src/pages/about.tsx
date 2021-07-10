import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/About.module.scss';

import MainFrame, { PageEnum } from '../components/MainFrame';

const About: React.FC = () =>
{
    const renderTechNames = (techs: { name: string, rgb: string }[]) =>
        techs.map(({name, rgb}) => 
            <>
                {' '}<span className={styles.technology} style={{ color: `rgb(${rgb})` }}>{name}</span>
            </>
        );

    return (
        <MainFrame page={PageEnum.ABOUT}>
            <Head>
                <title>Sobre - Bruno Remeikis</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.infoGroup}>
                    <h2>Sobre mim</h2>
                    <p>Me chamo <span>Bruno Coutinho Remeikis</span>. Sou desenvolvedor Full Stack.</p>
                    <p>Minhas principais tecnologias são:
                    {renderTechNames([
                        { rgb: '241, 101, 41 ', name: 'HTML'       },
                        { rgb: '51 , 169, 220', name: 'CSS'        },
                        { rgb: '240, 219, 79 ', name: 'JavaScript' },
                        { rgb: '0  , 122, 204', name: 'TypeScript' },
                        { rgb: '97 , 218, 251', name: 'React'      },
                        { rgb: '234, 45 , 46', name: 'Java'       },
                        { rgb: '255, 255, 255', name: 'SQL'        },
                    ])}.
                    Você pode mais clicando em <Link href='/abilities'>Habilidades</Link>.</p>
                </div>

                <div className={styles.infoGroup}>
                    <h2>Curiosidades</h2>
                    <ul>
                        <li>Adoro música em todos os sentidos: ouvir, tocar instrumentos, cantar, compor, dançar (apesar de não saber), etc.</li>
                        <li>Gosto de criar coisas novas, desde seu planejamento até seu desenvolvimento.</li>
                    </ul>
                </div>
            </main>
        </MainFrame>
    );
}

export default About;