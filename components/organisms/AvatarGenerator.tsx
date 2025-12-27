"use client";

import { useState } from "react";
import Input from "../atoms/Input";
import AvatarImage from "../atoms/AvatarImage";
import { getAvatarUrl } from "@/lib/dicebear";

export default function AvatarGenerator() {
  const [seed, setSeed] = useState("");
  const [format, setFormat] = useState<"svg" | "png">("svg");

  const handleDownload = async () => {
    const url = getAvatarUrl(seed, format);

    const res = await fetch(url);
    const blob = await res.blob();

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${seed}.${format}`;
    link.click();

    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="space-y-6 flex flex-col items-center">
      {/* INPUT SEED */}
      <Input
        value={seed}
        onChange={(e) => setSeed(e.target.value)}
      />

      {/* TOGGLE FORMAT */}
      <div className="flex gap-4 relative z-20">
        <button
          type="button"
          onClick={() => setFormat("svg")}
          className={`px-4 py-1 border rounded ${
            format === "svg" ? "bg-black text-white" : "bg-white"
          }`}
        >
          SVG
        </button>

        <button
          type="button"
          onClick={() => setFormat("png")}
          className={`px-4 py-1 border rounded ${
            format === "png" ? "bg-black text-white" : "bg-white"
          }`}
        >
          PNG
        </button>
      </div>

      {/* AVATAR PREVIEW */}
      <AvatarImage src={getAvatarUrl(seed, format)} />

      {/* DOWNLOAD */}
      <button
        type="button"
        onClick={handleDownload}
        disabled={!seed}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        Download {format.toUpperCase()}
      </button>
    </div>
  );
}
