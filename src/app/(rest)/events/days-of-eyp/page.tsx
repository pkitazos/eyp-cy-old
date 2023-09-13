import { Metadata } from "next";
import Image from "next/image";
import { Container, Divider, SessionElementCard, Title } from "~/components";

export const metadata: Metadata = {
  title: "EYP CY - Home",
};
export const runtime = "edge";

export default function DaysOfEYP() {
  return (
    <>
      <Container className="mt-40 md:mt-20 lg:mt-16 flex justify-center">
        <div className="flex flex-col items-center gap-5 w-5/6 xl:w-2/3">
          <Image
            className="mb-5 w-48 md-lg:w-60"
            width={200}
            height={200}
            src="/assets/logo-days-of-eyp.png"
            alt=""
          />
          <div className=" flex justify-center">
            <Title text="Days of EYP" order="h1" />
          </div>
          <p className=" text-justify text-lg leading-relaxed md:text-xl">
            The EYP Day was established in 2019 and takes place annually. It
            welcomed approximately 50 - 80 young people to a one day conference
            where they can discuss current issues. This event allows young
            people to join EYP&apos;s activities without having to attend as a
            school delegation. EYP Day 2021 will take place between the 3rd and
            4th of April. You can get information on how to register by
            contacting us.
          </p>
        </div>
      </Container>
      <Divider className="mt-20 md:mt-28 xl:mt-32 mb-20 md:mb-32" />
      <Container className="mb-16 xl:mb-20 2xl:mb-32">
        <div className=" mb-16 flex justify-center">
          <Title text="Session Program" order="h2" />
        </div>
        <div className="flex flex-col items-center justify-center gap-20 xl:gap-40">
          <SessionElementCard
            title="Teambuilding"
            imageURL="/assets/events-2.jpg"
            className=" w-full md-lg:w-5/6 max-w-5xl"
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
            title="Committee Work"
            reverse={true}
            imageURL="/assets/events-2.jpg"
            className=" w-full md-lg:w-5/6 max-w-5xl"
          >
            This is the central part of any EYP session. After team-building,
            the delegates come together to discuss their allocated topics, and
            will explore the skills needed to discuss, debate and communicate
            effectively within their committee. The goal of Committee work is
            the production of a strong and meaningful resolution, that will be
            debated upon during the General Assembly.
          </SessionElementCard>
          <SessionElementCard
            title="General Assembly"
            imageURL="/assets/events-2.jpg"
            className=" w-full md-lg:w-5/6 max-w-5xl"
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
