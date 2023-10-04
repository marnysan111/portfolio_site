import styles from "@/styles/Container.module.css";
import Github from "@/components/github";
export default function Products() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
    
      <h1 className={`${styles.col12} ${styles.pagetitle}`}>制作物</h1>
      <Github />
      </main>
    </div>
  )
}