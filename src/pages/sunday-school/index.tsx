import Layout from "src/components/Layout";
import styles from "src/styles/home.module.css";
import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";

const SundaySchool = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <h2 style={{ textAlign: "center" }}>Masjid Al Tazkiah Sunday School</h2>
        <div
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Image
            src="/images/programs/sunday-school/quran1.jpeg"
            alt="quran1"
            height="100"
            width="100"
          />
          {/* <Accordion.Root type="multiple">
            <Accordion.Item value="item-1">
              <Accordion.Header>
                <Accordion.Trigger />
              </Accordion.Header>
              <Accordion.Content />
            </Accordion.Item>
          </Accordion.Root> */}
          <div style={{ margin: "2em 0" }}>
            <h2>What is Sunday School?</h2>
            <p>
              Our program offers an exciting opportunity for Muslim children
              between the ages of 5-18 years to learn about Islam in a fun and
              engaging way. Our Sunday School program is not only a place of
              learning but also a space where children can build relationships
              with other students and make memories that will last a lifetime.
            </p>
          </div>

          <div style={{ margin: "2em 0" }}>
            <h2>When are classes taught?</h2>
            <p>
              Our classes run from 10:30 AM to 1:30 PM, giving children the
              chance to dive deep into the teachings of Islam and build lifelong
              friendships with other young Muslims.
            </p>
          </div>

          <div style={{ margin: "2em 0" }}>
            <h2>What does the curriculum include?</h2>
            <p>
              Our curriculum includes Quranic studies, where children will learn
              to read and memorize Surahs. We also teach Islamic history,
              exploring the lives of the prophets. Our experienced teachers are
              passionate about inspiring young minds and creating a positive and
              inclusive learning environment.
            </p>
          </div>

          {/* TODO(steevejoseph): Consider adding a sign up form here */}
          <div style={{ margin: "2em 0" }}>
            <h2>How do I enroll my child?</h2>
            <p>
              Thank you for your interest in our program. Our Sunday School
              program is currently at capacity and we are not accepting new
              students at this time. However, we encourage you to check back
              with us periodically for updates on when we will resume accepting
              new students.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default SundaySchool;
