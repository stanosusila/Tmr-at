import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5] ">
            O nás
          </p>
          <h2 className="py-4">XDXD nieco si sem vymysli</h2>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quae voluptates voluptate quod
            voluptatibus quos doloribus quidem voluptas. Quisquam voluptatum,
            quibusdam, quia, quae voluptates voluptate quod voluptatibus quos
          </p>

          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quae voluptates voluptate quod
            voluptatibus quos doloribus quidem voluptas. Quisquam voluptatum,
            quibusdam, quia, quae voluptates voluptate quod voluptatibus quos
          </p>
        </div>
        <div className=" flex items-center justify-center hover:scale-105 ease-in duration-300">
          <Image
            src="/../public/assets/logo.png"
            width={200}
            height={200}
            alt="main"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
