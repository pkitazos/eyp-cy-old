import {
  Title,
  WaveDivider,
  UpcomingEventCard,
  TestimonialCarousel,
} from "~/components";
import { paths } from "~/data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="mt-[10vh] flex h-[90vh] w-full flex-col justify-center gap-6">
        <div className="xs:px-10 flex flex-col gap-10 px-6 sm:grid sm:grid-cols-12 sm:grid-rows-2 sm:px-0">
          <div className="flex w-full justify-start sm:col-start-2 sm:row-start-1 sm:w-max">
            <h2 className="md-lg:text-7xl text-5xl font-bold text-white sm:text-6xl">
              Welcome to
            </h2>
          </div>
          <div className="flex w-full justify-end sm:col-start-3 sm:row-start-2 sm:w-max">
            <h2 className="text-accent-900 md-lg:text-7xl text-5xl font-bold sm:text-6xl">
              Young Europe
            </h2>
          </div>
        </div>
        <div className="mt-28 flex items-center sm:mt-10 md:mt-12 lg:mt-16 xl:mt-16 2xl:mt-32">
          <a
            href="/get-involved"
            className={`bg-accent-900 mx-auto w-max cursor-pointer rounded-full px-9 
        py-5 text-xl font-semibold text-black
        transition-all duration-300 hover:scale-110  
        md:px-9 md:py-6  md:text-2xl lg:px-10 lg:py-7 lg:text-2xl xl:px-10 xl:py-7 xl:text-3xl`}
          >
            Join Us
          </a>
        </div>
      </section>

      <section className="page-margin md-lg:grid md-lg:grid-cols-12 mb-0 flex max-h-max min-h-[70vh] sm:-mb-20 sm:text-xl">
        <div className="z-20 col-span-6 mt-16">
          <div className="hide-left flex justify-center">
            <Title text="Who We Are" order="h2" />
          </div>
          <p className="hide-left delay-card text-justify text-lg leading-relaxed md:text-xl">
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
          </p>
        </div>
      </section>
      <WaveDivider waveLayers={paths.homeTop} />
      <section className="page-padding bg-primary-600 min-h-[60vh]">
        <div className="hide-right flex justify-center md:justify-end">
          <Title text="Upcoming Events" order="h2" variant="light" />
        </div>

        <div className="flex justify-end">
          <div className="no-scrollbar flex h-max max-w-max flex-row justify-between gap-9 overflow-x-scroll p-5">
            <div className="hide-right delay-card basis-1/4">
              <UpcomingEventCard
                title="Pre-Selection Days"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod et dolore magna aliqua."
                imageURL="/assets/events-1.jpg"
                date={"20/03/2023"}
              />
            </div>
            <div className="hide-right delay-card basis-1/4">
              <UpcomingEventCard
                title="Days of EYP"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod et dolore magna aliqua."
                imageURL="/assets/events-2.jpg"
                date={"27/03/2023"}
              />
            </div>
            <div className="hide-right delay-card basis-1/4">
              <UpcomingEventCard
                title="Youth Summit"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod et dolore magna aliqua."
                imageURL="/assets/events-3.jpg"
                date={"16/07/2023"}
              />
            </div>
            <div className="hide-right delay-card basis-1/4">
              <UpcomingEventCard
                title="National Session"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod et dolore magna aliqua."
                imageURL="/assets/events-4.jpg"
                date={"24/08/2023"}
              />
            </div>
          </div>
        </div>
      </section>
      <WaveDivider waveLayers={paths.homeBottom} />

      <section className="page-margin xs:h-[50rem] mb-12 h-[60rem] sm:max-h-max sm:min-h-[50vh]">
        <div className="flex flex-col gap-5">
          <div className="hide-left flex justify-center md:justify-start">
            <Title
              text="Testimonials"
              order="h2"
              underlineColor="text-orange-600"
              underlineRotation="rotate-12"
            />
          </div>
          <div className="hide-right delay-card">
            <TestimonialCarousel />
          </div>
        </div>
      </section>
    </main>
  );
}
