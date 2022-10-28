import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image
          src="https://images.unsplash.com/photo-1666782199657-09885cc1c088"
          alt="test"
          width={500}
          height={500}
        />
        <div className="">This image does not work</div>
        <Image
          src="https://images.unsplash.com/photo-1666782199657-09885cc1c088"
          alt="test"
          width={500}
          height={500}
          priority
          unoptimized
        />
        <div className="">
          This image works, but only because of unoptimized
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
