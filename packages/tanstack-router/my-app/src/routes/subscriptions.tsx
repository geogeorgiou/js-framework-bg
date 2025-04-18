import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "../components/DashboardShell";
import { DashboardHeader } from "../components/DashboardHeader";
import { Card } from "../components/Card";
import { useForm } from "react-hook-form";
import { cn } from "../lib/utils";
import { Input } from "../components/ui/input";

type FormData = {
  firstName: string;
  lastName: string;
  cost: string;
};

export const Route = createFileRoute("/subscriptions")({
  component: SubscriptionsRoute,
});

function SubscriptionsRoute() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Here you would typically send the data to your API
    console.log("Form submitted:", data);
  };

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Create Subscription"
        text="Add a new subscription to your system"
      />
      <Card>
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm font-medium">
              First Name
            </label>
            <Input
              id="firstName"
              className={cn(errors.firstName && "border-red-500")}
              {...register("firstName", { required: "First name is required" })}
            />
            {errors.firstName && (
              <p className="text-sm text-red-500">{errors.firstName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm font-medium">
              Last Name
            </label>
            <Input
              id="lastName"
              className={cn(errors.lastName && "border-red-500")}
              {...register("lastName", { required: "Last name is required" })}
            />
            {errors.lastName && (
              <p className="text-sm text-red-500">{errors.lastName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="cost" className="text-sm font-medium">
              Cost
            </label>
            <Input
              id="cost"
              type="number"
              className={cn(errors.cost && "border-red-500")}
              {...register("cost", {
                required: "Cost is required",
                pattern: {
                  value: /^\d*\.?\d+$/,
                  message: "Please enter a valid number",
                },
              })}
              min="0"
              step="0.01"
            />
            {errors.cost && (
              <p className="text-sm text-red-500">{errors.cost.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Create Subscription
          </button>
        </form>
      </Card>
    </DashboardShell>
  );
}
