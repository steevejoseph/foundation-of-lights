import Link from "next/link";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.infoContainer}>
        <div className={styles.infoAddress}>
          <h3 className={styles.infoTitle}>Foundation of Lights</h3>

          <div className={styles.addressContainer}>
            <p>Masjid Tazkiah</p>
            <p>120 Floral St,</p>
            <p>Ocoee, FL 34761</p>
          </div>
        </div>

        <div className={styles.infoAboutDonate}>
          <h4 className={styles.aboutTitle}>About</h4>
          <Link href={"/contact"} className={styles.donateLink}>
            Contact Us
          </Link>{" "}
          <Link href={"/donate"} className={styles.donateLink}>
            Donate
          </Link>
        </div>
      </div>

      <div className={styles.mapContainer}>
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

      <p className={styles.copyright}>
        &copy; 2024 Masjid Tazkiah. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
