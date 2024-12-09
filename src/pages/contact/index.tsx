import Layout from "src/components/Layout";
import MyForm from "src/components/forms/contact/contact-form";
import styles from "./contact.module.css";
import Link from "next/link";

const Contact = () => {
  return (
    <Layout>
      <div className={styles.contact_container}>
        <div className={styles.contact_info}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Contact</h1>
          <p> Feel free to contact us with any questions بارك الله فيك</p>
          <strong>Imam</strong>
          <p>Ibrahim Habach</p>

          <strong>Email</strong>
          <p>
            <a
              style={{ color: "#2E7D32", textDecoration: "underline" }}
              href="mailto:info@foundationoflights.org"
            >
              info@foundationoflights.org
            </a>
          </p>
          <strong>Phone</strong>
          <p> (407) 592-5000</p>
          <p>
            Questions about membership? Please fill out the{" "}
            <Link
              href="/forms"
              target="_blank"
              style={{ color: "#2E7D32", textDecoration: "underline" }}
            >
              Foundation of Lights Membership application
            </Link>
          </p>
          <p>
            Questions about zakat? Please fill out the{" "}
            <Link
              href="/forms"
              target="_blank"
              style={{ color: "#2E7D32", textDecoration: "underline" }}
            >
              Foundation of Lights Membership application
            </Link>
          </p>
        </div>
        <div className={styles.contact_form}>
          <MyForm />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
