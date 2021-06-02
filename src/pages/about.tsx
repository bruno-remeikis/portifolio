import Head from 'next/head';

import styles from '../styles/About.module.scss';

import MainFrame from '../components/MainFrame';

export default () => {
    return (
        <MainFrame>
            <Head>
                <title>Sobre - Bruno Remeikis</title>
            </Head>

            <main className={styles.container}>
                <h2>Sobre mim</h2>
                <p>Me chamo <span>Bruno Coutinho Remeikis</span>. Sou desenvolvedor Full Stack, apaixonado por criar coisas novas.</p>
                <p></p>

                <br />

                <h2>Curiosidades</h2>
                <p>- Adoro música em todos os sentidos: tocar instrumentos, cantar, compor, dançar, etc.</p>
            </main>
        </MainFrame>
    );
}