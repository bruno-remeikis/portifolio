import styles from './styles.module.scss';

type SectionTitleProps = {
	className?: string;
    title: string;
	subtitle: string;
	dark?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ className, title, subtitle, dark }) =>
	<div className={`${styles.sectionTitle} ${className}`}>
		<h2 style={ dark ? { color: '#0c0c0c' } : null }>{ title }</h2>
		<span style={ dark ? { color: 'var(--purple-2)' } : null }>{ subtitle }</span>
	</div>

export default SectionTitle;