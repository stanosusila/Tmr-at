import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import placeholderIMG from "../../public/assets/background.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5] ">
          Renovácie
        </p>
        <h2 className="py-4">XDXD nieco si sem vymysli</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="CZ skoprion"
            backgroundImg={placeholderIMG}
            projectUrl="/property"
            description="Kompletna renovacia"
          />
          <ProjectItem
            title="Jawa 69xd special"
            backgroundImg={placeholderIMG}
            projectUrl="/property"
            description="Kompletna renovacia"
          />
          <ProjectItem
            title="xdxdxd"
            backgroundImg={placeholderIMG}
            projectUrl="/property"
            description="Kompletna renovacia"
          />
          <ProjectItem
            title="BMW x5"
            backgroundImg={placeholderIMG}
            projectUrl="/property"
            description="Kompletna renovacia"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
