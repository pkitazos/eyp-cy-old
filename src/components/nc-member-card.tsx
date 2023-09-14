import Image, { StaticImageData } from "next/image";

interface props {
  name: string;
  title: string;
  imageURL: StaticImageData;
}

export function NCMemberCard({ name, title, imageURL }: props) {
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
}
