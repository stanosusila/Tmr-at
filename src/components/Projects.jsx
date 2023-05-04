import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import placeholderIMG from "../../public/assets/background.jpg";
import p1Img from "../../public/assets/IMG_4550.jpg";
import p2Img from "../../public/assets/IMG_6265.jpg";
import p3Img from "../../public/assets/IMG_7207done.jpeg";
import ProjectItem from "./ProjectItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase mb-4 text-2xl tracking-widest text-[#F33535] ">
          Renovácie
        </p>
        <Slider {...settings}>
          <ProjectItem
            title="CZ skoprion"
            backgroundImg={p1Img}
            projectUrl="/property"
            description="Kompletna renovacia"
          />
          <ProjectItem
            title="Jawa 69xd special"
            backgroundImg={p2Img}
            projectUrl="/property"
            description="Kompletna renovacia"
          />
          <ProjectItem
            title="xdxdxd"
            backgroundImg={p3Img}
            projectUrl="/property"
            description="Kompletna renovacia"
          />
          <ProjectItem
            title="BMW x5"
            backgroundImg={placeholderIMG}
            projectUrl="/property"
            description="Kompletna renovacia"
          />
        </Slider>
      </div>
    </div>

    /* <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-2xl tracking-widest text-[#5651e5] ">
          Renovácie
        </p>
        <h2 className="py-4">XDXD nieco si sem vymysli</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="CZ skoprion"
            backgroundImg={p1Img}
            projectUrl="/property"
            description="Kompletna renovacia"
          />
          <ProjectItem
            title="Jawa 69xd special"
            backgroundImg={p2Img}
            projectUrl="/property"
            description="Kompletna renovacia"
          />
          <ProjectItem
            title="xdxdxd"
            backgroundImg={p3Img}
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
    */
  );
};

export default Projects;
