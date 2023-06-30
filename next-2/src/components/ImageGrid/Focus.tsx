import Image from "next/image";

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

  const makeClassNames = (col: number, row: number, span: number) =>
    `col-span-${span} col-start-${col} row-span-${span} row-start-${row}`;

  return (
    <div className="grid h-full w-full grid-cols-10 grid-rows-12">
      {images.map((image, i) => (
        <div
          key={i}
          className={`${zIndex[i]} ${makeClassNames(
            cols[i],
            rows[i],
            spans[i]
          )}`}
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
