import React, { FC } from "react";
import { Link } from "react-router-dom";
import { TextCard } from "../components";
import { DividerTop1 } from "../components/Dividers";
import DividerBottom1 from "../components/Dividers/DividerBottom1";
import MaskedImage from "../components/MaskedImage";
import { DownArrow } from "../components/SVGs";

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
          <a href='#part2' className='cursor-pointer text-pink-600'>
            <DownArrow />
          </a>
        </div>
      </div>
      <div id='part2' className='relative pl-40 h-screen flex flex-col'>
        <div className='grid grid-cols-12 items-center overflow-x-hidden'>
          <a
            href='#part3'
            className='place-self-end col-start-1 cursor-pointer text-pink-600'
          >
            <DownArrow />
          </a>
          <div className='pb-10 col-start-2 col-end-8'>
            <TextCard title='Who We Are' titleSize='text-4xl'>
              The European Youth Parliament (EYP) is a non-partisan and
              independent educational platform bringing together thousands of
              young people from all over Europe to discuss current issues,
              develop their skills through dialogue and cooperation, as well as
              empower them to positively shape the world around them.. The
              European Youth Parliament Cyprus is a non-governmental,
              non-partisan organisation and one of the 41 National Committees
              that come under the umbrella of the Pan-European EYP Network. EYP
              Cyprus was established in 2006 and has been actively working to
              organise events and activities catered towards the youth of
              Cyprus.
            </TextCard>
          </div>
          <div className='pt-10 col-start-9 w-[40rem]'>
            <MaskedImage />
          </div>
        </div>
      </div>
      <DividerBottom1 />
      <div id='part3' className='px-40 h-96 bg-[#3654ff]'>
        <div className='text-white text-3xl font-semibold'>Upcoming Events</div>
      </div>
      <DividerTop1 />
      <div
        id='part4'
        className='relative h-screen flex flex-col justify-center'
      >
        <div className='py-16 bg-default-white'>
          <TextCard title='Our Mission' titleSize='text-4xl'>
            The European Youth Parliament is a peer-to-peer educational
            programme that brings together young people from across Europe to
            debate the pressing issues of our time. Our mission is to inspire
            and empower young Europeans to be open-minded, tolerant and active
            citizens.
          </TextCard>
        </div>
        <div className='mr-64 flex justify-end'>
          <a
            href='#section1'
            className='cursor-pointer text-pink-600 rotate-180'
          >
            <DownArrow />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
