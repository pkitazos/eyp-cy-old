"use client";
import { Children, ReactNode, useEffect, useRef, useState } from "react";

interface props {
  children: ReactNode;
}

export const Carousel = ({ children }: props) => {
  const childs = Children.toArray(children);

  const [state, setState] = useState<"idle" | "prev" | "next">("idle");

  const prevDiv = useRef<HTMLDivElement>(null);
  const nextDiv = useRef<HTMLDivElement>(null);
  const currentDiv = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(currentDiv.current!.offsetHeight);
  }, []);

  const [counter, setCounter] = useState(0);
  const [prev, next] = [
    (counter - 1) % childs.length,
    (counter + 1) % childs.length,
  ];

  const goPrev = () => {
    setState("prev");

    setHeight(prevDiv.current!.offsetHeight);

    setTimeout(() => {
      setCounter(prev);
      setState("idle");
    }, 501);
  };

  const goNext = () => {
    setState("next");

    setHeight(nextDiv.current!.offsetHeight);

    setTimeout(() => {
      setCounter(next);
      setState("idle");
    }, 501);
  };

  const shift =
    state === "idle"
      ? "-translate-x-1/3 transition-none"
      : state === "next"
      ? "-translate-x-2/3"
      : "";

  return (
    <div className="flex flex-row gap-10 items-center">
      <button
        onClick={goPrev}
        disabled={state !== "idle"}
        className={`rounded-sm bg-slate-200 p-2 py-0 ${
          state !== "idle" ? "text-slate-600" : ""
        }`}
      >
        prev
      </button>
      <div
        className="w-[50vw] rounded-lg bg-slate-200 overflow-hidden transition-all duration-500"
        style={{ height: height }}
      >
        <div
          className={`w-[300%] grid-cols-3 grid items-start transition-transform duration-500 ${shift}`}
        >
          <div ref={prevDiv}>{childs.at(prev)}</div>
          <div ref={currentDiv}>{childs.at(counter)}</div>
          <div ref={nextDiv}>{childs.at(next)}</div>
        </div>
      </div>
      <button
        onClick={goNext}
        disabled={state !== "idle"}
        className={`rounded-sm bg-slate-200 p-2 py-0 ${
          state !== "idle" ? "text-slate-600" : ""
        }`}
      >
        next
      </button>
    </div>
  );
};

const Demo = () => {
  return (
    <div className="flex w-full h-[100vh] justify-center items-center">
      <Carousel>
        <p className="p-5">
          Lorem ipsum dolor sit amet. Sit placeat odit nam vitae accusamus At
          rerum galisum et delectus minus ut odio delectus! At natus odit quo
          impedit velit est amet nulla aut architecto beatae non quasi dolores
          eos dignissimos fuga qui placeat deserunt. Rem iure dolor et cumque
          ullam ut veritatis voluptas aut ducimus fugit. Vel impedit iure ut
          similique expedita ut eligendi omnis sit ipsam iure est sint laborum.
        </p>
        <p className="p-5">
          Ad velit dolor est unde ullam qui atque temporibus ut libero
          consequatur sed perspiciatis velit cum veritatis beatae? Qui dolorem
          molestias ut eius porro in numquam doloribus in voluptate laborum?
        </p>
        <p className="p-5">
          Sit dolores vero eos voluptas beatae qui error rerum ut laboriosam
          omnis aut asperiores voluptatum. Aut minus officia et quia repellat in
          porro ratione qui maxime quisquam ut voluptatem vitae aut fuga
          possimus id perferendis sint.
        </p>
        <p className="p-5">andrei is really great!</p>
      </Carousel>
    </div>
  );
};
