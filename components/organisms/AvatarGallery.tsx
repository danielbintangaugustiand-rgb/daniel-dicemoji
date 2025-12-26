"use client";

import { useEffect, useState } from "react";
import { getAvatarUrl } from "@/lib/dicebear";

export default function AvatarGallery() {
  const [avatars, setAvatars] = useState<string[]>([]);

  // ⬇️ RANDOM HARUS DI SINI (BUKAN DI JSX)
  useEffect(() => {
    const generated = Array.from({ length: 18 }, () =>
      getAvatarUrl(crypto.randomUUID(), "svg")
    );

    setAvatars(generated);
  }, []);

  // cegah hydration mismatch
  if (avatars.length === 0) return null;

  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold mb-4">
        Gallery Avatar
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {avatars.map((url, i) => (
          <div
            key={i}
            className="border rounded-lg p-2 hover:shadow-md transition"
          >
            <img
              src={url}
              alt="Random Avatar"
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
