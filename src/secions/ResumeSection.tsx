import Image from 'next/image';
import SectionTitle from '../components/SectionTitle';
import styles from '../styles/sections/Resume.module.scss';
import { useState } from 'react';
import { getImagePath, technologies } from '../utils/technologies';
import { Card } from '../components/Card';
import { Emojis } from '../components/Card/CardIcon';

const ResumeSection: React.FC = () =>
{
	const [displayTecNames, setDisplayTecNames] = useState(false);

    return (
        <div id="resume" className={`section ${styles.resumeSection}`}>
            <SectionTitle title='Resumo profissional' subtitle='e minhas habilidades' />

            <div className={styles.resumeContent}>
                <div className={styles.resume__col}>
                    <div className={styles.resume__text}>
                        {/* <section> */}
                            <p>Meu nome é <span>Bruno Coutinho Remeikis</span>. Sou desenvolvedor <span>Full Stack</span>. Tenho 21 anos. Resido em Vitória/ES.</p>
                            <p>Atualmente trabalho desenvolvendo aplicações em Angular e Java com Spring Boot para criação de APIs, JPA e JSP.</p>
                            <p>Participei da criação de um produto com Quarkus, Apache Camel, Apache Kafka e Redis pela <span>Red Hat</span> para o processamentos de boletos bancários.</p>
                        {/* </section> */}
                        <p>Estou cursando Sistemas de Informação, tendo concluído 64% das matérias e previsão de graduação em 2025/2.</p>
                        <p>Em meu trabalho, busco ao máximo aplicar boas práticas de manutenibilidade e legibilidade do código.</p>

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

                    {/* <h3>Minhas habilidades</h3> */}
                    <div className={`${styles.tecnologies} ${displayTecNames ? styles.displayTecNames : null}`}>
                        {Object.entries(technologies).map((item, i) =>
                            <div key={i} className={styles.tec}>
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
                        )}
                    </div>

                    {/* <div>
                        <input id="show-all-tec-names" className={styles.showAllTecNames} type='checkbox' checked={displayTecNames} onChange={e => setDisplayTecNames(v => !v)} />
                        <label htmlFor="show-all-tec-names">Mostrar tudo</label>
                    </div> */}
                </div>

                <div className={styles.resume__col}>
                    {/* ESTUDO */}
                    <div className={styles.cards}>
                        <Card.Root>
                            <Card.Icon emoji={ Emojis.NOTEBOOK } />
                            <Card.Info
                                title='Técnico em Desenvolvimento de Sistemas'
                                institution='SENAI'
                                local='Vitória - ES'
                                period='2018 - 2019'
                            />
                        </Card.Root>

                        <Card.Root>
                            <Card.Icon emoji={ Emojis.GRADUATION_CAP } />
                            <Card.Info
                                title='Bacharel em Sistemas de Informação'
                                institution='FAESA'
                                local='Vitória - ES'
                                period='2022 - cursando'
                            />
                        </Card.Root>
                    </div>

                    {/* EMPRESAS */}
                    <div className={styles.cards}>
                        <Card.Root>
                            <Card.Icon emoji={ Emojis.BRIEFCASE } />
                            <Card.Info
                                title='SEFAZ - Secretaria da Fazenda'
                                office='Desenvolvedor'
                                local='Vitória - ES'
                                period='2020 - 2021'
                            />
                        </Card.Root>

                        <Card.Root>
                            <Card.Icon emoji={ Emojis.BRIEFCASE } />
                            <Card.Info
                                title='CSI - Solução & Tecnologia'
                                office='Analista desenvolvedor pleno'
                                local='Vitória - ES'
                                period='2021 - hoje'
                            />
                        </Card.Root>
                    </div>

                    {/* LINGUAS */}
                    {/* https://github.com/HatScripts/circle-flags/ */}
                    <div className={styles.cards}>
                        <Card.Root>
                            {/* <Card.Icon emoji={ Emojis.RED_BOOK } /> */}
                            <Image src='/img/flags/br-rounded.svg' width={35} height={35} alt='Brazil flag' />
                            <Card.Lang
                                reading={{ title: 'Leitura', points: 5 }}
                                writing={{ title: 'Escrita', points: 5 }}
                                conversation={{ title: 'Conversação', points: 5 }}
                            />
                        </Card.Root>
                        <Card.Root>
                            <Image src='/img/flags/us-rounded.svg' width={35} height={35} alt='USA flag' />
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