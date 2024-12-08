import Navbar from "./Navbar";
import Image from "next/image";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/images/logo/masjid_logo.png"
          alt="Masjid Tazkiah"
          width={60}
          height={60}
          style={{ width: "auto", height: "100%" }}
          priority
        />
        <h1>Masjid Tazkiah</h1>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
