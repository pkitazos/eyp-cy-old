const ContentCard = (props) => {
  const { title, imgSrc, reversed, children, debugColour } = props;
  return (
    <div className={`flex flex-row mx-24 gap-x-14 items-middle ${debugColour}`}>
      {reversed && (
        <div className='basis-5/12 flex'>
          <img src={imgSrc} alt='...' className='self-center rounded-xl' />
        </div>
      )}
      <div className='basis-7/12 flex flex-col justify-center items-middle gap-y-4'>
        <div className='self-center text-2xl text-primary-indigo-700'>
          {title}
        </div>
        <div className='h-0.5 w-24 self-center bg-primary-indigo-700'>
          &nbsp;
        </div>

        <div className='text-justify text-xl'>{children}</div>
      </div>
      {!reversed && (
        <div className='basis-5/12 flex'>
          <img src={imgSrc} alt='...' className='self-center rounded-xl' />
        </div>
      )}
    </div>
  );
};

export default ContentCard;
