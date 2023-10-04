import styles from '@/styles/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Name from "@/img/name.png";
export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/">
                <Image
                    width={100}
                    alt='name'
                    src={Name}
                />
            </Link>
            <div className={styles.buttonGroup}>
            <Link href="/" className={styles.button}>
            HOME
            </Link>
            <Link href="/about" className={styles.button}>
            ABOUT
            </Link>
            <Link href="/products" className={styles.button}>
            PRODUCTS
            </Link>
            </div>
        </header>
    )
}