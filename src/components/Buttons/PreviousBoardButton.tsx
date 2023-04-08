import type { FC } from "react";
import { BoardPosition, Title } from "..";

interface props {
  year: string;
  previousBoardInfo?: string;
  boardMembers: boardPosition[];
}

const PreviousBoardButton: FC<props> = ({ year, boardMembers }) => {
  return (
    <>
      <label
        htmlFor={`my-modal-${year}`}
        className='cursor-pointer rounded-md bg-sky-200 px-7 py-2 text-xl hover:scale-105 hover:bg-sky-300'
      >
        {year}
      </label>

      <input type='checkbox' id={`my-modal-${year}`} className='modal-toggle' />
      <label htmlFor={`my-modal-${year}`} className='modal cursor-pointer'>
        <label
          className='no-scrollbar modal-box relative bg-white sm:w-11/12 sm:max-w-5xl'
          htmlFor=''
        >
          <Title
            title={`National Committee ${year}`}
            titlePosition='justify-center'
            titleSize='text-2xl sm:text-3xl'
            titleColor='text-primary-700'
            underlineWidth='w-14'
          />

          <div className='mt-6 grid grid-cols-1 gap-4 pb-3 xs:grid-cols-2 lg:grid-cols-3 lg-xl:grid-cols-4'>
            <>
              {boardMembers.map((boardMember, i) => (
                <BoardPosition key={i} position={boardMember.position}>
                  {boardMember.name}
                </BoardPosition>
              ))}
            </>
          </div>
        </label>
      </label>
    </>
  );
};

export default PreviousBoardButton;
