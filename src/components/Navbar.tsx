import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/navbar.module.css";
import { env } from "src/env";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// Add icons to the library
library.add(faFacebook, faWhatsapp);

export const PAYPAL_URL = env.NEXT_PUBLIC_PAYPAL_URL;

const Navbar = () => {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [programsDropdown, setProgramsDropdown] = useState(false);
  const [isClient, setIsClient] = useState(false); // State to track client-side rendering
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = (dropdown: string) => {
    if (dropdown === "about") {
      setAboutDropdown((prev) => !prev);
    } else if (dropdown === "programs") {
      setProgramsDropdown((prev) => !prev);
    }
  };

  // Set the isClient state to true after the component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderIconsIfOnClient = (isClient: boolean) => {
    if (!isClient) {
      return null; // Return nothing during SSR (prevents flicker)
    }

    return (
      <>
        <li>
          <Link
            href="https://www.facebook.com/masjidaltazkiyah"
            target="_blank"
            passHref
          >
            <div className={styles.linkButton}>
              <FontAwesomeIcon icon={["fab", "facebook"]} size="lg" />
            </div>
          </Link>
        </li>
        <li>
          <Link
            href="https://chat.whatsapp.com/CDS2JpPOp2GLqeSMraMhoz"
            target="_blank"
            passHref
          >
            <div className={styles.linkButton}>
              <FontAwesomeIcon icon={["fab", "whatsapp"]} size="lg" />
            </div>
          </Link>
        </li>
      </>
    );
  };

  return (
    <nav className={styles.navbar}>
      <button
        className={styles.menuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span className={styles.hamburger}></span>
      </button>
      <ul className={isMenuOpen ? styles.active : ""}>
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
          <Link href={PAYPAL_URL} target="_blank">
            Donate
          </Link>
        </li>
        {renderIconsIfOnClient(isClient)}
      </ul>
    </nav>
  );
};

export default Navbar;
