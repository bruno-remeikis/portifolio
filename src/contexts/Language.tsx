import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { Language, MultilangText } from "../utils/language";

type LanguageContextProps = {
    language: Language
    setLanguage: Dispatch<SetStateAction<Language>>
    text: (text: MultilangText) => string;
}

const LanguageContext = createContext<LanguageContextProps | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) =>
{
    const [language, setLanguage] = useState<Language>(/*() => {
        try {
            console.log(navigator.language.substring(0, 2) as Language);
            return navigator.language.substring(0, 2) as Language;
        }
        catch(err) {
            console.error(err);
            return 'pt'
        }
    }*/ 'pt');

    function text(text: MultilangText): string {
        try {
            return text[language];
        }
        catch(err) {
            return '---';
        }
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, text }}>
           { children }
        </LanguageContext.Provider>
    );
};

export function useLanguage()
{
   const context = useContext(LanguageContext);

   if(!context)
      throw new Error('useLanguage must be used within a LanguageProvider');

   const { language, setLanguage, text } = context;

   return { language, setLanguage, text };
}