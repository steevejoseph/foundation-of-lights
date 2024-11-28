import Layout from "src/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <div
        className="contact-container"
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div className="contact-info">
          <strong>Contact</strong>
          <p> Feel free to contact us with any questions بارك الله فيك</p>
          <strong></strong>
          <p></p>
          <strong>Imam Ibrahim Habach</strong>
          <p>Email habach44@gmail.com</p>
          <strong>Phone</strong>
          <p> (407) 592-5000</p>
        </div>
        <div
          className="contact-form"
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <form action="#">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea name="" id="" placeholder="Message"></textarea>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
