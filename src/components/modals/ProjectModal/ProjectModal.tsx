import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';

import { HiMiniCodeBracket, HiMiniXMark, HiMiniGlobeAlt } from "react-icons/hi2";

import { Modal, ModalProps } from '../Modal/Modal';

import { ProjectProps } from '../../Project/Project';

import styles from './ProjectModal.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useLanguage } from '../../../contexts/Language';

type ProjectModalProps = Omit<ModalProps, 'children'> & {
    project: ProjectProps;
}

export const ProjectModal = ({
    isOpen,
    setIsOpen,
    project: {
        name, demoLink, githubLink, mobile, imgs, description, technologies, intention
    }
}: ProjectModalProps) =>
{
    const { text} = useLanguage();

    const [closing, setClosing] = useState<boolean>(false);

    function requestClose()
    {
        setClosing(true);

        setTimeout(() => {
            setClosing(false);
            setIsOpen(false);
        }, 300);
    }

    return (
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
                                <span>{text({ pt: 'Intúito', en: 'Intention' })}: </span>
                                <span>{ intention }</span>
                            </div>
                        : null}
                    </div>

                    <div className={styles.projectLinks}>
                        <div>
                            {demoLink ?
                                <Link href={demoLink} target='_blank' className={styles.demoLink}>
                                    <HiMiniGlobeAlt />
                                    {text({ pt: 'Visitar', en: 'Visit' })}
                                </Link>
                            : null}

                            {githubLink ? 
                                <Link href={githubLink} target='_blank' className={styles.githubLink}>
                                    <HiMiniCodeBracket />
                                    {text({ pt: 'Ver código-fonte', en: 'See source code' })}
                                </Link>
                            : null}
                        </div>

                        <div>
                            <button type="button" className={styles.closeBtn} onClick={() => requestClose()}>
                                <HiMiniXMark />
                                {text({ pt: 'Fechar', en: 'Close' })}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}