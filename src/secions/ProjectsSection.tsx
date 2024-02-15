import Image from 'next/image';
import styles from '../styles/sections/Projects.module.scss';
import SectionTitle from '../components/SectionTitle';
import { MdArrowOutward } from "react-icons/md";

type ProjectProps = {
    img: string;
    name: string;
    link: string;
    imgAlign?: 'center' | 'top' | 'bottom' | number;
}

const Project: React.FC<ProjectProps> = ({ img, name, link, imgAlign = 'center' }) =>
    <div className={styles.project}>
        {/* <Image src={`/img/projects/${img}`} width={0} height={0} sizes="100vw" alt={name} /> */}
        <div className={styles.imgContainer}>
            <div className={styles.img} style={{
                backgroundImage: `url('/img/projects/${img}')`,
                backgroundPositionX: '50%',
                backgroundPositionY:
                    imgAlign === 'center' ? '50%' :
                    imgAlign === 'top' ? '0%' :
                    imgAlign === 'bottom' ? '100%' :
                    `${imgAlign}%`
            }} />
        </div>

        <div className={styles.caption} onClick={() => window.open(link, '_blank')}>
            <span>{ name }</span>
            <MdArrowOutward />
        </div>
    </div>

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
                        link='https://github.com/bruno-remeikis/Chess'
                    />
                    <Project
                        img='naval-battle.png'
                        name='Batalha Naval'
                        link='https://github.com/bruno-remeikis/naval-battle'
                        imgAlign={20}
                    />
                    <Project
                        img='ursport.jpeg'
                        name='UrSport'
                        link='https://github.com/bruno-remeikis/projeto-integrador-2'
                        imgAlign='top'
                    />
                    <Project
                        img='calendario2.png'
                        name='Calendário'
                        link='https://github.com/bruno-remeikis/calendario'
                        imgAlign='top'
                    />
                    <Project
                        img='portifolio.png'
                        name='Este portifólio'
                        link='https://github.com/bruno-remeikis/portifolio'
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