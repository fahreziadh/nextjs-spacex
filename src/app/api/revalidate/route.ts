import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest) => {
  const pathToRevalidate = req.nextUrl.searchParams.get("path");

  if (!pathToRevalidate) {
    return NextResponse.json(
      { revalidated: false, error: "No path provided" },
      { status: 400 }
    );
  }

  /* If the path is "*", revalidate the entire site */
  if (pathToRevalidate === "*") {
    revalidatePath("/", "layout");
    return NextResponse.json({ revalidated: true });
  }

  revalidatePath(pathToRevalidate);
  return NextResponse.json({ revalidated: true });
};
