import { NextResponse } from "next/server";
import { mockProfile } from "@/lib/mock-data";
import { sanitizeText } from "@/lib/security";

export async function GET() {
  return NextResponse.json({ success: true, profile: mockProfile });
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();

    if (!body || typeof body !== "object") {
      return NextResponse.json({ success: false, error: "Invalid profile payload." }, { status: 400 });
    }

    const profile = {
      ...mockProfile,
      name: sanitizeText(String(body.name ?? mockProfile.name)),
      targetRole: sanitizeText(String(body.targetRole ?? mockProfile.targetRole)),
      locationPreference: sanitizeText(String(body.locationPreference ?? mockProfile.locationPreference)),
      currentLocation: sanitizeText(String(body.currentLocation ?? mockProfile.currentLocation)),
    };

    return NextResponse.json({ success: true, profile });
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON payload." }, { status: 400 });
  }
}
