import Link from "next/link";
import Layout from "src/components/Layout";
import { PAYPAL_URL } from "src/components/Navbar";

const Donate = () => {
  return (
    <Layout>
      <div
        className="donate-container"
        style={{
          //   flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <h2>Donations</h2>
        <p>
          Masjid Tazkiah relies on community donations to cover operation costs,
          maintenance costs, and ongoing improvements to the building.
          InshaAllah, we would like to create an improved and expanded
          functional spaces to meet the needs of our growing community. May
          Allah (SWT) reward you for your generous donations! Please make check
          payable to Foundation of lights Inc. Donations can be placed in the
          Masjid donation box or can be given directly or can be charged on
          credit card machine located inside the masjid. You can also mail your
          donation to Foundation of lights Inc. directly: Foundation of Lights
          120 Floral St. Ocoee, FL 34761 May Allah reward you for your kindness
          and support. JazakAllahu Khayran! “Giving away something in charity
          does not cause any decrease in a person’s wealth, but increases it
          instead. The person who adopts humility for the sake of Allah is
          exalted in ranks by Him.” (Sahih Muslim)
        </p>
        <button className="rounded border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white">
          <Link href={PAYPAL_URL} target="_blank">
            Donate using Paypal
          </Link>
        </button>
      </div>
    </Layout>
  );
};

export default Donate;
