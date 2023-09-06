import { NCMemberCard, PreviousBoardButton, Title } from "~/components";
import { previousBoardData } from "~/data/previous-boards";

export default function NationalCommittee() {
  return (
    <>
      <head>
        <title>National Committee</title>
      </head>
      <>
        <section className="page-margin flex flex-col pb-16">
          <div className="item-center flex flex-col justify-center gap-6">
            <div className="hide-bottom">
              <Title
                text="Our National Committee"
                order="h1"
                underline="rotate-[190deg]"
              />
            </div>
            <div className="hide-bottom delay-card">
              <Title text="2023" order="h2" underline="rotate-[190deg]" />
            </div>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-16">
            <div className="hide-right delay-card">
              <NCMemberCard
                name="Lazaros Hadjiforados"
                title="President"
                imageURL="/assets/nc-presi.jpg"
              />
            </div>
            <div className="hide-right delay-card">
              <NCMemberCard
                name="Polyna Antoniou"
                title="Vice President"
                imageURL="/assets/nc-vp.jpg"
              />
            </div>
            <div className="hide-right delay-card">
              <NCMemberCard
                name="Dimitrios Meris"
                title="Secretary and Social Media Officer"
                imageURL="/assets/nc-secretary.jpg"
              />
            </div>
            <div className="hide-right delay-card">
              <NCMemberCard
                name="Georgios Papaconstantinou"
                title="Treasurer"
                imageURL="/assets/nc-treasurer.jpg"
              />
            </div>
            <div className="hide-right delay-card">
              <NCMemberCard
                name="Kornelia Kitazou"
                title="PR Officer"
                imageURL="/assets/nc-pr.jpg"
              />
            </div>
            <div className="hide-right delay-card">
              <NCMemberCard
                name="Antreas Psaltis"
                title="HR Officer"
                imageURL="/assets/nc-hr.jpg"
              />
            </div>
            <div className="hide-right delay-card">
              <NCMemberCard
                name="Athina"
                title="National Coordinator"
                imageURL="/assets/nc-natco-1.jpg"
              />
            </div>
            <div className="hide-right delay-card">
              <NCMemberCard
                name="Theodoulos Hadjimatheou"
                title="National Coordinator"
                imageURL="/assets/nc-natco-2.jpg"
              />
            </div>
          </div>
        </section>
        <section className="page-margin mt-16 flex flex-col justify-center gap-2">
          <div className="hide-left flex justify-center">
            <Title
              text="Previous Boards"
              order="h2"
              underline="rotate-[190deg]"
            />
          </div>
          <div className="mt-10 grid grid-cols-3 grid-rows-5 gap-5 xs:grid-cols-4 xs:grid-rows-4">
            {previousBoardData.map((previousBoard) => (
              <div
                key={previousBoard.year}
                className="hide-left delay-card flex shrink justify-center"
              >
                <PreviousBoardButton
                  year={previousBoard.year}
                  boardMembers={previousBoard.members}
                />
              </div>
            ))}
          </div>
        </section>
      </>
    </>
  );
}
