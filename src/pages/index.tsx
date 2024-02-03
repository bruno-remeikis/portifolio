import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Home.module.scss';

import { getImagePath, technologies } from '../utils/technologies';
import Image from 'next/dist/client/image';

import { TbFileDownload } from "react-icons/tb";
// import { CiHome } from "react-icons/ci";
// import { BiHome } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import { GoPerson } from "react-icons/go";
// import { GoRocket } from "react-icons/go";
// import { GoBriefcase } from "react-icons/go";
// import { GoBeaker } from "react-icons/go";
// import { GoNorthStar } from "react-icons/go";
// import { GoPaperAirplane } from "react-icons/go";
// import { GoStack } from "react-icons/go";
import { GoRead } from "react-icons/go";
import { GoLightBulb } from "react-icons/go";
import { GoBriefcase } from "react-icons/go";
import { GoLog } from "react-icons/go";

import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";


import { Card } from '../components/Card';
import { Emojis } from '../components/Card/CardIcon';
import { useState } from 'react';

// import Flag from 'react-flagpack';

const Title: React.FC<{
	title: string;
	subtitle: string;
}> = ({ title, subtitle }) =>
	<div className={styles.section__title}>
		<h2>{ title }</h2>
		<span>{ subtitle }</span>
	</div>

const ContactLink: React.FC<{
	title: string;
	image: string;
	href: string;
	bgColor: string;
}> = ({ title, image, href, bgColor }) =>
	<Link href={href} passHref>
		<a target='_blank' style={{ backgroundColor: bgColor }} className={styles.contactLink} rel="noopener noreferrer">
			<Image src={`/img/contact/${image}.svg`} width={60} height={60} />
			<span>{ title }</span>
		</a>
	</Link>

const Home: React.FC = () =>
{
	const [displayTecNames, setDisplayTecNames] = useState(false);

	return(
		<div className={styles.page}>
			<div className={styles.pageScroll}>

				<Head>
					<meta charSet="UTF-8" />
					<meta name="description" content="Portifólio de Bruno Coutinho Remeikis" />
					<meta name="keywords" content="portifolio,portifólio,bruno remeikis,bruno coutinho remeikis,software,sistemas,desenvolvedor,desenvolvimento,programador,programação"></meta>
					<meta name="author" content="Bruno Coutinho Remeikis" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					{/* <meta name="robots" content="index,follow" /> */}
					{/* <meta name="robots" content="noindex,nofollow" /> */}
					<meta name="robots" content="index,nofollow" />

					<title>Portifólio - Bruno Remeikis</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<nav className={styles.mainMenu}>
					<ul>
						<li><Link href="#home"><a>
							<GoHome />
							<span>Início</span>
						</a></Link></li>
						<li><Link href="#about"><a>
							<GoPerson />
							<span>Sobre mim</span>	
						</a></Link></li>
						<li><Link href="#resume"><a>
							<GoLog />
							<span>Resumo</span>	
						</a></Link></li>
						<li><Link href="#contacts"><a>
							<GoRead />
							<span>Contato</span>
						</a></Link></li>
						{/* <li><Link href="#projects"><a>
							<GoLightBulb />
							<span>Projetos</span>	
						</a></Link></li> */}
					</ul>
				</nav>

				{/* INICIO - HOME */}
				<div id="home" className={`${styles.section} ${styles.homeSection}`}>
					<div className={styles.container}>
						<main className={styles.content}>
							{/* <Link href="#about">About</Link> */}
							<section className={styles.mainText}>
								<h1>Bruno Coutinho Remeikis</h1>
								<p className={styles.p1}>Olá!</p>
								<p className={styles.p2}>Eu sou o <span>Bruno</span>,</p>
								<p className={styles.p2}>dev Full Stack</p>

								<div className={styles.btnSobre}>
									<Link href="#about">Sobre mim</Link>
								</div>
							</section>

							{/* Main image */}
							<span className={styles.mainPic} />
						</main>
					</div>
				</div>

				{/* SOBRE - ABOUT */}
				<div id="about" className={`${styles.section} ${styles.aboutSection}`}>
					<div className={styles.polygon} />

					<div className={styles.aboutContent}>
						<Title title='Sobre mim' subtitle='Uma breve introdução' />

						<div className={styles.about__cols}>
							<div className={styles.about__col}>
								<div className={styles.about__imgContainer}>
									<Image src="/img/about/purple-bg.jpg" className={styles.about__img} width={603} height={800} alt="Imagem do autor" />
								</div>
							</div>
							<div className={styles.about__col}>
								<p>
									Iniciei meus estudos em desenvolvimento de sistemas em 2018.
									Desde o início, apresentei muito interesse e desenvoltura na
									aprendizagem de novas tecnologias. Hoje estou em meu processo
									de graduação e atuo profissionalmente na área há quase 4 anos.

									Caí de paraquedas no mundo da programação e não imaginava que
									gostaria tanto.
								</p>
								<div className={styles.downloadContainer}>
									<a href="/resume/Curriculo - Bruno Remeikis - 02-02-2024.pdf" className={styles.download} download>
										Download CV <TbFileDownload />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div id="resume" className={`${styles.section} ${styles.resumeSection}`}>
					<Title title='Resumo profissional' subtitle='e minhas habilidades' />

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
									<Image src='/img/flags/br-rounded.svg' width={35} height={35} />
									<Card.Lang
										reading={{ title: 'Leitura', points: 5 }}
										writing={{ title: 'Escrita', points: 5 }}
										conversation={{ title: 'Conversação', points: 5 }}
									/>
								</Card.Root>
								<Card.Root>
									<Image src='/img/flags/us-rounded.svg' width={35} height={35} />
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

				<div id="contacts" className={`${styles.section} ${styles.contactsSection}`}>
					<div className={styles.waveContainer}>
						<div className={styles.wave} />
					</div>

					<div className={styles.contactsContent}>
						<Title title='Contato' subtitle='Fale comigo' />

						{/* https://www.iconfinder.com/search?iconset=social-media-icons-the-circle-set */}

						<div className={styles.contacts__cols}>
							<div className={styles.contacts__links}>
								<ContactLink
									title='Whatsapp'
									image='circle-whatsapp'
									href='https://wa.me/5527995898501'
									bgColor='rgb(37, 211, 102)'
								/>
								<ContactLink
									title='LinkedIn'
									image='circle-linkedin'
									href='https://www.linkedin.com/in/bruno-remeikis-b9a6a2202/'
									bgColor='#0a66c2'
								/>
								<ContactLink
									title='GitHub'
									image='circle-github-2'
									href='https://github.com/bruno-remeikis'
									bgColor='#181616'
								/>
							</div>

							<div className={styles.contacts__contacts}>
								<div>
									<CiMail />
									<span>brunocoutinhoremeikis@gmail.com</span>
								</div>
								<div>
									<CiPhone />
									<span>+55 (27) 99589-8501</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <div id="projects" className={`${styles.section} ${styles.projectsSection}`}>
					<div className={styles.projectImg}>
						<Image src='/projects/calendario.png' layout='fill' />
					</div>
				</div> */}

				{/* <footer>
					<p>Ultima atualização</p>
					<p>fevereiro de 2024</p>
				</footer> */}
			
			</div>
		</div>
	);
}

export default Home;