import Image from 'next/image';
import SectionTitle from '../components/SectionTitle';
import styles from '../styles/sections/About.module.scss';
import { TbFileDownload } from 'react-icons/tb';

const AboutSection: React.FC = () =>
    <div id="about" className={`section ${styles.aboutSection}`}>
        <div className={styles.polygon} />

        <div className={styles.aboutContent}>
            <SectionTitle title='Sobre mim' subtitle='Uma breve introdução' />

            <div className={styles.about__cols}>
                <div className={styles.about__col}>
                    <div className={styles.about__imgContainer}>
                        <Image src="/img/about/purple-bg.jpg" className={styles.about__img} width={301} height={400} alt="Imagem do autor" />
                    </div>
                </div>
                <div className={styles.about__col}>
                    <p>
                        Iniciei meus estudos em desenvolvimento de sistemas em 2018.
                        Desde o início, apresentei muito interesse e desenvoltura na
                        aprendizagem de novas tecnologias. Hoje estou em meu processo
                        de graduação e atuo profissionalmente na área há quase 4 anos.

                        Caí de paraquedas no mundo da programação e não imaginava que
                        gostaria tanto!
                    </p>
                    <div className={styles.downloadContainer}>
                        <a href="/resume/Curriculo - Bruno Remeikis.pdf" className={styles.download} download>
                            Download CV <TbFileDownload />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default AboutSection;