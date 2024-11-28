import Head from "next/head";
import Layout from "src/components/Layout";
import Image from "next/image";
import styles from "../styles/home.module.css";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Masjid Tazkiah</title>
        <meta name="description" content="Welcome to Masjid Tazkiah" />
      </Head>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Welcome to Masjid Tazkiah</h1>
          <p>Your community center for spiritual growth.</p>
        </section>
        <section className={styles.about}>
          <h2>About Us</h2>
          <p>
            Masjid Tazkiah is committed to serving the spiritual and social
            needs of our community.
          </p>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
