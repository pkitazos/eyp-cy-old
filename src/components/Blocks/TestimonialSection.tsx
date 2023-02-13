import React from "react";
import { FC } from "react";
import { TestimonialCard } from "../Cards";

const TestimonialSection: FC = () => {
  const testimonials = [
    {
      name: "Elena Odysseos",
      info: "24, Member of EYP Cyprus since 2011, Graduate Engineer at Rolls Royce, UK",
      content:
        "Through my involvement in the organisation I have developed both organisational and leadership skills which are appreciated in any situation. Through EYP I have learned how to communicate effectively and how to work as part of a team. It is without a doubt that EYP has shaped the way I work and conduct myself in a professional setting.",
      imageURL: "/HomePage/ElenaPhoto.jpg",
    },
    {
      name: "Theodoulos Hadjimatheou",
      info: "23, Member of EYP Cyprus since 2017, Engineering Student at the University of Cambridge",
      content: `EYP has changed my life literally. There's a plethora of areas that I was unaware or indifferent to, that through EYP I now find fascinating. By discussing topics ranging from climate change to human medical gene-editing, I have become more aware of current issues around me. 
          Beyond all these, the extent to which I personally develop in EYP keeps surprising me. Through taking on various roles of responsibility I learnt a lot, met amazing people from all over Europe and stepped out of my comfort zone.`,
      imageURL: "/HomePage/TheodoulosPhoto.jpg",
    },
    {
      name: "Maddie Theodoulou",
      info: "17, Member since 2020, High school student",
      content: `Lockdown in 2020 was a peculiar time for all of us. Everything from work to school became digital. At the beginning I honestly couldn't see how doing things via Zoom could be in any way productive and certainly in no way enjoyable.
          Yet, having the opportunity to participate in the EYP Online Discussion Forum showed me otherwise. Even though the Online Discussion was only four hours, I had never felt that I had accomplished so many things. I was able to not only further my academic knowledge on a new current topic by having raw and fascinating discussions with my fellow delegates, but I was also given the chance to meet these new people. People all over Cyprus, who had been through the same situation as me, yet with completely different experiences. Having EYP organise such events, even in times of disarray, is something that I am truly thankful for.
          `,
      imageURL: "/HomePage/MaddiePhoto.png",
    },
  ];

  return (
    <>
      <div className='m-10'>
        <div className='carousel w-full gap-5'>
          {testimonials.map((item, i) => {
            let { name, info, content, imageURL } = item;
            let prev = i - 1 < 0 ? testimonials.length - 1 : i - 1;
            let next = i + 1 > testimonials.length - 1 ? 0 : i + 1;
            return (
              <div id={`slide${i}`} className='carousel-item relative w-full'>
                <TestimonialCard name={name} info={info} imageURL={imageURL}>
                  {content}
                </TestimonialCard>
                <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3'>
                  <a href={`#slide${prev}`} className=''>
                    ❮
                  </a>
                  <a href={`#slide${next}`} className='btn btn-circle'>
                    ❯
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
