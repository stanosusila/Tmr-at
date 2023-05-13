import React from "react";
import Image from "next/image";
import Link from "next/link";
import backgroundImg from "../../public/assets/perak.jpg";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaArrowCircleDown,
} from "react-icons/fa";

const Main = () => {
  return (
    <div
      id="main"
      className="w-full h-screen text-center bg-gray-950 bg-opacity-30"
    >
      <Image
        src={backgroundImg}
        alt="main"
        className="absolute z-[-1]"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />

      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center">
        <div>
          <p className="uppercase tracking-widest text-slate-50">
            ZACHRAŇUJEME MINULOSŤ PRE BUDÚCNOSŤ
          </p>
          <h1 className="text-5xl py-10 font-bold text-[#F33535] font-unbounded ">
            TMR <span className="font-dancing text-slate-50">ateliér</span>
          </h1>
          <p className="text-slate-50 text-lg py-4 max-w-[70%] m-auto">
            V našom ateliéri sa zameriavame na renováciu a obnovu historických
            vozidiel. Sme nadšenci do historických áut a motocyklov a naším
            cieľom je priniesť im nový život, zachovať ich unikátny charakter a
            históriu pre budúce generácie.
          </p>
          <div className=" flex items-center justify-between max-w-[330px] m-auto py-4 ">
            <div className="rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-125 ease-in duration-300 bg-slate-50">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-125 ease-in duration-300 bg-slate-50">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-125 ease-in duration-300 bg-slate-50">
              <FaFacebookF />
            </div>
            <div className="rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-125 ease-in duration-300 bg-slate-50">
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
