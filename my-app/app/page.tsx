import Image from "next/image";
import CodeIcon from "@mui/icons-material/Code";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default function Home() {
  return (
    <div className="w-[100vw] h-[10vh] bg-gray-900 flex justify-evenly items-center gap-5">
      <div className="flex gap-8 justify-start">
        <CodeIcon
          className="text-white items-center"
          style={{ fontSize: "32px" }}
        />
        <h1 className="text-white">ECOMMERCE</h1>
        <p className="text-gray-400">Ангилал</p>
      </div>
      <div className="bg-gray-700 text-white">
        <input type="search" />
      </div>

      <div className="flex gap-8 justify-end">
        <FavoriteBorderIcon className="text-white" />
        <ShoppingCartIcon className=" text-white" />
        <button className="border border-blue-700 border-2 rounded-3xl hover:bg-blue-400">
          <p className="text-white">Нэвтрэх</p>
        </button>

        <button className="border border-blue-700 rounded-3xl bg-blue-600 hover:bg-blue-400">
          <p className="text-white">Бүртгүүлэх</p>
        </button>
      </div>
    </div>
  );
}
