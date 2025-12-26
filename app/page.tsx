import AvatarGenerator from "@/components/organisms/AvatarGenerator";
import AvatarGallery from "@/components/organisms/AvatarGallery";

export default function Home() {
  return (
    <main className="p-8 space-y-10">
      <h1 className="text-2xl font-bold">
        TEST KEGANTENGAN DAN KECANTIKAN
      </h1>

      {/* AVATAR GENERATOR */}
      <AvatarGenerator />

      {/* AVATAR GALLERY */}
      <AvatarGallery />
    </main>
  );
}

