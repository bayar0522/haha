import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[100vw] h-[5vh] bg-gray-900 flex justify-evenly items-center gap-5">
      <h1 className="text-white">ECOMMERCE</h1>
      <p className="text-gray-400">Ангилал</p>
      <button className="border border-blue-700 border-3 rounded-3xl bg-gray-900">
        <p className="text-white">Нэвтрэх</p>
      </button>
      <button className="border border-blue-700 rounded-3xl bg-blue-600">
        <p className="text-white">Бүртгүүлэх</p>
      </button>
    </div>
  );
}
