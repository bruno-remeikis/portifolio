import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/About.module.scss';

import MainFrame, { PageEnum } from '../components/MainFrame';

const About: React.FC = () =>
{
    return (
        <MainFrame page={PageEnum.ABOUT}>
            <Head>
                <title>Sobre - Bruno Remeikis</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.infoGroup}>
                    <h2>Sobre mim</h2>
                    <p>Me chamo <span>Bruno Coutinho Remeikis</span>. Sou desenvolvedor Full Stack.</p>
                    <p>Minhas principais tecnolodias são: <span>HTML, CSS, JavaScript, TypeScript, React, Java e SQL</span>. Você pode mais clicando em <Link href='/habilities'>Habilidades</Link>.</p>
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