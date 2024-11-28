import Link from "next/link";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div
        className="info-container"
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          className="info-address"
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-evenly",
            fontSize: "14px",
          }}
        >
          <p>Foundation of Lights</p>
          <p>Masjid Tazkiah</p>
          <p>120 Floral St,</p>
          <p>Ocoee, FL 34761</p>
        </div>

        <div
          className="info-about-donate"
          style={{ flex: 1, flexDirection: "column" }}
        >
          <p>About</p>
          <Link href={"https://www.paypal.com/paypalme/foundationoflights"}>
            Donate
          </Link>
        </div>
      </div>
      <p style={{ textAlign: "center" }}>
        &copy; 2024 Masjid Tazkiah. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;