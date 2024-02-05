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
import ContactSection from '../secions/ContactSection';

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

				<ContactSection />

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