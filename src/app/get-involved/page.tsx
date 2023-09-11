"use client";
import { CategoryCard, Title } from "~/components";

export default function GetInvolved() {
  return (
    <>
      <head>
        <title>Get Involved</title>
      </head>
      <>
        <section className="page-margin mt-40 md:mt-20 lg:mt-16 mb-28 flex flex-col px-5 items-center">
          <div className="hide-bottom max-w-7xl">
            <div className="flex justify-center">
              <Title
                text="Get Involved"
                order="h1"
                underline="rotate-[190deg]"
              />
            </div>
            <p className="text-justify text-lg leading-relaxed md:text-xl">
              The European Youth Parliament Cyprus offers its participants a
              unique learning experience. Every year, 500+ young people from
              both Cyprus and Europe join our activities. There are various ways
              to get involved - typically, the first step is to participate in
              one of our EYP sessions which take place throughout the year. At
              the same time, we hold various open events, discussion forums,
              workshops, trainings and panel discussions which you can join! Get
              in touch and follow us on social media to keep up to date with
              opportunities to take part in our activities.
            </p>
          </div>
        </section>
        <section className="page-margin mb-32 grid grid-cols-1 gap-7 md-lg:gap-10 2xl:gap-16 md:grid-cols-2">
          <CategoryCard title="High School Students" action={() => {}}>
            If you are a High-School Student aged 15-18, you can register
            individually to attend our EYP Day. If your school is interested in
            applying as a delegation of six students, then you are able to
            attend our Pre-Selection Days. Both events usually take place in
            March and April. Through these events, you could be selected to
            attend EYP Cyprus&apos; annual National Session in the Summer. If
            you are interested in attending either of these events, you can
            contact our HR members@eypcyprus.com to declare your interest or ask
            for further details.
          </CategoryCard>
          <CategoryCard title="Young Adults" action={() => {}}>
            If you are a university student or over 18 years old, you can attend
            our Youth Summit - a 4 day long conference that often takes place in
            the Summer. If you are interested in attending this event, you can
            contact our HR members@eypcyprus.com to declare your interest or ask
            for further details.
          </CategoryCard>
        </section>
        <section className="page-margin mb-16 flex flex-col items-center px-5">
          <div className="hide-right max-w-7xl">
            <div className="flex justify-center">
              <Title
                text="General, Open Events"
                order="h2"
                underline="text-fuchsia-500 rotate-[190deg]"
              />
            </div>
            <p className="text-justify text-lg leading-relaxed md:text-xl">
              We hold various events throughout the year that are open to any
              young person interested. From conferences, to panel discussions,
              workshops, trainings and other events, you can attend any of these
              events. To do so keep an eye out in our social media platforms or
              contact our HR members@eypcyprus.com to declare your interest so
              you are notified when an opportunity arises.
            </p>
          </div>
        </section>
      </>
    </>
  );
}
