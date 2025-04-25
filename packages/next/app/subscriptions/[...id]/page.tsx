import { DashboardShell } from "@/common/components/DashboardShell";
import { DashboardHeader } from "@/common/components/DashboardHeader";
import { Card } from "@/common/components/Card";
import { format } from "date-fns";
import { BackToSubscriptionsButton } from "@/common/features/subscriptions/components/BackToSubscriptionsButton";
import { notFound } from "next/navigation";
import { RESPONSE_STATUS } from "@/common/constants";

interface Subscription {
  id: string;
  firstName: string;
  lastName: string;
  cost: string;
  untilDate: string;
}

const baseUrl = "http://localhost:3000";

type SubscriptionResponse = {
  data: Subscription | undefined;
  status: number;
};

const getSubscription = async (id: string): Promise<SubscriptionResponse> => {
  const res = await fetch(`${baseUrl}/api/subscriptions/${id}`, {
    method: "GET",
  });

  return {
    data: (await res.json()) as Subscription | undefined,
    status: res.status,
  };
};

export default async function SubscriptionDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: subscription, status } = await getSubscription(id);

  const heading = `Subscription Details - ${id}`;

  if (status === RESPONSE_STATUS.NOT_FOUND) {
    notFound();
  }

  if (!subscription || status === RESPONSE_STATUS.INTERNAL_SERVER_ERROR) {
    throw new Error("Internal Server Error");
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
