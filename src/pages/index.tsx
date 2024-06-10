import Head from 'next/head';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';

import styles from '../styles/Index.module.scss';

import { GoHome } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { GoRead } from "react-icons/go";
import { GoLightBulb } from "react-icons/go";
import { GoLog } from "react-icons/go";

import HomeSection from '../secions/Home/HomeSection';
import AboutSection from '../secions/About/AboutSection';
import ResumeSection from '../secions/Resume/ResumeSection';
import ContactSection from '../secions/Contact/ContactSection';
// import ProjectsDeviceSection from '../secions/ProjectsDeviceSection';
import ProjectsSection from '../secions/Projects/ProjectsSection';
import { useState } from 'react';
import { useLanguage } from '../contexts/Language';
import { LanguageSwitch } from '../components/LanguageSwitch/LanguageSwitch';

const Home: React.FC = () =>
{
	const { text } = useLanguage();

	const [darkMenu, setDarkMenu] = useState<boolean>(false);
	const [darkLangSwitch, setDarkLangSwitch] = useState<boolean>(false);

	function invertColors(): void {
		const projectsBcs = document.querySelector('#projects')
			.getBoundingClientRect();

		invertMenuColor(projectsBcs);
		invertLanguageSwitchColor(projectsBcs);
	}

	function invertMenuColor(rect: DOMRect): void
	{
		const menuBcr = document.querySelector('#mainMenu')
			.getBoundingClientRect();

		setDarkMenu(
			rect.y - window.innerHeight <= 0 &&
			rect.y + rect.height - window.innerHeight + menuBcr.height >= 0
		);
	}

	function invertLanguageSwitchColor(rect: DOMRect): void
	{
		const langSwitchBcr = document.querySelector('#language-switch')
			.getBoundingClientRect();

		setDarkLangSwitch(
			rect.y <= 0 &&
			rect.y + rect.height + 10 >= 0
		);
	}

	return(
		<div className={styles.page}>
			<div id="pageScroll" className={styles.pageScroll} onScroll={invertColors}>

				<Head>
					<meta charSet="UTF-8" />
					<meta name="description" content="Portfólio de Bruno Coutinho Remeikis" />
					<meta name="keywords" content="portifolio,portifólio,bruno remeikis,bruno coutinho remeikis,software,sistemas,desenvolvedor,desenvolvimento,programador,programação"></meta>
					<meta name="author" content="Bruno Coutinho Remeikis" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					{/* <meta name="robots" content="index,follow" /> */}
					{/* <meta name="robots" content="noindex,nofollow" /> */}
					<meta name="robots" content="index,nofollow" />

					<title>Portfolio - Bruno Remeikis</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<nav className={`${styles.mainMenu} ${darkMenu ? styles.darkMenu : null}`}>
					<ul id="mainMenu">
						<li><Link href="#home">
							<GoHome />
							<span>{text({ pt: 'Início', en: 'Start' })}</span>
						</Link></li>
						<li><Link href="#about">
							<GoPerson />
							<span>{text({ pt: 'Sobre mim', en: 'About me' })}</span>	
						</Link></li>
						<li><Link href="#resume">
							<GoLog />
							<span>{text({ pt: 'Resumo', en: 'Summary' })}</span>	
						</Link></li>
						<li><Link href="#projects">
							<GoLightBulb />
							<span>{text({ pt: 'Projetos', en: 'Projects' })} </span>	
						</Link></li>
						<li><Link href="#contacts">
							<GoRead />
							<span>{text({ pt: 'Contato', en: 'Contact' })}</span>
						</Link></li>
					</ul>
				</nav>

				<LanguageSwitch id='language-switch' dark={darkLangSwitch} />

				<div className={styles.sections}>
					<HomeSection />
					<AboutSection />
					<ResumeSection />
					<ProjectsSection />
					<ContactSection />

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