import Head from "next/head";
import Layout from "src/components/Layout";
import styles from "../styles/home.module.css";
import MawaqitIframe from "src/components/mawaqit/mawaqit-iframe";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Masjid Tazkiah</title>
        <meta name="description" content="Welcome to Masjid Tazkiah" />
      </Head>
      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Welcome to Masjid Tazkiah</h1>
            <p>Your community center for spiritual growth.</p>
          </div>
        </section>

        <div className={styles.contentContainer}>
          <section className={styles.prayerTimes}>
            <MawaqitIframe />
          </section>

          <section className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h2>Construction Plans</h2>
              <Image
                src="/images/construction/1_Foundation Of LIghts_04.05.24.jpg"
                alt="Construction Plans"
                width={300}
                height={200}
                className={styles.cardImage}
              />
              <p>
                Help us expand our masjid! With the growing community, we are
                working to prevent overcrowding and create more prayer space.
              </p>
              <Link href="/construction-plans" className={styles.cardLink}>
                Learn More →
              </Link>
            </div>

            <div className={styles.infoCard}>
              <h2>Sunday School</h2>
              <Image
                src="/images/programs/sunday-school/quran1.jpeg"
                alt="Sunday School"
                width={300}
                height={200}
                className={styles.cardImage}
              />
              <p>
                Join our Sunday School program for children ages 5-18, offering
                Islamic education in a fun and engaging environment.
              </p>
              <Link href="/sunday-school" className={styles.cardLink}>
                Learn More →
              </Link>
            </div>

            <div className={styles.infoCard}>
              <h2>Food Pantry</h2>
              <Image
                src="/images/programs/food-pantry/food-pantry-1.jpg"
                alt="Food Pantry"
                width={300}
                height={200}
                className={styles.cardImage}
              />
              <p>
                Our Food Pantry helps people regardless of religion, race, or
                ethnicity. Join us in serving our community.
              </p>
              <Link href="/food-pantry" className={styles.cardLink}>
                Learn More →
              </Link>
            </div>

            <div className={styles.infoCard}>
              <h2>Contact Us</h2>
              <Image
                src="/images/contact.jpg"
                alt="Food Pantry"
                width={300}
                height={200}
                className={styles.cardImage}
              />
              <div className={styles.contactInfo}>
                <p>120 Floral St, Ocoee, FL 34761</p>
                <p>Phone: (407) 592-5000</p>
                <p>Email: habach44@gmail.com</p>
              </div>
              <Link href="/contact" className={styles.cardLink}>
                Get in Touch →
              </Link>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
