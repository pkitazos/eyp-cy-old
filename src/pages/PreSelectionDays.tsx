import React, { FC } from "react";
import {
  BlankPage,
  Footer,
  SessionElementCard,
  TextCard,
  Underline,
} from "../components";

const PreSelectionDays: FC = () => {
  return (
    <>
      <div className='grid max-h-max min-h-[60vh] grid-cols-12 px-40'>
        <div className='col-span-8 col-start-3'>
          <TextCard
            title='Pre-Selection Days'
            titleSize='text-4xl font-semibold'
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
          </TextCard>
        </div>
      </div>
      <div className='max-h-max min-h-[60vh] px-40'>
        <div className='mb-16 flex flex-col gap-2'>
          <h2 className='text-4xl font-semibold text-primary-800'>Coming Up</h2>
          <Underline className='w-14 text-accent-900' />
        </div>
        <div>
          <p>something something</p>
        </div>
      </div>
      <div className='max-h-max min-h-[60vh] px-40'>
        <div className='mb-16 flex flex-col items-center gap-2'>
          <h2 className='text-4xl font-semibold text-primary-800'>
            Session Program
          </h2>
          <Underline className='w-14 text-accent-900' />
        </div>
        <div className='grid grid-cols-11 grid-rows-2 items-center gap-10'>
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

export default PreSelectionDays;
