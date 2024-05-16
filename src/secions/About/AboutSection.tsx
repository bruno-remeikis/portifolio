import Image from 'next/image';

import SectionTitle from '../../components/SectionTitle/SectionTitle';

import { TbFileDownload } from 'react-icons/tb';

import styles from './About.module.scss';
import { useInView } from 'react-intersection-observer';
import { slide } from '../../utils/animations';

const inViewConfig = { threshold: 0 }

type HighlightProps = {
    i: number;
    time: string;
    title: string;
    inView: boolean;
}

const Highlight = ({ i, time, title, inView }: HighlightProps) =>
{
    return (
        <div
            {...slide('down', inView, i, {
                className: styles.highlight
            })}
        >
            <span>{ time }</span>
            <span>{ title }</span>
        </div>
    )
}

const AboutSection: React.FC = () =>
{
    const { ref: imgRef, inView: imgInView } = useInView(inViewConfig);
    const { ref: selfDescRef, inView: selfDescInView } = useInView(inViewConfig);
    const { ref: highlightsRef, inView: highlightsInView } = useInView(inViewConfig);
    const { ref: downloadRef, inView: downloadsInView } = useInView(inViewConfig);

    return (
        <div id="about" className={`section ${styles.aboutSection}`}>
            {/* <div className={styles.polygon} /> */}

            <div className={styles.aboutContent}>
                <SectionTitle title='Sobre mim' subtitle='Uma breve introdução' />

                <div className={styles.about__cols}>
                    <div className={styles.about__col}>
                        <div
                            ref={imgRef}
                            {...slide('right', imgInView, 0, {
                                className: styles.about__imgContainer
                            })}
                        >
                            <Image src="/img/about/purple-bg.jpg" className={styles.about__img} width={301} height={400} alt="Imagem do autor" />
                        </div>
                    </div>
                    <div className={styles.about__col}>
                        <div
                            ref={selfDescRef}
                            {...slide('down', selfDescInView, 0, {
                                className: styles.selfDescription
                            })}
                        >
                            <p>
                                Iniciei meus estudos em desenvolvimento de sistemas em 2018.
                                Desde o início, apresentei muito interesse e desenvoltura na
                                aprendizagem de novas tecnologias. Hoje estou em meu processo
                                de graduação e atuo profissionalmente na área há mais de 4 anos.

                                Caí de paraquedas no mundo da programação e não imaginava que
                                gostaria tanto!
                            </p>
                        </div>
                        <div ref={highlightsRef} className={`grow ${styles.highlights}`}>
                            <Highlight i={1} time='04+' title='Anos experiência' inView={highlightsInView} />
                            <Highlight i={2} time='10+' title='Projetos completos' inView={highlightsInView} />
                            <Highlight i={3} time='03+' title='Empresas trabalhadas' inView={highlightsInView} />
                        </div>
                        <div 
                            ref={downloadRef}
                            {...slide('down', downloadsInView, 5, {
                                className: styles.downloadContainer
                            })}
                        >
                            <a href="/resume/Curriculo - Bruno Remeikis.pdf" className={styles.download} download>
                                Download CV <TbFileDownload />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;