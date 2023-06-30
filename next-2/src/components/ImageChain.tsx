import Image from "next/image";
import Grid from "~/utils/Grid";

interface props {
  imageURLs: string[];
  ratio?: ratioArr;
  flow: gridFlow;
}

const ImageChain = ({ imageURLs, ratio, flow }: props) => {
  let safeRatio = ratio || [1, 1, 1];

  const grid = new Grid(safeRatio, flow);

  return (
    <div className={`grid ${grid.getGridDimensions()}`}>
      {imageURLs.map((imageURL, i) => (
        <div key={i} className={grid.getClassNames()[i]}>
          <Image
            className="masked-image"
            width={300 * safeRatio[i]}
            height={300 * safeRatio[i]}
            src={imageURL}
            alt={""}
          />
        </div>
      ))}
      {/* <div className="col-start-2 col-end-6 row-start-2 row-end-6">
        <Image
          className="masked-image"
          width={600}
          height={600}
          src={"/assets/test-image.png"}
          alt={""}
        />
      </div>
      <div className="col-start-1 col-end-3 row-start-5 row-end-7">
        <Image
          className="masked-image"
          width={300}
          height={300}
          src={"/assets/test-image.png"}
          alt={""}
        />
      </div> */}
    </div>
  );
};

export default ImageChain;
