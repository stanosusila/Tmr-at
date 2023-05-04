import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, backgroundImg, projectUrl, description }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-black hover:bg-opacity-75">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="main"
        style={{
          objectFit: "cover",
          width: "40rem",
          height: "30rem",
        }}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div>
          <h3 className="text-white text-2xl tracking-wider text-center">
            {title}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">{description}</p>
        </div>
        <div className="">
          <Link href={projectUrl}>
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              Viac
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
