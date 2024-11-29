import Layout from "src/components/Layout";
import Image from "next/image";
import styles from "./events.module.css";
import { type GetStaticProps } from "next";
import fs from "fs";
import path from "path";

interface EventsProps {
  currentEvents: string[];
  pastEvents: string[];
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const eventsDirectory = path.join(process.cwd(), "public/images/events");
    const pastEventsDirectory = path.join(
      process.cwd(),
      "public/images/events/past_events",
    );

    // Check if directories exist
    const hasEventsDir = fs.existsSync(eventsDirectory);
    const hasPastEventsDir = fs.existsSync(pastEventsDirectory);

    // Read current events
    const currentEvents = hasEventsDir
      ? fs.readdirSync(eventsDirectory).filter((file) => {
          const isImage = /\.(jpg|jpeg|png)$/i.test(file);
          const isNotPastEventsDir = file !== "past_events";
          return isImage && isNotPastEventsDir;
        })
      : [];

    // Read past events
    const pastEvents = hasPastEventsDir
      ? fs
          .readdirSync(pastEventsDirectory)
          .filter((file) => /\.(jpg|jpeg|png)$/i.test(file))
      : [];

    return {
      props: {
        currentEvents,
        pastEvents,
      },
    };
  } catch (error) {
    console.error("Error reading event directories:", error);
    return {
      props: {
        currentEvents: [],
        pastEvents: [],
      },
    };
  }
};

const Events = ({ currentEvents, pastEvents }: EventsProps) => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.calendarLink}>
          <a href="/events/calendar">View Events Calendar →</a>
        </div>
        <section className={styles.currentEvents}>
          <h2 className={styles.sectionTitle}>Current Events</h2>
          <div className={styles.eventGrid}>
            {currentEvents.map((event, index) => (
              <div key={event} className={styles.eventCard}>
                <Image
                  src={`/images/events/${event}`}
                  alt={`Current Event ${index + 1}`}
                  width={800}
                  height={500}
                  className={styles.currentEventImage}
                />
              </div>
            ))}
          </div>
        </section>

        <section className={styles.pastEvents}>
          <h2 className={styles.sectionTitle}>Past Events</h2>
          <div className={styles.pastEventGrid}>
            {pastEvents.map((event, index) => (
              <div key={event} className={styles.pastEventCard}>
                <Image
                  src={`/images/events/past_events/${event}`}
                  alt={`Past Event ${index + 1}`}
                  width={400}
                  height={300}
                  className={styles.pastEventImage}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Events;
