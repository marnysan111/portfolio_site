import styles from "../../styles/Container.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.row}>
            <h1 className={`${styles.col12} ${styles.pagetitle}`}></h1>
        </div>
        <div className={styles.row}>
            <main className={styles.main}>
                
            </main>
        </div>
    </div>
  )
}