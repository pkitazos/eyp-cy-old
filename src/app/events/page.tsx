"use client";
import {
  ActionButton,
  Container,
  EventTypeCard,
  SessionElementCard,
  Title,
  WaveDivider,
} from "~/components";
import { wavePaths } from "~/data";

export default function Events() {
  return (
    <>
      <Container className="mb-20 xl:mb-10 mt-40 md:mt-20 lg:mt-16 flex flex-col items-center">
        <div className=" mb-10 md:mb-3 flex justify-center lg:justify-start">
          <Title text="Our Events" order="h1" />
        </div>
        <div className="flex shrink flex-col items-center gap-16 xl:grid xl:grid-cols-12 xl:grid-rows-4">
          <EventTypeCard
            className=" col-span-9 col-start-1 row-span-1 xl:max-w-4xl 2xl:max-w-5xl"
            title="Pre-Selection Days"
            imageURL="/assets/logo-pre-selection-days.png"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </EventTypeCard>
          <EventTypeCard
            className=" col-span-9 col-start-2 row-span-1 xl:max-w-4xl 2xl:max-w-5xl"
            title="Days of EYP"
            imageURL="/assets/logo-days-of-eyp.png"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </EventTypeCard>
          <EventTypeCard
            className=" col-span-9 col-start-3 row-span-1 xl:max-w-4xl 2xl:max-w-5xl"
            title="Youth Summit"
            imageURL="/assets/logo-youth-summit.png"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </EventTypeCard>
          <EventTypeCard
            className=" col-span-9 col-start-4 row-span-1 xl:max-w-4xl 2xl:max-w-5xl"
            title="National Session"
            imageURL="/assets/logo-national-session.png"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </EventTypeCard>
        </div>
      </Container>
      <WaveDivider waveLayers={wavePaths.eventsTop} />
      <Container
        backdrop="bg-primary-700"
        className="flex h-[30rem] flex-col justify-around pt-10"
      >
        <div className=" flex justify-center">
          <Title
            text="I want to participate as a .."
            order="h2"
            theme="light"
            underline="text-orange-500"
          />
        </div>
        <div className="flex flex-row justify-center gap-8 md:gap-14 lg-xl:gap-24">
          <ActionButton text="School" onClick={() => {}} />
          <ActionButton text="Individual" onClick={() => {}} />
        </div>
      </Container>
      <WaveDivider waveLayers={wavePaths.eventsBottom} />
      <Container className="mb-16 xl:mb-20 2xl:mb-32">
        <div className=" mb-16 flex justify-center">
          <Title text="Session Program" order="h2" />
        </div>

        <div className="flex flex-col items-center justify-center gap-20 xl:gap-40">
          <SessionElementCard
            className=" w-full md-lg:w-5/6 max-w-5xl"
            title="Teambuilding"
            imageURL="/assets/events-3.jpg"
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
            className=" w-full md-lg:w-5/6 max-w-5xl"
            title="Committee Work"
            reverse={true}
            imageURL="/assets/events-2.jpg"
          >
            This is the central part of any EYP session. After team-building,
            the delegates come together to discuss their allocated topics, and
            will explore the skills needed to discuss, debate and communicate
            effectively within their committee. The goal of Committee work is
            the production of a strong and meaningful resolution, that will be
            debated upon during the General Assembly.
          </SessionElementCard>
          <SessionElementCard
            className=" w-full md-lg:w-5/6 max-w-5xl"
            title="General Assembly"
            imageURL="/assets/events-1.jpg"
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
