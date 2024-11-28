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
          <Accordion.Root type="multiple">
            <Accordion.Item value="item-1">
              <Accordion.Header>
                <Accordion.Trigger />
              </Accordion.Header>
              <Accordion.Content />
            </Accordion.Item>
          </Accordion.Root>

          <div></div>
        </div>
      </main>
    </Layout>
  );
};

export default SundaySchool;
