import type { FC } from "react";
import { ImpactFlipCard, Footer, TextCard, Underline } from "../components";

const Impact: FC = () => {
  return (
    <>
      <div className='mb-20 flex flex-col justify-center gap-20 px-40'>
        <TextCard title='Our Impact' titleSize='text-5xl font-semibold'>
          The European Youth Parliament Cyprus provides a unique educational
          experience to young people from both Cyprus and Europe to develop
          crucial skills, but also to discuss current issues in a safe,
          non-partisan and independent forum. Through EYP Cyprus, young people
          are given the tools and the space to develop and express their
          opinions, and are equipped with the knowledge and skills needed to
          positively impact the world around them. We work to engage young
          people with policy makers and experts, to further empower them to make
          their opinions heard and become active citizens in society. At the
          same time, participants at our events are given the opportunity to
          develop key skills for their educational and professional life
          including among others their communication, leadership, team work,
          planning, and analytical skills. As such, our activities have a
          measurable impact on young people across Europe.
        </TextCard>

        <div className='mt-10 flex flex-col gap-32'>
          <div className='-mb-10 flex flex-col items-center gap-2'>
            <h2 className='text-4xl font-semibold text-primary-800'>
              What our Impact looks like
            </h2>
            <Underline className='w-12 text-accent-900' />
          </div>
          <ImpactFlipCard
            title='Forming opinions and solving current challenges'
            imageURL='/Impact/ImpactPhoto2.jpg'
            underline='text-sky-500 rotate-[6deg]'
          >
            Every year, the EYP Cyprus engages 500+ young people from across
            Cyprus and Europe in a welcoming, independent, non-partisan
            environment to develop and express their opinions and put forth
            their suggestions to tackle current social, economic, legal,
            political and environmental challenges.
          </ImpactFlipCard>
          <ImpactFlipCard
            title='Developing skills and growing as a person'
            imageURL='/Impact/ImpactPhoto1.jpg'
            reversed={true}
            underline='text-lime-500 rotate-[186deg]'
          >
            EYP Cyprus encourages independent thinking and initiative amongst
            young people and facilitates the learning of crucial social and
            professional skills. These include teamwork, tolerance and
            problem-solving, as well as communication and leadership skills.
            Through our activities, young people get the chance to take on
            various roles of responsibilities - from managing projects and
            events, to leading teams and facilitating discussions. These are
            unique opportunities for each participant to develop and grow their
            skillset.
          </ImpactFlipCard>
          <ImpactFlipCard
            title='Engaging with current topics in dialogue with decision-makers'
            imageURL='/Impact/ImpactPhoto3.jpg'
            underline='text-orange-500 rotate-[12deg]'
          >
            During most of our events, we work hard to bring young people
            together with decision makers and experts. Participants at our
            events often have the chance to discuss in a round table format with
            key policy makers a wide range of topics, such as international
            politics, human rights, climate change, health and energy.
            High-ranking national and European politicians and decision-makers
            regularly attend our events and interact with our participants and
            hear what young people's opinions and vision for the future are.
          </ImpactFlipCard>
          <ImpactFlipCard
            title='Building a network and facilitating intercultural understanding'
            imageURL='/Impact/ImpactPhoto4.jpg'
            reversed={true}
            underline='text-emerald-500'
          >
            Through taking part in an EYP Cyprus event, young people have the
            chance to join a network of active alumni and volunteers both in
            Cyprus and Europe. We introduce participants to a network of young
            people with which they can connect with and reach out for support
            for any issues including academic, professional and other matters.
            With participants of our events coming from 40+ European countries,
            young people through our activities also have a chance to develop
            their intercultural understanding and build international
            friendships.
          </ImpactFlipCard>
          <ImpactFlipCard
            title='Empowering young, active citizens'
            imageURL='/Impact/ImpactPhoto5.jpg'
            underline='text-fuchsia-500 rotate-[178deg]'
          >
            As a result of our events, more than 90% of participants indicate an
            increased willingness to actively get involved in society and
            politics. Participants have the chance through discussing current
            affairs to become more passionate around them - evident from how
            many of them get involved in other relevant NGOs. At the same time,
            they feel a renewed sense of active citizenship which translates to
            many of them becoming volunteers in our organisation, helping run
            and facilitate our events.
          </ImpactFlipCard>

          <ImpactFlipCard
            title='Traveling and International Opportunities'
            imageURL='/Impact/ImpactPhoto6.jpg'
            reversed={true}
            underline='rotate-[20deg] text-accent-900'
          >
            Through joining some of our events, participants have the chance to
            be selected and participate in International Sessions in 40+
            European countries. We give the chance to over 50+ of our
            participants and alumni to travel abroad to international
            conferences and events to take part in unique educational
            experiences and make international friendships.
          </ImpactFlipCard>
        </div>
      </div>
    </>
  );
};

export default Impact;
