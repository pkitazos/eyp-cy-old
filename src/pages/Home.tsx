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

// TODO: fix main diagonal wave
// TODO: fix testimonial section component
// TODO: fix call to action button hover effect
// TODO: increase jump to top duration
// TODO: add masked image to the side of "Who We Are" section
// fix on each page
// TODO: animate remaining waves
// TODO: add microinteractions to section heading underline
// TODO: replace anchor arrows with custom curved arrows
// fix once, applied everywhere
// TODO: add footer content
// TODO: fix nav menu hover effect
// TODO: make main logo bigger
// TODO: add parallax background (similar to Railway.app)
// TODO: fix header positioning/make sticky

const Home: FC = () => {
  return (
    <>
      <div
        id='section1'
        className={`absolute top-[10%] flex h-[90vh] w-full flex-col gap-6`}
      >
        <div className='mt-16 grid grid-cols-12 grid-rows-2 gap-10 xl:mt-24 2xl:mt-32'>
          <div className='col-start-2 row-start-1 w-max text-7xl font-bold text-white'>
            Welcome to
          </div>
          <div className='col-start-3 row-start-2 w-max text-7xl font-bold text-accent-900'>
            Young Europe
          </div>
        </div>
        <div className='mt-10 flex items-center md:mt-12 lg:mt-16 xl:mt-16 2xl:mt-32'>
          <Link
            to='/get-involved'
            className={` 
          mx-auto w-max
          cursor-pointer rounded-full bg-accent-900 py-5 px-9
          text-xl font-semibold transition-all duration-300 hover:py-6 
          hover:px-10 md:py-6 md:px-9 md:text-2xl md:hover:py-7 
          md:hover:px-10 lg:py-7 lg:px-10 lg:text-2xl lg:hover:py-8  
          lg:hover:px-12 xl:py-7 
          xl:px-10 xl:text-3xl xl:hover:py-8 xl:hover:px-12`}
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
        className='-mb-16 grid max-h-max min-h-[60vh] grid-cols-12 pt-16'
      >
        <div className='z-20 col-span-6 col-start-3'>
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
      <div id='section3' className='min-h-[60vh] bg-primary-600 pt-12'>
        <div className='mx-32'>
          <div className='mb-16 flex justify-end'>
            <div className='flex h-max w-max flex-col items-center gap-4'>
              <div className='text-4xl font-semibold text-white'>
                Upcoming Events
              </div>
              <Underline className='w-14 rotate-180 text-accent-900' />
            </div>
          </div>
          <div className='flex'>
            <div className='w-1/6'>
              <AnchorArrow anchorRef='#section4' />
            </div>
            <div className='flex h-max w-5/6 flex-row gap-9 overflow-x-scroll p-5'>
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
      <div id='section4' className='max-h-max min-h-[50vh] pt-12'>
        <div className='mx-32 -mb-20'>
          <div className='mb-16 flex justify-start'>
            <div className='flex h-max w-max flex-col items-center gap-4'>
              <h2 className='text-4xl font-semibold text-primary-800'>
                Testimonials
              </h2>
              <Underline className='h-max w-14 rotate-12 text-orange-600' />
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
