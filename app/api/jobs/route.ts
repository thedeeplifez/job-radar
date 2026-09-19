import { NextResponse } from "next/server";
import { mockJobs } from "@/lib/mock-data";

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      source: "mock",
      count: mockJobs.length,
      jobs: mockJobs,
    });
  } catch (error) {
    console.error("Error fetching jobs", error);
    return NextResponse.json(
      { success: false, error: "Unable to fetch jobs at this time." },
      { status: 500 },
    );
  }
}
