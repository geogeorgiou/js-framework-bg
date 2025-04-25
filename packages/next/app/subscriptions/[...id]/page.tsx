import { DashboardShell } from "@/common/components/DashboardShell";
import { DashboardHeader } from "@/common/components/DashboardHeader";
import { Card } from "@/common/components/Card";
import { format } from "date-fns";
import { BackToSubscriptionsButton } from "@/common/features/subscriptions/components/BackToSubscriptionsButton";
import { notFound } from "next/navigation";

interface Subscription {
  id: string;
  firstName: string;
  lastName: string;
  cost: string;
  untilDate: string;
}

const baseUrl = "http://localhost:3000";

// const isNumber = (value: string) => {
//   return !isNaN(Number(value));
// };

const getSubscription = async (id: string) => {
  const res = await fetch(`${baseUrl}/api/subscriptions/${id}`, {
    method: "GET",
  });

  if (!res.ok) return undefined;

  return res.json() as Promise<Subscription>;
};

export default async function SubscriptionDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const subscription = await getSubscription(id);

  const heading = `Subscription Details - ${id}`;

  if (!subscription) {
    notFound();
  }

  return (
    <DashboardShell>
      <DashboardHeader heading={heading} text="View subscription information" />
      <Card className="max-w-[800px]">
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">First Name</h3>
              <p className="mt-1 text-lg font-semibold">
                {subscription.firstName}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Last Name</h3>
              <p className="mt-1 text-lg font-semibold">
                {subscription.lastName}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Cost</h3>
              <p className="mt-1 text-lg font-semibold">${subscription.cost}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">End Date</h3>
              <p className="mt-1 text-lg font-semibold">
                {format(new Date(subscription.untilDate), "PPP")}
              </p>
            </div>
          </div>
        </div>
      </Card>
      <div className="mt-4">
        <BackToSubscriptionsButton />
      </div>
    </DashboardShell>
  );
}
