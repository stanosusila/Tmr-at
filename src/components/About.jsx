import React from "react";
import Image from "next/image";
import aboutImg from "../../public/assets/black.jpg";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-2xl mb-4 tracking-widest text-[#F33535] ">
            O nás
          </p>
          <p className="py-2 text-gray-600 text-lg">
            V našej dielni ponúkame odbornosť a zručnosti ktoré sú potrebné na
            kvalitnú renováciu vozidiel. Vďaka moderným technológiám a tradičným
            postupom dokážeme priniesť vozidlám z minulosti nový život a
            zachovať ich charakter pre budúcnosť.
          </p>

          <p className="py-2 text-lg text-gray-600">
            Zároveň sa snažíme ponúkať jedinečné zážitky a zabezpečiť, aby
            vozidlá boli nielen kultúrnymi artefaktmi, ale aj funkčnými
            vozidlami na cestách. Sme hrdí na našu prácu a veríme, že vás zaujmú
            naše služby.
          </p>
        </div>
        <div className=" flex items-center justify-center hover:scale-105 ease-in duration-300">
          <Image
            src={aboutImg}
            width={300}
            height={300}
            alt="main"
            className=""
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
