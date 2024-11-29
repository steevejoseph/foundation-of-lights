import Layout from "src/components/Layout";
import MyForm from "src/components/forms/contact-form";
import styles from "./contact.module.css";

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
        </div>
        <div className={styles.contact_form}>
          <MyForm />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
