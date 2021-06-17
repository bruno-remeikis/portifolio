import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import styles from '../styles/Projects.module.scss';

import MainFrame, { PageEnum } from '../components/MainFrame';

import { Technology, technologies, getImagePath } from '../utils/technologies';

import Carousel from 'react-elastic-carousel';
import { isMobile } from 'react-device-detect';

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
            {technologies.map((item, i) =>
                <div key={i} className={styles.technology}>
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

const Projects: React.FC = () =>
{
    const carousel = useRef(null);
    const [slideIndex, setSlideIndex] = useState <number> (0);
    const slideTime = 6000; //5500;

    const [arrowDir, setArrowDir] = useState <number> (0);
    const [autoPlaying, setAutoPlaying] = useState <boolean> (false);
    const [updating, setUpdating] = useState <boolean> (false);

    //const [changing, setChanging] = useState <boolean> (false);
    //const [clickedToChange, setClickedToChange] = useState <boolean> (false);

    const items/*: typeof Item[]*/ = [
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
                technologies.react,
                technologies.next
            ]}
        />,

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
                technologies.react,
                technologies.next
            ]}
        />
    ];

    const lastSlideIndex = items.length - 1;

    /*
    useEffect(() =>
    {
        const autoloop = setInterval(() =>
        {
            //if(carousel.current.currentSlide === lastSlideIndex)
            //{
            //    carousel.current.goToSlide(0);
            //    setSlideIndex(0);
            //}
            //else
            //{
            //    carousel.current.goTo(slideIndex + 1);
            //    setSlideIndex(slideIndex + 1);
            //}

            if(slideIndex > lastSlideIndex)
            {
                carousel.current.goToSlide(0);
                setSlideIndex(0);
            }
            else if(slideIndex < 0)
            {
                carousel.current.goToSlide(lastSlideIndex);
                setSlideIndex(lastSlideIndex);
            }
        },
        slideTime); // Your custom auto loop delay in ms

        return () => clearInterval(autoloop);
    },
    [ slideIndex ]);
    */










    /*
    useEffect(() =>
    {
        if(slideIndex === lastSlideIndex)
        {
            //alert('voltando!');

            //setTimeout(() =>
            //{
            //    carousel.current.goTo(0);
            //    setSlideIndex(0);
            //},
            //slideTime);

            const autoloop = setInterval(() =>
            {
                //if(carousel.current.currentSlide === lastSlideIndex)
                //{
                //    carousel.current.goToSlide(0);
                //    setSlideIndex(0);
                //}
                //else
                //{
                //    carousel.current.goTo(slideIndex + 1);
                //    setSlideIndex(slideIndex + 1);
                //}

                
                carousel.current.goTo(0);
                setSlideIndex(0);
            },
            slideTime); // Your custom auto loop delay in ms

            return () => clearInterval(autoloop);
        }
    },
    [ slideIndex ]);
    */

    /*
    useEffect(() =>
    {
        if(slideIndex > lastSlideIndex)
        {
            carousel.current.goTo(0);
            setSlideIndex(0);
        }
        else if(slideIndex < 0)
        {
            carousel.current.goTo(lastSlideIndex);
            setSlideIndex(lastSlideIndex);
        }
    },
    [ slideIndex ]);
    */

    useEffect(() =>
    {
        /*
        function click(direction: number)
        {
            console.log(direction);

            setClickedToChange(true);
            const newSlideIndex = slideIndex + direction

            if(newSlideIndex > lastSlideIndex)
            {
                console.log('Go to first');

                setSlideIndex(0);
                carousel.current.goTo(0);
            }
            else if(newSlideIndex < 0)
            {
                console.log('Go to last');

                setSlideIndex(lastSlideIndex);
                carousel.current.goTo(lastSlideIndex);
            }
            else
            {
                console.log('Just clicked');

                setSlideIndex(newSlideIndex);
            }
        }
        */

        document.querySelector('.rec-arrow-right').addEventListener('click', () => setArrowDir(1));
        document.querySelector('.rec-arrow-left').addEventListener('click', () => setArrowDir(-1));
    }, []);

    useEffect(() =>
    {
        //if(!updating)
        //{
        //    setUpdating(true);

            console.log('\n');
            console.log('arrowDir: ' + arrowDir);
            console.log('slideIndex: ' + slideIndex);

            // Se mudou sozinho
            if(autoPlaying)
            {
                console.log('auto playing');

                setAutoPlaying(false);

                // Se for o último slide: volta ao primeiro
                if(slideIndex === lastSlideIndex)
                {
                    console.log('Hora de voltar!');

                    // Conta tempo para voltar ao index 0

                    //carousel.current.goTo(0);
                    // setSlideIndex(0);
                }
                // Senão: só atualiza o index
                else
                    setSlideIndex(slideIndex + 1);
            }
            // Se mudou por ação do usuário
            else if(arrowDir !== 0)
            {
                // Direita
                if(arrowDir === 1)
                {
                    // Se for o último slide: volta ao primeiro
                    if(slideIndex === lastSlideIndex)
                    {
                        carousel.current.goTo(0);
                        setSlideIndex(0);
                    }
                    // Senão: só atualiza o index
                    else
                        setSlideIndex(slideIndex + 1);
                }
                // Esquerda
                else if(arrowDir === -1)
                {
                    // Se for o primeiro slide: avança para o primeiro
                    if(slideIndex === 0)
                    {
                        carousel.current.goTo(lastSlideIndex);
                        setSlideIndex(lastSlideIndex);
                    }
                    // Senão: só atualiza o index
                    else
                        setSlideIndex(slideIndex - 1);
                }

                // Reseta a direção da seta
                setArrowDir(0);
            }
        //}
        //else
        //    setUpdating(false);
    },
    [arrowDir, autoPlaying]);

    return(
        <MainFrame page={PageEnum.PROJECTS}>
            <Head>
                <title>Projetos - Bruno Remeikis</title>
            </Head>

            <main className={styles.container}>
                <Carousel
                    ref={carousel}
                    initialActiveIndex={slideIndex}
                    className={styles.carousel}
                    breakPoints={[{width: 1000, itemsToShow: 1}]}
                    isRTL={false}
                    disableArrowsOnEnd={false}
                    enableMouseSwipe={isMobile}
                    showArrows={!isMobile}
                    enableAutoPlay
                    autoPlaySpeed={slideTime}
                    onChange={async () =>
                    {
                        /*
                        console.log('\n');
                        console.log('rowDir: ' + rowDir);
                        console.log('old slide index: ' + slideIndex);
                        */

                        // Se o slide mudou por causa das setas e não pelo auto-play
                        if(arrowDir === 0)
                            setAutoPlaying(true);
                        /*
                        else
                        {
                            setSlideIndex(slideIndex + 1);

                            if(rowDir === 1)
                            {
                                if(slideIndex === lastSlideIndex)
                                {
                                    carousel.current.goTo(0);
                                    setSlideIndex(0);
                                }
                                else
                                    setSlideIndex(slideIndex + 1);
                            }
                            else if(rowDir === -1)
                            {
                                if(slideIndex === lastSlideIndex)
                                {
                                    carousel.current.goTo(0);
                                    setSlideIndex(0);
                                }
                                else
                                    setSlideIndex(slideIndex - 1);
                            }

                            setRowDir(0);
                        }

                        console.log('NEW slide index: ' + slideIndex);
                        */




                        
                        /*
                        if(!clickedToChange)
                        {
                            //setChanging(true)
                            setSlideIndex(slideIndex + 1);

                            if(slideIndex === lastSlideIndex)
                                console.log("HORA DE VOLTAR!");
                        }
                        */
                    }}
                >
                    {items.map((item, i) =>
                        <div key={i}>{item}</div>
                    )}
                </Carousel>
            </main>
        </MainFrame>
    );
}

export default Projects;