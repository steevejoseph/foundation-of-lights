import { type NextPage } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { type OrderResponse } from "src/components/forms/donation/types";
type Payer = OrderResponse["payer"];

const DonateSuccessPage: NextPage = () => {
  const router = useRouter();

  const { transactionId, status, payer } = router.query;

  const parsedPayer = payer ? (JSON.parse(payer as string) as Payer) : null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white px-6 py-8 text-center shadow-md">
        <FontAwesomeIcon
          icon={faCircleCheck}
          className="mx-auto mb-6 text-6xl text-green-500"
        />
        <h1 className="mb-4 text-2xl font-bold text-gray-900">
          Thank You {parsedPayer?.name.given_name} for Your Donation!
        </h1>
        <p className="mb-8 text-gray-600">
          Your payment was processed successfully. We truly appreciate your
          support!
        </p>
        {transactionId && (
          <p className="mb-8 text-gray-600">Transaction ID: {transactionId}</p>
        )}

        {status && (
          <p className="mb-8 text-gray-600">Transaction Status: {status}</p>
        )}

        <Link
          href="/"
          className="inline-block rounded-md bg-green-500 px-6 py-2 text-white transition-colors hover:bg-green-600"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default DonateSuccessPage;
