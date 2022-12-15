const TextCard = (props) => {
  const { title, titleSize, center, children } = props;
  return (
    <div className='mx-36 flex flex-col justify-center items-middle gap-y-4 bg-white'>
      <div className={`self-center ${titleSize} text-primary-indigo`}>
        {title}
      </div>
      <div className='h-0.5 w-24 self-center bg-primary-indigo'>&nbsp;</div>

      <div className={`${center ? "text-center" : "text-justify"} text-xl`}>
        {children}
      </div>
    </div>
  );
};

export default TextCard;
