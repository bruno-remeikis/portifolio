import styles from './styles.module.scss';

type SectionTitleProps = {
	className?: string;
    title: string;
	subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ className, title, subtitle }) =>
	<div className={`${styles.sectionTitle} ${className}`}>
		<h2>{ title }</h2>
		<span>{ subtitle }</span>
	</div>

export default SectionTitle;