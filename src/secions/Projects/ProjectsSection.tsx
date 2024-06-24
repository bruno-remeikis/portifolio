import { useState } from 'react';

import { technologies } from '../../utils/technologies';

import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Project } from '../../components/Project/Project';

import styles from './Projects.module.scss';
import { useLanguage } from '../../contexts/Language';

const ProjectsSection: React.FC = () =>
{
    const { text } = useLanguage();

    const [moreProjects, setMoreProjects] = useState(false);

    return (
        // height: '100svh',
        <div id="projects" className={`section ${styles.projectsSection}`}>
            <div className={styles.projectsContainer}>

                <SectionTitle
                    title={text({ pt: 'Portfólio', en: 'Portfolio' })}
                    subtitle={text({ pt: 'Meus projetos', en: 'My projects' })}
                    dark
                />

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
                        description={text({
                            pt: 'Uma interface web que se integração com a Gemini, a Inteligência Artificial da Google.\n' +
                                'Nela é possível conversar com a IA e obter respostas atualizadas, já que a mesma têm ' +
                                'acesso à internet.',
                            en: 'A web interface that integrates with Gemini, Google\'s Artificial Intelligence.\n' +
                                'It is possible to talk to the AI ​​and get updated answers, as it has access to the internet.'
                        })}
                        technologies={[
                            technologies.typescript,
                            technologies.react,
                            technologies.next,
                            technologies.tailwind
                        ]}
                        intention={text({ pt: 'Conhecimento', en: 'Knowledge' })}
                        mobile
                    />
                    <Project
                        img='graph/graph-2.png'
                        name='Graph'
                        demoLink='https://graaph.vercel.app/'
                        githubLink='https://github.com/bruno-remeikis/dijkstra-algorithm'
                        imgs={[
                            { src: 'graph/graph-1.png', size: [1920, 1080] },
                        ]}
                        description={text({
                            pt: 'Graph é um simulador de grafos.\nNele é possível criar e editar grafos e ver qual o melhor ' +
                                'caminho entre seus vértices através do algoritmo de Dijkstra.',
                            en: 'Graph is a graph simulator.\nIt is possible to create and edit graphs and see the best path ' +
                                'between their vertices using Dijkstra\'s algorithm.'
                        })}
                        technologies={[
                            technologies.html,
                            technologies.css,
                            technologies.typescript,
                            technologies.node,
                        ]}
                    />
                    <Project
                        img='ursport.jpeg'
                        name='UrSport'
                        githubLink='https://github.com/bruno-remeikis/projeto-integrador-2'
                        imgAlign='top'
                        imgs={[
                            { src: 'ursport.jpeg', size: [1366, 768] },
                        ]}
                        description={text({
                            pt: 'UrSport é uma rede social esportiva desenvolvida em pouco tempo para uma apresentação acadêmica.\n' +
                                'Através de sua interface web, é possivel cadastrar um usuário, criar e participar de eventos e se ' +
                                'conectar a outros usuários.',
                            en: 'UrSport is a sports social network developed in a short time for an academic presentation.\n' +
                                'Through its web interface, it is possible to register a user, create and participate in events ' +
                                'and connect with other users.'
                        })}
                        technologies={[
                            technologies.react,
                            technologies.next,
                            technologies.java,
                            technologies.spring,
                            technologies.mysql
                        ]}
                        intention={text({ pt: 'Acadêmico', en: 'Academic' })}
                    />
                    <Project
                        img='naval-battle/naval-battle.png'
                        name={text({ pt: 'Batalha Naval', en: 'Naval Battle' })}
                        githubLink='https://github.com/bruno-remeikis/naval-battle'
                        imgAlign={20}
                        imgs={[
                            { src: 'naval-battle/naval-battle-home.png', size: [923, 1040] },
                            { src: 'naval-battle/naval-battle-game.png', size: [822, 670] },
                            { src: 'naval-battle/naval-battle-instructions.png', size: [923, 1040] },
                        ]}
                        description={text({
                            pt: 'Neste desafio, refiz uma das primeiras aplicações que desenvolví em minha vida (e uma das ' +
                                'quais mais me orgulho).\nTrata-se de uma Batalha Naval feita em C++ utilizando a biblioteca ' +
                                'Conio2 e exibida em um terminal. Nele é possível caminhar com um cursor por uma malha coordenada ' +
                                'e atirar onde ele estiver posicionado, revelando assim o que há (podendo ser uma embarcação ' +
                                'ou água).\nOs elementos escondidos são posicionados de forma totalmente aleatória, ' +
                                'o que torna cada rodada única.',
                            en: 'In this challenge, I remade one of the first applications I developed in my life (and one ' +
                                'of which I am most proud).\nIt is a Naval Battle made in C++ using the Conio2 library and ' +
                                'displayed in a terminal. In it, it is possible to walk with a cursor through a coordinated '+
                                'mesh and shoot wherever it is positioned, thus revealing what is there (which could be a ' +
                                'vessel or water).\nThe hidden elements are positioned completely randomly, which makes each ' +
                                'round unique.'
                        })}
                        technologies={[
                            technologies.cpp
                        ]}
                        intention={text({ pt: 'Desafio pessoal', en: 'Personal challenge' })}
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
                        description={text({
                            pt: 'Ciph é uma aplicação mobile que desenvolví para que eu pudesse salvar meus repertórios musicais. ' +
                                'Nele é possivel salvar músicas, suas letras, cifras e artistas, bem como criar repertórios, que ' +
                                'são como pastas de músicas.\nTodos os dados são salvos em um banco de dados local usando SQLite, ' +
                                'sendo possível exportá-los, gerando um documento JSON.',
                            en: 'Ciph is a mobile application that I developed so that I could save my musical repertoires. ' +
                                'It is possible to save songs, their lyrics, chords and artists, as well as create repertoires, ' +
                                'which are like music folders.\nAll data is saved in a local database using SQLite, and it is ' +
                                'possible to export them, generating a JSON document .'
                        })}
                        technologies={[
                            technologies.reactNative,
                            technologies.expo,
                            technologies.sqlite
                        ]}
                        intention={text({ pt: 'Uso pessoal', en: 'Personal use' })}
                    />
                    <Project
                        img='chess/chess.png'
                        name={text({ pt: 'Xadrez', en: 'Chess' })}
                        githubLink='https://github.com/bruno-remeikis/Chess'
                        imgs={[
                            { src: 'chess/chess.png', size: [1920, 1079] },
                            { src: 'chess/chess-2.png', size: [1920, 1079] },
                        ]}
                        description={text({
                            pt: 'Jogo de xadrez desenvolvido com o framework Phaser 3.\nUtilizei este projeto para aprender um ' +
                                'pouco de como funciona o xadrez, além de experimentar um pouco de desenvolvimento de jogos digitais ' +
                                'e exercitar minhas habilidades em programação e desenvolvimento Front-end.',
                            en: 'Chess game developed with the Phaser 3 framework.\nI used this project to learn a little about ' +
                                'how chess works, as well as experience a bit of digital game development and exercise my skills ' +
                                'in programming and Front-end development.'
                        })}
                        technologies={[
                            technologies.html,
                            technologies.css,
                            technologies.javascript,
                            technologies.phaser3
                        ]}
                        intention={text({ pt: 'Conhecimento', en: 'Knowledge' })}
                    />
                    <Project
                        img='marvel-ttt/marvel-ttt-game.png'
                        name='Marvel tic-tac-toe'
                        demoLink='https://prova-celero.vercel.app/'
                        githubLink='https://github.com/bruno-remeikis/prova-celero'
                        imgs={[
                            { src: 'marvel-ttt/marvel-ttt-home.png', size: [1920, 1079] },
                            { src: 'marvel-ttt/marvel-ttt-game.png', size: [1920, 1079] }
                        ]}
                        description={text({
                            pt: 'Este projeto concorreu a uma vaga admissional.\nO desafio era desenvolver um jogo-da-velha ' +
                                'simples e integrá-lo à API da Marvel. Desta forma, os jogadores devem selecionar seus personagens ' +
                                'para batalharem.',
                            en: 'This project competed for an admission position.\nThe challenge was to develop a simple ' +
                                'tic-tac-toe game and integrate it with Marvel\'s API. In this way, players must select ' +
                                'their characters to battle.'
                        })}
                        technologies={[
                            technologies.angular,
                            technologies.sass
                        ]}
                        intention={text({ pt: 'Prova admissional', en: 'Admimssion test' })}
                    />
                    <Project
                        img='calendario2.png'
                        name={text({ pt: 'Calendário', en: 'Calendary' })}
                        githubLink='https://github.com/bruno-remeikis/calendario'
                        imgAlign='top'
                        imgs={[
                            { src: 'calendario2.png', size: [1123, 625] },
                        ]}
                        description={text({
                            pt: 'Este é um calendário simples feito em um dia de tédio :)',
                            en: 'Este é um calendário simples feito em um dia de tédio :)'
                        })}
                        technologies={[
                            technologies.html,
                            technologies.css,
                            technologies.javascript
                        ]}
                        intention={text({ pt: 'Conhecimento', en: 'Knowledge' })}
                    />
                    <Project
                        lastVisibleOne
                        img='portfolio/portifolio.png'
                        name={text({ pt: 'Este portfólio', en: 'This portfolio' })}
                        demoLink='https://portifolio-remeikis.vercel.app/'
                        githubLink='https://github.com/bruno-remeikis/portifolio'
                        imgs={[
                            { src: 'portfolio/portifolio.png', size: [1920, 1079] },
                        ]}
                        description={text({
                            pt: 'Aqui falo um pouco sobre mim, da minha carreira como desenvolvedor e mostro alguns ' +
                                'dos meus projetos.',
                            en: 'Here I talk a little about myself, my career as a developer and show some of my projects.'
                        })}
                        technologies={[
                            technologies.react,
                            technologies.next,
                            technologies.sass
                        ]}
                    />
                </div>

                <div className={styles.viewMoreContainer} style={{ display: moreProjects ? 'none' : 'flex' }}>
                    <button onClick={() => setMoreProjects(true)}>
                        {text({ pt: 'Mais projetos', en: 'More projects' })}</button>
                </div>

            </div>
        </div>
    );
}

export default ProjectsSection;