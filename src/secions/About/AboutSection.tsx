import Image from 'next/image';

import SectionTitle from '../../components/SectionTitle/SectionTitle';

import { TbFileDownload } from 'react-icons/tb';

import styles from './About.module.scss';
import { useInView } from 'react-intersection-observer';
import { slide } from '../../utils/animations';
import { useLanguage } from '../../contexts/Language';

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
    const { text } = useLanguage();

    const { ref: imgRef, inView: imgInView } = useInView(inViewConfig);
    const { ref: selfDescRef, inView: selfDescInView } = useInView(inViewConfig);
    const { ref: highlightsRef, inView: highlightsInView } = useInView(inViewConfig);
    const { ref: downloadRef, inView: downloadsInView } = useInView(inViewConfig);

    return (
        <div id="about" className={`section ${styles.aboutSection}`}>
            {/* <div className={styles.polygon} /> */}

            <div className={styles.aboutContent}>
                <SectionTitle
                    title={text({ pt: 'Sobre mim', en: 'About me' })}
                    subtitle={text({
                        pt: 'Uma breve introdução',
                        en: 'A brief introduction'
                    })} />

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
                            <p>{text({
                                pt: `Iniciei meus estudos em desenvolvimento de sistemas em 2018.
                                    Desde o início, apresentei muito interesse e desenvoltura na
                                    aprendizagem de novas tecnologias. Hoje estou em meu processo
                                    de graduação e atuo profissionalmente na área há mais de 4 anos.

                                    Caí de paraquedas no mundo da programação e não imaginava que
                                    gostaria tanto!`,
                                en: `I started my studies in systems development in 2018. From the
                                    beginning, I showed a lot of interest and resourcefulness in
                                    learning new technologies. Today I am in my graduation process
                                    and have been working professionally in the field for over 4 years.
                                    
                                    I was parachuted into the world of programming and I had no idea
                                    I would enjoy it so much!`
                            })}</p>
                        </div>
                        <div ref={highlightsRef} className={`grow ${styles.highlights}`}>
                            <Highlight i={1} time='04+' title={text({ pt: 'Anos experiência', en: 'Years experience' })} inView={highlightsInView} />
                            <Highlight i={2} time='10+' title={text({ pt: 'Projetos completos', en: 'Complete projects' })} inView={highlightsInView} />
                            <Highlight i={3} time='03+' title={text({ pt: 'Empresas trabalhadas', en: 'Companies worked' })} inView={highlightsInView} />
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