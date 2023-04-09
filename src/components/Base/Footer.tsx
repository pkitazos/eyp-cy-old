import type { FC } from "react";
import { FacebookIcon, InstagramIcon } from "..";

// TODO: make responsive
// TODO: make phone number and email get copied to clipboard when clicked
// TODO: try out icons instead of text in Contact us section

const Footer: FC = () => (
  <div className='bottom-0 w-full'>
    <svg id='visual' viewBox='0 0 1000 250'>
      <rect x='0' y='0' width='1000' height='250' fill='#f9f9f9'></rect>
      <path
        d='M0 165L27.8 163.2C55.7 161.3 111.3 157.7 166.8 148.2C222.3 138.7 277.7 123.3 333.2 106.7C388.7 90 444.3 72 500 76.3C555.7 80.7 611.3 107.3 666.8 120C722.3 132.7 777.7 131.3 833.2 118C888.7 104.7 944.3 79.3 972.2 66.7L1000 54L1000 251L972.2 251C944.3 251 888.7 251 833.2 251C777.7 251 722.3 251 666.8 251C611.3 251 555.7 251 500 251C444.3 251 388.7 251 333.2 251C277.7 251 222.3 251 166.8 251C111.3 251 55.7 251 27.8 251L0 251Z'
        fill='#66d4ff'
      ></path>
      <path
        d='M0 163L27.8 163.2C55.7 163.3 111.3 163.7 166.8 153.3C222.3 143 277.7 122 333.2 126.5C388.7 131 444.3 161 500 173.5C555.7 186 611.3 181 666.8 178.5C722.3 176 777.7 176 833.2 169.5C888.7 163 944.3 150 972.2 143.5L1000 137L1000 251L972.2 251C944.3 251 888.7 251 833.2 251C777.7 251 722.3 251 666.8 251C611.3 251 555.7 251 500 251C444.3 251 388.7 251 333.2 251C277.7 251 222.3 251 166.8 251C111.3 251 55.7 251 27.8 251L0 251Z'
        fill='#009fff'
      ></path>
      <path
        d='M0 164L27.8 167.2C55.7 170.3 111.3 176.7 166.8 187.5C222.3 198.3 277.7 213.7 333.2 207.8C388.7 202 444.3 175 500 166.3C555.7 157.7 611.3 167.3 666.8 178.7C722.3 190 777.7 203 833.2 205.5C888.7 208 944.3 200 972.2 196L1000 192L1000 251L972.2 251C944.3 251 888.7 251 833.2 251C777.7 251 722.3 251 666.8 251C611.3 251 555.7 251 500 251C444.3 251 388.7 251 333.2 251C277.7 251 222.3 251 166.8 251C111.3 251 55.7 251 27.8 251L0 251Z'
        fill='#3654ff'
      ></path>
    </svg>
    <div className='page-padding grid max-h-max min-h-[10rem] place-content-center items-start gap-y-6 bg-primary-600 py-8 xs:flex xs:flex-row xs:justify-between xs:pb-0 sm:pt-5 md:pt-0'>
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
