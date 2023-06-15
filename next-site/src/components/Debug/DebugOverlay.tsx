import type { FC } from "react";
import { useMediaQuery } from "~/hooks";
import "~/styles/debug.css";

const DebugOverlay: FC = () => {
  let breakpoint = " ";
  let range = "";

  const xl = useMediaQuery("(min-width: 1280px)");
  const lg_xl = useMediaQuery("(min-width: 1150px)");
  const lg = useMediaQuery("(min-width: 1024px)");
  const md_lg = useMediaQuery("(min-width: 900px)");
  const md = useMediaQuery("(min-width: 768px)");
  const sm = useMediaQuery("(min-width: 640px)");
  const xs = useMediaQuery("(min-width: 495px)");

  switch (true) {
    case xl:
      breakpoint = "xl";
      range = "1150px - 1536px";
      break;
    case lg_xl:
      breakpoint = "lg-xl";
      range = "1024px - 1150px";
      break;
    case lg:
      breakpoint = "lg";
      range = "900px - 1024px";
      break;
    case md_lg:
      breakpoint = "md-lg";
      range = "768px - 900px";
      break;
    case md:
      breakpoint = "md";
      range = "640px - 768px";
      break;
    case sm:
      breakpoint = "sm";
      range = "495px - 640px";
      break;
    case xs:
      breakpoint = "xs";
      range = "495px and below";
      break;
    default:
      breakpoint = "unknown";
      range = "Unknown range";
      break;
  }

  return (
    <div className='fixed top-0 z-[100] h-max w-max'>
      <div
        className='tooltip tooltip-right top-2 left-2 mt-3 ml-3'
        data-tip={range}
      >
        <div className='media-debug rounded-2xl py-2 px-4 font-bold'>
          &nbsp;{breakpoint}
        </div>
      </div>
    </div>
  );
};

export default DebugOverlay;
