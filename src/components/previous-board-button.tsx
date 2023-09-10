import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "./dialog";
import { Title } from "./my-title";

type boardPosition = { position: string; name: string };

interface props {
  year: string;
  previousBoardInfo?: string;
  boardMembers: boardPosition[];
}

export function PreviousBoardButton({ year, boardMembers }: props) {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <button className="cursor-pointer rounded-md bg-sky-200 px-7 py-2 text-xl hover:scale-105 hover:bg-sky-300">
            {year}
          </button>
        </DialogTrigger>
        <DialogContent className="backdrop-blur-xl">
          <DialogHeader>
            <Title text={`National Committee ${year}`} order="h2" />
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8">
            {boardMembers.map((boardMember, i) => (
              <div key={i} className="flex flex-col gap-1 p-1">
                <h3 className="text-base font-semibold text-slate-500 sm:text-lg">
                  {boardMember.position}
                </h3>
                <h2 className="text-lg font-semibold sm:text-xl">
                  {boardMember.name}
                </h2>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
