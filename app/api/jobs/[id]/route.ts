import { NextResponse } from "next/server";
import { mockJobs } from "@/lib/mock-data";
import { isValidHttpUrl } from "@/lib/security";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const job = mockJobs.find((item) => item.id === id);

    if (!job) {
      return NextResponse.json({ success: false, error: "Job not found." }, { status: 404 });
    }

    if (job.applicationUrl && !isValidHttpUrl(job.applicationUrl)) {
      return NextResponse.json({ success: false, error: "Job application URL is invalid." }, { status: 400 });
    }

    return NextResponse.json({ success: true, job });
  } catch {
    return NextResponse.json({ success: false, error: "Unable to load job details." }, { status: 500 });
  }
}
