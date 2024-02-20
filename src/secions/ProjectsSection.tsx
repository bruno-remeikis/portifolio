import Image from 'next/image';
import styles from '../styles/sections/Projects.module.scss';
import SectionTitle from '../components/SectionTitle';
import { MdArrowOutward } from "react-icons/md";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { HiMiniGlobeAlt } from "react-icons/hi2";
import { useState } from 'react';

import Modal2 from '../components/Modal';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Technology, technologies } from '../utils/technologies';
import Link from 'next/link';

type ProjectProps = {
    img: string;
    name: string;
    demoLink?: string;
    githubLink?: string;

    imgAlign?: 'center' | 'top' | 'bottom' | number;
    mobile?: boolean;

    // For modal
    imgs: string[];
    description: string;
    technologies: Technology[];
    intention?: string;
}

const Project: React.FC<ProjectProps> = ({
    img, name, demoLink, githubLink, imgAlign = 'center', mobile, imgs, description, technologies, intention
}) =>
{
    const [open, setOpen] = useState<boolean>(false);

    const getImgAlign = () =>
        imgAlign === 'center' ? '50%' :
        imgAlign === 'top' ? '0%' :
        imgAlign === 'bottom' ? '100%' :
        `${imgAlign}%`;

    return (
        <div
            className={`${styles.project} ${open ? styles.project__open : ''}`}
            style={
                mobile ? { gridRow: 'span 2' } : null
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
                onClick={() => setOpen(true)}
            >
                <span>{ name }</span>
                <MdArrowOutward />
            </div>

            <Modal2
                isOpen={open}
                setIsOpen={setOpen}
                overlayClass={styles.modalOverlay}
                containerClass={styles.modalContainer}
            >
                <div className={`${styles.modalContent} ${open ? styles.modalContent__Open : ''} ${mobile ? styles.modalContent__Mobile : ''}`}>
                    <div
                        style={{ position: 'absolute', right: '-2rem', backgroundColor: 'white', width: '1.5rem', height: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', borderRadius: '99rem'}}
                        onClick={() => setOpen(false)}
                    >X</div>

                    <Carousel className={styles.carousel}>
                        {imgs.map(pImg =>
                            <div
                                className={styles.carousel__item}
                                style={{
                                    backgroundImage: `url('/img/projects/${pImg}')`,
                                    backgroundPositionX: '50%',
                                    backgroundPositionY: getImgAlign()
                                }}
                            />
                        )}
                    </Carousel>

                    <div className={styles.header}>
                        <h3>{ name }</h3>
                        <div className={styles.technologies}>
                            {technologies.map(t =>
                                <Image src={`/img/abilities/${t.imageName}.${t.extension ? t.extension : 'svg'}`} width={35} height={35} alt={t.name} title={t.name} />    
                            )}
                        </div>
                    </div>

                    <div className={styles.modalInfo}>
                        <div className={styles.description}>
                            {description.split('\n').map(desc =>
                                <p>{ desc }</p>
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
                </div>
            </Modal2>
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
                        img='chess.PNG'
                        name='Xadrez'
                        githubLink='https://github.com/bruno-remeikis/Chess'
                        imgs={[
                            'chess.PNG',
                            'chess-2.PNG'
                        ]}
                        description={
                            'Jogo de xadrez desenvolvido com o framework Phaser 3.\nUtilizei este projeto para aprender um ' +
                            'pouco de como funciona o xadrez, além de experimentar um pouco de desenvolvimento de jogos digitais ' +
                            'e exercitar minhas habilidades como programador e desenvolvedor Front-end.'
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
                        img='ciph/ciph-1.jpeg'
                        name='Ciphersonal'
                        githubLink='https://github.com/bruno-remeikis/ciph'
                        imgAlign={5}
                        mobile
                        imgs={[
                            'ciph/ciph-1.jpeg',
                            'ciph/ciph-2.jpeg',
                            'ciph/ciph-3.jpeg',
                            'ciph/ciph-4.jpeg',
                            'ciph/ciph-5.jpeg',
                        ]}
                        description={
                            'Ciph é uma aplicação mobile que desenvolví para que eu pudesse salvar meus repertórios musicais. ' +
                            'Nele é possivel salvar músicas, suas letras, cifras e artistas, bem como criar repertórios, que ' +
                            'são como pastas de músicas.\nTodos os dados são salvos em um banco de dados local usando SQLite, ' +
                            'sendo possível exportá-los, gerando um documento JSON.'
                        }
                        technologies={[
                            technologies.reactNative
                        ]}
                        intention='Uso pessoal'
                    />
                    <Project
                        img='ursport.jpeg'
                        name='UrSport'
                        githubLink='https://github.com/bruno-remeikis/projeto-integrador-2'
                        imgAlign='top'
                        imgs={[
                            'ursport.jpeg',
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
                        img='naval-battle.png'
                        name='Batalha Naval'
                        githubLink='https://github.com/bruno-remeikis/naval-battle'
                        imgAlign={20}
                        imgs={[
                            'naval-battle-home.png',
                            'naval-battle-game.png',
                            'naval-battle-instructions.png'
                        ]}
                        description={
                            'Neste desafio, refiz uma das primeiras aplicações que desenvolví em minha vida (e uma das' +
                            'quais mais me orgulho).\nTrata-se de uma Batalha Naval feita em C++ utilizando a biblioteca ' +
                            'Conio2 e exibida em um terminal, onde é possível caminhar com um cursor por uma malha coordenada ' +
                            'e atirar onde estiver posicionado, revelando assim o que havia escondido na malha (podendo ser ' +
                            'uma embarcação ou água).\nOs elementos escondidos são posicionados de forma totalmente aleatória, ' +
                            'o que torna cada rodada única.'
                        }
                        technologies={[
                            technologies.cpp
                        ]}
                        intention='Desafio pessoal'
                    />
                    <Project
                        img='calendario2.png'
                        name='Calendário'
                        githubLink='https://github.com/bruno-remeikis/calendario'
                        imgAlign='top'
                        imgs={[
                            'calendario2.png'
                        ]}
                        description='Este é um calendário simples feiro em um dia de tédio :)'
                        technologies={[
                            technologies.html,
                            technologies.css,
                            technologies.javascript
                        ]}
                        intention='Aprendizado'
                    />
                    <Project
                        img='portifolio.png'
                        name='Este portifólio'
                        demoLink='https://portifolio-remeikis.vercel.app/'
                        githubLink='https://github.com/bruno-remeikis/portifolio'
                        imgs={[
                            'portifolio.png',
                            // 'portifolio-old.png'
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

            {/* <section>
                <figure>
                    <Image src='/img/projects/calendario.png' width={0} height={0} sizes="100vw" alt='Calendario' />
                    <div>
                        <span>Calendário</span>
                    </div>
                </figure>
                <h3>Calendário</h3>
                <p></p>
            </section> */}
        </div>
    );
}

export default ProjectsSection2;