import { useMemo, useState } from 'react';
import { isDesktop } from 'react-device-detect';
import { useInView } from 'react-intersection-observer';

import { AiOutlineFullscreen } from "react-icons/ai";

import { Technology } from '../../utils/technologies';
import { grow } from '../../utils/animations';

import { ProjectModal } from '../modals/ProjectModal/ProjectModal';

import styles from './Project.module.scss';
import { useLanguage } from '../../contexts/Language';

type ImageProps = {
    src: string;
    size: number[]; // [0]: width; [1]: height
}

export type ProjectProps = {
    img: string;
    imgScale?: number;
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

export const Project: React.FC<ProjectProps> = (props) =>
{
    const { img, imgScale = 1, name, imgAlign = 'center', mobile, butDesktopShowcase, lastVisibleOne = false } = useMemo(() => props, [props]);

    const { text } = useLanguage();
    const { ref, inView } = useInView({ threshold: 0.2 });

    const [isOpen, setIsOpen] = useState<boolean>(false);

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
                        backgroundPositionY: getImgAlign(),
                        transform: `scale(${imgScale})`
                    }} />
                </div>

                <div
                    className={styles.caption}
                    onClick={() => setIsOpen(true)}
                >
                    <span>{ name } <AiOutlineFullscreen /></span>
                    <span>{text({
                        pt: 'Clique para ver detalhes',
                        en: 'Click to see details'
                    })}</span>
                </div>
            </div>

            <ProjectModal isOpen={isOpen} setIsOpen={setIsOpen} project={props} />
        </div>
    );
}