import { Card } from "@/components/Card";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardShell } from "@/components/DashboardShell";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: DashboardRoute,
});

function DashboardRoute() {
  return (
    <DashboardShell className=" bg-[#282c34] h-screen">
      <DashboardHeader heading="Dashboard" text="Welcome to your dashboard" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <div className="p-6">
            <h3 className="text-2xl font-bold">Total Revenue</h3>
            <p className="text-4xl font-bold">$45,231.89</p>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </div>
        </Card>
        <Card>
          <div className="p-6">
            <h3 className="text-2xl font-bold">Subscriptions</h3>
            <p className="text-4xl font-bold">+2350</p>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </div>
        </Card>
        <Card>
          <div className="p-6">
            <h3 className="text-2xl font-bold">Sales</h3>
            <p className="text-4xl font-bold">+12,234</p>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </div>
        </Card>
        <Card>
          <div className="p-6">
            <h3 className="text-2xl font-bold">Active Now</h3>
            <p className="text-4xl font-bold">+573</p>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </div>
        </Card>
      </div>
    </DashboardShell>
  );
}
