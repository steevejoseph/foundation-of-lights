"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/navbar.module.css";
import { env } from "src/env";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faWhatsapp,
  faPaypal,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export const PAYPAL_URL = env.NEXT_PUBLIC_PAYPAL_URL;

const Navbar = () => {
  useEffect(() => {
    library.add(faFacebook, faWhatsapp, faBars, faXmark, faPaypal);
  }, []);

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
      return null;
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
              <span className={styles.mobileText}>Facebook</span>
              <span className={styles.desktopIcon}>
                <FontAwesomeIcon icon={["fab", "facebook"]} size="lg" />
              </span>
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
              <span className={styles.mobileText}>WhatsApp Group</span>
              <span className={styles.desktopIcon}>
                <FontAwesomeIcon icon={["fab", "whatsapp"]} size="lg" />
              </span>
            </div>
          </Link>
        </li>
        <li>
          <Link href={PAYPAL_URL} target="_blank" passHref>
            <div className={styles.linkButton}>
              <span className={styles.mobileText}>Paypal</span>
              <span className={styles.desktopIcon}>
                <FontAwesomeIcon icon={["fab", "paypal"]} size="lg" />
              </span>
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
        <FontAwesomeIcon
          icon={isMenuOpen ? faXmark : faBars}
          className={`text-2xl ${styles.menuIcon}`}
        />
      </button>
      <ul className={`${isMenuOpen ? styles.active : ""}`}>
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
              <li>
                <Link href="/forms">Forms</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
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
          <Link href={"/donate"}>Donate</Link>
        </li>
        {renderIconsIfOnClient(isClient)}
      </ul>
    </nav>
  );
};

export default Navbar;
