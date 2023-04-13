import type { FC } from "react";
import { FacebookIcon, InstagramIcon, WaveDivider } from "~/components";
import { paths } from "~/data";

// TODO: make phone number and email get copied to clipboard when clicked
// TODO: try out icons instead of text in Contact us section

const Footer: FC = () => (
  <div className='bottom-0 w-full'>
    <WaveDivider waveLayers={paths.footer} />

    <div className='page-padding grid max-h-max min-h-[10rem] place-content-center items-start gap-y-6 bg-primary-800 py-8 xs:flex xs:flex-row xs:justify-between xs:pb-0 sm:pt-5 md:pt-0'>
      <div className='w-max'>
        <h3 className='mb-2 text-2xl font-semibold text-white'>Contact us</h3>
        <p className='ml-1 text-slate-100'>
          email:{" "}
          <span className='ml-2 hover:text-secondary-700 hover:underline'>
            something@email.com
          </span>
        </p>
        <p className='ml-1 text-slate-100'>
          phone:{" "}
          <span className='ml-2 hover:text-secondary-700 hover:underline'>
            23 123456
          </span>
        </p>
      </div>
      <div className='w-max'>
        <h3 className='text-2xl font-semibold text-white'>Follow us</h3>
        <div className='ml-1 mt-3 flex gap-4'>
          <a href='https://www.instagram.com/eypcyprus/' target='_blank'>
            <InstagramIcon className='w-7 text-white hover:text-secondary-700' />
          </a>
          <a href='https://www.facebook.com/eyp.cyprus' target='_blank'>
            <FacebookIcon className='w-7 cursor-pointer text-white hover:text-secondary-700' />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
