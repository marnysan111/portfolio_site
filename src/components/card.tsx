import styles from '@/styles/Card.module.css'
import Link from 'next/link';
interface CardProps {
    title: string;
    content: string;
    url: string
}

export default function Card(props: CardProps) {
    const title = props.title
    const content = props.content
    const url = props.url
    return (
        <Link href={url}>
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.content}>{content}</p>
        </div>
        </Link>
    )
}