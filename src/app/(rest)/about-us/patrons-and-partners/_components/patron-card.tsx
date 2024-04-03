import Image from "next/image";
import { cn } from "~/lib/utils";

interface props {
  name: string;
  title: string;
  imageURL: string;
  invertColors?: boolean;
}

export function PatronCard({ name, title, imageURL, invertColors }: props) {
  return (
    <>
      <div className="flex w-60 flex-col">
        <Image
          className="mb-4 bg-gray-200 h-60 w-60 rounded-full object-cover object-center"
          width={200}
          height={200}
          src={imageURL}
          alt="..."
        />
        <div
          className={cn(
            "mb-3 text-center text-lg",
            invertColors ? "text-zinc-200" : "text-black"
          )}
        >
          {name}
        </div>
        <div
          className={cn(
            "break-normal text-center text-sm",
            invertColors ? "text-zinc-300" : "text-gray-600"
          )}
        >
          {title}
        </div>
      </div>
    </>
  );
}
