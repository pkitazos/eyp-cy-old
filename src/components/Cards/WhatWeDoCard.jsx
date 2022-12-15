// import { ReactComponent as WhiteStarSVG } from "../../assets/whiteStar.svg";

const WhatWeDoCard = (props) => {
  const { title, imgSrc, children } = props;
  return (
    <div className='w-80 flex flex-col gap-y-3'>
      <img className='h-56 w-full rounded-lg' src={imgSrc} alt='...' />
      <div className='h-16 w-16 z-10 -mt-10 bg-primary-yellow rounded-full place-self-center flex justify-center items-center text-white'>
        {/* <WhiteStarSVG className='w-9 h-9' /> */}F
      </div>
      <div className='flex flex-col gap-y-6'>
        <div className='text-primary-indigo text-xl text-center font-semibold'>
          {title}
        </div>
        <div className='text-lg text-center'>{children}</div>
      </div>
    </div>
  );
};

export default WhatWeDoCard;
