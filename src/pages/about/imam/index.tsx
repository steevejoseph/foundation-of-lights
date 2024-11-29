import Layout from "src/components/Layout";

const Imam = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            Imam Ibrahim Habach
          </h1>
          <p className="text-lg text-gray-600">
            Religious Leader & Educational Director
          </p>
        </div>

        <div className="space-y-8">
          <section className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Objective
            </h2>
            <p className="leading-relaxed text-gray-600">
              Develop and enhance Islamic education and Quran meaning and
              memorization. Head the education committee.
            </p>
          </section>

          <section className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Education
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Hafez Quran with special authority to provide warrant endorsed
                by renowned Sheikhs going back by lineage to Sahaba-Al-Keram.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Bachelor Degree of Islamic legislation and Arabic Language
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Special Diploma of Quran and Hadith (references and research)
              </li>
            </ul>
          </section>

          <section className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Experience
            </h2>
            <div className="space-y-4">
              {[
                {
                  years: "2003-present",
                  title: "Founder, Imam, Director, Board Member",
                  org: "Foundation of Lights Masjidu Tazkia",
                  location: "Ocoee, FL",
                },
                {
                  years: "1994-2003",
                  title: "Imam, Teacher and Council Member",
                  org: "Islamic Society of Central Florida",
                  location: "Orlando, FL",
                  details:
                    "Established full time school and three new Masjids under the Umbrella of one organization",
                },
                {
                  years: "1991-1994",
                  title: "Teacher and Assistant Imam",
                  org: "Al-Rahma school, Al-Haq Masjed and Berlitz language center",
                  location: "Baltimore",
                },
                {
                  years: "1991-1993",
                  title: "Guest Imam",
                  org: "ISB",
                  details: "Led Taraweeh Prayer in Ramadan",
                },
                {
                  years: "1985-1990",
                  title: "Director",
                  org: "Quran Memorization Institute",
                  location: "Damascus, Syria",
                  details: "Graduated 20 new Hafez annually",
                },
                {
                  years: "1983-1990",
                  title: "Imam and Khateeb",
                  org: "Masjed Lala Basha",
                  details: "1500 Attendance",
                },
              ].map((exp, index) => (
                <div key={index} className="border-l-4 border-gray-200 pl-4">
                  <div className="font-medium text-gray-800">{exp.years}</div>
                  <div className="text-gray-700">{exp.title}</div>
                  <div className="text-gray-600">{exp.org}</div>
                  {exp.location && (
                    <div className="text-sm text-gray-500">{exp.location}</div>
                  )}
                  {exp.details && (
                    <div className="mt-1 text-sm text-gray-600">
                      {exp.details}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Imam;
