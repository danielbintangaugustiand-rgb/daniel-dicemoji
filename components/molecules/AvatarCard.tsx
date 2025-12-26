import Link from "next/link";
import AvatarImage from "../atoms/AvatarImage";
import { getAvatarUrl } from "@/lib/dicebear";

export default function AvatarCard({ seed }: { seed: string }) {
  return (
    <Link href={`/avatar/${seed}`}>
      <div className="border p-4 rounded hover:shadow cursor-pointer">
        <AvatarImage src={getAvatarUrl(seed)} />
        <p className="text-center mt-2">{seed}</p>
      </div>
    </Link>
  );
}
