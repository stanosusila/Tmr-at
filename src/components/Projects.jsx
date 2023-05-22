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
    arrows: false,
  };

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase pt-6 mb-4 text-2xl md:text-3xl tracking-widest text-[#F33535] ">
          Renovácie
        </p>
        <div className="flex items-center justify-center">
          <Slider {...settings} className="md:w-full w-11/12 overflow-hidden">
            <ProjectItem
              title="Jawa 350"
              backgroundImg={p1Img}
              projectUrl="/property"
              description="1960"
            />
            <ProjectItem
              title="Jawa 250 typ 11"
              backgroundImg={p2Img}
              projectUrl="/property"
              description="1950"
            />
            <ProjectItem
              title="ČZ 150C"
              backgroundImg={p3Img}
              projectUrl="/property"
              description="1951"
            />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Projects;
