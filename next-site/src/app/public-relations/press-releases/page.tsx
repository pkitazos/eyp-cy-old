import RootLayout from "~/app/layout";
import { Title } from "~/components";

export default function PressReleases() {
  return (
    <RootLayout>
      <div className="flex justify-center">
        <Title text="Press Releases" order="h1" />
      </div>
      <div className="xs:text-3xl md-lg:text-4xl mt-20 p-6 text-center text-xl font-semibold">
        Coming Soon ...
      </div>
    </RootLayout>
  );
}
