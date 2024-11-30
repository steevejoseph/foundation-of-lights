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
            <h2>Membership Form</h2>
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
            <h2>Zakat Request Form</h2>
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
