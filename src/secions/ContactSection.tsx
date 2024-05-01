import styles from '../styles/sections/Contact.module.scss';

import Image from "next/image";
import Link from "next/link";
import { CiMail, CiPhone } from "react-icons/ci";
import SectionTitle from "../components/SectionTitle";
import { contacts } from '../utils/contacts';

const ContactLink: React.FC<{
	title: string;
	image: string;
	href: string;
	bgColor: string;
}> = ({ title, image, href, bgColor }) =>
	// rel="noopener noreferrer"
	<Link href={href} target='_blank' style={{ backgroundColor: bgColor }} className={styles.contactLink}>
		<Image src={`/img/contact/${image}.svg`} width={60} height={60} alt={title} />
		<span>{ title }</span>
	</Link>

const ContactSection: React.FC = () =>
    <div id="contacts" className={`section ${styles.contactsSection}`}>
        <div className={styles.waveContainer}>
            <div className={styles.wave} />
        </div>

        <div className={styles.contactsContent}>
            <SectionTitle className={styles.sectionTitle} title='Contato' subtitle='Fale comigo' />

            {/* https://www.iconfinder.com/search?iconset=social-media-icons-the-circle-set */}

            <div className={styles.contacts__cols}>
                <div className={styles.contacts__links}>
                    <ContactLink
                        title='Whatsapp'
                        image='circle-whatsapp'
                        href={contacts.whatsapp}
                        bgColor='rgb(37, 211, 102)'
                    />
                    <ContactLink
                        title='LinkedIn'
                        image='circle-linkedin'
                        href={contacts.linkedin}
                        bgColor='#0a66c2'
                    />
                    <ContactLink
                        title='GitHub'
                        image='circle-github-2'
                        href={contacts.github}
                        bgColor='#181616'
                    />
                </div>

                <div className={styles.contacts__contacts}>
                    <div>
                        <CiMail />
                        <span>brunocoutinhoremeikis@gmail.com</span>
                    </div>
                    <div>
                        <CiPhone />
                        <span>+55 (27) 99589-8501</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default ContactSection;