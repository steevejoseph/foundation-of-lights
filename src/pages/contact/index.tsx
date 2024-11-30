import Layout from "src/components/Layout";
import MyForm from "src/components/forms/contact-form";
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
          <p> habach44@gmail.com</p>
          <strong>Phone</strong>
          <p> (407) 592-5000</p>
          <p>
            Questions about membership? Please fill out the{" "}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdoWitdV5vQG-k8xuelem6SwJaFvQaarYV8Qc9f_VbvFtn1Zw/viewform?usp=sharing"
              target="_blank"
              style={{ color: "#0066cc", textDecoration: "underline" }}
            >
              Foundation of Lights Membership application
            </Link>
          </p>
          <p>
            Questions about zakat? Please fill out the{" "}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScI2MA0k74JQK3IQFNwomY0wUNPmCz29CUG5YZeKqeozxcKqg/viewform?usp=sharing"
              target="_blank"
              style={{ color: "#0066cc", textDecoration: "underline" }}
            >
              Foundation of Lights Zakat Request application
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
