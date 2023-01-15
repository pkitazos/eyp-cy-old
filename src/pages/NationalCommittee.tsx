import React, { FC } from "react";
import { BlankPage } from "../components";
import { StandardLayout } from "../layouts";

const NationalCommittee: FC = () => {
  return (
    <StandardLayout>
      <BlankPage pageNumber={1} />
    </StandardLayout>
  );
};

export default NationalCommittee;
