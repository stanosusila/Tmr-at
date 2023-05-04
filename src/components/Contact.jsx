import React from "react";
import Image from "next/image";
import Link from "next/link";
import placeholderIMG from "../../public/assets/background.jpg";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="uppercase text-2xl md:text-3xl tracking-widest text-[#F33535] mb-4">
          Kontakt
        </p>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full flex flex-col">
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d517.6580093341727!2d18.489385718018035!3d48.80599019617406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714c3d5d923e99d%3A0x16b8515e4b2202f8!2sTMR%20Ateli%C3%A9r!5e0!3m2!1sen!2ssk!4v1683200253019!5m2!1sen!2ssk"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>

                {/*<Image
                  src={placeholderIMG}
                  alt="contact"
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                />*/}
              </div>
              <div>
                <h2 className="py-4 text-2xl">Adresa:</h2>
                <div className="font-bold flex flex-col items-center justify-center">
                  <p className="my-1">Kostolná Ves 334</p>
                  <p className="my-1">972 26 Nitrianske Rudno</p>
                  <p className="my-1">Radovan Trepáč</p>
                  <p className="my-1">0948 955 389</p>
                </div>
              </div>
              <div className="mt-auto">
                <p className="uppercase pt-8">Spojte sa s nami</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-125 ease-in duration-300 bg-slate-50">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-125 ease-in duration-300 bg-slate-50">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-125 ease-in duration-300 bg-slate-50">
                    <FaFacebookF />
                  </div>
                  <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-125 ease-in duration-300 bg-slate-50">
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Meno</label>
                  <input
                    type="text"
                    className="border-2 border-gray-300 rounded-lg p-3"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    type="email"
                    className="border-2 flex border-gray-300 rounded-lg p-3"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Správa</label>
                  <textarea
                    type="text"
                    className="border-2 border-gray-300 rounded-lg p-3 "
                    rows={10}
                  />
                </div>
                <button className="w-full mt-4 p-4 text-gray-100 bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                  Odoslať
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="">
            <div className="rounded-full shadow-lg shadow-black p-4 cursor-pointer hover:scale-125 ease-in duration-300 bg-slate-50">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
