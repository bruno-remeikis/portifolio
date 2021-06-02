import Link from 'next/link';

import styles from './styles.module.scss';

// ENUMS

export enum PageEnum {
    HOME,
    ABOUT,
    HABILITIES,
    PROJECTS,
    CONTACT
}

// INTERFACES

interface Page {
    title: string;
    rote: string;
    currentPage?: boolean; // É a página atual?
}

interface MainFrameProps {
    page: PageEnum
}

const MainFrame: React.FC<MainFrameProps> = ({ children, page }) =>
{
    const pages: Page[] = [
        // HOME
        {
            title: 'Início',
            rote: '/',
        },
        {
            title: 'Sobre',
            rote: '/about'
        }
    ];

    // OPERAÇÕES

    // Definir página inicial
    pages[page].currentPage = true;

    return(
        <div className={styles.container}>
            <h1>Bruno Coutinho Remeikis</h1>

            <div className={styles.content}>
                <nav>
                    <ul>
                        {pages.map((page, index) => {
                            <li className={page.currentPage ? styles.currentPage : ''}>
                                <Link href={`/${page.rote}`}>
                                    {page.title}
                                </Link>
                            </li>
                        })}
                        
                        <li><Link href='/about'>Sobre</Link></li>
                        <li><Link href='/'>Habilidades</Link></li>
                        <li><Link href='/'>Projetos</Link></li>
                        <li><Link href='/'>Contato</Link></li>
                    </ul>
                </nav>

                {children}
            </div>
        </div>
    );
}

export default MainFrame;