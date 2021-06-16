import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Projects.module.scss';

import MainFrame, { PageEnum } from '../components/MainFrame';

import { Technology, technologies, getImagePath } from '../utils/technologies';

import Carousel from 'react-elastic-carousel';
import { isMobile } from 'react-device-detect';
import { useEffect, useRef, useState } from 'react';

interface ItemProps
{
    title: string;
    imageName: string;
    link: string;
    technologies: Technology[];
}

const Item: React.FC<ItemProps> = ({ title, imageName, link, technologies }) =>
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

        <div className={`${styles.technologies} ${!isMobile ? styles.desktopTechnologies: ''}`}>
            {technologies.map((item) =>
                <div className={styles.technology}>
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
{
    const carousel = useRef(null);
    const [slideIndex, setSlideIndex] = useState(0);
    const slideTime = 5500;

    const items = [
        <Item
            title="Calendário"
            imageName="calendario.png"
            link={'https://github.com/bruno-remeikis/calendario'}
            technologies={[
                technologies.html,
                technologies.css,
                technologies.javascript
            ]}
        />,
        <Item
            title="Portifólio"
            imageName="portifolio.png"
            link={'https://github.com/bruno-remeikis/portifolio'}
            technologies={[
                technologies.html,
                technologies.sass,
                technologies.typescript,
                technologies.react
            ]}
        />
    ];

    const lastSlideIndex = items.length - 1;

    return(
        <MainFrame page={PageEnum.PROJECTS}>
            <Head>
                <title>Projetos - Bruno Remeikis</title>
            </Head>

            <main className={styles.container}>
                <Carousel
                    ref={carousel}
                    className={styles.carousel}
                    breakPoints={[{width: 1000, itemsToShow: 1}]}
                    isRTL={false}
                    disableArrowsOnEnd={false}
                    enableMouseSwipe={isMobile}
                    showArrows={!isMobile}
                    enableAutoPlay
                    autoPlaySpeed={slideTime}
                    onNextStart={() => {
                        if(slideIndex == lastSlideIndex)
                            carousel.current!.goTo(0);
                    }}
                    onPrevStart={() => {
                        if(slideIndex == 0)
                            carousel.current!.goTo(lastSlideIndex);
                    }}
                    onNextEnd={() => setSlideIndex(slideIndex + 1)}
                    onPrevEnd={() => setSlideIndex(slideIndex - 1)}
                >
                    {items.map(item => item)}
                </Carousel>
            </main>
        </MainFrame>
    );
}