import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Habilities.module.scss';

import MainFrame, { PageEnum } from "../components/MainFrame";

interface Tecnology {
    name: string;
    imgName: string;

}

export default () =>
{
    const items: Tecnology[] = [
        { name: 'HTML', imgName: 'html5' },
        { name: 'CSS', imgName: 'css3' },
        { name: 'JavaScript', imgName: 'javascript' },
        { name: 'TypeScript', imgName: 'typescript' },
        { name: 'Node.js', imgName: 'node-js' },
        { name: 'React', imgName: 'react' },
        { name: 'Next.js', imgName: 'next-js' },
        { name: 'Sass', imgName: 'sass' },
        //{ name: 'Bootstrap', imgName: 'bootstrap' },
        { name: 'Git', imgName: 'git' },
        { name: 'Java', imgName: 'java' },
        { name: 'C', imgName: 'c' },
        { name: 'C++', imgName: 'cplusplus' },
        { name: 'PHP', imgName: 'php' },
        { name: 'Python', imgName: 'python' },
        { name: 'MySQL', imgName: 'mysql' },
        { name: 'Oracle', imgName: 'oracle' },
    ];

    return (
        <MainFrame page={PageEnum.HABILITIES}>
            <Head>
                <title>Habilidades - Bruno Remeikis</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.items}>
                    {items.map(item =>
                        <div className={styles.item}>
                            <div className={styles.itemContent}>
                                <Image
                                    src={`/habilities/${item.imgName}.svg`}
                                    alt={item.name}
                                    width={50}
                                    height={50}
                                />
                                <span>{item.name}</span>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </MainFrame>
    );
}