import { useState, useEffect, DependencyList } from 'react';

type TypingEffectProps = {
    children: string;
    timming?: number;
    delay?: number;
    infinite?: boolean;
    infiniteDelay?: number;
    deps?: DependencyList;
}

export const TypingEffect = ({ children: text, timming = 100, delay = 0, infinite = false, infiniteDelay = 1000, deps = [] }: TypingEffectProps) => {
    const [fullText, setFullText] = useState('');
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setFullText(text);
        init();
    },
    [text, ...deps]);

    function init() {
        setCurrentText('');
        setCurrentIndex(0);
    }

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if(currentIndex < fullText.length) {
            timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + fullText[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, currentIndex === 0 ? (delay + timming) : timming);
        }
        else if(infinite)
            timeout = setTimeout(() => init(), infiniteDelay);

        return () => clearTimeout(timeout);
  },
  [currentIndex, timming, infinite, fullText]);

  return <span>{currentText}</span>;
};