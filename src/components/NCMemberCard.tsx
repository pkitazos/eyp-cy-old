import type { FC } from "react";
import Image from "next/image";

interface props {
  name: string;
  title: string;
  imageURL: string;
  info?: string; // TODO blocked until get data
}

const NCMemberCard: FC<props> = ({ name, title, imageURL, info }) => {
  return (
    <>
      <div className="flex w-60 flex-col">
        <Image
          width={200}
          height={200}
          src={imageURL}
          alt="..."
          className="mb-4 h-60 w-60 rounded-full bg-teal-500 object-cover object-center"
        />
        <div className="mb-3 text-center text-lg">{name}</div>
        <div className="break-normal text-center text-sm">{title}</div>
      </div>
    </>
  );
};

export default NCMemberCard;
