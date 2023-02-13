import React, { FC } from "react";
import { Link } from "react-router-dom";
import { AnchorArrow, CaretLeft, CaretRight, Footer } from "../components";
import { TestimonialCard, TextCard } from "../components/Cards";
import { DividerBottom1, DividerTop1 } from "../components/Dividers";

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
          <TextCard title='Who We Are' titleSize='text-3xl'>
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
          <div className='mb-16 text-right text-white text-3xl font-semibold'>
            Upcoming Events
          </div>
          <div className='flex'>
            <div className='w-1/6'>
              <AnchorArrow anchorRef='#section4' />
            </div>
            <div className='w-5/6 flex flex-row gap-9'>
              <div className='basis-1/4 bg-amber-500 w-40 h-40'>&nbsp;</div>
              <div className='basis-1/4 bg-amber-500 w-40 h-40'>&nbsp;</div>
              <div className='basis-1/4 bg-amber-500 w-40 h-40'>&nbsp;</div>
              <div className='basis-1/4 bg-amber-500 w-40 h-40'>&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
      <DividerTop1 />
      {/* ------------------------------------------------------------ */}
      <div id='section4' className='pt-12 min-h-[50vh] max-h-max'>
        <div className='-mb-20 mx-32'>
          <h2 className='mb-16 text-4xl font-semibold text-primary-800'>
            Testimonials
          </h2>
          <div className='z-20 grid grid-cols-12 gap-3'>
            <button className='justify-self-end col-span-1 w-1/3 text-slate-400 cursor-pointer hover:text-primary-600 transition-colors duration-200'>
              <CaretLeft />
            </button>
            <div className='col-span-10'>
              <TestimonialCard
                name='Theodoulos Hadjimatheou'
                info={`23, Member of EYP Cyprus since 2017, Engineering Student at the University of Cambridge`}
                imageURL='/TheodoulosPhoto.jpg'
              >
                EYP has changed my life literally. There's a plethora of areas
                that I was unaware or indifferent to, that through EYP I now
                find fascinating. By discussing topics ranging from climate
                change to human medical gene-editing, I have become more aware
                of current issues around me.
                <br />
                <br />
                Beyond all these, the extent to which I personally develop in
                EYP keeps surprising me. Through taking on various roles of
                responsibility I learnt a lot, met amazing people from all over
                Europe and stepped out of my comfort zone.
              </TestimonialCard>
            </div>
            <button className='justify-self-start col-span-1 w-1/3 text-slate-400 cursor-pointer hover:text-primary-600 transition-colors duration-200'>
              <CaretRight />
            </button>
          </div>
        </div>
        <AnchorArrow anchorRef='#section1' />
      </div>
      <Footer />
    </>
  );
};

export default Home;
