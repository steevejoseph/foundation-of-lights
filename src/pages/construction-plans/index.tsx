import Layout from "src/components/Layout";
import Image from "next/image";
import styles from "./construction-plans.module.css";
import { useState } from "react";

const images = [
  "/images/construction/plan1.jpg",
  "/images/construction/plan2.jpg",
  "/images/construction/plan3.jpg",
  // Add more image paths as needed
];

const ConstructionPlans = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Expansion of Masjid al-Tazkiah</h1>

        <div className={styles.carouselContainer}>
          <button
            onClick={prevImage}
            className={`${styles.carouselButton} ${styles.prev}`}
          >
            &#8249;
          </button>
          <div className={styles.imageWrapper}>
            <Image
              src={images[currentImage]}
              alt={`Construction plan ${currentImage + 1}`}
              width={800}
              height={500}
              className={styles.carouselImage}
            />
          </div>
          <button
            onClick={nextImage}
            className={`${styles.carouselButton} ${styles.next}`}
          >
            &#8250;
          </button>
        </div>

        <div className={styles.content}>
          <p>
            Masjid al-Tazkiah has been proudly serving this community for 24
            years. With the growing community, we have long hoped to expand the
            Masjid to prevent overcrowding. In addition, the expansion would
            allow us to add more space for individuals to offer their prayers.
          </p>
          <p>
            Alhamdulillah, with the help of Allah, your donations have allowed
            us to start the expansion project. We kindly request the community
            to help us to continue and complete this project.
          </p>
          <p>
            By donating right now, you will receive the reward of a house in
            paradise. We appreciate the generous donation and we look forward to
            continue and completing this project soon. May Allah(SWT) reward you
            enormously.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ConstructionPlans;
