import Layout from "src/components/Layout";

const Masjid = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            Welcome to Masjid Tazkiah
          </h1>
          <p className="text-lg text-gray-600">
            A spiritual sanctuary in the heart of Ocoee, Florida
          </p>
        </div>

        <div className="space-y-12">
          <section className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Our History
            </h2>
            <p className="leading-relaxed text-gray-600">
              Masjid Tazkiah, a beautiful masjid nestled in the heart of Ocoee,
              Florida, has been a spiritual haven for the past 19 years,
              Alhamdulillah. The journey to establish this serene sanctuary was
              not without its challenges. It all began with a blessed idea that
              led to the incorporation of Foundation of Lights Inc. as a
              nonprofit organization in the State of Florida on November 17,
              2003. <br />
              <br />
              About a year later, on September 22, 2004, the organization
              acquired the historic United Oak Methodist Church building,
              located at 120 Floral Street in Ocoee, Florida, and meticulously
              transformed it into a masjid that radiates peace and tranquility.
              As word of the new establishment spread, many members of the
              community, near and far, were drawn to Masjid Al Tazkiah, and by
              the grace of Allah, the congregation grew steadily. <br />
              <br />
              To ensure the masjid’s continued success and smooth operations, a
              constant flow of funds was necessary. On November 17, 2005, the
              Internal Revenue Service graciously granted the organization a
              501(c)(3) tax-exempt status, making all donations tax deductible
              and encouraging increased support. In a noble effort to create a
              verdant, inviting oasis for worshippers, the organization acquired
              the property and land at 102 Floral Street on November 10, 2008.
              With the influx of devoted community members, additional space was
              needed to accommodate the growing congregation. Acknowledging
              this, the organization purchased 137 S Cumberland Avenue on
              November 21, 2011. <br />
              <br />
              Today, the Masjid is not only a place of worship but also a beacon
              of hope and support for those in need. A Food Pantry operates on
              the premises, generously providing sustenance to low-income and
              needy families in the community regardless of their religions,
              race and ethnicity. The story of Masjid Al Tazkiah is a testament
              to the power of faith, unity, and perseverance in the face of
              challenges, all under the watchful eyes of Allah.
            </p>
          </section>

          <section className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Our Mission
            </h2>
            <p className="leading-relaxed text-gray-600">
              Our mission is to promote the teaching of Islam as a source of
              guidance, wisdom, and compassion for individuals and communities.
              We strive to educate, empower, and uplift people through the
              principles of Islam, morality, and social responsibilities. Our
              objective is to seek the glory of Allah (SWT), our Prophet
              Muhammad (Peace be upon him), and the Quran and Sunnah.
            </p>
          </section>

          <section className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Our Vision
            </h2>
            <p className="leading-relaxed text-gray-600">
              Our vision is to convey a clear perception and understanding of
              Islamic teachings to both Muslims and non-Muslims. Our spiritual
              vision is to pursue faith, knowledge, and righteousness in a
              peaceful and caring environment. <br /> <br />
            </p>
            <div className="mt-4">
              <h3 className="mb-3 text-lg font-medium text-gray-800">
                We strive to be:
              </h3>
              <ol className="list-inside list-decimal space-y-2 text-gray-600">
                <li>
                  A secure and comfortable facility where Muslims gather for the
                  worship of Allah, regardless of race, nationality, ethnicity,
                  gender, or age. <br />
                </li>
                <li>
                  A facility that serves and interacts with Muslim and
                  non-Muslim communities in accordance with the teachings of
                  Islam. <br />
                </li>
                <li>
                  An organization where charitable causes are supported. <br />
                </li>
                <li>
                  An interfaith place that provides a venue for members of
                  different faiths to interact in a peaceful and harmonious
                  atmosphere
                </li>
              </ol>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Masjid;
