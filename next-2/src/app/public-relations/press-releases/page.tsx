import { Title } from "~/components";

export default function PressReleases() {
  return (
    <>
      <head>
        <title>Press Releases</title>
      </head>
      <section>
        <div className="flex justify-center">
          <Title text="Press Releases" order="h1" />
        </div>
        <div className="mt-20 p-6 text-center text-xl font-semibold xs:text-3xl md-lg:text-4xl">
          Coming Soon ...
        </div>
      </section>
    </>
  );
}
