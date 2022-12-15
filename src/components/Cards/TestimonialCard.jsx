const TestimonialCard = (props) => {
  const { imgSrc, imgClasses, reversed, children } = props;
  return (
    <>
      <div
        className={`mx-16 lg:mx-16 lg-xl:mx-24 xl:mx-40 py-14 px-16 
        flex flex-col lg:flex-row items-center gap-y-6 gap-x-10 bg-white rounded-2xl`}
      >
        {!reversed && (
          <img
            className={`h-60 w-60 rounded-full ${imgClasses}`}
            src={imgSrc}
            alt='...'
          />
        )}
        <div className='flex flex-col gap-y-6'>{children}</div>
        {reversed && (
          <img
            className={`h-60 w-60 rounded-full ${imgClasses}`}
            src={imgSrc}
            alt='...'
          />
        )}
      </div>
    </>
  );
};

export default TestimonialCard;
