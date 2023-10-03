'use client'
import styles from '../../styles/Header.module.css';
import container from '../../styles/Container.module.css'
import Link from 'next/link';
import Image from 'next/image';
import Name from "../img/name2.png";
export default function Header() {
    return (
        <header className={styles.header}>
            <div className={container.container}>
                <Link href="/">
                    <Image
                        width={100}
                        alt='name'
                        src={Name}
                    />
                </Link>
            </div>
        </header>
    )
}