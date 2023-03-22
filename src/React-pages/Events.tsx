import type { FC } from "react";
import {
  ActionButton,
  DividerBottom1,
  DividerTop1,
  EventTypeCard,
  PageTitle,
  SessionElementCard,
  Underline,
} from "../components";

// TODO: add blobs behind SessionElementCards
// TODO: add images to SessionElementCards
// TODO: create wave dividers

const Events: FC = () => {
  return (
    <>
      <div className='page-margin max-h-max min-h-[60vh]'>
        <PageTitle
          title='Our Events'
          className='mb-16 items-center text-center lg:items-start lg:text-left'
        />
        <div className='flex shrink flex-col gap-16 px-6 sm:px-8 md:px-16 lg:grid lg:grid-cols-12 lg:grid-rows-4'>
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
      <div className='page-padding flex max-h-max min-h-[40vh] flex-col justify-around bg-primary-600 pt-10 text-white'>
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
      <div className='page-margin max-h-max min-h-[60vh] pb-20'>
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
    </>
  );
};

export default Events;
