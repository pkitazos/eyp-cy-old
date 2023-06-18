import RootLayout from "~/app/layout";
import { SessionElementCard, Title } from "~/components";

export default function DaysOfEYP() {
  return (
    <RootLayout>
      <section className="page-margin mt-16 flex max-h-max min-h-[60vh] justify-center">
        <div className="w-5/6 max-w-4xl xl:w-2/3">
          <div className="hide-left flex justify-center">
            <Title text="Days of EYP" order="h1" />
          </div>
          <p className="hide-left delay-card text-justify text-lg leading-relaxed md:text-xl">
            The EYP Day was established in 2019 and takes place annually. It
            welcomed approximately 50 - 80 young people to a one day conference
            where they can discuss current issues. This event allows young
            people to join EYP's activities without having to attend as a school
            delegation. EYP Day 2021 will take place between the 3rd and 4th of
            April. You can get information on how to register by contacting us.
          </p>
        </div>
      </section>
      <section className="page-margin max-h-max min-h-[60vh] xl:mb-20 2xl:mb-32">
        <div className="hide-bottom mb-3 flex justify-center">
          <Title text="Session Program" order="h2" />
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <SessionElementCard
            className="hide-right delay-card w-5/6 max-w-5xl"
            title="Teambuilding"
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
            className="hide-left delay-card w-5/6 max-w-5xl"
            title="Committee Work"
            titlePosition="text-right"
          >
            This is the central part of any EYP session. After team-building,
            the delegates come together to discuss their allocated topics, and
            will explore the skills needed to discuss, debate and communicate
            effectively within their committee. The goal of Committee work is
            the production of a strong and meaningful resolution, that will be
            debated upon during the General Assembly.
          </SessionElementCard>
          <SessionElementCard
            className="hide-right delay-card w-5/6 max-w-5xl"
            title="General Assembly"
          >
            The General Assembly reunites all the participants of the session to
            consider the results of committee work. Each committee presents and
            defends their motion for a resolution, which is then debated
            according to the current model of the European Parliament.
          </SessionElementCard>
        </div>
      </section>
    </RootLayout>
  );
}
