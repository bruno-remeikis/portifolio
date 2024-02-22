import Link from 'next/link';
import styles from '../styles/sections/Home.module.scss';

import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { track } from '@vercel/analytics';

const HomeSection: React.FC = () =>
    <div id="home" className={`section ${styles.homeSection}`}>
        <div className={styles.container}>
            <main className={styles.content}>
                {/* <Link href="#about">About</Link> */}
                <section className={styles.mainText}>
                    <h1>Bruno Coutinho Remeikis</h1>
                    <p className={styles.p1}>Olá!</p>
                    <p className={styles.p2}>Eu sou o <span>Bruno</span>,</p>
                    <p className={styles.p2}>dev Full Stack</p>

                    <div className={styles.btnSobre}>
                        <Link href="#about" onClick={() => { track('about-me') }}>Sobre mim</Link>
                    </div>
                </section>

                {/* Main image */}
                <div className={styles.mainPicContainer}>
                    <span className={styles.mainPic} />
                    <div className={styles.contacts}>
                        <Link href="https://wa.me/5527995898501" target="_blank" className={styles.wpp}><FaWhatsapp size={24} /></Link>
                        <Link href="https://www.linkedin.com/in/bruno-remeikis-b9a6a2202/" target="_blank" className={styles.lin}><FaLinkedin size={24} /></Link>
                        <Link href="https://github.com/bruno-remeikis" target="_blank" className={styles.git}><FaGithub size={24} /></Link>
                    </div>
                </div>
            </main>
        </div>
    </div>

export default HomeSection;