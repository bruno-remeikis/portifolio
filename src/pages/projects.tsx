import Head from 'next/head';
import Image from 'next/image';
import { Router, useRouter } from 'next/router';

import styles from '../styles/Projects.module.scss';

import MainFrame, { PageEnum } from '../components/MainFrame';

import Carousel from 'react-elastic-carousel';

interface ItemProps
{
    title: string;
    imageName: string;
    link: string;
}

const Item: React.FC<ItemProps> = ({ title, imageName, link }) =>
{
    const router = useRouter();

    return (
        <a
            className={styles.item}
            href={link}
            target='_blank'
        >
            <span>{title}</span>
            <Image src={`/projects/${imageName}`} alt={`Projeto: ${title}`} width={1366} height={625} />
        </a>
    )
};

export default () =>
(
    <MainFrame page={PageEnum.PROJECTS}>
        <Head>
            <title>Projetos - Bruno Remeikis</title>
        </Head>

        <main className={styles.container}>
            <Carousel isRTL={false} breakPoints={[{width: 1000, itemsToShow: 1}]}>
                <Item title="Calendário" imageName="calendario.png" link={'https://github.com/bruno-remeikis/calendario'} />
                <Item title="Portifólio" imageName="portifolio.png" link={'https://github.com/bruno-remeikis/portifolio'} />
            </Carousel>
        </main>
    </MainFrame>
);