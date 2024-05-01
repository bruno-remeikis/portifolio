import Link from 'next/link';
import styles from '../styles/sections/Home.module.scss';

import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { track } from '@vercel/analytics';
import { contacts } from '../utils/contacts';
import { useInView } from 'react-intersection-observer';

const HomeSection: React.FC = () => {
    return (
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
                    <div className={`${styles.mainPicContainer}`}>
                        <span className={styles.mainPic} />
                        <div className={styles.contacts}>
                            <Link href={contacts.whatsapp} target="_blank" className={styles.wpp}><FaWhatsapp size={24} /></Link>
                            <Link href={contacts.linkedin} target="_blank" className={styles.lin}><FaLinkedin size={24} /></Link>
                            <Link href={contacts.github} target="_blank" className={styles.git}><FaGithub size={24} /></Link>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default HomeSection;