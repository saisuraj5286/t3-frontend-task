import React from "react";
import Image from "next/image";

interface StatsProps {
  src: string;
  alt?: string;
}

const Stats: React.FC<StatsProps> = ({ src, alt = "Stats" }) => {
  return (
    <div className="w-full md:w-1/2 flex justify-center items-center p-4">
      <Image
  src={src}
  alt={alt}
  width={500}
  height={300}
  className="rounded-xl"
/>

    </div>
  );
};

export default Stats;
