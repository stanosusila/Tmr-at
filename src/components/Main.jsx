import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <Image
        src="/../public/assets/background.jpg"
        layout="fill"
        objectFit="cover"
        alt="main"
        className="absolute z-[-1]"
      />

      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center bg-gray-950 bg-opacity-20">
        <div className="">
          <p className="uppercase text-sm tracking-widest text-slate-300">
            Xd zrestaurujte s nami motorku xdxd daco take
          </p>
          <h1 className="text-4xl font-bold py-4 text-slate-200 ">
            Vitajte v <span className=" text-[#5651e5] ">RTM</span>
          </h1>
          <p className="text-slate-200 py-4 max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quae voluptates voluptate quod
            voluptatibus quos doloribus quidem voluptas. Quisquam voluptatum,
            quibusdam, quia, quae voluptates voluptate quod voluptatibus quos
          </p>
          <div className=" flex items-center justify-between max-w-[330px] m-auto py-4 ">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-slate-50">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-slate-50">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-slate-50">
              <FaFacebookF />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-slate-50">
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
