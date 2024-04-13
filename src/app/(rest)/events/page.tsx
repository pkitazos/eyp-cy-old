import { Metadata } from "next";
import { ActionButton, Container, Title, WaveDivider } from "~/components";
import {
  eventsCommitteeWork,
  eventsGeneralAssembly,
  eventsTeamBuilding,
} from "./_assets/session-elements/events";
import { daysLogo, nsLogo, preselsLogo, ysLogo } from "./_assets/logos";
import { EventTypeCard, SessionElementCard } from "./_components";
import { COMMITTEE_WORK, GENERAL_ASSEMBLY, TEAMBUILDING } from "./_content";

export const runtime = "edge";
export const metadata: Metadata = { title: "Events" };

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
            imageURL={preselsLogo}
          >
            A small-scale annual event welcoming diverse school delegations to a
            day of vibrant debate!
          </EventTypeCard>
          <EventTypeCard
            className=" col-span-9 col-start-2 row-span-1 xl:max-w-4xl 2xl:max-w-5xl"
            title="Days of EYP"
            imageURL={daysLogo}
          >
            An outreach event for any individual aged 15-17, wishing to
            participate in an EYP Cyprus event. Join us for a day of interactive
            Team-Building, immersive Committee Work and an engaging General
            Assembly! An outreach event for any individual aged 15-17, wishing
            to participate in an EYP Cyprus event. Join us for a day of
            interactive Team-Building, immersive Committee Work and an engaging
            General Assembly!
          </EventTypeCard>
          <EventTypeCard
            className=" col-span-9 col-start-3 row-span-1 xl:max-w-4xl 2xl:max-w-5xl"
            title="Youth Summit"
            imageURL={ysLogo}
          >
            A 3-day conference inviting young individuals from 17-25 years old,
            to come together, discuss current affairs, exchange ideas and
            debate. No prior EYP experience is needed!
          </EventTypeCard>
          <EventTypeCard
            className=" col-span-9 col-start-4 row-span-1 xl:max-w-4xl 2xl:max-w-5xl"
            title="National Session"
            imageURL={nsLogo}
          >
            EYP Cyprus annual flagship event, welcoming over 200 participants to
            an intercultural space of interactive activities, productive
            dialogue and community!
          </EventTypeCard>
        </div>
      </Container>
      <WaveDivider.eventsTop />
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
          <ActionButton variant="link" text="School" href="/get-involved" />
          <ActionButton variant="link" text="Individual" href="/get-involved" />
        </div>
      </Container>
      <WaveDivider.eventsBottom />
      <Container className="mb-16 xl:mb-20 2xl:mb-32">
        <div className=" mb-16 flex justify-center">
          <Title text="Session Program" order="h2" />
        </div>

        <div className="flex flex-col items-center justify-center gap-20 xl:gap-40">
          <SessionElementCard
            className=" w-full md-lg:w-5/6 max-w-5xl"
            title="Teambuilding"
            imageURL={eventsTeamBuilding}
          >
            {TEAMBUILDING}
          </SessionElementCard>
          <SessionElementCard
            className=" w-full md-lg:w-5/6 max-w-5xl"
            title="Committee Work"
            imageURL={eventsCommitteeWork}
            reverse
          >
            {COMMITTEE_WORK}
          </SessionElementCard>
          <SessionElementCard
            className=" w-full md-lg:w-5/6 max-w-5xl"
            title="General Assembly"
            imageURL={eventsGeneralAssembly}
          >
            {GENERAL_ASSEMBLY}
          </SessionElementCard>
        </div>
      </Container>
    </>
  );
}
