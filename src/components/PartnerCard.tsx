import type { FC } from "react";
// import Image from "next/image";

interface props {
  name: string;
  description: string;
}

const PartnerCard: FC<props> = ({ name, description }) => {
  return (
    <div className="flex w-60 flex-col gap-5">
      {/* <Image/> */}
      <h2 className="text-2xl font-bold text-primary-700">{name}</h2>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default PartnerCard;
