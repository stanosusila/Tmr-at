import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoImg from "../../public/assets/logo_transparent.png";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] bg-slate-50 "
          : "fixed w-full h-20 z-[100] bg-slate-50 "
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="flex items-center">
          <Image
            src={LogoImg}
            width={80}
            height={80}
            alt="logo"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            className="user-select-none"
          />
          <p className="ml-4 text-xl font-bold font-unbounded">
            TMR <span className="font-dancing">ateliér</span>
          </p>
        </div>

        <div>
          <ul className="hidden md:flex font-bold">
            <Link href="/#main" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:scale-125 ease-in duration-300 hover:text-[#5651e5]">
                Domov
              </li>
            </Link>
            <Link href="/#about" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:scale-125 ease-in duration-300 hover:text-[#5651e5]">
                O nás
              </li>
            </Link>
            <Link href="/#projects" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:scale-125 ease-in duration-300 hover:text-[#5651e5] ">
                Renovácie
              </li>
            </Link>
            <Link href="/#contact" scroll={false}>
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
                src={LogoImg}
                width={80}
                height={80}
                alt="logo"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
                className="user-select-none"
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
              <Link href="/#main" scroll={false} onClick={handleOpen}>
                <li className="py-4 text-sm">Domov</li>
              </Link>
              <Link href="/#about" scroll={false} onClick={handleOpen}>
                <li className="py-4 text-sm">O nás</li>
              </Link>
              <Link href="/#projects" scroll={false} onClick={handleOpen}>
                <li className="py-4 text-sm">Renovácie</li>
              </Link>
              <Link href="/#contact" scroll={false} onClick={handleOpen}>
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
                  <Link href="mailto: info@tmratelier.sk">
                    <AiOutlineMail />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaFacebookF />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://www.instagram.com/tmrrestorations/">
                    <FaInstagram />
                  </Link>
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
