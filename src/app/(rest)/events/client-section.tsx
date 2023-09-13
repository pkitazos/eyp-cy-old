"use client";
import { ActionButton } from "~/components";

export const ClientSection = () => {
  return (
    <div className="flex flex-row justify-center gap-8 md:gap-14 lg-xl:gap-24">
      <ActionButton variant="link" text="School" href="/get-involved" />
      <ActionButton variant="link" text="Individual" href="/get-involved" />
    </div>
  );
};
