"use client";
import { Children, ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "~/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  return (
    <div className="flex flex-row gap-10 items-center">
      <button
        onClick={goPrev}
        disabled={state !== "idle"}
        className={cn(
          "rounded-sm p-2 py-0 text-gray-600",
          state !== "idle" && "text-gray-200"
        )}
      >
        <ChevronLeft className="w-10 h-10" />
      </button>
      <div
        className="w-full max-w-4xl rounded-lg overflow-hidden transition-all duration-500"
        style={{ height: height }}
      >
        <div
          className={cn(
            "w-[300%] grid-cols-3 grid items-start duration-500",
            state === "idle" && "-translate-x-1/3 transition-none",
            state === "next" && "-translate-x-2/3"
          )}
        >
          <div ref={prevDiv}>{childs.at(prev)}</div>
          <div ref={currentDiv}>{childs.at(counter)}</div>
          <div ref={nextDiv}>{childs.at(next)}</div>
        </div>
      </div>
      <button
        onClick={goNext}
        disabled={state !== "idle"}
        className={cn(
          "rounded-sm p-2 py-0 text-gray-600",
          state !== "idle" && "text-gray-200"
        )}
      >
        <ChevronRight className="w-10 h-10" />
      </button>
    </div>
  );
};
