'use client'
import styles from '../../styles/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Name from "../img/name2.png";
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
            <Link href="/about" className={styles.button}>
            ABOUT
            </Link>
            <Link href="/about" className={styles.button}>
            ABOUT
            </Link>
            </div>
        </header>
    )
}