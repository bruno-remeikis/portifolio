import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Index.module.scss';

import { GoHome } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { GoRead } from "react-icons/go";
import { GoLightBulb } from "react-icons/go";
import { GoLog } from "react-icons/go";

import HomeSection from '../secions/HomeSection';
import AboutSection from '../secions/AboutSection';
import ResumeSection from '../secions/ResumeSection';
import ContactSection from '../secions/ContactSection';
// import ProjectsDeviceSection from '../secions/ProjectsDeviceSection';
import ProjectsSection from '../secions/ProjectsSection';
import { useState } from 'react';

const Home: React.FC = () =>
{
	const [darkMenu, setDarkMenu] = useState<boolean>(false);

	function invertMenuColor()
	{
		const projects = document.querySelector('#projects');
		const bcr = projects.getBoundingClientRect();

		console.log(bcr.y);

		setDarkMenu(
			bcr.y - bcr.height <= -100 &&
			bcr.y >= -200
		);
	}

	return(
		<div className={styles.page}>
			<div id="pageScroll" className={styles.pageScroll} onScroll={invertMenuColor}>

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

				<nav className={`${styles.mainMenu} ${darkMenu ? styles.darkMenu : null}`}>
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
						<li><Link href="#projects">
							<GoLightBulb />
							<span>Projetos</span>	
						</Link></li>
						<li><Link href="#contacts">
							<GoRead />
							<span>Contato</span>
						</Link></li>
					</ul>
				</nav>

				<div className={styles.sections}>
					<HomeSection />

					<AboutSection />
					
					<ResumeSection />

					<ProjectsSection />

					{/* <ProjectsDeviceSection /> */}

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
		</div>
	);
}

export default Home;