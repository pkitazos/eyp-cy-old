import {
  Container,
  NCMemberCard,
  PreviousBoardButton,
  Title,
} from "~/components";
import { previousBoardData } from "./previous-boards";

const ncMembers = [
  {
    name: "Lazaros Hadjiforados",
    title: "President",
    imageURL: "/assets/nc-presi.jpg",
  },
  {
    name: "Polyna Antoniou",
    title: "Vice-President",
    imageURL: "/assets/nc-vp.jpg",
  },
  {
    name: "Andrea Soteriou",
    title: "Secretary",
    imageURL: "/assets/nc-secretary.png",
  },
  {
    name: "Georgios Papaconstantinou",
    title: "Treasurer",
    imageURL: "/assets/nc-treasurer.jpg",
  },
  {
    name: "Antreas Psaltis",
    title: "Head of Human Resources",
    imageURL: "/assets/nc-hr.png",
  },
  {
    name: "Kornelia Kitazou",
    title: "Head of Public Relations",
    imageURL: "/assets/nc-pr.jpg",
  },
  {
    name: "Athina Stavrou",
    title: "National Coordinator",
    imageURL: "/assets/nc-natco-1.jpg",
  },
  {
    name: "Theodoulos Hadjimatheou",
    title: "National Coordinator",
    imageURL: "/assets/nc-natco-2.png",
  },
];

export default function NationalCommittee() {
  return (
    <>
      <head>
        <title>National Committee</title>
      </head>
      <>
        <Container className="mt-40 md:mt-20 lg:mt-16 flex flex-col pb-16">
          <div className="item-center flex flex-col items-center gap-6">
            <div className="">
              <Title
                text="Our National Committee"
                order="h1"
                underline="rotate-[190deg]"
              />
            </div>
            <p className="mt-6 text-center text-lg leading-relaxed md:text-xl">
              The National Committee of EYP Cyprus is elected by the
              organisation&apos;s members at our Annual General Meetings taking
              place in December. The Committee is responsible for undertaking
              the strategic planning for EYP Cyprus&apos; future as well as the
              administrative tasks that enable the organisation to function on a
              day-to-day basis.
            </p>
            <div className="mt-20 3xl:mt-32 ">
              <Title text="2023" order="h2" underline="rotate-[190deg]" />
            </div>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-16">
            {ncMembers.map((member, i) => (
              <div key={i} className="">
                <NCMemberCard
                  name={member.name}
                  title={member.title}
                  imageURL={member.imageURL}
                />
              </div>
            ))}
          </div>
        </Container>
        <div className="flex justify-center mt-24 mb-32">
          <div className="border-t-2 w-1/2 border-gray-300/50">&nbsp;</div>
        </div>
        <Container className="mt-16 mb-20 flex flex-col justify-center gap-2">
          <div className=" flex justify-center">
            <Title text="Past Boards" order="h2" underline="rotate-[190deg]" />
          </div>
          <div className="mt-10 grid grid-cols-3 grid-rows-5 gap-5 xs:grid-cols-4 xs:grid-rows-4">
            {previousBoardData.map((previousBoard) => (
              <div
                key={previousBoard.year}
                className=" flex shrink justify-center"
              >
                <PreviousBoardButton
                  year={previousBoard.year}
                  boardMembers={previousBoard.members}
                />
              </div>
            ))}
          </div>
        </Container>
      </>
    </>
  );
}
