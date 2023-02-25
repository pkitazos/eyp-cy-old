import React, { FC } from "react";
import { DividerBottom1, DividerTop1, Footer, Underline } from "../components";
import ActionButton from "../components/Base/ActionButton";
import { EventTypeCard } from "../components/Cards";
import SessionElementCard from "../components/Cards/SessionElementCard";

// TODO: seperate text into relevant pages
// TODO: set up sections and base components of page
// TODO: add blobs behind SessionElementCards
// TODO: add images to SessionElementCards
// TODO: finish "I want to participate" section
// TODO: create wave dividers

const Events: FC = () => {
  return (
    <>
      <div className='max-h-max min-h-[60vh] px-40'>
        <div className='mb-16 flex flex-col gap-2'>
          <h2 className='text-4xl font-semibold text-primary-800'>
            Our Events
          </h2>
          <Underline className='w-14 text-accent-900' />
        </div>
        <div className='grid shrink grid-cols-12 grid-rows-4 gap-16'>
          <div className='col-span-9 col-start-1 row-span-1'>
            <EventTypeCard
              title='Pre-Selection Days'
              image_url='/EventLogos/pre-selections.png'
              info='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
            />
          </div>
          <div className='col-span-9 col-start-2 row-span-1'>
            <EventTypeCard
              title='Days of EYP'
              info='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
              image_url='/EventLogos/days-of-eyp.png'
            />
          </div>
          <div className='col-span-9 col-start-3 row-span-1'>
            <EventTypeCard
              title='Youth Summit'
              info='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
              image_url='/EventLogos/youth-summit.png'
            />
          </div>
          <div className='col-span-9 col-start-4 row-span-1'>
            <EventTypeCard
              title='National Session'
              info='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
              image_url='/EventLogos/national-session.png'
            />
          </div>
        </div>
      </div>
      <DividerBottom1 />
      <div className='flex max-h-max min-h-[40vh] flex-col justify-around bg-primary-600 px-40 pt-10 text-white'>
        <div className='-mt-16 flex flex-col items-center gap-2'>
          <h2 className='text-4xl font-semibold text-white'>
            I want to participate as a ..
          </h2>
          <Underline className='w-14 rotate-180 text-orange-400' />
        </div>
        <div className='flex flex-row justify-center gap-24'>
          <ActionButton text='School' />
          <ActionButton text='Individual' />
        </div>
      </div>
      <DividerTop1 />
      <div className='max-h-max min-h-[60vh] px-40 pb-20'>
        <div className='mb-16 flex flex-col items-center gap-2'>
          <h2 className='text-4xl font-semibold text-primary-800'>
            Session Elements
          </h2>
          <Underline className='w-14 rotate-12 text-accent-900' />
        </div>
        <div className='grid grid-cols-11 grid-rows-3 items-center gap-10'>
          <SessionElementCard
            className='col-span-9 col-start-2 row-span-1'
            title='Teambuilding'
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
            className='col-span-9 col-start-2 row-span-1'
            title='Committee Work'
          >
            This is the central part of any EYP session. After team-building,
            the delegates come together to discuss their allocated topics, and
            will explore the skills needed to discuss, debate and communicate
            effectively within their committee. The goal of Committee work is
            the production of a strong and meaningful resolution, that will be
            debated upon during the General Assembly.
          </SessionElementCard>
          <SessionElementCard
            className='col-span-9 col-start-2 row-span-1'
            title='General Assembly'
          >
            The General Assembly reunites all the participants of the session to
            consider the results of committee work. Each committee presents and
            defends their motion for a resolution, which is then debated
            according to the current model of the European Parliament.
          </SessionElementCard>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Events;
