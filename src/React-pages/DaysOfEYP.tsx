import type { FC } from "react";
import { SessionElementCard, TextCard, Underline } from "../components";

const DaysOfEYP: FC = () => {
  return (
    <>
      <div className='grid max-h-max min-h-[60vh] grid-cols-12 px-40'>
        <div className='col-span-8 col-start-3'>
          <TextCard title='Days of EYP' titleSize='text-4xl font-semibold'>
            The EYP Day was established in 2019 and takes place annually. It
            welcomed approximately 50 - 80 young people to a one day conference
            where they can discuss current issues. This event allows young
            people to join EYP's activities without having to attend as a school
            delegation. EYP Day 2021 will take place between the 3rd and 4th of
            April. You can get information on how to register by contacting us.
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

export default DaysOfEYP;
