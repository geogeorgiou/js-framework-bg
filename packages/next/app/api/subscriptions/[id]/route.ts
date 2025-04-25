import { NextResponse } from "next/server";

const isNumber = (value: string) => {
  return !isNaN(Number(value));
};

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!isNumber(id)) {
      return NextResponse.json(
        { error: "Subscription not found" },
        { status: 404 }
      );
    }

    if (id === "123") {
      return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
    }

    // In a real app, you would fetch from your database here
    // For now, we'll return mock data
    return NextResponse.json({
      id,
      firstName: "John",
      lastName: "Doe",
      cost: "29.99",
      untilDate: "2024-12-31",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Subscription not found" },
      { status: 404 }
    );
  }
}
