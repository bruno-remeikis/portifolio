import Link from 'next/link';

import styles from './styles.module.scss';

import { FiHome } from 'react-icons/fi';
import { RiQuestionnaireLine } from 'react-icons/ri';

export default ({children}) => {
    return(
        <div className={styles.container}>
            <h1>Bruno Coutinho Remeikis</h1>

            <div className={styles.content}>
                <nav>
                    <ul>
                        <li><Link href='/'>Início</Link></li>
                        <li><Link href='/about'>Sobre</Link></li>
                        <li><Link href='/'>Habilidades</Link></li>
                        <li><Link href='/'>Projetos</Link></li>
                        <li><Link href='/'>Contatos</Link></li>
                    </ul>
                </nav>

                {children}
            </div>
        </div>
    );
}