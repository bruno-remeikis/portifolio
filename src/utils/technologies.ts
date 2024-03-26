// Icones SVG
// https://devicon.dev/

export interface Technology
{
    name: string;
    imageName: string;
    extension?: string; // Default: svg
    unshowable?: true;
}

export function getImagePath(imageName: string): string
{
    return `/img/abilities/${imageName}.svg`;
}

// Dictionary
export const technologies: {[name: string]: Technology} = {
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
    express: {
        name: 'Express',
        imageName: 'express-original',
        unshowable: true
    },
    react: {
        name: 'React',
        imageName: 'react'
    },
    reactNative: {
        name: 'React Native',
        imageName: 'react-native'
    },
    expo: {
        name: 'Expo',
        imageName: 'expo-go',
        unshowable: true
    },
    next: {
        name: 'Next.js',
        imageName: 'next-js'
    },
    angular: {
        name: 'Angular',
        imageName: 'angular'
    },
    // electron: {
    //     name: 'Electron',
    //     imageName: 'electron-original'
    // },
    sass: {
        name: 'Sass',
        imageName: 'sass',
        unshowable: true
    },
    java: {
        name: 'Java',
        imageName: 'java'
    },
    spring: {
        name: 'Spring',
        imageName: 'spring-original'
    },
    quarkus: {
        name: 'Quarkus',
        imageName: 'devicon--quarkus'
    },
    camel: {
        name: 'Camel',
        imageName: 'apache-camel'
    },
    kafka: {
        name: 'Kafka',
        imageName: 'apachekafka-original'
    },
    oracle: {
        name: 'Oracle',
        imageName: 'oracle'
    },
    mysql: {
        name: 'MySQL',
        imageName: 'mysql'
    },
    sqlite: {
        name: 'SQLite',
        imageName: 'sqlite',
        unshowable: true
    },
    git: {
        name: 'Git',
        imageName: 'git'
    },
    docker: {
        name: 'Docker',
        imageName: 'docker-original'
    },
    // c: {
    //     name: 'C',
    //     imageName: 'c'
    // },
    cpp: {
        name: 'C++',
        imageName: 'cplusplus',
        unshowable: true
    },
    phaser3: {
        name: 'Phaser 3',
        imageName: 'phaser3',
        extension: 'png',
        unshowable: true
    },
    tailwind: {
        name: 'Tailwind',
        imageName: 'tailwindcss-plain'
    }
    // mongo: {
    //     name: 'MongoDB',
    //     imageName: 'mongodb-original'
    // },
    // redhat: {
    //     name: 'RedHat',
    //     imageName: 'redhat-original'
    // },
    // redhat2: {
    //     name: 'RedHat',
    //     imageName: 'redhat-original-wordmark'
    // }

    // ---

    // bootstrap: {
    //     name: 'Bootstrap',
    //     imageName: 'bootstrap'
    // },
    // php: {
    //     name: 'PHP',
    //     imageName: 'php'
    // },
    // python: {
    //     name: 'Python',
    //     imageName: 'python'
    // },
};