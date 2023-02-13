import React, { FC } from "react";
import { Link } from "react-router-dom";
import {
  AnchorArrow,
  DividerBottom1,
  DividerTop1,
  Footer,
  TestimonialSection,
  TextCard,
  Underline,
  UpcomingEventCard,
} from "../components";

// TODO: add footer content
// TODO: replace anchor arrows with custom curved arrows
// TODO: fix testimonial section component
// TODO: add microinteractions to section heading underline
// TODO: fix main diagonal wave
// TODO: animate remaining waves
// TODO: fix call to action button hover effect
// TODO: fix nav menu hover effect
// TODO: make main logo bigger
// TODO: increase jump to top duration
// TODO: add masked image to the side of "Who We Are" section
// TODO: add parallax background (similar to Railway.app)

const Home: FC = () => {
  return (
    <>
      <div
        id='section1'
        className={`w-full h-[90vh] top-[10%] absolute flex flex-col gap-6`}
      >
        <div className='mt-16 xl:mt-24 2xl:mt-32 gap-10 grid grid-cols-12 grid-rows-2'>
          <div className='w-max row-start-1 col-start-2 text-white text-7xl font-bold'>
            Welcome to
          </div>
          <div className='w-max row-start-2 col-start-3 text-accent-900 text-7xl font-bold'>
            Young Europe
          </div>
        </div>
        <div className='mt-10 md:mt-12 lg:mt-16 xl:mt-16 2xl:mt-32 flex items-center'>
          <Link
            to='/get-involved'
            className={` 
          mx-auto w-max
          py-5 px-9 text-xl hover:py-6 hover:px-10
          md:py-6 md:px-9 md:text-2xl md:hover:py-7 md:hover:px-10 
          lg:py-7 lg:px-10 lg:text-2xl lg:hover:py-8 lg:hover:px-12 
          xl:py-7 xl:px-10 xl:text-3xl xl:hover:py-8 xl:hover:px-12  
          transition-all duration-300 
          font-semibold bg-accent-900 cursor-pointer rounded-full`}
          >
            Join Us
          </Link>
        </div>
        <div className='mr-64 flex justify-end'>
          <AnchorArrow anchorRef='#section2' />
        </div>
      </div>
      {/* ------------------------------------------------------------ */}
      <div
        id='section2'
        className='-mb-16 pt-16 min-h-[60vh] max-h-max grid grid-cols-12'
      >
        <div className='z-20 col-start-3 col-span-6'>
          <TextCard title='Who We Are' titleSize='font-semibold text-4xl'>
            The European Youth Parliament (EYP) is a non-partisan and
            independent educational platform bringing together thousands of
            young people from all over Europe to discuss current issues, develop
            their skills through dialogue and cooperation, as well as empower
            them to positively shape the world around them..
            <br />
            <br />
            The European Youth Parliament Cyprus is a non-governmental,
            non-partisan organisation and one of the 41 National Committees that
            come under the umbrella of the Pan-European EYP Network. EYP Cyprus
            was established in 2006 and has been actively working to organise
            events and activities catered towards the youth of Cyprus.
          </TextCard>
        </div>
        <div className='z-20 col-start-10 place-self-end'>
          <AnchorArrow anchorRef='#section3' />
        </div>
      </div>
      {/* ------------------------------------------------------------ */}
      <DividerBottom1 />
      <div id='section3' className='pt-12 min-h-[60vh] bg-primary-600'>
        <div className='mx-32'>
          <div className='mb-16 flex justify-end'>
            <div className='flex flex-col items-center gap-4 w-max h-max'>
              <div className='text-white text-4xl font-semibold'>
                Upcoming Events
              </div>
              <Underline className='w-14 rotate-180 text-accent-900' />
            </div>
          </div>
          <div className='flex'>
            <div className='w-1/6'>
              <AnchorArrow anchorRef='#section4' />
            </div>
            <div className='p-5 w-5/6 overflow-x-scroll h-max flex flex-row gap-9'>
              <div className='basis-1/4'>
                <UpcomingEventCard
                  title='Pre-Selection Days'
                  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod et dolore magna aliqua.'
                  imageURL='/EventsPage/EventsPhoto1.jpg'
                  date={"20/03/2023"}
                />
              </div>
              <div className='basis-1/4'>
                <UpcomingEventCard
                  title='Days of EYP'
                  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod et dolore magna aliqua.'
                  imageURL='/EventsPage/EventsPhoto2.jpg'
                  date={"27/03/2023"}
                />
              </div>
              <div className='basis-1/4'>
                <UpcomingEventCard
                  title='Youth Summit'
                  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod et dolore magna aliqua.'
                  imageURL='/EventsPage/EventsPhoto3.jpg'
                  date={"16/07/2023"}
                />
              </div>
              <div className='basis-1/4'>
                <UpcomingEventCard
                  title='National Session'
                  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod et dolore magna aliqua.'
                  imageURL='/EventsPage/EventsPhoto4.jpg'
                  date={"24/08/2023"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <DividerTop1 />
      {/* ------------------------------------------------------------ */}
      <div id='section4' className='pt-12 min-h-[50vh] max-h-max'>
        <div className='-mb-20 mx-32'>
          <div className='mb-16 flex justify-start'>
            <div className='flex flex-col items-center gap-4 w-max h-max'>
              <h2 className='text-primary-800 text-4xl font-semibold'>
                Testimonials
              </h2>
              <Underline className='w-14 h-max text-orange-600 rotate-12' />
            </div>
          </div>
          <TestimonialSection />
        </div>
        <AnchorArrow anchorRef='#section1' />
      </div>
      <Footer />
    </>
  );
};

export default Home;
