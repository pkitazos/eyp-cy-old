import React, { FC } from "react";

interface props {
  children: React.ReactNode;
}

const StandardLayout: FC<props> = ({ children }) => {
  return <>{children}</>;
};

export default StandardLayout;
