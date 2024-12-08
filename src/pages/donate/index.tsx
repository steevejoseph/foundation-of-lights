import Layout from "src/components/Layout";
import DonationForm from "src/components/forms/donation/donation-form";

const Donate = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
          Support Our Masjid
        </h2>
        <div className="prose prose-lg mx-auto mb-12 leading-relaxed text-gray-600">
          <p>
            Masjid Tazkiah relies on community donations to cover operation
            costs, maintenance costs, and ongoing improvements to the building.
            InshaAllah, we would like to create an improved and expanded
            functional spaces to meet the needs of our growing community.
          </p>

          <p className="mt-4">
            May Allah (SWT) reward you for your generous donations!
          </p>

          <div className="mt-8 rounded-lg bg-gray-50 p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold">Ways to Donate</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Make checks payable to: Foundation of lights Inc.</li>
              <li>Use the donation box inside the Masjid</li>
              <li>Credit card payments available inside the Masjid</li>
              <li>
                Mail donations to:
                <br />
                Foundation of Lights
                <br />
                120 Floral St.
                <br />
                Ocoee, FL 34761
              </li>
            </ul>
          </div>

          <blockquote className="my-8 border-l-4 border-green-500 pl-4 italic text-gray-700">
            &quot;Giving away something in charity does not cause any decrease
            in a person&apos;s wealth, but increases it instead. The person who
            adopts humility for the sake of Allah is exalted in ranks by
            Him.&quot;
            <span className="text-sm">(Sahih Muslim)</span>
          </blockquote>
        </div>

        <div className="text-center">
          <DonationForm />
        </div>
      </div>
    </Layout>
  );
};

export default Donate;
