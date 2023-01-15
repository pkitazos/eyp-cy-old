import React, { FC } from "react";
import { TextCard } from "../components";
import { StandardLayout } from "../layouts";

const AboutUs: FC = () => {
  return (
    <StandardLayout>
      <div className='flex justify-center'>
        <div className='basis-5/12 grid grid-cols-2 gap-x-10'>
          <div className='m-5 h-60 w-60 bg-lime-500'>&nbsp;</div>
          <div className='m-5 h-60 w-60 bg-lime-500'>&nbsp;</div>
          <div className='m-5 h-60 w-60 bg-lime-500'>&nbsp;</div>
          <div className='m-5 h-60 w-60 bg-lime-500'>&nbsp;</div>
        </div>
        <div className='basis-7/12'>
          <TextCard title='About Us' titleSize='text-4xl'>
            The European Youth Parliament (EYP) Cyprus is a non-partisan and
            non-governmental organisation, which aims to encourage independent
            thinking, personal initiative and intercultural encounters amongst
            the young people of Cyprus. EYP Cyprus is one of the 40 European
            organisations that operate as part of the pan-European network of
            EYP International. The organisation was founded in 2006 and over the
            years has organised over 100 events with more than 3,500 young
            people being involved in the activities and workings of the
            organisation. <br />
            <br />
            Our activities provide a unique educational experience to young
            people and allow them to develop transferable professional skills.
            Participants in our events have the opportunity to engage in
            discussions with other young people from Cyprus and all over Europe
            and exchange ideas on current socio-political issues. During 2020
            and the pandemic, we focused on providing the youth with a platform
            to express their concerns, fears, and hopes, as well as ideas and
            views of the future. We therefore organised numerous events
            digitally or in a hybrid format that ultimately aimed to empower
            Cypriot youth and encourage them to be active citizens in their
            communities especially during this difficult time. EYP Cyprus is
            constantly seeking to expand, engage more young people in its
            activities, and furthering its impact!
          </TextCard>
        </div>
      </div>
    </StandardLayout>
  );
};

export default AboutUs;
