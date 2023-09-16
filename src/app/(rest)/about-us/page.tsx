import { Metadata } from "next";
import Image from "next/image";
import {
  dAboutUs1,
  dAboutUs2,
  dAboutUs3,
  dHowWeDoWhatWeDo1,
  dHowWeDoWhatWeDo2,
  dOurMission1,
  dOurMission2,
  dOurMission3,
  testImage,
  whatWeDo1,
  whatWeDo2,
  whatWeDo3,
  whatWeDo4,
} from "~/assets";
import {
  Container,
  Divider,
  ImageGrid,
  Title,
  WaveDivider,
  WhatWeDoCard,
} from "~/components";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutUs() {
  return (
    <>
      <Container className="mb-0 mt-40 md-lg:mt-32 2xl:mt-0 flex items-center">
        <div className="z-20 w-full md-lg:w-2/3">
          <div className=" flex justify-center">
            <Title text="About Us" order="h1" underline="rotate-[190deg]" />
          </div>
          <p className=" text-justify text-lg leading-relaxed md:text-xl">
            The European Youth Parliament (EYP) Cyprus is a non-partisan and
            non-governmental organisation, which aims to encourage independent
            thinking, personal initiative and intercultural encounters amongst
            the young people of Cyprus. EYP Cyprus is one of the 40 European
            organisations that operate as part of the pan-European network of
            EYP International. The organisation was founded in 2006 and over the
            years has organised over 100 events with more than 3,500 young
            people being involved in the activities and workings of the
            organisation.
          </p>
        </div>
        <div className="hidden ml-20 md-lg:grid w-[35%] place-items-center">
          <ImageGrid.Focus
            flow="lhs"
            images={[
              { src: dAboutUs1, alt: "" },
              { src: dAboutUs2, alt: "" },
              { src: dAboutUs3, alt: "" },
            ]}
          />
        </div>
      </Container>
      <Container className="block mt-16 sm:hidden">
        <Image
          className="w-full"
          width={200}
          height={150}
          src={dAboutUs2}
          alt=""
        />
      </Container>
      <Divider className="mt-20 mb-32" />
      <Container className="mb-20 flex items-center">
        <div className="hidden mr-20 md-lg:grid w-[35%] place-items-center">
          <ImageGrid.Focus
            flow="rhs"
            images={[
              { src: dOurMission1, alt: "" },
              { src: dOurMission2, alt: "" },
              { src: dOurMission3, alt: "" },
            ]}
          />
        </div>
        <div className="z-20 w-full md-lg:w-2/3">
          <div className=" flex justify-center">
            <Title text="Our Mission" order="h2" underline="rotate-[190deg]" />
          </div>
          <p className=" text-justify text-lg leading-relaxed md:text-xl">
            The European Youth Parliament is a peer-to-peer educational
            programme that brings together young people from across Europe to
            debate the pressing issues of our time. Our mission is to inspire
            and empower young Europeans to be open-minded, tolerant and active
            citizens.
          </p>
        </div>
      </Container>
      <WaveDivider.aboutTop />
      <Container backdrop="bg-primary-600" className="pb-20 pt-8 xl:px-20">
        <div className="mb-10 flex justify-center">
          <Title
            text="What We Do"
            order="h2"
            theme="light"
            underline="rotate-[190deg]"
          />
        </div>
        <div className="grid grid-cols-1 place-items-center gap-10 xl:flex justify-evenly">
          <WhatWeDoCard
            title="Open Forum for Youth"
            info="We provide a forum for young people to develop and express their opinions on European political and social issues in an open and welcoming environment."
            imageURL={whatWeDo1}
          >
            <BookIcon className="w-7 p-0.5 text-white" />
          </WhatWeDoCard>

          <WhatWeDoCard
            title="Intercultural Dialogue"
            info="Through the EYP international network, we support intercultural understanding and peacebuilding by connecting young Cypriots with other Europeans from different backgrounds to share ideas, opinions and practices."
            imageURL={whatWeDo2}
          >
            <ChatIcon className="w-7 p-0.5 text-white" />
          </WhatWeDoCard>

          <WhatWeDoCard
            title="Skills Development"
            info="We present young people across Europe with diverse opportunities for personal growth and skills development through non-formal and peer-led educational activities."
            imageURL={whatWeDo3}
          >
            <PenIcon className="w-7 p-0.5 text-white" />
          </WhatWeDoCard>

          <WhatWeDoCard
            title="Network of Changemakers"
            info="We create a network of the next generation of diverse, young changemakers, equipped with the knowledge and skills needed to positively shape the world around them."
            imageURL={whatWeDo4}
          >
            <NetworkIcon className="w-7 p-0.5 text-white" />
          </WhatWeDoCard>
        </div>
      </Container>
      <WaveDivider.aboutBottom />
      <Container className="mt-8 max-h-max mb-0 md:mb-28 lg-xl:mb-0 pb-16 flex items-center">
        <div className="z-20 w-full md-lg:w-2/3">
          <div className=" flex justify-center">
            <Title
              text="How we do What we do"
              order="h2"
              underline="rotate-[190deg]"
            />
          </div>
          <p className=" text-justify text-lg leading-relaxed md:text-xl">
            With non-formal education at the heart of our activities, we provide
            young people with a non-partisan and independent forum to formulate
            and discuss their opinions about current issues both with each other
            and relevant policy makers - all while developing vital skills!
            Through a wide range of activities - from conferences, workshops,
            think tanks, trainings, panel discussions among others EYP Cyprus
            also provides young people with spaces to connect with each other
            and build intercultural understanding and friendships across Cyprus
            and Europe.
            <br />
            <br />
            With 15+ events annually, and 500+ participants at our activities
            each year, our organisation is growing and reaching more and more
            young people! And with EYP Cyprus being part of the wider EYP
            Network present in 40+ countries in Europe, our members and alumni
            have the opportunity to join over 30,000 young people who take part
            in more than 500 EYP events organised across Europe every year.
          </p>
        </div>
        <div className="hidden ml-20 md-lg:grid w-[35%] place-items-center">
          <ImageGrid.Focus
            flow="lhs"
            images={[
              { src: dHowWeDoWhatWeDo1, alt: "" },
              { src: dHowWeDoWhatWeDo2, alt: "" },
              { src: testImage, alt: "" },
            ]}
          />
        </div>
      </Container>
      <Container className="block mt-4 xs:mt-10 mb-16 sm:hidden">
        <Image
          className="w-full"
          width={200}
          height={150}
          src={dHowWeDoWhatWeDo2}
          alt=""
        />
      </Container>
      <div className="flex sm:hidden lg-xl:flex justify-center mt-20 lg-xl:mt-14 mb-32">
        <div className="border-t-2 w-1/2 border-gray-300/50">&nbsp;</div>
      </div>
      <Container className="mb-16 sm:mb-28 lg-xl:20 mt-16 sm:mt-8">
        <div className="">
          <div className="flex justify-center">
            <Title
              text="A Little More About Us"
              order="h2"
              underline="rotate-[190deg]"
            />
          </div>
          <p className="text-justify text-lg leading-relaxed md:text-xl">
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
          </p>
        </div>
      </Container>
    </>
  );
}

