import React, { FC } from "react";
import {
  BlankPage,
  Footer,
  SessionElementCard,
  TextCard,
  Underline,
} from "../components";

const NationalSession: FC = () => {
  return (
    <>
      <div className='grid max-h-max min-h-[60vh] grid-cols-12 px-40'>
        <div className='col-span-8 col-start-3'>
          <TextCard title='National Session' titleSize='text-4xl font-semibold'>
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
            title='Evening Activities'
          >
            To complement the academic elements of our sessions, our organising
            teams prepare unique evening programmes each year which engage
            participants and aim to provide a space for socialising and fun
            inter-team interactions
          </SessionElementCard>
          <SessionElementCard
            className='col-span-9 col-start-2 row-span-1'
            title='Discussing Europe'
          >
            Discussing Europe has been established as an annual happening at our
            sessions - an event welcoming various guests in a panel discussion
            centred around the session theme. During this event, participants
            have the opportunity to interact with professionals with expertise
            in the field, as well as experienced political figures.
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

export default NationalSession;
