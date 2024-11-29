import Layout from "src/components/Layout";
import MyForm from "src/components/forms/contact-form";

const Contact = () => {
  return (
    <Layout>
      <div
        className="contact-container"
        style={{
          display: "flex",
          gap: "2rem",
          padding: "2rem",
        }}
      >
        <div
          className="contact-info"
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Contact</h1>
          <p> Feel free to contact us with any questions بارك الله فيك</p>
          <strong>Imam</strong>
          <p>Ibrahim Habach</p>

          <strong>Email</strong>
          <p> habach44@gmail.com</p>
          <strong>Phone</strong>
          <p> (407) 592-5000</p>
        </div>
        <div className="contact-form" style={{ width: "50%" }}>
          <MyForm />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
