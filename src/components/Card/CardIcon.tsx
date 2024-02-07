import styles from './Card.module.scss';

// Emojis unicode for HTML website:
// https://www.quackit.com/character_sets/emoji/emoji_v3.0/unicode_emoji_v3.0_characters_all.cfm

export enum Emojis {
    NOTEBOOK = 0x1F4BB,
    GRADUATION_CAP = 0x1F393,
    GREEN_BOOK = 0x1F4D7,
    RED_BOOK = 0x1F4D5,
    BRIEFCASE = 0x1F4BC,
}

type CardIconProps = {
    emoji: Emojis;
}

const CardIcon: React.FC<CardIconProps> = ({ emoji }) => {
    return (
        <div className={styles.card__header}>
           { String.fromCodePoint(emoji) }
        </div>
    );
}

export default CardIcon;