import styles from "@/styles/Container.module.css";
import Image from "next/image";
import fes from "@/img/fes.jpg"
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.col12}>
          <h1 className={styles.pageTitle}>トップページ</h1>
        </div>
        書くことないんでこの前行った夏フェスの写真でも
        <div className={styles.col12}>
        <Image 
          src={fes}
          alt="フェス"
          layout="responsive"
        />
        </div>
        山中湖でやってたんですけど、めちゃ綺麗だった
      </div>
    </div>
  )
}