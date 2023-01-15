import React, { FC } from "react";
import { BlankPage } from "../components";
import { StandardLayout } from "../layouts";

const NationalSession: FC = () => {
  return (
    <StandardLayout>
      <BlankPage pageNumber={2} />
    </StandardLayout>
  );
};

export default NationalSession;
