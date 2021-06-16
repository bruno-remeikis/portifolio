import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Habilities.module.scss';

import MainFrame, { PageEnum } from "../components/MainFrame";

import { technologies, getImagePath } from '../utils/technologies';

export default () =>
    <MainFrame page={PageEnum.HABILITIES}>
        <Head>
            <title>Habilidades - Bruno Remeikis</title>
        </Head>

        <main className={styles.container}>
            <div className={styles.items}>
                {Object.entries(technologies) /*items*/.map(item =>
                    <div className={styles.item}>
                        <div className={styles.itemContent}>
                            <Image
                                src={getImagePath(item[1].imageName)}
                                alt={item[1].name}
                                width={50}
                                height={50}
                            />
                            <span>{item[1].name}</span>
                        </div>
                    </div>
                )}
            </div>
        </main>
    </MainFrame>