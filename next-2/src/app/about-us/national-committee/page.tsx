import { NCMemberCard, PreviousBoardButton, Title } from "~/components";
import { previousBoards } from "~/data";

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
                underlineRotation="rotate-[190deg]"
              />
            </div>
            <div className="hide-bottom delay-card">
              <Title
                text="2023"
                order="h2"
                underlineRotation="rotate-[190deg]"
              />
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
              underlineRotation="rotate-[190deg]"
            />
          </div>
          <div className="mt-10 grid grid-cols-3 grid-rows-5 gap-5 xs:grid-cols-4 xs:grid-rows-4">
            <div className="hide-left delay-card flex shrink justify-center">
              <PreviousBoardButton
                year="2022"
                boardMembers={previousBoards.year_2022}
              />
            </div>
            <div className="hide-left delay-card flex shrink justify-center">
              <PreviousBoardButton
                year="2021"
                boardMembers={previousBoards.year_2021}
              />
            </div>
            <div className="hide-left delay-card flex shrink justify-center">
              <PreviousBoardButton
                year="2020"
                boardMembers={previousBoards.year_2020}
              />
            </div>
            <div className="hide-left delay-card flex shrink justify-center">
              <PreviousBoardButton
                year="2019"
                boardMembers={previousBoards.year_2019}
              />
            </div>
            <div className="hide-left delay-card flex shrink justify-center">
              <PreviousBoardButton
                year="2018"
                boardMembers={previousBoards.year_2018}
              />
            </div>
            <div className="hide-left delay-card flex shrink justify-center">
              <PreviousBoardButton
                year="2017"
                boardMembers={previousBoards.year_2017}
              />
            </div>
            <div className="hide-left delay-card flex shrink justify-center">
              <PreviousBoardButton
                year="2016"
                boardMembers={previousBoards.year_2016}
              />
            </div>
            <div className="hide-left delay-card flex shrink justify-center">
              <PreviousBoardButton
                year="2015"
                boardMembers={previousBoards.year_2015}
              />
            </div>
            <div className="hide-left delay-card flex shrink justify-center">
              <PreviousBoardButton
                year="2014"
                boardMembers={previousBoards.year_2014}
              />
            </div>
            <div className="hide-left delay-card flex shrink justify-center">
              <PreviousBoardButton
                year="2013"
                boardMembers={previousBoards.year_2013}
              />
            </div>
            <div className="hide-left delay-card flex shrink justify-center">
              <PreviousBoardButton
                year="2012"
                boardMembers={previousBoards.year_2012}
              />
            </div>
            <div className="hide-left delay-card flex shrink justify-center">
              <PreviousBoardButton
                year="2011"
                boardMembers={previousBoards.year_2011}
              />
            </div>
            <div className="hide-left delay-card flex shrink justify-center">
              <PreviousBoardButton
                year="2010"
                boardMembers={previousBoards.year_2010}
              />
            </div>
            <div className="hide-left delay-card flex shrink justify-center">
              <PreviousBoardButton
                year="2009"
                boardMembers={previousBoards.year_2009}
              />
            </div>
            <div className="hide-left delay-card flex shrink justify-center">
              <PreviousBoardButton
                year="2008"
                boardMembers={previousBoards.year_2008}
              />
            </div>
            <div className="hide-left delay-card flex shrink justify-center">
              <PreviousBoardButton
                year="2007"
                boardMembers={previousBoards.year_2007}
              />
            </div>
          </div>
        </section>
      </>
    </>
  );
}
