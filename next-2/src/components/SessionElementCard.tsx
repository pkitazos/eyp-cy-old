import type { ReactNode } from "react";

interface props {
  title: string;
  titlePosition?: "text-left" | "text-center" | "text-right";
  children: ReactNode;
  imageURL?: string; // TODO not yet used
  className?: string;
}

const SessionElementCard = ({
  title,
  titlePosition = "text-left",
  children,
  imageURL,
  className,
}: props) => {
  return (
    <>
      <div
        className={`${className} flex h-max flex-row items-center gap-5 
        rounded-3xl bg-white shadow-sm transition-all duration-300 hover:scale-[1.02]`}
      >
        {/* <img src={imageURL} className='' /> */}

        <div className="z-10 m-5 sm:m-6  md:m-8">
          <h2
            className={`mb-4 ${titlePosition} text-xl font-bold underline decoration-secondary-900 decoration-wavy underline-offset-2 xs:text-2xl xs:font-semibold xl:text-3xl`}
          >
            {title}
          </h2>
          <p className="text-justify text-lg">{children}</p>
        </div>
      </div>
    </>
  );
};

export default SessionElementCard;
