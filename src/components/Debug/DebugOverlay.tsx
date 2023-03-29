import type { FC } from "react";
import { useMediaQuery } from "~/hooks";
import "~/styles/debug.css";

const DebugOverlay: FC = () => {
  let breakpoint = "";

  const xl = useMediaQuery("(min-width: 1280px)");
  const lg_xl = useMediaQuery("(min-width: 1150px)");
  const lg = useMediaQuery("(min-width: 1024px)");
  const md_lg = useMediaQuery("(min-width: 900px)");
  const md = useMediaQuery("(min-width: 768px)");
  const sm = useMediaQuery("(min-width: 640px)");
  const xs = useMediaQuery("(min-width: 495px)");

  if (useMediaQuery("(min-width: 1280px)")) breakpoint = "xl";
  if (useMediaQuery("(min-width: 1150px)")) breakpoint = "lg-xl";
  if (useMediaQuery("(min-width: 1024px)")) breakpoint = "lg";
  if (useMediaQuery("(min-width: 900px)")) breakpoint = "md-lg";
  if (useMediaQuery("(min-width: 768px)")) breakpoint = "md";
  if (useMediaQuery("(min-width: 640px)")) breakpoint = "sm";
  if (useMediaQuery("(min-width: 495px)")) breakpoint = "xs";

  return (
    <div className='fixed top-0 z-[100] h-screen w-full'>
      <div className='media-debug top-2 left-2 mt-3 ml-3 h-10 w-10 rounded-full'>
        &nbsp;
      </div>
    </div>
  );
};

export default DebugOverlay;
