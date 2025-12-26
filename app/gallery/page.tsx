import AvatarGenerator from "@/components/organisms/AvatarGenerator";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-center mb-6">
          Dicemoji Creator 🎨
        </h1>

        <AvatarGenerator />
      </div>
    </main>
  );
}
