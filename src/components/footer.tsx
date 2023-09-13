"use client";
import { FacebookIcon, InstagramIcon } from "./SVGs";
import { WaveDivider } from "./wave-divider";
import { Container } from "./container";

// TODO: make phone number and email get copied to clipboard when clicked
// TODO: try out icons instead of text in Contact us section

export function Footer() {
  return (
    <div className="bottom-0 w-full">
      <WaveDivider.footer />
      <Container
        backdrop="bg-primary-800"
        className="grid max-h-max min-h-[10rem] place-content-center items-start gap-y-6 py-8 xs:flex xs:flex-row xs:justify-between xs:pb-0 sm:pt-5 md:pt-0"
      >
        <div className="w-max">
          <h3 className="mb-2 text-2xl font-semibold text-white">Contact us</h3>
          <p className="ml-1 text-slate-100">
            Email:{" "}
            <span
              className="ml-2 hover:text-secondary-700 hover:underline cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText("info@eypcyprus.com");
              }}
            >
              info@eypcyprus.com
            </span>
          </p>
          <p className="ml-1 text-slate-100">
            P.O. Box:{" "}
            <span
              className="ml-2 hover:text-secondary-700 hover:underline cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText("123 Addres Street, City");
              }}
            >
              123 Addres Street, City
            </span>
          </p>
        </div>
        <div className="w-max">
          <h3 className="text-2xl font-semibold text-white">Follow us</h3>
          <div className="ml-1 mt-3 flex gap-4">
            <a href="https://www.instagram.com/eypcyprus/" target="_blank">
              <InstagramIcon className="w-7 text-white hover:text-secondary-700" />
            </a>
            <a href="https://www.facebook.com/eyp.cyprus" target="_blank">
              <FacebookIcon className="w-7 cursor-pointer text-white hover:text-secondary-700" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
