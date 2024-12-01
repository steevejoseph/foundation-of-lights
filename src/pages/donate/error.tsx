import { type NextPage } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const DonateErrorPage: NextPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white px-6 py-8 text-center shadow-md">
        <FontAwesomeIcon
          icon={faXmark}
          className="mx-auto mb-6 text-6xl text-red-500"
        />
        <h1 className="mb-4 text-2xl font-bold text-gray-900">Payment Error</h1>
        <p className="mb-8 text-gray-600">
          We encountered an issue processing your donation. Please try again or
          contact support if the problem persists.
        </p>
        <div className="space-y-4">
          <Link
            href="/donate"
            className="inline-block rounded-md bg-red-500 px-6 py-2 text-white transition-colors hover:bg-red-600"
          >
            Try Again
          </Link>
          <div>
            <Link
              href="/"
              className="inline-block text-gray-600 transition-colors hover:text-gray-800"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateErrorPage;
