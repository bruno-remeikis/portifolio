import Image from 'next/image';
import styles from './Project.module.scss';
import { HiMiniCodeBracket, HiMiniXMark, HiMiniGlobeAlt } from "react-icons/hi2";
import { AiOutlineFullscreen } from "react-icons/ai";
import { useState } from 'react';
import { isDesktop } from 'react-device-detect';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';
import { Technology } from '../../utils/technologies';
import { Modal } from '../Modal/Modal';
import { grow, slide } from '../../utils/animations';
import { useInView } from 'react-intersection-observer';

type ImageProps = {
    src: string;
    size: number[]; // [0]: width; [1]: height
}

type ProjectProps = {
    img: string;
    name: string;
    demoLink?: string;
    githubLink?: string;

    imgAlign?: 'center' | 'top' | 'bottom' | number;
    mobile?: boolean; // Na vitrine, imagens ocupam duas linhas e, no modal, imagens ficam na lateral
    butDesktopShowcase?: boolean; // Se mobile=true e butDesktopShowcase=true, não exibe a imagem da vitrine em duas linhas

    // For modal
    imgs: ImageProps[];
    description: string;
    technologies: Technology[];
    intention?: string;

    lastVisibleOne?: boolean;
}

export const Project: React.FC<ProjectProps> = ({
    img, name, demoLink, githubLink, imgAlign = 'center', mobile, butDesktopShowcase, imgs, description, technologies, intention, lastVisibleOne = false
}) =>
{
    const { ref, inView } = useInView({ threshold: 0.2 });

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [closing, setClosing] = useState<boolean>(false);

    function requestClose()
    {
        setClosing(true);

        setTimeout(() => {
            setClosing(false);
            setIsOpen(false);
        }, 300);
    }

    const getImgAlign = () =>
        imgAlign === 'center' ? '50%' :
        imgAlign === 'top' ? '0%' :
        imgAlign === 'bottom' ? '100%' :
        `${imgAlign}%`;

    return (
        <div
            ref={ref}
            className={`${styles.projectContainer}`}
            style={{
                gridRow: mobile && !butDesktopShowcase ? 'span 2' : null,
            }}
        >
            <div
                {...grow(inView, Math.floor(Math.random() * 3), {
                    className: `${styles.project} ${isDesktop ? styles.project__isDesktop : ''} ${lastVisibleOne ? styles.lastVisibleOne : ''}`
                }, {
                    timming: 0.8
                })}
                // style={{ animation: inView ? `grow 0.3s forwards 0s ease-out` : null }}
            >
                <div className={styles.imgContainer}>
                    <div className={styles.img} style={{
                        backgroundImage: `url('/img/projects/${img}')`,
                        backgroundPositionX: '50%',
                        backgroundPositionY: getImgAlign()
                    }} />
                </div>

                <div
                    className={styles.caption}
                    onClick={() => setIsOpen(true)}
                >
                    <span>{ name } <AiOutlineFullscreen /></span>
                    <span>Clique para ver detalhes</span>
                </div>
            </div>

            <Modal
                isOpen={isOpen}
                onRequestClose={requestClose}
                overlayClass={`${styles.modalOverlay} ${mobile ? styles.modalOverlay__Mobile : ''} ${closing ? styles.modalOverlay__Closing : ''} ${isOpen ? styles.modalOverlay__Open : ''}`}
                containerClass={styles.modalContainer}
            >
                <div className={styles.modalContent}>
                    <div className={styles.carouselContainer}>
                        <Carousel className={styles.carousel} showThumbs={false}>
                            {imgs.map(img =>
                                <Image
                                    key={img.src}
                                    className={styles.carousel__item}
                                    src={`/img/projects/${img.src}`}
                                    width={img.size[0] ? img.size[0] : 10}
                                    height={img.size[1] ? img.size[1] : 10}
                                    layout='intrinsic'
                                    alt={`${name} image`}
                                    title={`${name} image`}
                                />
                            )}
                        </Carousel>
                    </div>

                    <div className={styles.data}>
                        <div className={styles.header}>
                            <h3>{ name }</h3>
                            <div className={styles.technologies}>
                                {technologies.map((t, i) =>
                                    <Image
                                        key={i}
                                        src={`/img/abilities/${t.imageName}.${t.extension ? t.extension : 'svg'}`}
                                        // layout='intrinsic'
                                        width={35}
                                        height={35}
                                        alt={t.name}
                                        title={t.name}
                                    />    
                                )}
                            </div>
                        </div>

                        <div className={styles.modalInfo}>
                            <div className={styles.description}>
                                {description.split('\n').map((desc, i) =>
                                    <p key={i}>{ desc }</p>
                                )}
                            </div>

                            {intention ?
                                <div className={styles.intention}>
                                    <span>Intúito: </span>
                                    <span>{ intention }</span>
                                </div>
                            : null}
                        </div>

                        <div className={styles.projectLinks}>
                            <div>
                                {demoLink ?
                                    <Link href={demoLink} target='_blank' className={styles.demoLink}>
                                        <HiMiniGlobeAlt />
                                        Visitar
                                    </Link>
                                : null}

                                {githubLink ? 
                                    <Link href={githubLink} target='_blank' className={styles.githubLink}>
                                        <HiMiniCodeBracket />
                                        Ver código-fonte
                                    </Link>
                                : null}
                            </div>

                            <div>
                                <button type="button" className={styles.closeBtn} onClick={() => requestClose()}>
                                    <HiMiniXMark />
                                    Fechar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}