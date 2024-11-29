import Layout from "src/components/Layout";
import homeStyles from "src/styles/home.module.css";
import styles from "./sunday-school.module.css";
import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";

const SundaySchool = () => {
  return (
    <Layout>
      <main className={homeStyles.main}>
        <h2 className={styles.title}>Masjid Al Tazkiah Sunday School</h2>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/programs/sunday-school/quran1.jpeg"
              alt="quran1"
              width={600}
              height={600}
              className={styles.image}
            />
          </div>

          <div className={styles.textContainer}>
            <div className={styles.section}>
              <h2>What is Sunday School?</h2>
              <p>
                Our program offers an exciting opportunity for Muslim children
                between the ages of 5-18 years to learn about Islam in a fun and
                engaging way. Our Sunday School program is not only a place of
                learning but also a space where children can build relationships
                with other students and make memories that will last a lifetime.
              </p>
            </div>

            <div className={styles.section}>
              <h2>When are classes taught?</h2>
              <p>
                Our classes run from 10:30 AM to 1:30 PM, giving children the
                chance to dive deep into the teachings of Islam and build
                lifelong friendships with other young Muslims.
              </p>
            </div>

            <div className={styles.section}>
              <h2>What does the curriculum include?</h2>
              <p>
                Our curriculum includes Quranic studies, where children will
                learn to read and memorize Surahs. We also teach Islamic
                history, exploring the lives of the prophets. Our experienced
                teachers are passionate about inspiring young minds and creating
                a positive and inclusive learning environment.
              </p>
            </div>

            <div className={styles.section}>
              <h2>How do I enroll my child?</h2>
              <p>
                Thank you for your interest in our program. Our Sunday School
                program is currently at capacity and we are not accepting new
                students at this time. However, we encourage you to check back
                with us periodically for updates on when we will resume
                accepting new students.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default SundaySchool;
