import Layout from "src/components/Layout";
import styles from "src/styles/home.module.css";
import Image from "next/image";

const imagesList = Array.from({ length: 4 }).map((_, i) => {
  const idx = i + 1;
  return (
    <Image
      key={`food-pantry-image-${idx}`}
      src={`/images/programs/food-pantry/food-pantry-${idx}.jpg`}
      alt={`food pantry image #${idx}`}
      width={"100"}
      height={"100"}
    />
  );
});

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

const neededItems = items.map((item) => {
  return <li key={item}>{item}</li>;
});

const SundaySchool = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <h2 style={{ textAlign: "center" }}>Tazkiah Food Pantry</h2>
        <div
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <p>
            Our Food Pantry helps people regardless of religion, race, or
            ethnicity. Our purpose is to do good for the Humanity starting with
            our own neighborhood. Quran 21:107 states, &ldquo;وَمَآ
            أَرْسَلْنَـٰكَ إِلَّا رَحْمَةًۭ لِّلْعَـٰلَمِينَ&rdquo;, meaning,
            “We sent you not, but as a mercy for the whole world.” Prophet
            Muhammad ﷺ was not only sent for Muslims, but for the whole world.
            Following in his footsteps we will do good for the community, and
            for Humanity.
          </p>

          {imagesList}
          <div
            className="food-pantry-child-container"
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
              padding: "2em",
            }}
          >
            <div
              className="food-pantry-items-needed"
              style={{
                padding: "2em",
              }}
            >
              <h2>Items Needed</h2>
              <ul>{neededItems}</ul>
            </div>
            <div className="food-pantry-items-needed">
              <h2>Food Pantry Hours</h2>
              <p>2nd & 4th Saturday of each month</p>
              <p>8:00am to 10:00am</p>
              <p>Contact: 407-421-9520</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default SundaySchool;
