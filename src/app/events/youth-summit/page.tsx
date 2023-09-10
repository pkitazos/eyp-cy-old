import { SessionElementCard, Title } from "~/components";

export default function YouthSummit() {
  return (
    <>
      <section className="page-margin mt-16 flex max-h-max min-h-[60vh] justify-center">
        <div className="w-5/6 max-w-4xl xl:w-2/3">
          <div className="hide-left flex justify-center">
            <Title text="Youth Summit" order="h1" />
          </div>
          <p className="hide-left delay-card text-justify text-lg leading-relaxed md:text-xl">
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
          </p>
        </div>
      </section>
      <section className="page-margin mt-32 max-h-max min-h-[60vh] xl:mb-20 2xl:mb-32">
        <div className="hide-bottom flex justify-center">
          <Title text="Session Program" order="h2" />
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <SessionElementCard
            title="Teambuilding"
            imageURL="/assets/events-2.jpg"
            className="hide-right delay-card w-5/6 max-w-5xl"
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
            titlePosition="text-right"
            imageURL="/assets/events-2.jpg"
            className="hide-left delay-card w-5/6 max-w-5xl"
          >
            This is the central part of any EYP session. After team-building,
            the delegates come together to discuss their allocated topics, and
            will explore the skills needed to discuss, debate and communicate
            effectively within their committee. The goal of Committee work is
            the production of a strong and meaningful resolution, that will be
            debated upon during the General Assembly.
          </SessionElementCard>
          <SessionElementCard
            title="Discussing Europe"
            imageURL="/assets/events-2.jpg"
            className="hide-right delay-card w-5/6 max-w-5xl"
          >
            Discussing Europe has been established as an annual happening at our
            sessions - an event welcoming various guests in a panel discussion
            centred around the session theme. During this event, participants
            have the opportunity to interact with professionals with expertise
            in the field, as well as experienced political figures.
          </SessionElementCard>
          <SessionElementCard
            title="General Assembly"
            titlePosition="text-right"
            imageURL="/assets/events-2.jpg"
            className="hide-left delay-card w-5/6 max-w-5xl"
          >
            The General Assembly reunites all the participants of the session to
            consider the results of committee work. Each committee presents and
            defends their motion for a resolution, which is then debated
            according to the current model of the European Parliament.
          </SessionElementCard>
        </div>
      </section>
    </>
  );
}
