import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Index.module.scss';

import { getImagePath, technologies } from '../utils/technologies';

import { TbFileDownload } from "react-icons/tb";
import { GoHome } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { GoRead } from "react-icons/go";
import { GoLightBulb } from "react-icons/go";
import { GoLog } from "react-icons/go";

import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";

import { Card } from '../components/Card';
import { Emojis } from '../components/Card/CardIcon';
import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import HomeSection from '../secions/HomeSection';
import AboutSection from '../secions/AboutSection';
import ResumeSection from '../secions/ResumeSection';

const ContactLink: React.FC<{
	title: string;
	image: string;
	href: string;
	bgColor: string;
}> = ({ title, image, href, bgColor }) =>
	// rel="noopener noreferrer"
	<Link href={href} target='_blank' style={{ backgroundColor: bgColor }} className={styles.contactLink}>
		<Image src={`/img/contact/${image}.svg`} width={60} height={60} alt={title} />
		<span>{ title }</span>
	</Link>

const Home: React.FC = () =>
{

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
						<li><Link href="#home">
							<GoHome />
							<span>Início</span>
						</Link></li>
						<li><Link href="#about">
							<GoPerson />
							<span>Sobre mim</span>	
						</Link></li>
						<li><Link href="#resume">
							<GoLog />
							<span>Resumo</span>	
						</Link></li>
						<li><Link href="#contacts">
							<GoRead />
							<span>Contato</span>
						</Link></li>
						{/* <li><Link href="#projects">
							<GoLightBulb />
							<span>Projetos</span>	
						</Link></li> */}
					</ul>
				</nav>

				<HomeSection />

				<AboutSection />
				
				<ResumeSection />

				<div id="contacts" className={`section ${styles.contactsSection}`}>
					<div className={styles.waveContainer}>
						<div className={styles.wave} />
					</div>

					<div className={styles.contactsContent}>
						<SectionTitle title='Contato' subtitle='Fale comigo' />

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

				{/* <div id="projects" className={`section ${styles.projectsSection}`}>
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