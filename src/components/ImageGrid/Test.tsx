import Image from "next/image";

const Test = () => {
  return (
    <div className="grid h-full w-full grid-cols-10 grid-rows-12 outline outline-pink-600">
      <div className="z-0 col-span-4 col-start-1 row-span-4 row-start-1 ">
        <Image
          src={"/assets/test-image.png"}
          alt={""}
          className="masked-image"
          width={300}
          height={300}
        />
      </div>
      <div className="z-10 col-span-8 col-start-3 row-span-8 row-start-3 ">
        <Image
          src={"/assets/test-image.png"}
          alt={""}
          className="masked-image"
          width={600}
          height={600}
        />{" "}
      </div>
      <div className="z-0 col-span-4 col-start-1 row-span-4 row-start-9 ">
        <Image
          src={"/assets/test-image.png"}
          alt={""}
          className="masked-image"
          width={300}
          height={300}
        />{" "}
      </div>
    </div>
  );
};

export default Test;
