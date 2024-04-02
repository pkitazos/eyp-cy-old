import { Metadata } from "next";
import Link from "next/link";
import { dWhoWeAre1, dWhoWeAre2, dWhoWeAre3 } from "~/assets";
import { Container, ImageGrid, Title, WaveDivider } from "~/components";
import { Carousel, TestimonialCard, UpcomingEventCard } from "./_components";
import { testimonials, upcomingEvents } from "./content";

export const metadata: Metadata = {
  title: "EYP CY - Home",
};
export const runtime = "edge";

export default function Home() {
  return (
    <>
      <section className="flex h-screen w-full flex-col justify-center gap-6">
        <div className="flex flex-col gap-10 px-6 xs:px-10 sm:grid sm:grid-cols-12 sm:grid-rows-2 sm:px-0">
          <div className="flex w-full justify-start sm:col-start-2 sm:row-start-1 sm:w-max">
            <h2 className="text-5xl font-bold text-white sm:text-6xl md-lg:text-7xl">
              Welcome to
            </h2>
          </div>
          <div className="flex w-full justify-end sm:col-start-3 sm:row-start-2 sm:w-max">
            <h2 className="text-5xl font-bold text-accent-900 sm:text-6xl md-lg:text-7xl">
              Young Europe
            </h2>
          </div>
        </div>
        <div className="mt-28 flex items-center sm:mt-10 md:mt-12 lg:mt-16 xl:mt-16 2xl:mt-32">
          <Link
            href="/get-involved"
            className="mx-auto w-max cursor-pointer rounded-full bg-accent-900 px-9 py-5 text-xl font-semibold text-black transition-all duration-300 hover:scale-110 md:px-9 md:py-6  md:text-2xl lg:px-10 lg:py-7 lg:text-2xl xl:px-10 xl:py-7 xl:text-3xl"
          >
            Join Us
          </Link>
        </div>
      </section>
      <Container className="flex items-center">
        <div className="z-20 w-full md-lg:w-1/2">
          <div className=" flex justify-center">
            <Title text="Who We Are" order="h2" />
          </div>
          <p className=" text-justify text-lg leading-relaxed md:text-xl">
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
        <div className="ml-20 md-lg:grid w-[45%] place-items-center hidden">
          <ImageGrid.Focus
            flow="rhs"
            images={[
              { src: dWhoWeAre1, alt: "" },
              { src: dWhoWeAre3, alt: "" },
              { src: dWhoWeAre2, alt: "" },
            ]}
          />
        </div>
      </Container>
      <WaveDivider.homeTop />
      <Container
        backdrop="bg-primary-600"
        className="flex flex-col items-center lg-xl:px-0"
      >
        <div className="flex justify-center md:justify-end">
          <Title text="Upcoming Events" order="h2" theme="light" />
        </div>
        <div className="no-scrollbar relative w-full max-w-5xl overflow-x-scroll py-10 gap-10 items-center sm:items-stretch flex flex-col sm:grid sm:grid-cols-2 sm:justify-items-center sm:gap-y-16 lg:flex-row lg:flex lg:gap-6 lg:justify-evenly">
          {upcomingEvents.map((event, i) => (
            <UpcomingEventCard key={i} event={event} />
          ))}
        </div>
      </Container>
      <WaveDivider.homeBottom />
      <Container className="mb-12 min-h-[40rem] h-max">
        <div className="flex flex-col gap-5">
          <div className=" flex justify-center md:justify-start">
            <Title
              text="Testimonials"
              order="h2"
              underline="text-orange-600 rotate-12"
            />
          </div>
          <div className="hidden md:block">
            <Carousel>
              {testimonials.map((testimonial, testimonialIndex) => (
                <TestimonialCard
                  key={testimonialIndex}
                  testimonial={testimonial}
                >
                  {testimonial.quote}
                </TestimonialCard>
              ))}
            </Carousel>
          </div>
          <div className="flex flex-col gap-8 sm:gap-10 md:hidden">
            {testimonials.map((testimonial, testimonialIndex) => (
              <TestimonialCard key={testimonialIndex} testimonial={testimonial}>
                {testimonial.quote}
              </TestimonialCard>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
