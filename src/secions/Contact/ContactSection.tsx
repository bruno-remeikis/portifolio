import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

import { IconType } from "react-icons";
import { CiMail, CiPhone } from "react-icons/ci";

import { contacts } from '../../utils/contacts';
import { slide } from "../../utils/animations";

import SectionTitle from "../../components/SectionTitle/SectionTitle";

import styles from './Contact.module.scss';





type ContactLinkProps = {
	title: string;
	image: string;
	href: string;
	bgColor: string;
    inView: boolean;
    i: number;
}

const ContactLink = ({ title, image, href, bgColor, inView, i }: ContactLinkProps) =>
	// rel="noopener noreferrer"
	<Link
        href={href}
        target='_blank'
        {...slide('right', inView, i, {
            style: { backgroundColor: bgColor },
            className: styles.contactLink
        })}
    >
		<Image src={`/img/contact/${image}.svg`} width={60} height={60} alt={title} />
		<span>{ title }</span>
	</Link>





type ContactProps = {
    info: string;
    Icon: IconType;
    inView: boolean;
    i: number;
}

const Contact = ({ info, Icon, inView, i }: ContactProps) =>
    <div {...slide('right', inView, i)}>
        <Icon />
        <span>{ info }</span>
    </div>





const inViewConfig = { threshold: 0.4 };

const ContactSection: React.FC = () =>
{
    const { ref: linksRef, inView: linksInView } = useInView(inViewConfig);
    const { ref: contactsRef, inView: contactsInView } = useInView(inViewConfig);

    return (
        <div id="contacts" className={`section ${styles.contactsSection}`}>
            <div className={styles.waveContainer}>
                <div className={styles.wave} />
            </div>

            <div className={styles.contactsContent}>
                <SectionTitle className={styles.sectionTitle} title='Contato' subtitle='Fale comigo' />

                {/* https://www.iconfinder.com/search?iconset=social-media-icons-the-circle-set */}

                <div className={styles.contacts__cols}>
                    <div ref={linksRef} className={styles.contacts__links}>
                        <ContactLink
                            title='Whatsapp'
                            image='circle-whatsapp'
                            href={contacts.whatsapp}
                            bgColor='rgb(37, 211, 102)'
                            inView={linksInView}
                            i={0}
                        />
                        <ContactLink
                            title='LinkedIn'
                            image='circle-linkedin'
                            href={contacts.linkedin}
                            bgColor='#0a66c2'
                            inView={linksInView}
                            i={1}
                        />
                        <ContactLink
                            title='GitHub'
                            image='circle-github-2'
                            href={contacts.github}
                            bgColor='#181616'
                            inView={linksInView}
                            i={2}
                        />
                    </div>

                    <div ref={contactsRef} className={styles.contacts__contacts}>
                        <Contact
                            Icon={CiMail}
                            info='brunocoutinhoremeikis@gmail.com'
                            inView={contactsInView}
                            i={0}
                        />
                        <Contact
                            Icon={CiPhone}
                            info='+55 (27) 99589-8501'
                            inView={contactsInView}
                            i={1}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;