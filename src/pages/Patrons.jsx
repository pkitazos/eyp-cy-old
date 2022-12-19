import TextCard from "../components/Cards/TextCard";
// assets
import Patron4 from "../assets/images/PatronsPage/Patron4.jpg";
import Patron5 from "../assets/images/PatronsPage/Patron5.jpg";
import EventsPhoto1 from "../assets/images/EventsPage/EventsPhoto1.jpg";

const Patrons = () => {
  return (
    <>
      <img
        className='w-full h-[32rem] object-cover object-top bg-purple-600'
        src={EventsPhoto1}
        alt='...'
      />
      <div className='pt-28 pb-16 bg-white'>
        <TextCard title='Patrons' titleSize='text-4xl' center={true}>
          EYP Cyprus's work and impact is recognised by various high profile
          stakeholders in Cyprus, including our board of patrons which includes:
        </TextCard>
      </div>
      <div className='pb-16 px-10 flex flex-wrap justify-center gap-14 bg-white'>
        <div className='w-60 flex flex-col'>
          <div className='mb-3 h-60 w-60 bg-teal-600 rounded-full'>&nbsp;</div>
          <div className='mb-3 text-lg text-center'>Mr. Andreas Kettis</div>
          <div className='text-sm text-center text-gray-600 break-normal'>
            Head of the European Parliament Liaison Office in Cyprus
          </div>
        </div>
        <div className='w-60 flex flex-col'>
          <div className='mb-3 h-60 w-60 bg-teal-500 rounded-full'>&nbsp;</div>
          <div className='mb-3 text-lg text-center'>
            Mr. Panagiotis Sentonas
          </div>
          <div className='text-sm text-center text-gray-600 break-normal'>
            Commissioner for the Citizen
          </div>
        </div>
        <div className='w-60 flex flex-col'>
          <div className='mb-3 h-60 w-60 bg-teal-400 rounded-full'>&nbsp;</div>

          <div className='mb-3 text-lg text-center'>
            Ms. Antigoni Papaphilippou
          </div>
          <div className='text-sm text-center text-gray-600 break-normal'>
            Head of Public Relations of Antenna and President of THOC
          </div>
        </div>
        <div className='w-60 flex flex-col'>
          <div className='mb-3 h-60 w-60 bg-teal-300 rounded-full'>&nbsp;</div>

          <div className='mb-3 text-lg text-center'>
            Ms. Antigoni Papaphilippou
          </div>
          <div className='text-sm text-center text-gray-600 break-normal'>
            Head of Public Relations of Antenna and President of THOC
          </div>
        </div>
        <div className='w-60 flex flex-col'>
          <img
            className='mb-3 h-60 w-60 object-cover rounded-full'
            src={Patron4}
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
      <div className='py-16 px-10 md:px-24 flex flex-col justify-center bg-white'>
        <div className='h-0.5 w-24 self-center bg-primary-indigo-700'>
          &nbsp;
        </div>
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
      <div className='pb-28 px-10 flex flex-wrap justify-center gap-14 bg-white'>
        <div className='w-60 flex flex-col'>
          <img
            className='mb-3 h-60 w-60 object-cover rounded-full'
            src={Patron5}
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
    </>
  );
};

export default Patrons;
