import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Projects.module.scss';

import MainFrame, { PageEnum } from '../components/MainFrame';

import { Tecnology, tecnologies, getImagePath } from '../utils/tecnologies';

import Carousel from 'react-elastic-carousel';
import { isMobile } from 'react-device-detect';

interface ItemProps
{
    title: string;
    imageName: string;
    link: string;
    tecnologies: Tecnology[];
}

const Item: React.FC<ItemProps> = ({ title, imageName, link, tecnologies }) =>
(
    <a
        className={styles.item}
        href={link}
        target='_blank'
    >
        <span className={`${styles.title} ${!isMobile ? styles.desktopTitle : ''}`}>
            {title}
        </span>

        <Image src={`/projects/${imageName}`} alt={`Projeto: ${title}`} width={1366} height={625} />

        <div className={`${styles.tecnologies} ${!isMobile ? styles.desktopTecnologies: ''}`}>
            {tecnologies.map((item) =>
                <div className={styles.tecnology}>
                    <Image
                        src={getImagePath(item.imageName)}
                        alt={item.name}
                        width={25}
                        height={25}
                    />

                    {!isMobile &&
                        <span>{item.name}</span>}
                </div>
            )}
        </div>
    </a>
);

export default () =>
(
    <MainFrame page={PageEnum.PROJECTS}>
        <Head>
            <title>Projetos - Bruno Remeikis</title>
        </Head>

        <main className={styles.container}>
            <Carousel
                className={styles.carousel}
                breakPoints={[{width: 1000, itemsToShow: 1}]}
                isRTL={false}
                enableMouseSwipe={isMobile}
                showArrows={!isMobile}
            >
                <Item
                    title="Calendário"
                    imageName="calendario.png"
                    link={'https://github.com/bruno-remeikis/calendario'}
                    tecnologies={[
                        tecnologies.html,
                        tecnologies.css,
                        tecnologies.javascript
                    ]}
                />
                <Item
                    title="Portifólio"
                    imageName="portifolio.png"
                    link={'https://github.com/bruno-remeikis/portifolio'}
                    tecnologies={[
                        tecnologies.html,
                        tecnologies.sass,
                        tecnologies.typescript,
                        tecnologies.react
                    ]}
                />
            </Carousel>
        </main>
    </MainFrame>
);