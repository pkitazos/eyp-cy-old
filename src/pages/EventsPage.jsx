// components
import TextCard from "../components/Cards/TextCard";
import ContentCard from "../components/Cards/ContentCard";
// assets
import EventsPhoto1 from "../assets/images/EventsPage/EventsPhoto1.jpg";
import EventsPhoto2 from "../assets/images/EventsPage/EventsPhoto2.jpg";
import EventsPhoto3 from "../assets/images/EventsPage/EventsPhoto3.jpg";
import EventsPhoto4 from "../assets/images/EventsPage/EventsPhoto4.jpg";

export default function EventsPage() {
  return (
    <>
      <div className="w-full h-[32rem] bg-lime-600">&nbsp;</div>
      <div className="pt-28 pb-16 w-full flex flex-col justify-center gap-y-4 bg-white">
        <TextCard title="What We Do" titleSize="text-4xl">
          With non-formal education at the heart of our activities, we provide
          young people with a non-partisan and independent forum to formulate
          and discuss their opinions about current issues both with each other
          and relevant policy makers - all while developing vital skills!
          Through a wide range of activities - from conferences, workshops,
          think tanks, trainings, panel discussions among others EYP Cyprus also
          provides young people with spaces to connect with each other and build
          intercultural understanding and friendships across Cyprus and Europe.
          With 15+ events annually, and 500+ participants at our activities each
          year, our organisation is growing and reaching more and more young
          people! And with EYP Cyprus being part of the wider EYP Network
          present in 40+ countries in Europe, our members and alumni have the
          opportunity to join over 30,000 young people who take part in more
          than 500 EYP events organised across Europe every year.
        </TextCard>
      </div>

      {/* ------------------------------------------- PURPLE --------------------------------------------------------------------------------------------  */}
      <div className="w-full py-16 flex flex-col justify-center bg-white">
        <div
          className={`my-2 flex justify-center
          text-4xl text-primary-indigo`}
        >
          Our Events
        </div>
        <div className=" h-0.5 w-24 my-2 self-center bg-primary-indigo">
          &nbsp;
        </div>

        <div className="mt-20 flex flex-col justify-center gap-y-20">
          {/* ----------------------------------------- ORANGE ------------------------------------------------------------ */}
          <ContentCard
            title="Pre-Selection Days"
            imgSrc={EventsPhoto1}
            // debugColour="bg-orange-500"
          >
            The Pre-Selection Days of EYP Cyprus have been organised annually
            since 2010 and welcome about 22-26 school delegations for a 2 day
            conference where young people have the opportunity to discuss
            current European issues through a General Assembly. With about 180
            participants every year taking part in the event, the Pre-Selection
            Days serve as the first contact of young people with the
            organisation and it's an opportunity for 16 school delegations to be
            selected to attend our National Session. Pre-Selection Days 2021
            will take place between the 5th and 7th of March. You can get
            information on how to register by contacting us.
          </ContentCard>

          {/* ----------------------------------------- CYAN ------------------------------------------------------------ */}
          <ContentCard
            title="EYP Days"
            imgSrc={EventsPhoto2}
            reversed={true}
            // debugColour="bg-cyan-500"
          >
            The EYP Day was established in 2019 and takes place annually. It
            welcomed approximately 50 - 80 young people to a one day conference
            where they can discuss current issues. This event allows young
            people to join EYP's activities without having to attend as a school
            delegation. EYP Day 2021 will take place between the 3rd and 4th of
            April. You can get information on how to register by contacting us.
          </ContentCard>

          {/* ----------------------------------------- LIME ------------------------------------------------------------ */}
          <ContentCard
            title="National Sessions"
            imgSrc={EventsPhoto3}
            // debugColour="bg-lime-500"
          >
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
          </ContentCard>

          {/* ----------------------------------------- PINK ------------------------------------------------------------ */}
          <ContentCard
            title="Youth Summits"
            imgSrc={EventsPhoto4}
            reversed={true}
            // debugColour="bg-pink-500"
          >
            Youth Summits are 4-day conferences for university students and
            young adults who are 18+ years old. With the Youth Summit being one
            of our major events that usually take place in the Summer, it
            usually welcomes approximately 100 participants from all over Cyprus
            and all over Europe. The conference allows participants to discuss
            amongst teams, but also with experts and high profile decision
            makers, topics that Cyprus and Europe currently face. The event and
            its activities help participants develop invaluable skills both for
            their studies and early careers. Through teambuilding activities,
            Committee Work where teams discuss various important topics, their
            opinions and suggestions as well as through a General Assembly,
            participants develop their teamwork, cooperation, communication and
            public speaking skills. If you are interested in participating in
            the next Youth Summit, get in touch with with our HR officer at
            members@eypcyprus.com to find out more information.
          </ContentCard>
        </div>
      </div>
    </>
  );
}
