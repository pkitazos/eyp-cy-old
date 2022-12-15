const Dropdown = ({ label, labelClasses, items, onClick }) => {
  return (
    <>
      <div
        className={`
        peer relative ${labelClasses}`}
        onClick={onClick}
      >
        {label}
      </div>

      <div
        className='hidden absolute top-32 pt-1 z-5
        peer-hover:flex hover:flex flex-col w-max 
        text-primary-dark-blue font-medium bg-primary-yellow rounded-b-lg drop-shadow-lg'
      >
        {items.map((menuItem) => (
          <div className='px-4 py-2 m-1 rounded-md hover:bg-yellow-200'>
            {menuItem}
          </div>
        ))}
      </div>
    </>
  );
};

export default Dropdown;
