import { FC, ReactNode, useState } from "react";
import { CaretLeft, CaretRight } from "../SVGs";
import "../../styles/index.css";
import { TestimonialCard } from "../Cards";

const TestimonialCarousel: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = 3;

  return (
    <div className='flex'>
      <div className='relative flex'>
        <button
          onClick={() =>
            setCurrentIndex((prevState) => (prevState - 1 + length) % length)
          }
          className='absolute left-6 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-slate-700 hover:text-slate-500'
        >
          <CaretLeft className='w-4' />
        </button>
        <div className='mx-auto w-10/12 overflow-hidden'>
          <div
            className='carousel-content flex items-center'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <TestimonialCard
              name='Elena Odysseos'
              info='24, Member of EYP Cyprus since 2011, Graduate Engineer at Rolls Royce, UK'
              imageURL='/HomePage/ElenaPhoto.jpg'
            >
              Through my involvement in the organisation I have developed both
              organisational and leadership skills which are appreciated in any
              situation. Through EYP I have learned how to communicate
              effectively and how to work as part of a team. It is without a
              doubt that EYP has shaped the way I work and conduct myself in a
              professional setting.
            </TestimonialCard>
            <TestimonialCard
              name='Theodoulos Hadjimatheou'
              info='23, Member of EYP Cyprus since 2017, Engineering Student at the University of Cambridge'
              imageURL='/HomePage/TheodoulosPhoto.jpg'
            >
              EYP has changed my life literally. There's a plethora of areas
              that I was unaware or indifferent to, that through EYP I now find
              fascinating. By discussing topics ranging from climate change to
              human medical gene-editing, I have become more aware of current
              issues around me. Beyond all these, the extent to which I
              personally develop in EYP keeps surprising me. Through taking on
              various roles of responsibility I learnt a lot, met amazing people
              from all over Europe and stepped out of my comfort zone.
            </TestimonialCard>
            <TestimonialCard
              name='Maddie Theodoulou'
              info='17, Member since 2020, High school student'
              imageURL='/HomePage/MaddiePhoto.png'
            >
              Lockdown in 2020 was a peculiar time for all of us. Everything
              from work to school became digital. At the beginning I honestly
              couldn't see how doing things via Zoom could be in any way
              productive and certainly in no way enjoyable. Yet, having the
              opportunity to participate in the EYP Online Discussion Forum
              showed me otherwise. Even though the Online Discussion was only
              four hours, I had never felt that I had accomplished so many
              things. I was able to not only further my academic knowledge on a
              new current topic by having raw and fascinating discussions with
              my fellow delegates, but I was also given the chance to meet these
              new people. People all over Cyprus, who had been through the same
              situation as me, yet with completely different experiences. Having
              EYP organise such events, even in times of disarray, is something
              that I am truly thankful for.
            </TestimonialCard>
          </div>
        </div>
        <button
          onClick={() =>
            setCurrentIndex((prevState) => (prevState + 1) % length)
          }
          className='absolute right-6 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-slate-700 hover:text-slate-500'
        >
          <CaretRight className='w-4' />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
