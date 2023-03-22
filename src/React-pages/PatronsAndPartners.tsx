import type { FC } from "react";
import {
  DividerBottom1,
  DividerTop1,
  PageTitle,
  PatronCard,
  Underline,
} from "../components";

// TODO: add quantity query functionality
// TODO: add ArrowAnchors to other page sections
// TODO: add Patron Images
// TODO: add Partners info in Partners Section
// TODO: design and add correct arrows for middle section
// fix on each page
// TODO: animate remaining waves
// TODO: add microinteractions to section heading underline
// TODO: make and vary underlines

const PatronsAndPartners: FC = () => {
  return (
    <>
      <div className='page-margin max-h-max min-h-[60vh]'>
        <PageTitle
          title='Our Patrons & Partners'
          className='mb-16 items-center text-center'
        />
        <div className='mb-16 flex flex-col items-center gap-2'>
          <h2 className='text-4xl font-semibold text-primary-800'>
            Board of Patrons
          </h2>
          <Underline className='w-12 text-accent-900' />
          <p className='mt-6 text-center text-lg'>
            EYP Cyprus's work and impact is recognised by various high profile
            stakeholders in Cyprus, including our board of patrons which
            includes
          </p>
        </div>
        <div className='flex flex-wrap justify-center gap-16'>
          <PatronCard
            name='Mr. Andreas Kettis'
            title='Head of the European Parliament Liaison Office in Cyprus'
          />
          <PatronCard
            name='Mr. Yiannis Yiannaki'
            title='Commissioner of Volunteerism and NGOs'
          />
          <PatronCard
            name='Ms. Antigoni Papaphilippou'
            title='Head of Public Relations of Antenna and President of THOC'
          />
          <PatronCard
            name='Mr. Constantinos Yiorkadjis'
            title='Mayor of Nicosia'
          />
        </div>
        <p className='mt-16 text-center text-lg'>
          Our patrons' support highlights the value of our organisation's work.
          They also provide invaluable guidance and active support for our
          events and our workings, both by providing advice, support and also
          attending various of our events.
        </p>
      </div>
      <DividerBottom1 />
      <div className='page-padding max-h-max min-h-[60vh] bg-primary-800 pt-16 pb-24'>
        <div className='flex h-max w-full flex-col items-center justify-center gap-4 md-lg:w-max'>
          <h2 className='text-4xl font-semibold text-white'>EU Wide Patrons</h2>
          <Underline className='w-14 rotate-12 text-orange-600' />
        </div>
        <p className='my-16 text-lg text-zinc-200'>
          The international EYP Network also has some key high profile
          stakeholders that are engaged with and recognise the importance of its
          activities.
        </p>
        <div className='flex flex-wrap justify-evenly gap-x-5 gap-y-14'>
          <PatronCard
            name='Ursula von der Leyen'
            title='President of the European Commission'
            invert={true}
          />
          <PatronCard
            name='Roberta Metsola'
            title='President of the European Parliament'
            invert={true}
          />
        </div>
      </div>
      <DividerTop1 />
      <div className='page-margin max-h-max min-h-[60vh]'>
        <h2 className='text-4xl font-semibold text-primary-800'>
          Our Partners
        </h2>
        <Underline className='w-14 rotate-12 text-accent-900' />
        <div>&nbsp;</div>
      </div>
    </>
  );
};

export default PatronsAndPartners;
