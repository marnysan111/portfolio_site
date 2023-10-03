import styles from '../../styles/Card.module.css'

interface CardProps {
    title: string;
    content: string;
}

export default function Card(props: CardProps) {
    const title = props.title
    const content = props.content
    return (
        <div className={styles.card}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.content}>{content}</p>
        </div>
    )
}