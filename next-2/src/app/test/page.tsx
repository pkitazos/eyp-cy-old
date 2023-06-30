import Image from "next/image";

export default function Test() {
  return (
    <section className="grid place-items-center">
      <div className="grid w-1/3 grid-cols-5 grid-rows-6">
        <div className="col-start-1 col-end-3 row-start-1 row-end-3">
          <Image
            className="masked-image"
            width={300}
            height={300}
            src={"/assets/test-image.png"}
            alt={""}
          />
        </div>
        <div className="col-start-2 col-end-6 row-start-2 row-end-6">
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
        </div>
      </div>
    </section>
  );
}
