import Link from 'next/link';
import styles from '../styles/sections/Home.module.scss';

import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { track } from '@vercel/analytics';
import { contacts } from '../utils/contacts';
import { WritingEffect } from '../components/WritingEffect/WritingEffect';
import { MultipleWritingEffetc } from '../components/MultipleWritingEffect/MultipleWritingEffect';
// import { useInView } from 'react-intersection-observer';

const HomeSection: React.FC = () => {
    return (
        <div id="home" className={`section ${styles.homeSection}`}>
            <div className={styles.container}>
                <main className={styles.content}>
                    {/* <Link href="#about">About</Link> */}
                    <section className={styles.mainText}>
                        <h1>Bruno Coutinho Remeikis</h1>
                        <p className={styles.p1}>Olá!</p>
                        {/* <WritingEffect className={styles.p1} cursorStyle={{ height: '4rem' }}>Olá!</WritingEffect> */}
                        <p className={styles.p2}>Eu sou o <span>Bruno</span>,</p>
                        {/* <p className={styles.p2}>dev Full Stack</p> */}
                        <WritingEffect className={styles.p2} cursorStyle={{ background: 'lightgray' }}>dev Full Stack</WritingEffect>

                        <MultipleWritingEffetc
                            className={styles.p2}
                            cursorStyle={{ background: 'lightgray' }}
                            childrens={[
                                { text: 'Olá!' },
                                { text: 'Eu sou o Bruno,' },
                                { text: 'dev Full Stack' }
                            ]}
                        ></MultipleWritingEffetc>

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