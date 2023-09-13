import { Metadata } from "next";
import Image from "next/image";
import { Container, Divider, SessionElementCard, Title } from "~/components";

export const metadata: Metadata = {
  title: "EYP CY - Home",
};
export const runtime = "edge";

export default function PreSelectionDays() {
  return (
    <>
      <Container className="mt-40 md:mt-20 lg:mt-16 flex justify-center">
        <div className="flex flex-col items-center gap-5 w-5/6 xl:w-2/3">
          <Image
            className="mb-5 w-48 md-lg:w-60"
            width={200}
            height={200}
            src="/assets/logo-pre-selection-days.png"
            alt=""
          />
          <div className=" flex justify-center">
            <Title text="Pre-Selection Days" order="h1" />
          </div>
          <p className=" text-justify text-lg leading-relaxed md:text-xl">
            The Pre-Selection Days of EYP Cyprus have been organised annually
            since 2010 and welcome about 22-26 school delegations for a 2 day
            conference where young people have the opportunity to discuss
            current European issues through a General Assembly. With about 180
            participants every year taking part in the event, the Pre-Selection
            Days serve as the first contact of young people with the
            organisation and it&apos;s an opportunity for 16 school delegations
            to be selected to attend our National Session. Pre-Selection Days
            2021 will take place between the 5th and 7th of March. You can get
            information on how to register by contacting us.
          </p>
        </div>
      </Container>
      <Divider className="mt-20 md:mt-28 xl:mt-32 mb-20 md:mb-32" />
      <Container className=" mb-16 xl:mb-20 2xl:mb-32">
        <div className=" mb-6 md:mb-16 flex justify-center">
          <Title text="Session Program" order="h2" />
        </div>
        <div className="flex flex-col items-center justify-center gap-20 xl:gap-40">
          <SessionElementCard
            title="Teambuilding"
            className=" w-full md-lg:w-5/6 max-w-5xl"
            imageURL="/assets/events-2.jpg"
          >
            Team building in the context of the European Youth Parliament, means
            communication training, focused on group dynamics. The fundamental
            purpose of team building is to get a disparate group of individuals
            working as a team, through a series of physical, theoretical and
            problem-solving activities. Under the guidance of their committee
            Chairperson, the delegates will participate in a series of group
            dynamic exercises and problem-solving tasks, in order to get to know
            each other and begin functioning as a group.
          </SessionElementCard>
          <SessionElementCard
            title="General Assembly"
            reverse={true}
            className=" w-full md-lg:w-5/6 max-w-5xl"
            imageURL="/assets/events-2.jpg"
          >
            The General Assembly reunites all the participants of the session to
            consider the results of committee work. Each committee presents and
            defends their motion for a resolution, which is then debated
            according to the current model of the European Parliament.
          </SessionElementCard>
        </div>
      </Container>
    </>
  );
}
