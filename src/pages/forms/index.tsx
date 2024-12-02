import Layout from "src/components/Layout";
import Link from "next/link";
import styles from "./forms.module.css";

const Forms = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Forms</h1>
        <div className={styles.formGrid}>
          <div className={styles.formCard}>
            <h2>Foundation of Lights Membership Form</h2>
            <p>
              Join our community by becoming a member. Fill out our membership
              form to get started.
            </p>
            {/* <Link
              href={env.NEXT_PUBLIC_MEMBERSHIP_FORM_URL}
              className={styles.cardLink}
              target="_blank"
            >
              Go to Google Forms →
            </Link> */}
            <Link
              href="/forms/tazkiah-revised-membership-form.pdf"
              className={styles.cardLink}
              target="_blank"
            >
              View Form →
            </Link>
            <a
              href="/forms/tazkiah-revised-membership-form.pdf"
              className={styles.cardLink}
              download
            >
              Download Form →
            </a>
          </div>

          <div className={styles.formCard}>
            <h2>Zakat Request Form</h2>
            <p>Apply for Zakat assistance by completing our request form.</p>
            {/* <Link
              href={env.NEXT_PUBLIC_ZAKAT_FORM_URL}
              className={styles.cardLink}
              target="_blank"
            >
              Go to Gooogle Forms →
            </Link> */}
            <Link
              href="/forms/zakat-request-form.pdf"
              className={styles.cardLink}
              target="_blank"
            >
              View Form →
            </Link>{" "}
            <a
              href="/forms/zakat-request-form.pdf"
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
