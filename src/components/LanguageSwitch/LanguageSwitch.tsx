import styles from './LanguageSwitch.module.scss';

import Image from "next/image";
import { Language, languageProps, languages } from "../../utils/language";
import { useLanguage } from '../../contexts/Language';



type LanguageOptionProps = {
	lang: Language;
}

const LanguageOption = ({ lang }: LanguageOptionProps) => {
	const props = languageProps[lang];

	return (
		<div className={styles.languageOption}>
			<Image src={`img/flags/${props.flag}-rounded.svg`} width={32} height={32} alt={props.name} />
			{ props.acronym }
		</div>
	);
}



type LanguageSwitchProps = {
    id?: string;
    dark?: boolean;
}

export const LanguageSwitch = ({ id = '', dark }: LanguageSwitchProps) => {
	const { language, setLanguage } = useLanguage();

	return (
		<div id={id} className={`${styles.languageSwitch} ${dark ? styles.dark : ''}`}>
			<div className={styles.selected}>
				<LanguageOption lang={language} />
			</div>
			<div className={styles.options}>
				{languages.filter(lang => lang !== language).map(lang =>
					<button key={lang} onClick={() => setLanguage(lang)}>
						<LanguageOption lang={lang} />
					</button>
				)}
			</div>
		</div>
	);
}