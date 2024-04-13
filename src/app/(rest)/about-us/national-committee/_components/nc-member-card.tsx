import Image, { StaticImageData } from "next/image";
import { CommitteeMember } from "../_content/national-committee";

export function NCMemberCard({
  member: { name, position, imageURL },
}: {
  member: CommitteeMember;
}) {
  return (
    <>
      <div className="flex w-60 flex-col">
        <Image
          className="mb-4 h-60 w-60 rounded-full object-cover object-center"
          width={200}
          height={200}
          src={imageURL ?? ""}
          alt="..."
        />
        <div className="mb-3 text-center text-lg">{name}</div>
        <div className="break-normal text-center text-sm">{position}</div>
      </div>
    </>
  );
}
