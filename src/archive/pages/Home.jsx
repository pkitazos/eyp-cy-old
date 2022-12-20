// components
import WhatWeDoCard from "../components/Cards/WhatWeDoCard";
import TestimonialCard from "../components/Cards/TestimonialCard";
// import TestimonialCard2 from "../components/Cards/TestimonialCard copy";
import TextCard from "../components/Cards/TextCard";
import { Carousel } from "flowbite-react/lib/cjs/components/Carousel";
// assets
import carouselPhoto1 from "../assets/images/HomePage/carouselPhoto1.jpg";
import carouselPhoto2 from "../assets/images/HomePage/carouselPhoto2.jpg";
import carouselPhoto3 from "../assets/images/HomePage/carouselPhoto3.jpg";
import ElenaPhoto from "../assets/images/HomePage/ElenaPhoto.jpg";
import TheodoulosPhoto from "../assets/images/HomePage/TheodoulosPhoto.jpg";
import MaddiePhoto from "../assets/images/HomePage/MaddiePhoto.png";
import WhatWeDoPhoto1 from "../assets/images/HomePage/WhatWeDoPhoto1.jpg";
import WhatWeDoPhoto2 from "../assets/images/HomePage/WhatWeDoPhoto2.jpg";
import WhatWeDoPhoto3 from "../assets/images/HomePage/WhatWeDoPhoto3.jpg";

const Home = () => {
  return (
    <>
      {/* <div className='h-[30rem] md:h-[32rem]'>
        <Carousel>
          <img src={carouselPhoto1} alt='...' />
          <img src={carouselPhoto2} alt='...' />
          <img src={carouselPhoto3} alt='...' />
        </Carousel>
      </div> */}
      <div className='pt-28 pb-16 bg-white'>
        <TextCard title='Who We Are' titleSize='text-4xl'>
          The European Youth Parliament (EYP) is a non-partisan and independent
          educational platform bringing together thousands of young people from
          all over Europe to discuss current issues, develop their skills
          through dialogue and cooperation, as well as empower them to
          positively shape the world around them.. The European Youth Parliament
          Cyprus is a non-governmental, non-partisan organisation and one of the
          41 National Committees that come under the umbrella of the
          Pan-European EYP Network. EYP Cyprus was established in 2006 and has
          been actively working to organise events and activities catered
          towards the youth of Cyprus.
        </TextCard>
      </div>
      <div className='py-16 bg-white'>
        <TextCard title='Our Mission' titleSize='text-4xl'>
          The European Youth Parliament is a peer-to-peer educational programme
          that brings together young people from across Europe to debate the
          pressing issues of our time. Our mission is to inspire and empower
          young Europeans to be open-minded, tolerant and active citizens.
        </TextCard>
      </div>

      <div className='w-full flex flex-col justify-center text-4xl gap-y-4 py-16 bg-white'>
        <div className='flex justify-center text-primary-indigo-700'>
          What We Do
        </div>
        <div className='justify self-center h-0.5 w-24 bg-primary-indigo-700'>
          &nbsp;
        </div>
        <div className='mt-4 px-10 flex flex-wrap gap-14 justify-center'>
          <div className='w-80'>
            <WhatWeDoCard
              title={"Open Forum for Youth Discussion"}
              imgSrc={WhatWeDoPhoto1}
            >
              We provide a non-partisan platform and an open, welcoming
              environment for young people to develop and express their opinions
              on European political and social issues.
            </WhatWeDoCard>
          </div>
          <div className='w-80'>
            <WhatWeDoCard title={"Skills Development"} imgSrc={WhatWeDoPhoto2}>
              We help young people develop invaluable skills through our
              non-formal and peer-led educational activities, training events
              and workshops.
            </WhatWeDoCard>
          </div>
          <div className='w-80'>
            <WhatWeDoCard
              title={"Intercultural Exchange"}
              imgSrc={WhatWeDoPhoto3}
            >
              As part of one of the biggest international youth networks, we
              work to encourage intercultural dialogue and exchanges through
              providing young Cypriots links to over 30,000 young, diverse
              Europeans and over 500 events annually organised in 40 countries.
            </WhatWeDoCard>
          </div>
        </div>
      </div>

      <div className='w-full h-96 flex justify-center items-center text-3xl text-gray-700 bg-green-600'>
        SECONDARY BODY
      </div>
      <div className='w-full py-32 flex flex-col justify-center items-center gap-y-10 bg-slate-700'>
        <TestimonialCard imgSrc={ElenaPhoto}>
          <div className='text-lg text-justify'>
            Through my involvement in the organisation I have developed both
            organisational and leadership skills which are appreciated in any
            situation. Through EYP I have learned how to communicate effectively
            and how to work as part of a team. It is without a doubt that EYP
            has shaped the way I work and conduct myself in a professional
            setting.
          </div>
          <div className='self-start h-0.5 w-32 bg-primary-indigo-700'>
            &nbsp;
          </div>
          <div className='text-base text-justify'>
            <span className='text-primary-indigo-700 font-semibold'>
              Elena Odysseos
            </span>
            , 24, Member of EYP Cyprus since 2011, Graduate Engineer at Rolls
            Royce, UK
          </div>
        </TestimonialCard>
        <TestimonialCard
          imgSrc={TheodoulosPhoto}
          imgClasses='object-cover'
          reversed={true}
        >
          <div className='text-lg text-justify'>
            EYP has changed my life literally. There's a plethora of areas that
            I was unaware or indifferent to, that through EYP I now find
            fascinating. By discussing topics ranging from climate change to
            human medical gene-editing, I have become more aware of current
            issues around me. Beyond all these, the extent to which I personally
            develop in EYP keeps surprising me. Through taking on various roles
            of responsibility I learnt a lot, met amazing people from all over
            Europe and stepped out of my comfort zone.
          </div>
          <div className='self-start h-0.5 w-32 bg-primary-indigo-700'>
            &nbsp;
          </div>
          <div className='text-base text-justify'>
            <span className='text-primary-indigo-700 font-semibold'>
              Theodoulos Hadjimatheou
            </span>
            , 23, Member of EYP Cyprus since 2017, Engineering Student at the
            University of Cambridge
          </div>
        </TestimonialCard>
        <TestimonialCard imgSrc={MaddiePhoto}>
          <div className='text-lg text-justify'>
            Lockdown in 2020 was a peculiar time for all of us. Everything from
            work to school became digital. At the beginning I honestly couldn't
            see how doing things via Zoom could be in any way productive and
            certainly in no way enjoyable. Yet, having the opportunity to
            participate in the EYP Online Discussion Forum showed me otherwise.
            Even though the Online Discussion was only four hours, I had never
            felt that I had accomplished so many things. I was able to not only
            further my academic knowledge on a new current topic by having raw
            and fascinating discussions with my fellow delegates, but I was also
            given the chance to meet these new people. People all over Cyprus,
            who had been through the same situation as me, yet with completely
            different experiences. Having EYP organise such events, even in
            times of disarray, is something that I am truly thankful for.
          </div>
          <div className='self-start h-0.5 w-32 bg-primary-indigo-700'>
            &nbsp;
          </div>
          <div className='text-base text-justify'>
            <span className='text-primary-indigo-700 font-semibold'>
              Maddie Theodoulou
            </span>
            , 17, Member since 2020, High school student
          </div>
        </TestimonialCard>
      </div>
      <div className='w-full h-60 flex justify-center items-center text-3xl text-gray-600 bg-lime-500'>
        BUTTON SECTION
      </div>
    </>
  );
};

export default Home;
