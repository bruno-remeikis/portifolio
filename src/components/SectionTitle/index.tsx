import styles from './styles.module.scss';

type SectionTitleProps = {
    title: string;
	subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) =>
	<div className={styles.sectionTitle}>
		<h2>{ title }</h2>
		<span>{ subtitle }</span>
	</div>

export default SectionTitle;