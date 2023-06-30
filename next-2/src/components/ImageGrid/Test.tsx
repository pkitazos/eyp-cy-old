const Test = () => {
  return (
    <div className="grid h-full w-full grid-cols-7 grid-rows-10 outline outline-pink-600">
      <div className="z-0 col-span-4 col-start-1 row-span-4 row-start-1 bg-blue-400">
        &nbsp;
      </div>
      <div className="z-10 col-span-4 col-start-4 row-span-4 row-start-4 bg-blue-600">
        &nbsp;
      </div>
      <div className="z-0 col-span-4 col-start-1 row-span-4 row-start-7 bg-blue-800">
        &nbsp;
      </div>
    </div>
  );
};

export default Test;
