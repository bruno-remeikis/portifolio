import { useRef } from 'react';
import Link from 'next/link';
import { track } from '@vercel/analytics';
import { isMobile } from 'react-device-detect';

import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { contacts } from '../../utils/contacts';

import { MultipleWritingEffetc } from '../../components/MultipleWritingEffect/MultipleWritingEffect';
import { SuperCanvas } from '../../components/canvas/SuperCanvas/SuperCanvas';

import styles from './Home.module.scss';

const HomeSection: React.FC = () =>
{
    const sectionRef = useRef(null);
    
    return (
        <div ref={sectionRef} id="home" className={`section ${styles.homeSection}`}>

            <SuperCanvas parentRef={sectionRef} dotsAmount={isMobile ? 14 : 20} />
            
            <div className={styles.container}>
                <main className={styles.content}>
                    {/* <Link href="#about">About</Link> */}
                    <section className={styles.mainText}>
                        <h1>Bruno Coutinho Remeikis</h1>
                        <div className={styles.writingEffect}>
                            <MultipleWritingEffetc
                                className={styles.p2}
                                cursorStyle={{ background: 'lightgray' }}
                                timming={50}
                                childrens={[
                                    { text: 'Olá!', className: styles.p1 },
                                    { text: [
                                        {text: 'Eu sou o '},
                                        {text: 'Bruno', className: `${styles.p2} ${styles.pEmphasis}`},
                                        {text: ','}
                                    ]},
                                    { text: 'dev Full Stack' }
                                ]}
                            ></MultipleWritingEffetc>
                        </div>

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