const BookIcon = ({ className }: { className: string }) => {
  return (
    <svg className={className} viewBox="0 0 576 512">
      <path
        d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"
        fill="currentColor"
      />
    </svg>
  );
};

const ChatIcon = ({ className }: { className: string }) => {
  return (
    <svg className={className} viewBox="0 0 512 512">
      <path
        d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1zM26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3 .5c-1.6 2.3-3.2 4.6-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9zM144 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm80 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
        fill="currentColor"
      />
    </svg>
  );
};

const NetworkIcon = ({ className }: { className: string }) => {
  return (
    <svg className={className} viewBox="0 0 512 512">
      <path
        d="M418.4 157.9c35.3-8.3 61.6-40 61.6-77.9c0-44.2-35.8-80-80-80c-43.4 0-78.7 34.5-80 77.5L136.2 151.1C121.7 136.8 101.9 128 80 128c-44.2 0-80 35.8-80 80s35.8 80 80 80c12.2 0 23.8-2.7 34.1-7.6L259.7 407.8c-2.4 7.6-3.7 15.8-3.7 24.2c0 44.2 35.8 80 80 80s80-35.8 80-80c0-27.7-14-52.1-35.4-66.4l37.8-207.7zM156.3 232.2c2.2-6.9 3.5-14.2 3.7-21.7l183.8-73.5c3.6 3.5 7.4 6.7 11.6 9.5L317.6 354.1c-5.5 1.3-10.8 3.1-15.8 5.5L156.3 232.2z"
        fill="currentColor"
      />
    </svg>
  );
};

const PenIcon = ({ className }: { className: string }) => {
  return (
    <svg className={className} viewBox="0 0 512 512">
      <path
        d="M453.3 19.3l39.4 39.4c25 25 25 65.5 0 90.5l-52.1 52.1 0 0-1-1 0 0-16-16-96-96-17-17 52.1-52.1c25-25 65.5-25 90.5 0zM241 114.9c-9.4-9.4-24.6-9.4-33.9 0L105 217c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L173.1 81c28.1-28.1 73.7-28.1 101.8 0L288 94.1l17 17 96 96 16 16 1 1-17 17L229.5 412.5c-48 48-109.2 80.8-175.8 94.1l-25 5c-7.9 1.6-16-.9-21.7-6.6s-8.1-13.8-6.6-21.7l5-25c13.3-66.6 46.1-127.8 94.1-175.8L254.1 128 241 114.9z"
        fill="currentColor"
      />
    </svg>
  );
};
