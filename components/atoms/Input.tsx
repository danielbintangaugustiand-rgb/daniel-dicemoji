type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ value, onChange }: Props) {
  return (
 <input
  value={value}
  onChange={onChange}
  placeholder="Masukkan nama / seed"
  className="border px-3 py-2 rounded w-full text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

  );
}
