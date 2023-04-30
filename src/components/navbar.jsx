import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoImg from "../../public/assets/logo.png";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <nav className="fixed w-full h-20 shadow-xl z-[100] bg-slate-50 ">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src={LogoImg} width={80} height={80} alt="logo" />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:scale-125 ease-in duration-300 hover:text-[#5651e5]">
                Domov
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:scale-125 ease-in duration-300 hover:text-[#5651e5]">
                O nás
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:scale-125 ease-in duration-300 hover:text-[#5651e5] ">
                Renovácie
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:scale-125 ease-in duration-300 hover:text-[#5651e5]">
                Kontakt
              </li>
            </Link>
          </ul>
          <div className="md:hidden" onClick={handleOpen}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={open ? "md:hidden fixed left-0 top-0 w-full h-screen" : ""}
      >
        <div
          className={
            open
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/assets/logo.png"
                width={80}
                height={80}
                alt="logo"
              />
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                onClick={handleOpen}
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-6">
              <p></p>
            </div>
          </div>
          <div className="flex flex-col py-4">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Domov</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">O nás</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Renovácie</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Kontakt</li>
              </Link>
            </ul>
            <div className="pt-40 ">
              <p className="uppercase tracking-widest text-[#5651e5] ">
                Spojte sa s nami
              </p>
              <div className=" flex items-center justify-between my-4 w-full sm:w-[80%] ">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaFacebookF />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaInstagram />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
