import type { FC } from "react";

interface props {
  pageNumber: number;
}

const BlankPage: FC<props> = ({ pageNumber }) => {
  let colours = {
    home: [
      "bg-[#0267C1]",
      "bg-[#0075C4]",
      "bg-[#EFA00B]",
      "bg-[#D65108]",
      "bg-[#591F0A]",
    ],
    aboutUs: [
      "bg-[#441151]",
      "bg-[#883677]",
      "bg-[#CA61C3]",
      "bg-[#EE85B5]",
      "bg-[#FF958C]",
    ],
    eventsActivities: [
      "bg-[#74B3CE]",
      "bg-[#508991]",
      "bg-[#172A3A]",
      "bg-[#004346]",
      "bg-[#09BC8A]",
    ],
    getInvolved: [
      "bg-[#171738]",
      "bg-[#2E1760]",
      "bg-[#3423A6]",
      "bg-[#7180B9]",
      "bg-[#DFF3E4]",
    ],
    contactUs: [
      "bg-[#0267b1]",
      "bg-[#0075C4]",
      "bg-[#EFA00B]",
      "bg-[#D65108]",
      "bg-[#591F0A]",
    ],
  };
  return (
    <>
      {pageNumber === 0 &&
        colours.home.map((colour) => (
          <div className={`w-full h-96 ${colour}`}>&nbsp;</div>
        ))}
      {pageNumber === 1 &&
        colours.aboutUs.map((colour) => (
          <div className={`w-full h-60 ${colour}`}>&nbsp;</div>
        ))}
      {pageNumber === 2 &&
        colours.eventsActivities.map((colour) => (
          <div className={`w-full h-96 ${colour}`}>&nbsp;</div>
        ))}
      {pageNumber === 3 &&
        colours.getInvolved.map((colour) => (
          <div className={`w-full h-60 ${colour}`}>&nbsp;</div>
        ))}
      {pageNumber === 4 &&
        colours.contactUs.map((colour) => (
          <div className={`w-full h-60 ${colour}`}>&nbsp;</div>
        ))}
    </>
  );
};

export default BlankPage;
