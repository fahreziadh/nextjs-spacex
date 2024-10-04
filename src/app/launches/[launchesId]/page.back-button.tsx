"use client"

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      style={{ marginTop:"12px", marginBottom:"12px", "padding":"4px 14px 4px 14px", cursor:"pointer" }}
    >
      Back
    </button>
  );
}