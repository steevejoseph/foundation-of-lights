import { env } from "src/env";
import Link from "next/link";

const GOOGLE_CALENDAR_URL = env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL;

const CalendarPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link
          href="/events"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
        >
          <span>←</span> Back to Events
        </Link>
      </div>
      <h1 className="mb-6 text-3xl font-bold text-gray-900">Events Calendar</h1>
      <div className="overflow-hidden rounded-lg bg-white shadow-lg">
        <iframe
          src={GOOGLE_CALENDAR_URL}
          style={{ border: 0 }}
          width="100%"
          height="800"
          frameBorder="0"
          scrolling="no"
          title="Events Calendar"
        />
      </div>
    </div>
  );
};

export default CalendarPage;
