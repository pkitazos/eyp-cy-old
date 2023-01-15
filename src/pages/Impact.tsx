import React, { FC } from "react";
import { ContentCard, TextCard } from "../components";
import { StandardLayout } from "../layouts";

const Impact: FC = () => {
  return (
    <StandardLayout>
      <div className='pt-28 pb-16 w-full flex flex-col justify-center gap-y-4 bg-default-white'>
        <TextCard title='Our Impact' titleSize='text-4xl'>
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
      </div>
      <div className='pt-28 pb-16 w-full flex flex-col justify-center gap-y-4 bg-default-white'>
        <div className='flex justify-center text-4xl text-primary-700'>
          What our impact looks like
        </div>
        <div className='h-0.5 w-24 self-center bg-primary-700'>&nbsp;</div>

        <div className='mt-16 flex flex-col justify-center gap-y-20'>
          {/* --------------------------------------------------------------- LIME ---------------------------------------------------------------------- */}
          <ContentCard
            // debugColour="bg-lime-500"
            title={"Forming opinions and solving current challenges"}
            imgSrc={"ImpactPhoto1"}
          >
            Every year, the EYP Cyprus engages 500+ young people from across
            Cyprus and Europe in a welcoming, independent, non-partisan
            environment to develop and express their opinions and put forth
            their suggestions to tackle current social, economic, legal,
            political and environmental challenges.
          </ContentCard>

          {/* --------------------------------------------------------------- PURPLE ---------------------------------------------------------------------- */}
          <ContentCard
            // debugColour="bg-purple-500"
            title={"Developing skills and growing as a person"}
            imgSrc={"ImpactPhoto2"}
            reversed={true}
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
          </ContentCard>

          {/* --------------------------------------------------------------- ORANGE ---------------------------------------------------------------------- */}
          <ContentCard
            // debugColour="bg-orange-500"
            title={
              "Engaging with current topics in dialogue with decision-makers"
            }
            imgSrc={"ImpactPhoto3"}
          >
            During most of our events, we work hard to bring young people
            together with decision makers and experts. Participants at our
            events often have the chance to discuss in a round table format with
            key policy makers a wide range of topics, such as international
            politics, human rights, climate change, health and energy.
            High-ranking national and European politicians and decision-makers
            regularly attend our events and interact with our participants and
            hear what young people's opinions and vision for the future are.
          </ContentCard>

          {/* --------------------------------------------------------------- BLUE ---------------------------------------------------------------------- */}
          <ContentCard
            // debugColour="bg-blue-500"
            title={
              "Building a network and facilitating intercultural understanding"
            }
            imgSrc={"ImpactPhoto4"}
            reversed={true}
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
          </ContentCard>

          {/* --------------------------------------------------------------- PINK ---------------------------------------------------------------------- */}
          <ContentCard
            // debugColour="bg-pink-500"
            title={"Empowering young, active citizens"}
            imgSrc={"ImpactPhoto5"}
          >
            As a result of our events, more than 90% of participants indicate an
            increased willingness to actively get involved in society and
            politics. Participants have the chance through discussing current
            affairs to become more passionate around them - evident from how
            many of them get involved in other relevant NGOs. At the same time,
            they feel a renewed sense of active citizenship which translates to
            many of them becoming volunteers in our organisation, helping run
            and facilitate our events.
          </ContentCard>

          {/* --------------------------------------------------------------- AMBER ---------------------------------------------------------------------- */}
          <ContentCard
            // debugColour="bg-amber-500"
            title={"Traveling and International Opportunities"}
            imgSrc={"ImpactPhoto6"}
            reversed={true}
          >
            Through joining some of our events, participants have the chance to
            be selected and participate in International Sessions in 40+
            European countries. We give the chance to over 50+ of our
            participants and alumni to travel abroad to international
            conferences and events to take part in unique educational
            experiences and make international friendships.
          </ContentCard>
        </div>
      </div>{" "}
    </StandardLayout>
  );
};

export default Impact;
