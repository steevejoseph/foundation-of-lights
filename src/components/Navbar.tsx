import Link from "next/link";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/prayer-times">Construction Plans</Link>
        </li>
        <li>
          <Link href="/prayer-times">Events</Link>
        </li>
        <li>
          <Link href="/prayer-times">Programs</Link>
        </li>
        <li>
          <Link href="https://www.facebook.com/masjidaltazkiyah">Facebook</Link>
        </li>
        <li>
          <Link href="https://chat.whatsapp.com/CDS2JpPOp2GLqeSMraMhoz">
            Whatsapp Group
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
