import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rituals | Build better habits</title>
        <meta name="description" content="Rituals build products that help people build better habits." />
        <link rel="icon" href="/rituals.png" />
      </Head>

      <header className={styles.header}>
        <Image src="/rituals.png" alt="Rituals Logo" width={42} height={42} />
        <div className={styles.headerText}>
          <h4><a href='#demo'>Demo</a></h4>
          <h4><a href='#install'>Install</a></h4>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.hero}>
        <h1 className={styles.title}>
          Build better habits.
        </h1>

        <p className={styles.description}>
          Launching on 20th February 2023.
          <br />
          Download for <a href='#install'>iOS</a> or <a href='#install'>Android</a>
        </p>
        </div>
        <div className={styles.demo} id='demo'>
          <Image src="/iPhoneScreenshot.png" alt="Rituals Demo" style={{objectFit: "contain"}} width={250} height={540} />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://linkedin.com/in/chaitannah"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built with ♥️ by chtnnh
        </a>
      </footer>
    </div>
  )
}
