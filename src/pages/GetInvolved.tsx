import React, { FC } from "react";
import { TextCard, Underline } from "../components";

const GetInvolved: FC = () => {
  return (
    <>
      <div className='flex flex-col px-40'>
        <TextCard title='Get Involved' titleSize='mt-16 text-5xl font-semibold'>
          The European Youth Parliament Cyprus offers its participants a unique
          learning experience. Every year, 500+ young people from both Cyprus
          and Europe join our activities. There are various ways to get involved
          - typically, the first step is to participate in one of our EYP
          sessions which take place throughout the year. At the same time, we
          hold various open events, discussion forums, workshops, trainings and
          panel discussions which you can join! Get in touch and follow us on
          social media to keep up to date with opportunities to take part in our
          activities.
        </TextCard>
        <div className='mt-28 grid grid-cols-2 gap-16'>
          <div className='flex flex-col items-center gap-4'>
            <div className='text-3xl text-primary-700'>
              High-School Students
            </div>
            <Underline className='w-12 text-orange-500' />

            <div className='text-justify text-xl'>
              If you are a High-School Student aged 15-18, you can register
              individually to attend our EYP Day. If your school is interested
              in applying as a delegation of six students, then you are able to
              attend our Pre-Selection Days. Both events usually take place in
              March and April. Through these events, you could be selected to
              attend EYP Cyprus' annual National Session in the Summer. If you
              are interested in attending either of these events, you can
              contact our HR members@eypcyprus.com to declare your interest or
              ask for further details.
            </div>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <div className='text-3xl text-primary-700'>Young Adults</div>
            <Underline className='w-12 text-fuchsia-500' />

            <div className='text-justify text-xl'>
              If you are a university student or over 18 years old, you can
              attend our Youth Summit - a 4 day long conference that often takes
              place in the Summer. If you are interested in attending this
              event, you can contact our HR members@eypcyprus.com to declare
              your interest or ask for further details.
            </div>
          </div>
        </div>

        <div className='mb-28'>
          <TextCard title='General, Open Events' titleSize='mt-16 text-4xl'>
            We hold various events throughout the year that are open to any
            young person interested. From conferences, to panel discussions,
            workshops, trainings and other events, you can attend any of these
            events. To do so keep an eye out in our social media platforms or
            contact our HR members@eypcyprus.com to declare your interest so you
            are notified when an opportunity arises.
          </TextCard>
        </div>
      </div>
    </>
  );
};

export default GetInvolved;
