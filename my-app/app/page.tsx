import { Linefont } from "next/font/google";
import { link } from "fs";
import Image from "next/image";

import CodeIcon from "@mui/icons-material/Code";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default function Home() {
  return (
  <>
      <div className="w-[100vw] h-[10vh] bg-gray-900 flex justify-evenly items-center gap-5 sticky top-0 z-10" >
      <div className="flex gap-8 justify-start">
        <CodeIcon
          className="text-white items-center"
          style={{ fontSize: "32px" }}/>
        
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
    
    <div className="w-[100vw]  flex">
      <div className="w-[15vw]   bg-black"></div>
      <div className="w-[70vw]   bg-white ">
        <div className="w-[70vw] h-[60vh] bg-blue-600/20 flex bg-cover pr-20 pl-20 relative">
          <Image
            className=""
            src={"/tom.png"}
            alt=""
            width={3000}
            height={500}
          ></Image>

          <div
            className="w-[10vw] h-[10vh] flex flex-col items-baseline-last absolute left-15 bottom-3 text-white font-bold">
            {" "}
            <h1>wildflower shirt</h1>
            <h1>120,000$</h1>
          </div>
        </div>
        <div className="w-[70vw]   bg-white my-10 mx-30 ">
          <div className="w-[70vw] h-[40vh] flex mx-17 gap-10">
            <div className=" w-[10vw] h-[35vh]flex flex-col ">
              {" "}
              <div className="w-[10vw] h-[30vh] border-2 rounded-2xl ">
                <Image
                  className="object-cover w-full h-full bg-center  bg-cover rounded-2xl"
                  src={"/magaz.png"}
                  alt=""
                  width={300}
                  height={1000}
                ></Image>
              </div>
              <h2>The Prompt Magazine </h2>{" "}
              <h2 className="font-bold">120,000$</h2>
            </div>
            <div className=" w-[10vw] h-[35vh]flex flex-col ">
              {" "}
              <div className="w-[10vw] h-[30vh] border-2 rounded-2xl">
                <Image
                  className="object-cover w-full h-full bg-center  bg-cover rounded-2xl"
                  src={"/1.png"}
                  alt=""
                  width={300}
                  height={1000}
                ></Image>{" "}
                <FavoriteBorderIcon className="  hover:text-red-600" />{" "}
              </div>
              <h2>Chunky Glyph tee</h2> <h2 className="font-bold">120,000$</h2>
            </div>
            <div className=" w-[10vw] h-[35vh]flex flex-col ">
              {" "}
              <div className="w-[10vw] h-[30vh] border-2 rounded-2xl">
                {" "}
                <Image
                  className="object-cover w-full h-full bg-center  bg-cover rounded-2xl"
                  src={"/sav.png.png"}
                  alt=""
                  width={300}
                  height={1000}
                ></Image>{" "}
              </div>
              <h2> All smiles Nalgene</h2>{" "}
              <h2 className="font-bold">120,000$</h2>
            </div>{" "}
            <div className=" w-[10vw] h-[35vh]flex flex-col ">
              {" "}
              <div className="w-[14vw] h-[30vh]">
                {" "}
                <div className="w-[10vw] h-[30vh] border-2 rounded-2xl">
                  <div className="w-[10vw] h-[30vh] border-2 rounded-2xl ">
                    <Image
                      className="object-cover w-full h-full bg-center  bg-cover rounded-2xl"
                      src={"/guy2.png.png"}
                      alt=""
                      width={300}
                      height={1000}
                    ></Image>
                  </div>
                </div>
                <h2>Wildflower Hoodie</h2>{" "}
                <h2 className="font-bold ">
                  108,000${" "}
                  <span className="line-through font-light text-gray-600 text-s">
                    120,000$
                  </span>{" "}
                  <span className="text-red-600">10%</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="w-[70vw] h-[40vh] flex ">
            <div className="w-[26vw] h-[40vh] flex gap-10 ml-17">
              <div className=" w-[10vw] h-[35vh]flex flex-col ">
                <div className="w-[10vw] h-[30vh] border-2 rounded-2xl">
                  {" "}
                  <Image
                    className="object-cover w-full h-full bg-center  bg-cover rounded-2xl"
                    src={"/ulbar.png"}
                    alt=""
                    width={300}
                    height={1000}
                  ></Image>{" "}
                </div>
                <h2> Inkibot Tee</h2> <h2 className="font-bold">120,000$</h2>
              </div>
              <div className=" w-[10vw] h-[35vh]flex flex-col ">
                <div className="w-[10vw] h-[30vh] border-2 rounded-2xl">
                  {" "}
                  <Image
                    className="object-cover w-full h-full bg-center  bg-cover rounded-2xl"
                    src={"/1.png"}
                    alt=""
                    width={300}
                    height={1000}
                  ></Image>{" "}
                </div>
                <h2> Gestures Longsleeve</h2>{" "}
                <h2 className="font-bold">120,000$</h2>
              </div>
            </div>
            <div className="w-[35vw] h-[40vh] ">
              <div className="w-[22vw] h-[60vh] border-2 rounded-2xl">
                <Image
                  className="object-cover w-full h-full bg-center  bg-cover rounded-2xl"
                  src={"/nalgai.png.png"}
                  alt=""
                  width={300}
                  height={1000}
                ></Image>
              </div>
              <h2>Chunky Glyph cap</h2> <h2 className="font-bold">120,000$</h2>
            </div>
          </div>
          <div>
            {" "}
            <div className="w-[70vw] h-[60vh] flex">
              <div className="w-[26vw] h-[40vh] ml-17">
                <div className="w-[22vw] h-[60vh] border-2 rounded-2xl">
                  {" "}
                  <Image
                  className="object-cover w-full h-full bg-center  bg-cover rounded-2xl"
                  src={"/M.png"}
                  alt=""
                  width={300}
                  height={1000}
                ></Image>
                </div>
                <h2>Local Styles Crewneck</h2>{" "}
                <h2 className="font-bold">120,000$</h2>
              </div>

              <div className="w-[26vw] h-[60vh] flex items-end-safe gap-10">
                {" "}
                <div className="flex flex-col">
                  <div className="w-[10vw] h-[30vh] border-2 rounded-2xl"><Image
                  className="object-cover w-full h-full bg-center  bg-cover rounded-2xl"
                  src={"/nalgai.png.png"}
                  alt=""
                  width={300}
                  height={1000}
                ></Image></div>
                  <h2>Chunky Glyph cap</h2>{" "}
                  <h2 className="font-bold">120,000$</h2>
                </div>
                <div>
                  <div className="w-[10vw] h-[30vh] border-2 rounded-2xl"><Image
                  className="object-cover w-full h-full bg-center  bg-cover rounded-2xl"
                  src={"/guy3.png"}
                  alt=""
                  width={300}
                  height={1000}
                ></Image></div>
                  <h2>Doodle Hoodie</h2> <h2 className="font-bold">120,000$</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[70vw] h-[40vh] flex mx-46   my-20 gap-10">
          <div className=" w-[10vw] h-[35vh]flex flex-col ">
            {" "}
            <div className="w-[10vw] h-[30vh] border-2 rounded-2xl ">
              <Image
                className="object-cover w-full h-full bg-center  bg-cover rounded-2xl"
                src={"/guy4.png"}
                alt=""
                width={300}
                height={1000}
              ></Image>
            </div>
            <h2> Chunky Glyph tee</h2>{" "}
            <h2 className="font-bold">120,000$</h2>
          </div>
          <div className=" w-[10vw] h-[35vh]flex flex-col ">
            {" "}
            <div className="w-[10vw] h-[30vh] border-2 rounded-2xl">
              {" "}
              <Image
                  className="object-cover w-full h-full bg-center  bg-cover rounded-2xl"
                  src={"/sav.png.png"}
                  alt=""
                  width={300}
                  height={1000}
                ></Image>
               {" "}
            </div>
            <h2>All Smiles Nalgene</h2> <h2 className="font-bold">120,000$</h2>
          </div>
          <div className=" w-[10vw] h-[35vh]flex flex-col ">
            {" "}
            <div className="w-[10vw] h-[30vh] border-2 rounded-2xl"><Image
                  className="object-cover w-full h-full bg-center  bg-cover rounded-2xl"
                  src={"/magaz.png"}
                  alt=""
                  width={300}
                  height={1000}
                ></Image></div>
            <h2> The Prompt Magazine</h2> <h2 className="font-bold">120,000$</h2>
          </div>{" "}
          <div className=" w-[10vw] h-[35vh]flex flex-col ">
            {" "}
            <div className="w-[14vw] h-[30vh]">
              {" "}
              <div className="w-[10vw] h-[30vh] border-2 rounded-2xl">
                <div className="w-[10vw] h-[30vh] border-2 rounded-2xl ">
                  <Image
                    className="object-cover w-full h-full bg-center  bg-cover rounded-2xl"
                    src={"/zguy5.png"}
                    alt=""
                    width={300}
                    height={1000}
                  ></Image>
                </div>
              </div>
              <h2>Independent Corners Tee</h2>{" "}
              <h2 className="font-bold ">120,000$ </h2>
            </div>
          </div>
        </div>
        <div className="w-[70vw] h-[40vh] flex mx-46  gap-10">
          <div className=" w-[10vw] h-[35vh]flex flex-col ">
            {" "}
            <div className="w-[10vw] h-[30vh] border-2 rounded-2xl ">
              <Image
                    className="object-cover w-full h-full bg-center  bg-cover rounded-2xl"
                    src={"/zguy5.png"}
                    alt=""
                    width={300}
                    height={1000}
                  ></Image>
            </div>
            <h2>Independent Corners Tee</h2>{" "}
            <h2 className="font-bold">120,000$</h2>
          </div>
          <div className=" w-[10vw] h-[35vh]flex flex-col ">
            {" "}
            <div className="w-[10vw] h-[30vh] border-2 rounded-2xl">
              <Image
                className="object-cover w-full h-full bg-center  bg-cover rounded-2xl"
                src={"/magaz.png"}
                alt=""
                width={300}
                height={1000}
              ></Image>{" "}
              <FavoriteBorderIcon className="  hover:text-red-600" />{" "}
            </div>
            <h2>The Prompt Magazine</h2> <h2 className="font-bold">120,000$</h2>
          </div>
          <div className=" w-[10vw] h-[35vh]flex flex-col ">
            {" "}
            <div className="w-[10vw] h-[30vh] border-2 rounded-2xl">
              {" "}
              <Image
                className="object-cover w-full h-full bg-center  bg-cover rounded-2xl"
                src={"/guy4.png"}
                alt=""
                width={300}
                height={1000}
              ></Image>{" "}
            </div>
            <h2> The Prompt Magazine</h2> <h2 className="font-bold">120,000$</h2>
          </div>{" "}
          <div className=" w-[10vw] h-[35vh]flex flex-col ">
            {" "}
            <div className="w-[14vw] h-[30vh]">
              {" "}
              <div className="w-[10vw] h-[30vh] border-2 rounded-2xl">
                <div className="w-[10vw] h-[30vh] border-2 rounded-2xl ">
                  <Image
                    className="object-cover w-full h-full bg-center  bg-cover rounded-2xl"
                    src={"/sav.png.png"}
                    alt=""
                    width={300}
                    height={1000}
                  ></Image>
                </div>
              </div>
              <h2>All smiles Nalgene</h2>{" "}
              <h2 className="font-bold ">
                120,000${" "}
               
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[15vw] h-[310vh] bg-black"></div>
      </div>
    </>
  );
}
