import { Metadata } from "next";
import Image from "next/image";
import { Container, Divider, SessionElementCard, Title } from "~/components";

export const metadata: Metadata = {
  title: "EYP CY - Home",
};
export const runtime = "edge";

export default function NationalSession() {
  return (
    <>
      <Container className="mt-40 md:mt-20 lg:mt-16 flex justify-center">
        <div className="flex flex-col items-center gap-5 w-5/6 xl:w-2/3">
          <Image
            className="mb-5 w-48 md-lg:w-60"
            width={200}
            height={200}
            src="/assets/logo-national-session.png"
            alt=""
          />
          <div className=" flex justify-center">
            <Title text="National Session" order="h1" />
          </div>
          <p className=" text-justify text-lg leading-relaxed md:text-xl">
            National Sessions are our flagship, annual event which welcomes
            approximately 200 participants from all over Cyprus as well as
            participants from all over Europe. The conference takes place over 5
            days where young participants have the opportunity to discuss
            amongst teams, but also with experts and high profile decision
            makers, topics that Cyprus and Europe currently face. With the
            National Session being the biggest annual event organised by EYP
            Cyprus, its activities highlight the importance of teamwork,
            dialogue and cooperation and provide the young participants with an
            invaluable, eye-opening experience. The students, who are divided
            into 10 committees, are given a unique educational opportunity to
            discuss current European topics and come up with their own
            resolutions to these problems. This experience enables them to gain
            and develop invaluable skills as well as understand how policy
            making works at a European level. The event is supported by the
            European Parliament Office in Cyprus. This year the National Session
            will take place in July! You can get information by contacting us.
          </p>
        </div>
      </Container>
      <Divider className="mt-20 md:mt-28 xl:mt-32 mb-20 md:mb-32" />

      <Container className="mb-16 xl:mb-20 2xl:mb-32">
        <div className=" mb-3 flex justify-center">
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
            title="Committee Work"
            reverse={true}
            className=" w-full md-lg:w-5/6 max-w-5xl"
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
            title="Evening Activities"
            className=" w-full md-lg:w-5/6 max-w-5xl"
            imageURL="/assets/events-2.jpg"
          >
            To complement the academic elements of our sessions, our organising
            teams prepare unique evening programmes each year which engage
            participants and aim to provide a space for socialising and fun
            inter-team interactions
          </SessionElementCard>
          <SessionElementCard
            title="Discussing Europe"
            reverse={true}
            className=" w-full md-lg:w-5/6 max-w-5xl"
            imageURL="/assets/events-2.jpg"
          >
            Discussing Europe has been established as an annual happening at our
            sessions - an event welcoming various guests in a panel discussion
            centred around the session theme. During this event, participants
            have the opportunity to interact with professionals with expertise
            in the field, as well as experienced political figures.
          </SessionElementCard>
          <SessionElementCard
            title="General Assembly"
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
