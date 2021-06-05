import Head from 'next/head';

import styles from '../styles/Contact.module.scss';

import MainFrame, { PageEnum } from '../components/MainFrame';

export default () =>
{
    return (
        <MainFrame page={PageEnum.CONTACT}>
            <Head>
                <title>Contato - Bruno Remeikis</title>
            </Head>

            <main className={styles.container}>
                <a className={styles.linkedIn} href='https://www.linkedin.com/in/bruno-remeikis-b9a6a2202/' target='_blank'>
                    <img src='/contact/linkedin.svg' alt='LinkedIn' />
                    {/*<Image className={styles.linkImg} src='/contact/linkedin.svg' alt='LinkedIn' width={80} height={80} />*/}
                    <span>LinkedIn</span>
                </a>
                <a className={styles.gitHub} href='https://github.com/bruno-remeikis' target='_blank'>
                    <img src='/contact/github.svg' alt='GitHub' />
                    {/*<Image className={styles.linkImg} src='/contact/github.svg' alt='GitHub' width={80} height={80} />*/}
                    <span>GitHub</span>
                </a>
            </main>
        </MainFrame>
    );
}