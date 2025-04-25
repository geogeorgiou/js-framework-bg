"use client";

import { Card } from "@/common/components/Card";
import { BackToSubscriptionsButton } from "@/common/features/subscriptions/components/BackToSubscriptionsButton";
import { DashboardShell } from "@/common/components/DashboardShell";
import { DashboardHeader } from "@/common/components/DashboardHeader";

export default function Error({ error }: { error: Error }) {
  console.log(error);
  return (
    <DashboardShell>
      <DashboardHeader
        heading={"Subscription Details"}
        text="View subscription information"
      />
      <Card className="max-w-[800px]">
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="mt-1 text-lg font-semibold">
                Unexpected error occured!
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
