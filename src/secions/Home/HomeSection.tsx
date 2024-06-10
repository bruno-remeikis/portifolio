import { useEffect, useRef, useState } from 'react';
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
import { useLanguage } from '../../contexts/Language';
import { WritingEffect } from '../../components/WritingEffect/WritingEffect';
import { TypingEffect } from '../../components/TypingEffect/TypingEffect';
import { MultilangText } from '../../utils/language';

const timming = 100;

const TypingApresentation = () =>
{
    const { text, language } = useLanguage();

    const parts: (MultilangText | string)[] = [
        { pt: 'Olá!', en: 'Hi!' },
        { pt: 'Eu sou', en: 'I\'m' },
        'Bruno',
        ',',
        { pt: 'dev FullStack', en: 'FullStack dev' }
    ];

    function calcDelay(i: number): number {
        let delay = 0;
        for(let j = 0; j < i; j++) {
            const p = parts[j];
            delay += ((typeof p === 'string') ? p : text(p)).length * timming;
        }
        return delay;
    }

    return (
        <>
            <TypingEffect delay={calcDelay(0)}>{text(parts[0] as MultilangText)}</TypingEffect>
            <div>
                <TypingEffect delay={calcDelay(1)}>{text(parts[1] as MultilangText)}</TypingEffect>
                <TypingEffect delay={calcDelay(2)} deps={[language]}>{parts[2] as string}</TypingEffect>
                <TypingEffect delay={calcDelay(3)} deps={[language]}>{parts[3] as string}</TypingEffect>
            </div>
            <TypingEffect delay={calcDelay(4)}>{text(parts[4] as MultilangText)}</TypingEffect>
        </>
    )   
}

const HomeSection: React.FC = () =>
{
    const { text } = useLanguage();

    const sectionRef = useRef(null);
    
    return (
        <div ref={sectionRef} id="home" className={`section ${styles.homeSection}`}>

            <SuperCanvas parentRef={sectionRef} dotsAmount={isMobile ? 14 : 20} />
            
            <div className={styles.container}>
                <main className={styles.content}>
                    {/* <Link href="#about">About</Link> */}
                    <section className={styles.mainText}>
                        <h1>Bruno Coutinho Remeikis</h1>
                        <div className={styles.writingEffect} style={{ display: 'flex', flexDirection: 'column' }}>
                            {/* <MultipleWritingEffetc
                                className={styles.p2}
                                cursorStyle={{ background: 'lightgray' }}
                                timming={50}
                                childrens={[
                                    { text: text('ola'), className: styles.p1 },
                                    { text: [
                                        {text: 'Eu sou o '},
                                        {text: 'Bruno', className: `${styles.p2} ${styles.pEmphasis}`},
                                        {text: ','}
                                    ]},
                                    { text: 'dev Full Stack' }
                                ]}
                            ></MultipleWritingEffetc> */}

                            <TypingApresentation />
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