import React, { FC } from "react";
import {
  DividerBottom1,
  DividerTop1,
  Footer,
  TextCard,
  Underline,
} from "../components";
import WhatWeDoSection from "../components/Blocks/WhatWeDoSection";
import { StandardLayout } from "../layouts";

// TODO: add underline under header in "WhatWeDoCard"
// TODO: see if other "What We Do" paragraph needs to be added and how
// fix on each page
// TODO: animate remaining waves
// TODO: add microinteractions to section heading underline
// TODO: replace anchor arrows with custom curved arrows

const AboutUs: FC = () => {
  return (
    <StandardLayout>
      <div id='about-us-section1' className='px-40'>
        <TextCard title='Our Mission' titleSize='text-4xl'>
          The European Youth Parliament is a peer-to-peer educational programme
          that brings together young people from across Europe to debate the
          pressing issues of our time. Our mission is to inspire and empower
          young Europeans to be open-minded, tolerant and active citizens.
        </TextCard>
      </div>
      <DividerBottom1 />
      <div
        id='about-us-section2'
        className='px-32 pb-20 pt-8 min-h-[60vh] max-h-max bg-primary-600'
      >
        <div className='mb-16'>
          <h2 className='text-white text-4xl font-semibold'>What We Do</h2>
          <Underline className='mt-2 w-14 text-accent-800' />
        </div>
        <WhatWeDoSection />
      </div>
      <DividerTop1 />
      <div id='about-us-section3' className='px-40'>
        <TextCard title='About Us' titleSize='text-4xl'>
          The European Youth Parliament (EYP) Cyprus is a non-partisan and
          non-governmental organisation, which aims to encourage independent
          thinking, personal initiative and intercultural encounters amongst the
          young people of Cyprus. EYP Cyprus is one of the 40 European
          organisations that operate as part of the pan-European network of EYP
          International. The organisation was founded in 2006 and over the years
          has organised over 100 events with more than 3,500 young people being
          involved in the activities and workings of the organisation.
          <br />
          <br />
          Our activities provide a unique educational experience to young people
          and allow them to develop transferable professional skills.
          Participants in our events have the opportunity to engage in
          discussions with other young people from Cyprus and all over Europe
          and exchange ideas on current socio-political issues. During 2020 and
          the pandemic, we focused on providing the youth with a platform to
          express their concerns, fears, and hopes, as well as ideas and views
          of the future. We therefore organised numerous events digitally or in
          a hybrid format that ultimately aimed to empower Cypriot youth and
          encourage them to be active citizens in their communities especially
          during this difficult time. EYP Cyprus is constantly seeking to
          expand, engage more young people in its activities, and furthering its
          impact!
        </TextCard>
      </div>
      <Footer />
    </StandardLayout>
  );
};

export default AboutUs;
