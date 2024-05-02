import styles from '../styles/sections/Projects.module.scss';
import SectionTitle from '../components/SectionTitle';
import { useState } from 'react';

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { technologies } from '../utils/technologies';
import { Project } from '../components/Project/Project';

const ProjectsSection: React.FC = () =>
{
    const [moreProjects, setMoreProjects] = useState(false);

    return (
        // height: '100svh',
        <div id="projects" className={`section ${styles.projectsSection}`}>
            <div className={styles.projectsContainer}>

                <SectionTitle title='Portifólio' subtitle='Meus projetos' dark />

                <div className={`${styles.projects} ${moreProjects ? styles.projects__moreProjects : ''}`}>
                    <Project
                        img='ai-chat/ai-chat-1-dark.png'
                        imgAlign='top'
                        name='AI Chat'
                        githubLink='https://github.com/bruno-remeikis/ai-chat'
                        demoLink='https://ai-chat-rmk.vercel.app/'
                        imgs={[
                            { src: 'ai-chat/ai-chat-1-dark.png', size: [691, 786] },
                            { src: 'ai-chat/ai-chat-1-light.png', size: [692, 786] },
                        ]}
                        description={
                            'Uma interface web que se integração com a Gemini, a Inteligência Artificial da Google.\n' +
                            'Nela é possível conversar com a IA e obter respostas atualizadas, já que a mesma têm ' +
                            'acesso à internet'
                        }
                        technologies={[
                            technologies.typescript,
                            technologies.react,
                            technologies.next,
                            technologies.tailwind
                        ]}
                        intention='Aprendizado'
                        mobile
                    />
                    <Project
                        img='chess/chess.png'
                        name='Xadrez'
                        githubLink='https://github.com/bruno-remeikis/Chess'
                        imgs={[
                            { src: 'chess/chess.png', size: [1920, 1079] },
                            { src: 'chess/chess-2.png', size: [1920, 1079] },
                        ]}
                        description={
                            'Jogo de xadrez desenvolvido com o framework Phaser 3.\nUtilizei este projeto para aprender um ' +
                            'pouco de como funciona o xadrez, além de experimentar um pouco de desenvolvimento de jogos digitais ' +
                            'e exercitar minhas habilidades em programação e desenvolvimento Front-end.'
                        }
                        technologies={[
                            technologies.html,
                            technologies.css,
                            technologies.javascript,
                            technologies.phaser3
                        ]}
                        intention='Aprendizado'
                    />
                    <Project
                        img='ursport.jpeg'
                        name='UrSport'
                        githubLink='https://github.com/bruno-remeikis/projeto-integrador-2'
                        imgAlign='top'
                        imgs={[
                            { src: 'ursport.jpeg', size: [1366, 768] },
                        ]}
                        description={
                            'UrSport é uma rede social esportiva desenvolvida em pouco tempo para uma apresentação acadêmica.\n' +
                            'Através de sua interface web, é possivel cadastrar um usuário, criar e participar de eventos e se ' +
                            'conectar a outros usuários.'
                        }
                        technologies={[
                            technologies.react,
                            technologies.next,
                            technologies.java,
                            technologies.spring,
                            technologies.mysql
                        ]}
                        intention='Acadêmico'
                    />
                    <Project
                        img='naval-battle/naval-battle.png'
                        name='Batalha Naval'
                        githubLink='https://github.com/bruno-remeikis/naval-battle'
                        imgAlign={20}
                        imgs={[
                            { src: 'naval-battle/naval-battle-home.png', size: [923, 1040] },
                            { src: 'naval-battle/naval-battle-game.png', size: [822, 670] },
                            { src: 'naval-battle/naval-battle-instructions.png', size: [923, 1040] },
                        ]}
                        description={
                            'Neste desafio, refiz uma das primeiras aplicações que desenvolví em minha vida (e uma das ' +
                            'quais mais me orgulho).\nTrata-se de uma Batalha Naval feita em C++ utilizando a biblioteca ' +
                            'Conio2 e exibida em um terminal. Nele é possível caminhar com um cursor por uma malha coordenada ' +
                            'e atirar onde ele estiver posicionado, revelando assim o que há (podendo ser uma embarcação ' +
                            'ou água).\nOs elementos escondidos são posicionados de forma totalmente aleatória, ' +
                            'o que torna cada rodada única.'
                        }
                        technologies={[
                            technologies.cpp
                        ]}
                        intention='Desafio pessoal'
                        mobile
                        butDesktopShowcase
                    />
                    <Project
                        img='ciph/ciph-1.jpeg'
                        name='Ciphersonal'
                        githubLink='https://github.com/bruno-remeikis/ciph'
                        imgAlign={5}
                        mobile
                        imgs={[
                            { src: 'ciph/ciph-1.jpeg', size: [768, 1280] },
                            { src: 'ciph/ciph-2.jpeg', size: [768, 1280] },
                            { src: 'ciph/ciph-3.jpeg', size: [768, 1280] },
                            { src: 'ciph/ciph-4.jpeg', size: [768, 1280] },
                            { src: 'ciph/ciph-5.jpeg', size: [768, 1280] },
                        ]}
                        description={
                            'Ciph é uma aplicação mobile que desenvolví para que eu pudesse salvar meus repertórios musicais. ' +
                            'Nele é possivel salvar músicas, suas letras, cifras e artistas, bem como criar repertórios, que ' +
                            'são como pastas de músicas.\nTodos os dados são salvos em um banco de dados local usando SQLite, ' +
                            'sendo possível exportá-los, gerando um documento JSON.'
                        }
                        technologies={[
                            technologies.reactNative,
                            technologies.expo,
                            technologies.sqlite
                        ]}
                        intention='Uso pessoal'
                    />
                    <Project
                        img='calendario2.png'
                        name='Calendário'
                        githubLink='https://github.com/bruno-remeikis/calendario'
                        imgAlign='top'
                        imgs={[
                            { src: 'calendario2.png', size: [1123, 625] },
                        ]}
                        description='Este é um calendário simples feito em um dia de tédio :)'
                        technologies={[
                            technologies.html,
                            technologies.css,
                            technologies.javascript
                        ]}
                        intention='Aprendizado'
                    />
                    <Project
                        img='marvel-ttt/marvel-ttt-game.png'
                        name='Marvel Tic Tac Toe'
                        demoLink='https://prova-celero.vercel.app/'
                        githubLink='https://github.com/bruno-remeikis/prova-celero'
                        imgs={[
                            { src: 'marvel-ttt/marvel-ttt-home.png', size: [1920, 1079] },
                            { src: 'marvel-ttt/marvel-ttt-game.png', size: [1920, 1079] }
                        ]}
                        description=''
                        technologies={[
                            technologies.angular,
                            technologies.sass
                        ]}
                        intention='Prova admissional'
                    />
                    <Project
                        lastVisibleOne
                        img='portfolio/portifolio.png'
                        name='Este portifólio'
                        demoLink='https://portifolio-remeikis.vercel.app/'
                        githubLink='https://github.com/bruno-remeikis/portifolio'
                        imgs={[
                            { src: 'portfolio/portifolio.png', size: [1920, 1079] },
                        ]}
                        description={
                            'Aqui falo um pouco sobre mim, da minha carreira como desenvolvedor e mostro alguns dos meus projetos.'
                        }
                        technologies={[
                            technologies.react,
                            technologies.next,
                            technologies.sass
                        ]}
                    />
                </div>

                <div className={styles.viewMoreContainer} style={{ display: moreProjects ? 'none' : 'flex' }}>
                    <button onClick={() => setMoreProjects(true)}>Mais projetos</button>
                </div>

            </div>
        </div>
    );
}

export default ProjectsSection;