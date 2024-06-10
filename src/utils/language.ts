export type Language = 'pt' | 'en';

export const languages: Language[] = ['pt', 'en'];

type LanguageProps = {
    flag: string;
    name: string;
    acronym: string;
}

export const languageProps: {[name: string]: LanguageProps} = {
    pt: {
        flag: 'br',
        name: 'Portuguese',
        acronym: 'PT'
    },
    en: {
        flag: 'us',
        name: 'English',
        acronym: 'EN'
    }
};

export type MultilangText = {
    pt: string;
    en: string;
}