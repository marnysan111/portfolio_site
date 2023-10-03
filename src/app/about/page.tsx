import styles from "../../../styles/Container.module.css";
import Image from "next/image";
import Icon from "../../img/icon.jpeg";

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.row}>
            <h1 className={`${styles.col12} ${styles.pagetitle}`}>About me</h1>
        </div>
        <div className={styles.row}>
            <main className={styles.main}>
                <Image 
                    src={Icon}
                    width={200}
                    height={200}
                    alt="marnyのアイコン"
                />
                <h1 className={styles.description}>Marny</h1>
                <div className={styles.intro}>
                  <h2>自己紹介</h2>
                  

                </div>
            </main>
        </div>
    </div>
  )
}