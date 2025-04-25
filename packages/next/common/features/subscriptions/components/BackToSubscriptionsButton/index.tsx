import Link from "next/link";

export const BackToSubscriptionsButton = () => {
  return (
    <Link
      href="/subscriptions"
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
    >
      Back to Subscriptions
    </Link>
  );
};
