import React, { FC } from "react";
import { BlankPage } from "../components";
import { StandardLayout } from "../layouts";

const PreSelections: FC = () => {
  return (
    <StandardLayout>
      <BlankPage pageNumber={3} />
    </StandardLayout>
  );
};

export default PreSelections;
