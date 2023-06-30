import Image from "next/image";

interface props {
  images: [imageObj, imageObj, imageObj];
  flow: gridFlow;
}

const Regular = ({ images, flow }: props) => {
  const rows = [1, 4, 7];
  const cols = flow === "lhs" ? [4, 1, 4] : [1, 4, 1];

  const zIndex = ["z-0", "z-20", "z-0"];

  const makeClassNames = (col: number, row: number) =>
    `col-span-4 col-start-${col} row-span-4 row-start-${row}`;

  return (
    <div className="grid h-full w-11/12 grid-cols-7 grid-rows-[10]">
      {images.map((image, i) => (
        <div
          key={i}
          className={`${zIndex[i]} ${makeClassNames(cols[i], rows[i])}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            className="masked-image"
            width={300}
            height={300}
          />
        </div>
      ))}
    </div>
  );
};

export default Regular;
