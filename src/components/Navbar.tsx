import Link from "next/link";
import { useState } from "react";
import styles from "../styles/navbar.module.css";
import { env } from "src/env";

export const PAYPAL_URL = env.NEXT_PUBLIC_PAYPAL_URL;

const Navbar = () => {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [programsDropdown, setProgramsDropdown] = useState(false);

  const toggleDropdown = (dropdown: string) => {
    if (dropdown === "about") {
      setAboutDropdown((prev) => !prev);
    } else if (dropdown === "programs") {
      setProgramsDropdown((prev) => !prev);
    }
  };

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {/* About Dropdown */}
        <li
          className={styles.dropdown}
          onMouseEnter={() => toggleDropdown("about")}
          onMouseLeave={() => toggleDropdown("about")}
        >
          <span>About</span>
          {aboutDropdown && (
            <ul className={styles.dropdownMenu}>
              <li>
                <Link href="/about/imam">About Imam</Link>
              </li>
              <li>
                <Link href="/about/masjid">About Masjid</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href="/construction-plans">Construction Plans</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
        {/* Programs Dropdown */}
        <li
          className={styles.dropdown}
          onMouseEnter={() => toggleDropdown("programs")}
          onMouseLeave={() => toggleDropdown("programs")}
        >
          <span>Programs</span>
          {programsDropdown && (
            <ul className={styles.dropdownMenu}>
              <li>
                <Link href="/sunday-school">Sunday School</Link>
              </li>
              <li>
                <Link href="/food-pantry">Food Pantry</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link
            href="https://www.facebook.com/masjidaltazkiyah"
            target="_blank"
          >
            Facebook
          </Link>
        </li>
        <li>
          <Link
            href="https://chat.whatsapp.com/CDS2JpPOp2GLqeSMraMhoz"
            target="_blank"
          >
            Whatsapp Group
          </Link>
        </li>
        <li>
          <Link href={PAYPAL_URL} target="_blank">
            Donate
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
