import Image from "next/image";
import React from "react";

interface propsType {
  img: string;
  title: string;
  desc: string;
}

const ServicesCard: React.FC<propsType> = ({ img, title, desc }) => {
  return (
    <div>
      <div className="space-y-3 text-center">
        <Image
          className="mx-auto"
          src={img}
          width={70}
          height={70}
          alt={title}
        />
        <div className="uppercase">
          {title}
          <div className="flex gap-2 w-fit mx-auto mt-2">
            <div className="bg-accent w-[7px] h-[7px] rounded-full" />
            <div className="bg-accent w-[7px] h-[7px] rounded-full" />
            <div className="bg-accent w-[7px] h-[7px] rounded-full" />
          </div>
        </div>

        <p className="text-[14px] text-gray-700">{desc}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
