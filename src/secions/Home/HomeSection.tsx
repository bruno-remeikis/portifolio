import { useRef } from 'react';
import Link from 'next/link';
import { track } from '@vercel/analytics';
import { isMobile } from 'react-device-detect';

import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { contacts } from '../../utils/contacts';

import { SuperCanvas } from '../../components/canvas/SuperCanvas/SuperCanvas';

import styles from './Home.module.scss';
import { useLanguage } from '../../contexts/Language';
import { MultiTyping } from '../../components/Typing/MultiTyping/MultiTyping';

const HomeSection: React.FC = () =>
{
    const { text, language } = useLanguage();

    const sectionRef = useRef(null);

    return (
        <div ref={sectionRef} id="home" className={`section ${styles.homeSection}`}>

            <SuperCanvas parentRef={sectionRef} dotsAmount={isMobile ? 14 : 20} />
            
            <div className={styles.container}>
                <main className={styles.content}>

                    <section className={styles.mainText}>
                        <h1>Bruno Coutinho Remeikis</h1>
                        <div className={styles.typingEffect} style={{ display: 'flex', flexDirection: 'column' }}>
                            <MultiTyping
                                defaultClassName={styles.p2}
                                deps={[language]}
                                rows={[
                                    { text: text({ pt: 'Olá!', en: 'Hi!' }), className: styles.p1 },
                                    [
                                        { text: text({ pt: 'Eu sou ', en: 'I\'m ' }) },
                                        { text: 'Bruno', className: `${styles.p2} ${styles.pEmphasis}` },
                                        { text: ',' }
                                    ],
                                    { text: text({ pt: 'dev FullStack', en: 'FullStack dev' }) }
                                ]}
                            />
                        </div>
                        <div className={styles.btnSobre}>
                            <Link href="#about" onClick={() => { track('about-me') }}>
                                {text({ pt: 'Sobre mim', en: 'About me' })}
                            </Link>
                        </div>
                    </section>

                    {/* Main image */}
                    <div className={`${styles.mainPicContainer}`}>
                        <span className={styles.mainPic} />
                        <div className={styles.contacts}>
                            <Link href={contacts.whatsapp} target="_blank" className={styles.wpp}><FaWhatsapp size={24} title='WhatsApp' /></Link>
                            <Link href={contacts.linkedin} target="_blank" className={styles.lin}><FaLinkedin size={24} title='LinkedIn' /></Link>
                            <Link href={contacts.github} target="_blank" className={styles.git}><FaGithub size={24} title='GitHub' /></Link>
                        </div>
                    </div>

                </main>
            </div>

        </div>
    );
}

export default HomeSection;