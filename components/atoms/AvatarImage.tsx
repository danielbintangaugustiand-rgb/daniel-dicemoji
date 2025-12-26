export default function AvatarImage({ src }: { src: string }) {
  return (
    <div className="w-40 h-40 border rounded overflow-hidden pointer-events-none">
      <img
        src={src}
        alt="Avatar"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
