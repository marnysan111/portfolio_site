import styles from "@/styles/Container.module.css";
import Image from "next/image";
import Icon from "@/img/icon.jpeg";
import Icons from "@/components/icon";
import Tech from "@/components/tech";
export default function About() {
  return (
    <div className={styles.container}>
        <main className={styles.main}>
            <div className={styles.col12}>
                <h1 className={styles.pageTitle}>About me</h1>
            </div>
            <Image 
                src={Icon}
                width={200}
                height={200}
                alt="marnyのアイコン"
            />
            <h1 className={styles.description}>Marny / mani</h1>
            <p>生息地</p>
            <div className={styles.col12}>
                <div className={styles.group}>
                    <Icons />
                </div>
            </div>
            <div className={styles.textLeft}>
                <h2>自己紹介</h2>
                <p>
                2001年生まれ、東京都出身。<br />子供の頃から叔父が経営する町工場の影響を受け、技術系に強い興味を抱く。この興味が高まり、高専に入学。高専で電子回路、プログラミング、セキュリティについて専門的に学ぶ。高専卒業後、都内のネットワーク会社に入社し、現在はセキュリティとWebアプリケーションの開発を中心に活動中。
                </p>
            </div>
            <h2 className={styles.textLeft}>主な技術スタック</h2>
            <div className={styles.col12}>
                <div className={styles.group}>
                    <Tech />
                </div>
            </div>
        </main>
    </div>
  )
}