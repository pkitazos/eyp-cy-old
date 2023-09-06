import { PartnerCard, PatronCard, Title, WaveDivider } from "~/components";
import { wavePaths } from "~/data";

export default function PatronsAndPartners() {
  return (
    <>
      <head>
        <title>Patrons & Partners</title>
      </head>
      <>
        <section className="page-margin max-h-max min-h-[60vh]">
          <div className="hide-bottom mb-6 flex justify-center">
            <Title text="Our Patrons & Partners" order="h1" />
          </div>
          <div className="hide-bottom mb-16 flex flex-col items-center gap-2">
            <div className="flex justify-center">
              <Title text="Board of Patrons" order="h2" />
            </div>
            <p className="mt-6 text-center text-lg leading-relaxed md:text-xl">
              EYP Cyprus&apos;s work and impact is recognised by various high
              profile stakeholders in Cyprus, including our board of patrons
              which includes
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-16">
            <div className="hide-right delay-card">
              <PatronCard
                name="Mr. Andreas Kettis"
                title="Head of the European Parliament Liaison Office in Cyprus"
              />
            </div>
            <div className="hide-right delay-card">
              <PatronCard
                name="Mr. Yiannis Yiannaki"
                title="Commissioner of Volunteerism and NGOs"
              />
            </div>
            <div className="hide-right delay-card">
              <PatronCard
                name="Ms. Antigoni Papaphilippou"
                title="Head of Public Relations of Antenna and President of THOC"
              />
            </div>
            <div className="hide-right delay-card">
              <PatronCard
                name="Mr. Constantinos Yiorkadjis"
                title="Mayor of Nicosia"
              />
            </div>
          </div>
          <p className="hide-bottom mt-16 text-center text-lg leading-relaxed md:text-xl">
            Our patrons&apos; support highlights the value of our
            organisation&apos;s work. They also provide invaluable guidance and
            active support for our events and our workings, both by providing
            advice, support and also attending various of our events.
          </p>
        </section>
        <WaveDivider waveLayers={wavePaths.patronsTop} />
        <section className="page-padding max-h-max min-h-[60vh] bg-primary-800 pb-24 pt-16">
          <div className="hide-left">
            <div className="flex justify-center sm:justify-start">
              <Title
                text="EU Wide Patrons"
                order="h2"
                theme="light"
                underline="text-orange-600"
              />
            </div>
            <p className="mb-16 text-center text-lg leading-relaxed text-zinc-200 sm:text-justify md:text-xl">
              The international EYP Network also has some key high profile
              stakeholders that are engaged with and recognise the importance of
              its activities.
            </p>
          </div>
          <div className="flex flex-wrap justify-evenly gap-x-5 gap-y-14">
            <div className="hide-left delay-card">
              <PatronCard
                name="Ursula von der Leyen"
                title="President of the European Commission"
                invert={true}
              />
            </div>
            <div className="hide-left delay-card">
              <PatronCard
                name="Roberta Metsola"
                title="President of the European Parliament"
                invert={true}
              />
            </div>
          </div>
        </section>
        <WaveDivider waveLayers={wavePaths.patronsBottom} />
        <section className="page-margin max-h-max min-h-[60vh]">
          <div className="flex justify-center sm:justify-start">
            <Title text="Our Partners" order="h2" underline="rotate-12" />
          </div>
          <div className="flex flex-col items-center justify-center gap-10 sm:flex-row md-lg:justify-start">
            <PartnerCard
              name="Ant1"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit"
            />
            <PartnerCard
              name="BoC"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit"
            />
          </div>
        </section>
      </>
    </>
  );
}
