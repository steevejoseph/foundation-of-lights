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
            <h2>Membership Form</h2>
            <p>
              Join our community by becoming a member. Fill out our membership
              form to get started.
            </p>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdoWitdV5vQG-k8xuelem6SwJaFvQaarYV8Qc9f_VbvFtn1Zw/viewform?usp=sharing"
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
              href="https://docs.google.com/forms/d/e/1FAIpQLScI2MA0k74JQK3IQFNwomY0wUNPmCz29CUG5YZeKqeozxcKqg/viewform?usp=sharing"
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
