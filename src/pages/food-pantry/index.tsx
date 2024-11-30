import Layout from "src/components/Layout";
import Image from "next/image";
import styles from "./food-pantry.module.css";

const items = [
  "Canned Fruits",
  "Packaged Hot and Cold Cereal",
  "Canned Vegetables",
  "Packaged Instant Oatmeal",
  "Peanut Butter",
  "Cooking Oil",
  "Sliced Bread",
  "Pancake Mix and Syrup",
  "Packaged Macaroni and Cheese",
  "Soap",
  "Toothpaste",
  "Toilet Paper",
];

const FoodPantry = () => {
  return (
    <Layout>
      <div className={styles.infoBanner}>
        <h2>Distribution Information</h2>
        <div className={styles.infoContent}>
          <p>
            <strong>When:</strong> 2nd & 4th Saturday of each month, 8:00am to
            10:00am
          </p>
          <p>
            <strong>Contact:</strong> 407-421-9520
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <h1 className={styles.title}>Tazkiah Food Pantry</h1>

        <div className={styles.mission}>
          <p>
            Our Food Pantry helps people regardless of religion, race, or
            ethnicity. Our purpose is to do good for the Humanity starting with
            our own neighborhood. Quran 21:107 states, &quot;وَمَآ
            أَرْسَلْنَـٰكَ إِلَّا رَحْمَةًۭ لِّلْعَـٰلَمِينَ&quot;, meaning,
            &quot;We sent you not, but as a mercy for the whole world.&quot;
            Prophet Muhammad ﷺ was not only sent for Muslims, but for the whole
            world. Following in his footsteps we will do good for the community,
            and for Humanity.
          </p>
        </div>

        <div className={styles.imageGrid}>
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className={styles.imageWrapper}>
              <Image
                src={`/images/programs/food-pantry/food-pantry-${num}.jpg`}
                alt={`Food pantry image ${num}`}
                width={300}
                height={300}
                className={styles.image}
              />
            </div>
          ))}
        </div>

        <div className={styles.infoSection}>
          <div className={`${styles.neededItems} ${styles.centered}`}>
            <h2>Items Needed</h2>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FoodPantry;
