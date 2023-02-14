import React, { FC } from "react";
import { TextCard } from "../components";
import { PatronCard } from "../components";

const PatronsAndPartners: FC = () => {
  return (
    <>
      <div className='bg-default-white pt-28 pb-16'>
        <TextCard title='Patrons' titleSize='text-4xl' center={true}>
          EYP Cyprus's work and impact is recognised by various high profile
          stakeholders in Cyprus, including our board of patrons which includes:
        </TextCard>
      </div>
      <div className='flex flex-wrap justify-center gap-14 bg-default-white px-10 pb-16'>
        <PatronCard
          name='Mr. Andreas Kettis'
          title='Head of the European Parliament Liaison Office in Cyprus'
        />
        <PatronCard
          name='Mr. Panagiotis Sentonas'
          title='Commissioner for the Citizen'
        />
        <PatronCard
          name='Ms. Antigoni Papaphilippou'
          title='Head of Public Relations of Antenna and President of THOC'
        />
        <div className='flex w-60 flex-col'>
          <img
            className='mb-3 h-60 w-60 rounded-full object-cover'
            src={"Patron4"}
            alt='...'
          />
          <div className='mb-3 text-center text-lg'>
            Mr. Constantinos Yiorkadjis
          </div>
          <div className='break-normal text-center text-sm text-gray-600'>
            Mayor of Nicosia
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center bg-default-white py-16 px-10 md:px-24'>
        <div className='h-0.5 w-24 self-center bg-primary-700'>&nbsp;</div>
        <div className='my-8 text-center text-xl'>
          Our patrons' support highlights the value of our organisation's work.
          They also provide invaluable guidance and active support for our
          events and our workings, both by providing advice, support and also
          attending various of our events.
        </div>
        <div className='mt-8 text-center text-xl'>
          The international EYP Network also has some key high profile
          stakeholders that are engaged with and recognise the importance of its
          activities. These patrons include:
        </div>
      </div>
      <div className='flex flex-wrap justify-center gap-14 bg-default-white px-10 pb-28'>
        <div className='flex w-60 flex-col'>
          <img
            className='mb-3 h-60 w-60 rounded-full object-cover'
            src={"Patron5"}
            alt='...'
          />
          <div className='mb-3 text-center text-lg'>Ursula von der Leyen</div>
          <div className='break-normal text-center text-sm text-gray-600'>
            President of the European Commission
          </div>
        </div>
        <div className='flex w-60 flex-col'>
          <div className='mb-3 h-60 w-60 rounded-full bg-teal-400'>&nbsp;</div>
          <div className='mb-3 text-center text-lg'>Roberta Metsola</div>
          <div className='break-normal text-center text-sm text-gray-600'>
            President of the European Parliament
          </div>
        </div>
      </div>
    </>
  );
};

export default PatronsAndPartners;
