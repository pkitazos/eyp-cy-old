import React, { FC } from "react";
import WhatWeDoCard from "../Cards/WhatWeDoCard";

const WhatWeDoSection: FC = () => {
  return (
    <div className='flex flex-row justify-between'>
      <WhatWeDoCard
        title='Open Forum for Youth'
        info='We provide a forum for young people to develop and express their opinions on European political and social issues in an open and welcoming environment.'
        imageURL='/AboutUs/wwd1.jpg'
      />
      <WhatWeDoCard
        title='Intercultural Dialogue'
        info='Through the EYP international network, we support intercultural understanding and peacebuilding by connecting young Cypriots with other Europeans from different backgrounds to share ideas, opinions and practices.'
        imageURL='/AboutUs/wwd2.jpg'
      />
      <WhatWeDoCard
        title='Skills Development'
        info='We present young people across Europe with diverse opportunities for personal growth and skills development through non-formal and peer-led educational activities.'
        imageURL='/AboutUs/wwd3.jpg'
      />
      <WhatWeDoCard
        title='Network of Changemakers'
        info='We create a network of the next generation of diverse, young changemakers, equipped with the knowledge and skills needed to positively shape the world around them.'
        imageURL='/AboutUs/wwd4.jpg'
      />
    </div>
  );
};

export default WhatWeDoSection;
