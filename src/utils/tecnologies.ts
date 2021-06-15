export interface Tecnology
{
    name: string;
    imageName: string;
}

export function getImagePath(imageName: string): string
{
    return `/habilities/${imageName}.svg`;
}

// Dictionary
export const tecnologies: {[name: string]: Tecnology} = {
    html: {
        name: 'HTML',
        imageName: 'html5'
    },
    css: {
        name: 'CSS',
        imageName: 'css3'
    },
    javascript: {
        name: 'JavaScript',
        imageName: 'javascript'
    },
    typescript: {
        name: 'TypeScript',
        imageName: 'typescript'
    },
    node: {
        name: 'Node.js',
        imageName: 'node-js'
    },
    react: {
        name: 'React',
        imageName: 'react'
    },
    next: {
        name: 'Next.js',
        imageName: 'next-js'
    },
    sass: {
        name: 'Sass',
        imageName: 'sass'
    },
    git: {
        name: 'Git',
        imageName: 'git'
    },
    java: {
        name: 'Java',
        imageName: 'java'
    },
    c: {
        name: 'JavaScript',
        imageName: 'javascript'
    },
    cpp: {
        name: 'C++',
        imageName: 'cplusplus'
    },
    php: {
        name: 'PHP',
        imageName: 'php'
    },
    python: {
        name: 'Python',
        imageName: 'python'
    },
    mysql: {
        name: 'MySQL',
        imageName: 'mysql'
    },
    oracle: {
        name: 'Oracle',
        imageName: 'oracle'
    },
};