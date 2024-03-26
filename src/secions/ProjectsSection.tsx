import Image from 'next/image';
import styles from '../styles/sections/Projects.module.scss';
import SectionTitle from '../components/SectionTitle';
import { HiMiniCodeBracket, HiMiniXMark, HiMiniGlobeAlt } from "react-icons/hi2";
import { AiOutlineFullscreen } from "react-icons/ai";
import { useState } from 'react';
import { isDesktop } from 'react-device-detect';

import { Modal } from '../components/Modal';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Technology, technologies } from '../utils/technologies';
import Link from 'next/link';

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
}

const Project: React.FC<ProjectProps> = ({
    img, name, demoLink, githubLink, imgAlign = 'center', mobile, butDesktopShowcase, imgs, description, technologies, intention
}) =>
{
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
            className={`${styles.project} ${isDesktop ? styles.project__isDesktop : ''}`}
            style={
                mobile && !butDesktopShowcase ? { gridRow: 'span 2' } : null
            }
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

const ProjectsSection2: React.FC = () =>
{
    return (
        <div id="projects" className={`section ${styles.projectsSection}`}>
            <div className={styles.projectsContainer}>

                <SectionTitle title='Portifólio' subtitle='Meus projetos' dark />

                <div className={styles.projects}>
                    <Project
                        img='ai-chat/ai-chat-1-dark.png'
                        imgAlign='top'
                        name='AI Chat'
                        githubLink='https://github.com/bruno-remeikis/ai-chat'
                        demoLink='https://ai-chat-rmk.vercel.app/'
                        imgs={[
                            { src: 'ai-chat/ai-chat-1-dark.png', size: [691, 786] },
                            { src: 'ai-chat/ai-chat-1-light.png', size: [692, 786] },
                        ]}
                        description={
                            'Uma interface web que se integração com a Gemini, a Inteligência Artificial da Google.\n' +
                            'Nela é possível conversar com a IA e obter respostas atualizadas, já que a mesma têm ' +
                            'acesso à internet'
                        }
                        technologies={[
                            technologies.typescript,
                            technologies.react,
                            technologies.next,
                            technologies.tailwind
                        ]}
                        intention='Aprendizado'
                        mobile
                    />
                    <Project
                        img='chess/chess.png'
                        name='Xadrez'
                        githubLink='https://github.com/bruno-remeikis/Chess'
                        imgs={[
                            { src: 'chess/chess.png', size: [1920, 1079] },
                            { src: 'chess/chess-2.png', size: [1920, 1079] },
                        ]}
                        description={
                            'Jogo de xadrez desenvolvido com o framework Phaser 3.\nUtilizei este projeto para aprender um ' +
                            'pouco de como funciona o xadrez, além de experimentar um pouco de desenvolvimento de jogos digitais ' +
                            'e exercitar minhas habilidades em programação e desenvolvimento Front-end.'
                        }
                        technologies={[
                            technologies.html,
                            technologies.css,
                            technologies.javascript,
                            technologies.phaser3
                        ]}
                        intention='Aprendizado'
                    />
                    <Project
                        img='ursport.jpeg'
                        name='UrSport'
                        githubLink='https://github.com/bruno-remeikis/projeto-integrador-2'
                        imgAlign='top'
                        imgs={[
                            { src: 'ursport.jpeg', size: [1366, 768] },
                        ]}
                        description={
                            'UrSport é uma rede social esportiva desenvolvida em pouco tempo para uma apresentação acadêmica.\n' +
                            'Através de sua interface web, é possivel cadastrar um usuário, criar e participar de eventos e se ' +
                            'conectar a outros usuários.'
                        }
                        technologies={[
                            technologies.react,
                            technologies.next,
                            technologies.java,
                            technologies.spring,
                            technologies.mysql
                        ]}
                        intention='Acadêmico'
                    />
                    <Project
                        img='naval-battle/naval-battle.png'
                        name='Batalha Naval'
                        githubLink='https://github.com/bruno-remeikis/naval-battle'
                        imgAlign={20}
                        imgs={[
                            { src: 'naval-battle/naval-battle-home.png', size: [923, 1040] },
                            { src: 'naval-battle/naval-battle-game.png', size: [822, 670] },
                            { src: 'naval-battle/naval-battle-instructions.png', size: [923, 1040] },
                        ]}
                        description={
                            'Neste desafio, refiz uma das primeiras aplicações que desenvolví em minha vida (e uma das ' +
                            'quais mais me orgulho).\nTrata-se de uma Batalha Naval feita em C++ utilizando a biblioteca ' +
                            'Conio2 e exibida em um terminal. Nele é possível caminhar com um cursor por uma malha coordenada ' +
                            'e atirar onde ele estiver posicionado, revelando assim o que há (podendo ser uma embarcação ' +
                            'ou água).\nOs elementos escondidos são posicionados de forma totalmente aleatória, ' +
                            'o que torna cada rodada única.'
                        }
                        technologies={[
                            technologies.cpp
                        ]}
                        intention='Desafio pessoal'
                        mobile
                        butDesktopShowcase
                    />
                    <Project
                        img='ciph/ciph-1.jpeg'
                        name='Ciphersonal'
                        githubLink='https://github.com/bruno-remeikis/ciph'
                        imgAlign={5}
                        mobile
                        imgs={[
                            { src: 'ciph/ciph-1.jpeg', size: [768, 1280] },
                            { src: 'ciph/ciph-2.jpeg', size: [768, 1280] },
                            { src: 'ciph/ciph-3.jpeg', size: [768, 1280] },
                            { src: 'ciph/ciph-4.jpeg', size: [768, 1280] },
                            { src: 'ciph/ciph-5.jpeg', size: [768, 1280] },
                        ]}
                        description={
                            'Ciph é uma aplicação mobile que desenvolví para que eu pudesse salvar meus repertórios musicais. ' +
                            'Nele é possivel salvar músicas, suas letras, cifras e artistas, bem como criar repertórios, que ' +
                            'são como pastas de músicas.\nTodos os dados são salvos em um banco de dados local usando SQLite, ' +
                            'sendo possível exportá-los, gerando um documento JSON.'
                        }
                        technologies={[
                            technologies.reactNative,
                            technologies.expo,
                            technologies.sqlite
                        ]}
                        intention='Uso pessoal'
                    />
                    <Project
                        img='calendario2.png'
                        name='Calendário'
                        githubLink='https://github.com/bruno-remeikis/calendario'
                        imgAlign='top'
                        imgs={[
                            { src: 'calendario2.png', size: [1123, 625] },
                        ]}
                        description='Este é um calendário simples feito em um dia de tédio :)'
                        technologies={[
                            technologies.html,
                            technologies.css,
                            technologies.javascript
                        ]}
                        intention='Aprendizado'
                    />
                    <Project
                        img='portfolio/portifolio.png'
                        name='Este portifólio'
                        demoLink='https://portifolio-remeikis.vercel.app/'
                        githubLink='https://github.com/bruno-remeikis/portifolio'
                        imgs={[
                            { src: 'portfolio/portifolio.png', size: [1920, 1079] },
                        ]}
                        description={
                            'Aqui falo um pouco sobre mim, da minha carreira como desenvolvedor e mostro alguns dos meus projetos.'
                        }
                        technologies={[
                            technologies.react,
                            technologies.next,
                            technologies.sass
                        ]}
                    />
                </div>

            </div>
        </div>
    );
}

export default ProjectsSection2;