import Image from 'next/image';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { Technology, getImagePath, technologies } from '../../utils/technologies';

import { Card } from '../../components/Card';
import { Emojis } from '../../components/Card/CardIcon';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

import styles from './Resume.module.scss';
import { useLanguage } from '../../contexts/Language';

type TechProps = {
    item: [string, Technology];
    inView: boolean;
    i: number;
}

const Tech = ({ item, inView, i }: TechProps) =>
{
    return (
        <div className={`${styles.tec} grow-init`}
            style={{
                animation: inView ? `grow 0.3s forwards ${0.03 * i}s ease-out` : null,
            }}
        >
            <div className={styles.tec__imgContainer}>
                <Image
                    src={getImagePath(item[1].imageName)}
                    alt={item[1].name}
                    width={40}
                    height={40}
                />
            </div>
            <p className={styles.tec__name}>{item[1].name}</p>
        </div>
    );
}

const ResumeSection: React.FC = () =>
{
    const { text } = useLanguage();
    const { ref: techsRef, inView: techsInView } = useInView({ threshold: 0.2 });

	const [displayTecNames/*, setDisplayTecNames*/] = useState(false);

    return (
        <div id="resume" className={`section ${styles.resumeSection}`}>
            <SectionTitle
                title={text({ pt: 'Resumo profissional', en: 'Professional summary' })}
                subtitle={text({ pt: 'e minhas habilidades', en: 'and my skills' })} />

            <div className={styles.resumeContent}>
                <div className={styles.resume__col}>
                    <div className={styles.resume__text}>
                        <p>
                            {text({ pt: 'Meu nome é ', en: 'My name is ' })}
                            <span>Bruno Remeikis</span>
                            {text({ pt: ' e sou desenvolvedor ', en: ' and I\'m a ' })}
                            <span>Full Stack</span>
                            {text({ pt: '', en: ' developer' })}
                            .
                        </p>
                        <br />
                        {/* <p>Atuo principalmente com <span>Java</span></p> */}
                        <p>
                            {text({ pt: 'Em 2023, participei, como parceiro ', en: 'In 2023, I participated, as a ' })}
                            <span>Red Hat</span>
                            {text({
                                pt: ', da criação de um produto para o ',
                                en: ' partner, in the creation of a product for '
                            })}
                            <span>Banestes</span>.
                            {text({
                                pt: ' Tratou-se de um processador de boletos bancários utilizando Quarkus, Camel e Kafka.',
                                en: ' It was a bank slip processor using Quarkus, Camel and Kafka.'
                            })}
                        </p>
                        <br />
                        <p>
                            {text({
                                pt: `Estou cursando Sistemas de Informação, tendo concluído 64% das matérias e
                                    previsão de graduação em 2025/2.`,
                                en: `I am studying Information Systems, having completed 64% of the subjects and
                                    expected graduation in 2025/2.`
                            })}
                        </p>
                        <br />
                        <p>
                            {text({
                                pt: `Em meu trabalho, busco ao máximo aplicar boas práticas de manutenibilidade
                                    e legibilidade do código.`,
                                en: `In my work, I try to apply good code maintainability and readability practices
                                    as much as possible.`
                            })}
                        </p>

                        {/* <br />
                        <p>Atualmente eu faço abubleble no meu trabalho. </p>
                        <p>tambem ja fiz ablublebleble no outro trabalho. </p>
                        <p>talvez falar sobre sua flexibilidade de projetos </p>
                        <p>atualmente faço tananan, ja fiz tananan, gosto de fazer tanana, tmbem tenho afinidade com tanana, tenho boa experiencia com tananan </p>
                        <p>muita vontade de aprender, gosto de ficar no computador etc. </p>
                        <p>porcentagem do curso q ja fez 64% DAS MATÉRIAS CONCLUÍDO + PREVISÃO DE GRADUAÇÃO 2025/2</p>
                        <p>bota o link do linkedin do lado do icone do curriculo e email  </p>
                        
                        <p> EMOJI DE LOCALIZAÇÃO  Vitória/ES. </p> */}
                    </div>

                    {/* <div>
                        <input id="show-all-tec-names" className={styles.showAllTecNames} type='checkbox' checked={displayTecNames} onChange={e => setDisplayTecNames(v => !v)} />
                        <label htmlFor="show-all-tec-names">Mostrar tudo</label>
                    </div> */}

                    {/* <h3>Minhas habilidades</h3> */}
                    <div ref={techsRef} className={`${styles.tecnologies} ${displayTecNames ? styles.displayTecNames : null}`}>
                        {Object.entries(technologies)
                            .filter(item => !item[1].unshowable) // <- Não mostrar algumas tecnologias
                            .map((item, i) => <Tech key={i} item={item} i={i} inView={techsInView} />
                        )}
                    </div>
                </div>

                <div className={styles.resume__col}>
                    {/* ESTUDO */}
                    <div className={styles.cards}>
                        <p className={styles.cards__title}>
                            {text({ pt: 'Estudo', en: 'Study' })}
                        </p>

                        <Card.Root i={0}>
                            <Card.Icon emoji={ Emojis.NOTEBOOK } />
                            <Card.Info
                                title={text({
                                    pt: 'Técnico em Desenvolvimento de Sistemas',
                                    en: 'Systems Development Technician'
                                })}
                                institution='SENAI'
                                local='Vitória - ES'
                                period='2018 - 2019'
                            />
                        </Card.Root>

                        <Card.Root i={1}>
                            <Card.Icon emoji={ Emojis.GRADUATION_CAP } />
                            <Card.Info
                                title={text({
                                    pt: 'Bacharel em Sistemas de Informação',
                                    en: 'Bachelor in Information Systems'
                                })}
                                institution='FAESA'
                                local='Vitória - ES'
                                period='2022 - studying'
                            />
                        </Card.Root>
                    </div>

                    {/* EMPRESAS */}
                    <div className={styles.cards}>
                        <p className={styles.cards__title}>
                            {text({ pt: 'Carreira', en: 'Career' })}
                        </p>

                        <Card.Root i={2} highlighted>
                            {/* <Card.Icon emoji={ Emojis.BRIEFCASE } /> */}
                            <img src='/img/logos/softexpert.png' width={48} height={48} />
                            <Card.Info
                                title='SoftExpert'
                                office={text({
                                    pt: 'Engenheiro de Software',
                                    en: 'Software Engineer'
                                })}
                                local='Joinville - SC'
                                period='2024 - '
                                periodHighlight={text({ pt: 'hoje', en: 'today' })}
                            />
                        </Card.Root>

                        <Card.Root i={3}>
                            {/* <Card.Icon emoji={ Emojis.BRIEFCASE } /> */}
                            <img src='/img/logos/csi.png' width={48} height={48} />
                            <Card.Info
                                title='CSI - Solução & Tecnologia'
                                office={text({
                                    pt: 'Analista e Desenvolvedor pleno',
                                    en: 'Full Analyst and Developer'
                                })}
                                local='Vitória - ES'
                                period='2021 - 2024'
                            />
                        </Card.Root>

                        <Card.Root i={4}>
                            {/* <Card.Icon emoji={ Emojis.BRIEFCASE } /> */}
                            <img src='/img/logos/sefaz.png' width={48} height={48} />
                            <Card.Info
                                title='SEFAZ - Secretaria da Fazenda'
                                office={text({
                                    pt: 'Desenvolvedor de Software',
                                    en: 'Software Developer'
                                })}
                                local='Vitória - ES'
                                period='2020 - 2021'
                            />
                        </Card.Root>
                    </div>

                    {/* LINGUAS */}
                    {/* https://github.com/HatScripts/circle-flags/ */}
                    <div className={`${styles.cards} ${styles.cardLanguages}`}>
                        <p className={styles.cards__title}>
                            {text({ pt: 'Línguas', en: 'Languages' })}
                        </p>

                        <Card.Root i={5}>
                            {/* <Card.Icon emoji={ Emojis.RED_BOOK } /> */}
                            <Image src='/img/flags/br-circle.svg' width={35} height={35} alt='Brazil flag' />
                            <Card.Lang
                                reading={{ title: 'Leitura', points: 5 }}
                                writing={{ title: 'Escrita', points: 5 }}
                                conversation={{ title: 'Conversação', points: 5 }}
                            />
                        </Card.Root>
                        <Card.Root i={6}>
                            <Image src='/img/flags/us-circle.svg' width={35} height={35} alt='USA flag' />
                            <Card.Lang
                                reading={{ title: 'Reading', points: 4 }}
                                writing={{ title: 'Writing', points: 4 }}
                                conversation={{ title: 'Conversation', points: 3 }}
                            />
                        </Card.Root>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ResumeSection;