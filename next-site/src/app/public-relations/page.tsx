import { Title } from "~/components";
import RootLayout from "../layout";

export default function PublicRelations() {
  return (
    <RootLayout>
      <div className="flex justify-center">
        <Title text="Public Relations" order="h1" />
      </div>
      <div className="xs:text-3xl md-lg:text-4xl mt-20 p-6 text-center text-xl font-semibold">
        Coming Soon ...
      </div>
    </RootLayout>
  );
}
