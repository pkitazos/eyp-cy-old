import React, { FC } from "react";
import { TextCard } from "../components";
import { PatronCard } from "../components";
import { StandardLayout } from "../layouts";

const PatronsAndPartners: FC = () => {
  return (
    <StandardLayout>
      <div className='pt-28 pb-16 bg-default-white'>
        <TextCard title='Patrons' titleSize='text-4xl' center={true}>
          EYP Cyprus's work and impact is recognised by various high profile
          stakeholders in Cyprus, including our board of patrons which includes:
        </TextCard>
      </div>
      <div className='pb-16 px-10 flex flex-wrap justify-center gap-14 bg-default-white'>
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
        <div className='w-60 flex flex-col'>
          <img
            className='mb-3 h-60 w-60 object-cover rounded-full'
            src={"Patron4"}
            alt='...'
          />
          <div className='mb-3 text-lg text-center'>
            Mr. Constantinos Yiorkadjis
          </div>
          <div className='text-sm text-center text-gray-600 break-normal'>
            Mayor of Nicosia
          </div>
        </div>
      </div>
      <div className='py-16 px-10 md:px-24 flex flex-col justify-center bg-default-white'>
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
      <div className='pb-28 px-10 flex flex-wrap justify-center gap-14 bg-default-white'>
        <div className='w-60 flex flex-col'>
          <img
            className='mb-3 h-60 w-60 object-cover rounded-full'
            src={"Patron5"}
            alt='...'
          />
          <div className='mb-3 text-lg text-center'>Ursula von der Leyen</div>
          <div className='text-sm text-center text-gray-600 break-normal'>
            President of the European Commission
          </div>
        </div>
        <div className='w-60 flex flex-col'>
          <div className='mb-3 h-60 w-60 bg-teal-400 rounded-full'>&nbsp;</div>
          <div className='mb-3 text-lg text-center'>Roberta Metsola</div>
          <div className='text-sm text-center text-gray-600 break-normal'>
            President of the European Parliament
          </div>
        </div>
      </div>
    </StandardLayout>
  );
};

export default PatronsAndPartners;
