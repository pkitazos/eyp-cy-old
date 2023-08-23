import Image from "next/image";
import { cn } from "~/utils";

interface props {
  images: [imageObj, imageObj, imageObj];
  flow: gridFlow;
}

const Focus = ({ images, flow }: props) => {
  const ratio = [1, 2, 1];
  const rows = [1, 3, 9];
  const cols = flow === "lhs" ? [7, 1, 7] : [1, 3, 1];
  const spans = ratio.map((n) => n * 4);

  const zIndex = ["z-0", "z-10", "z-0"];

  return (
    <div className="grid h-full w-full grid-cols-10 grid-rows-12">
      {images.map((image, i) => (
        <div
          key={i}
          className={cn(
            `${zIndex[i]}`,
            `col-span-${spans[i]} col-start-${cols[i]} row-span-${spans[i]} row-start-${rows[i]}`
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            className="masked-image"
            width={300 * ratio[i]}
            height={300 * ratio[i]}
          />
        </div>
      ))}
    </div>
  );
};

export default Focus;
