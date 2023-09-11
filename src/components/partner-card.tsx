import Image from "next/image";

interface props {
  name: string;
  description: string;
  imageURL: string;
}

export function PartnerCard({ name, description, imageURL }: props) {
  return (
    <div className="bg-slate-200/50 px-3 xs:px-5 py-2 xs:py-3 rounded-md hover:bg-slate-300/50 hover:shadow-sm flex gap-5">
      <Image
        className="w-1/4 object-contain"
        width={300}
        height={300}
        src={imageURL}
        alt=""
      />
      <div className="flex w-60 flex-col gap-5">
        <h2 className="text-xl sm:text-2xl font-bold text-primary-700">
          {name}
        </h2>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
}
