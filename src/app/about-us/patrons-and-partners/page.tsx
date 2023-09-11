import { PartnerCard, PatronCard, Title, WaveDivider } from "~/components";
import { wavePaths } from "~/data";

const patronData = [
  {
    name: "Mr. Andreas Kettis",
    title: "Head of the European Parliament Liaison Office in Cyprus",
  },
  {
    name: "Ambassador Kornelios Korneliou",
    title: "Permanent Secretary at the Ministry of Foreign Affairs",
  },
  {
    name: "Ms. Antigoni Papaphilippou",
    title: "Head of Public Relations of Antenna and President of THOC",
  },
  {
    name: "Mr. Constantinos Yiorkadjis",
    title: "Mayor of Nicosia",
  },
  {
    name: "Mr. Panayiotis Sentonas",
    title: "Commissioner for the Citizen",
  },
];

const partnerData = [
  {
    name: "BoC",
    description: "A short description about your partner BoC",
    imageURL: "/assets/partner-boc.jpeg",
  },
  {
    name: "Ant1",
    description: "A short description about your partner Ant1",
    imageURL: "/assets/partner-ant1.jpeg",
  },
  {
    name: "VMLY&R",
    description: "A short description about your partner VMLY&R",
    imageURL: "/assets/partner-vmlyr.png",
  },
];

export default function PatronsAndPartners() {
  return (
    <>
      <head>
        <title>Patrons & Partners</title>
      </head>
      <>
        <section className="mt-40 md:mt-20 lg:mt-16 page-margin max-h-max min-h-[60vh] flex flex-col items-center">
          <div className="hide-bottom mb-6 flex justify-center">
            <Title text="Our Patrons & Partners" order="h1" />
          </div>
          <div className="hide-bottom mb-16 flex flex-col items-center gap-2">
            <div className="flex justify-center">
              <Title text="Board of Patrons" order="h2" />
            </div>
            <p className="mt-6 text-center text-lg leading-relaxed md:text-xl max-w-8xl">
              EYP Cyprus&apos;s work and impact is recognised by various high
              profile stakeholders in Cyprus, including our Board of Patrons
              which includes
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-16">
            {patronData.map((patron, i) => (
              <div key={i} className="hide-right delay-card">
                <PatronCard name={patron.name} title={patron.title} />
              </div>
            ))}
          </div>
          <p className="hide-bottom mt-16 text-center text-lg leading-relaxed md:text-xl max-w-8xl">
            Our patrons&apos; support highlights the value of our
            organisation&apos;s work. They also provide invaluable guidance and
            active support for our events and our workings, both by providing
            advice, support as well as attending various of our events.
          </p>
        </section>
        <WaveDivider waveLayers={wavePaths.patronsTop} />
        <section className="page-padding max-h-max min-h-[60vh] bg-primary-700 pb-24 pt-3 flex flex-col items-center">
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
          <div className="flex flex-wrap justify-evenly gap-x-5 gap-y-14 w-full max-w-8xl">
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
          <div className="grid grid-cols-1 items-center justify-center gap-10 md:grid-cols-2 md-lg:justify-start">
            {partnerData.map((partner) => (
              <PartnerCard
                key={partner.name}
                name={partner.name}
                description={partner.description}
                imageURL={partner.imageURL}
              />
            ))}
          </div>
        </section>
      </>
    </>
  );
}
