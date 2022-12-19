import WhiteStar from "../WhiteStar";

const WhatWeDoCard = (props) => {
  const { title, imgSrc, children } = props;
  return (
    <div className='w-80 flex flex-col gap-y-3'>
      <img className='h-56 w-full rounded-lg' src={imgSrc} alt='...' />
      <div className='h-16 w-16 z-10 -mt-10 b g-primary-yellow-500 rounded-full place-self-center flex justify-center items-center text-white'>
        <WhiteStar />
      </div>
      <div className='flex flex-col gap-y-6'>
        <div className='text-primary-indigo-700 text-xl text-center font-semibold'>
          {title}
        </div>
        <div className='text-lg text-center'>{children}</div>
      </div>
    </div>
  );
};

export default WhatWeDoCard;
