import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get("path");

  if (!path) {
    return new NextResponse("Missing file path", { status: 400 });
  }

  const fileUrl = `https://biomedical.edu.np${path}`;


  const response = await fetch(fileUrl);
  if (!response.ok) {
    return new NextResponse("Failed to fetch file", { status: 500 });
  }

  const buffer = await response.arrayBuffer();
  const filename = path.split("/").pop();

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}
