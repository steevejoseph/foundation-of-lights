import Layout from "src/components/Layout";
import Link from "next/link";
import styles from "./forms.module.css";
import { env } from "src/env";

const Forms = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Forms</h1>
        <div className={styles.formGrid}>
          <div className={styles.formCard}>
            <h2>Membership Google Form</h2>
            <p>
              Join our community by becoming a member. Fill out our membership
              form to get started.
            </p>
            <Link
              href={env.NEXT_PUBLIC_MEMBERSHIP_FORM_URL}
              className={styles.cardLink}
              target="_blank"
            >
              Go to Form →
            </Link>
          </div>

          <div className={styles.formCard}>
            <h2>Zakat Request Google Form</h2>
            <p>Apply for Zakat assistance by completing our request form.</p>
            <Link
              href={env.NEXT_PUBLIC_ZAKAT_FORM_URL}
              className={styles.cardLink}
              target="_blank"
            >
              Go to Form →
            </Link>
          </div>

          <div className={styles.formCard}>
            <h2>Zakat Request Form</h2>
            <p>
              Download our Zakat request form if you wish to apply for Zakat
              assistance. Please ensure all information is complete and
              accurate.
            </p>
            <a
              href="/forms/zakat-request-form.pdf"
              className={styles.cardLink}
              download
            >
              Download Form →
            </a>
          </div>

          <div className={styles.formCard}>
            <h2>Tazkiah Membership Form</h2>
            <p>
              Download our revised membership form to join Tazkiah. Please fill
              out all required fields and submit as instructed on the form.
            </p>
            <a
              href="/forms/tazkiah-revised-membership-form.pdf"
              className={styles.cardLink}
              download
            >
              Download Form →
            </a>
          </div>

          <div className={styles.formCard}>
            <h2>Contact Us</h2>
            <p>Have questions? Reach out to us through our contact form.</p>
            <Link href="/contact" className={styles.cardLink}>
              Go to Form →
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Forms;
