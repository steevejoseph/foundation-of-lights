import Link from "next/link";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div
        className="info-container"
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          className="info-address"
          style={{
            width: "50%",
            flexDirection: "column",
            justifyContent: "space-evenly",
            fontSize: "14px",
          }}
        >
          <h3
            style={{
              fontSize: "24px",
              fontWeight: "600",
              marginBottom: "20px",
              color: "#fff",
            }}
          >
            Foundation of Lights
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px", // Adds consistent spacing between address lines
              color: "#fff",
            }}
          >
            <p>Masjid Tazkiah</p>
            <p>120 Floral St,</p>
            <p>Ocoee, FL 34761</p>
          </div>
        </div>

        <div
          className="info-about-donate"
          style={{
            width: "50%",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <h4
            style={{
              fontSize: "20px",
              fontWeight: "normal",
              marginBottom: "16px",
              color: "#fff",
            }}
          >
            About
          </h4>

          <Link
            href={"https://www.paypal.com/paypalme/foundationoflights"}
            style={{
              fontSize: "20px",
              fontWeight: "normal",
              color: "#fff",
              textDecoration: "none",
              display: "block",
            }}
          >
            Donate
          </Link>
        </div>
      </div>

      <div
        className="map-container"
        style={{ width: "100%", height: "300px", margin: "20px 0" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2!2d-81.5444!3d28.5707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77e8f8e8e8e8f%3A0x0!2s120+Floral+St%2C+Ocoee%2C+FL+34761!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <p style={{ textAlign: "center" }}>
        &copy; 2024 Masjid Tazkiah. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
