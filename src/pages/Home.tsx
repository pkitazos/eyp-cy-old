import React, { FC } from "react";
import { Link } from "react-router-dom";
import { TextCard } from "../components";

const Home: FC = () => {
  return (
    <>
      <div
        id='section1'
        className={`w-full h-[90vh] top-[10%] absolute flex flex-col gap-6`}
      >
        <div className='mt-16 xl:mt-24 2xl:mt-32 ml-28 text-white text-7xl font-bold'>
          Welcome to
        </div>
        <div className='ml-60 text-accent-900 text-7xl font-bold'>
          Young Europe
        </div>
        <Link
          to='/get-involved'
          className={`mt-10 md:mt-12 lg:mt-16 xl:mt-16 2xl:mt-32 
          mx-auto w-max 
          py-5 px-9 text-xl hover:py-6 hover:px-10
          md:py-6 md:px-9 md:text-2xl md:hover:py-7 md:hover:px-10 
          lg:py-7 lg:px-10 lg:text-2xl lg:hover:py-8 lg:hover:px-12 
          xl:py-8 xl:px-12 xl:text-3xl xl:hover:py-10 xl:hover:px-14 
          transition-all duration-300
          font-semibold bg-accent-900 cursor-pointer rounded-full`}
        >
          Join Us
        </Link>
        <div className='mr-64 flex justify-end'>
          <a href='#part2' className='cursor-pointer'>
            <svg
              width='90'
              height='90'
              viewBox='0 0 50 50'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g>
                <path
                  d='M25 45.3125C24.7943 45.3137 24.5905 45.2743 24.4001 45.1966C24.2098 45.1188 24.0366 45.0042 23.8906 44.8594L9.82811 30.7969C9.53389 30.5027 9.36859 30.1036 9.36859 29.6875C9.36859 29.2714 9.53389 28.8724 9.82811 28.5782C10.1223 28.2839 10.5214 28.1187 10.9375 28.1187C11.3536 28.1187 11.7526 28.2839 12.0469 28.5782L25 41.5469L37.9531 28.5782C38.0988 28.4325 38.2717 28.3169 38.4621 28.2381C38.6524 28.1592 38.8565 28.1187 39.0625 28.1187C39.2685 28.1187 39.4725 28.1592 39.6629 28.2381C39.8532 28.3169 40.0262 28.4325 40.1719 28.5782C40.3175 28.7239 40.4331 28.8968 40.512 29.0872C40.5908 29.2775 40.6314 29.4815 40.6314 29.6875C40.6314 29.8936 40.5908 30.0976 40.512 30.2879C40.4331 30.4783 40.3175 30.6512 40.1719 30.7969L26.1094 44.8594C25.9634 45.0042 25.7902 45.1188 25.5998 45.1966C25.4095 45.2743 25.2056 45.3137 25 45.3125Z'
                  fill='#e94082'
                />
                <path
                  d='M25 45.3125C24.5856 45.3125 24.1881 45.1479 23.8951 44.8549C23.6021 44.5618 23.4375 44.1644 23.4375 43.75V6.25C23.4375 5.8356 23.6021 5.43817 23.8951 5.14515C24.1881 4.85212 24.5856 4.6875 25 4.6875C25.4144 4.6875 25.8118 4.85212 26.1048 5.14515C26.3979 5.43817 26.5625 5.8356 26.5625 6.25V43.75C26.5625 44.1644 26.3979 44.5618 26.1048 44.8549C25.8118 45.1479 25.4144 45.3125 25 45.3125Z'
                  fill='#e94082'
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div id='part2' className='h-screen flex flex-col justify-center'>
        <div className='pt-28 pb-16 bg-default-white'>
          <TextCard title='Who We Are' titleSize='text-4xl'>
            The European Youth Parliament (EYP) is a non-partisan and
            independent educational platform bringing together thousands of
            young people from all over Europe to discuss current issues, develop
            their skills through dialogue and cooperation, as well as empower
            them to positively shape the world around them.. The European Youth
            Parliament Cyprus is a non-governmental, non-partisan organisation
            and one of the 41 National Committees that come under the umbrella
            of the Pan-European EYP Network. EYP Cyprus was established in 2006
            and has been actively working to organise events and activities
            catered towards the youth of Cyprus.
          </TextCard>
        </div>
        <div className='ml-64 flex justify-start'>
          <a href='#part3' className='cursor-pointer'>
            <svg
              width='90'
              height='90'
              viewBox='0 0 50 50'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g>
                <path
                  d='M25 45.3125C24.7943 45.3137 24.5905 45.2743 24.4001 45.1966C24.2098 45.1188 24.0366 45.0042 23.8906 44.8594L9.82811 30.7969C9.53389 30.5027 9.36859 30.1036 9.36859 29.6875C9.36859 29.2714 9.53389 28.8724 9.82811 28.5782C10.1223 28.2839 10.5214 28.1187 10.9375 28.1187C11.3536 28.1187 11.7526 28.2839 12.0469 28.5782L25 41.5469L37.9531 28.5782C38.0988 28.4325 38.2717 28.3169 38.4621 28.2381C38.6524 28.1592 38.8565 28.1187 39.0625 28.1187C39.2685 28.1187 39.4725 28.1592 39.6629 28.2381C39.8532 28.3169 40.0262 28.4325 40.1719 28.5782C40.3175 28.7239 40.4331 28.8968 40.512 29.0872C40.5908 29.2775 40.6314 29.4815 40.6314 29.6875C40.6314 29.8936 40.5908 30.0976 40.512 30.2879C40.4331 30.4783 40.3175 30.6512 40.1719 30.7969L26.1094 44.8594C25.9634 45.0042 25.7902 45.1188 25.5998 45.1966C25.4095 45.2743 25.2056 45.3137 25 45.3125Z'
                  fill='#e94082'
                />
                <path
                  d='M25 45.3125C24.5856 45.3125 24.1881 45.1479 23.8951 44.8549C23.6021 44.5618 23.4375 44.1644 23.4375 43.75V6.25C23.4375 5.8356 23.6021 5.43817 23.8951 5.14515C24.1881 4.85212 24.5856 4.6875 25 4.6875C25.4144 4.6875 25.8118 4.85212 26.1048 5.14515C26.3979 5.43817 26.5625 5.8356 26.5625 6.25V43.75C26.5625 44.1644 26.3979 44.5618 26.1048 44.8549C25.8118 45.1479 25.4144 45.3125 25 45.3125Z'
                  fill='#e94082'
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div id='part3' className='h-screen flex flex-col justify-center'>
        <div className='py-16 bg-default-white'>
          <TextCard title='Our Mission' titleSize='text-4xl'>
            The European Youth Parliament is a peer-to-peer educational
            programme that brings together young people from across Europe to
            debate the pressing issues of our time. Our mission is to inspire
            and empower young Europeans to be open-minded, tolerant and active
            citizens.
          </TextCard>
        </div>
        <div className='mr-64 flex justify-end'>
          <a href='#section1' className='cursor-pointer'>
            <svg
              width='90'
              height='90'
              viewBox='0 0 50 50'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g>
                <path
                  d='M25 45.3125C24.7943 45.3137 24.5905 45.2743 24.4001 45.1966C24.2098 45.1188 24.0366 45.0042 23.8906 44.8594L9.82811 30.7969C9.53389 30.5027 9.36859 30.1036 9.36859 29.6875C9.36859 29.2714 9.53389 28.8724 9.82811 28.5782C10.1223 28.2839 10.5214 28.1187 10.9375 28.1187C11.3536 28.1187 11.7526 28.2839 12.0469 28.5782L25 41.5469L37.9531 28.5782C38.0988 28.4325 38.2717 28.3169 38.4621 28.2381C38.6524 28.1592 38.8565 28.1187 39.0625 28.1187C39.2685 28.1187 39.4725 28.1592 39.6629 28.2381C39.8532 28.3169 40.0262 28.4325 40.1719 28.5782C40.3175 28.7239 40.4331 28.8968 40.512 29.0872C40.5908 29.2775 40.6314 29.4815 40.6314 29.6875C40.6314 29.8936 40.5908 30.0976 40.512 30.2879C40.4331 30.4783 40.3175 30.6512 40.1719 30.7969L26.1094 44.8594C25.9634 45.0042 25.7902 45.1188 25.5998 45.1966C25.4095 45.2743 25.2056 45.3137 25 45.3125Z'
                  fill='#e94082'
                />
                <path
                  d='M25 45.3125C24.5856 45.3125 24.1881 45.1479 23.8951 44.8549C23.6021 44.5618 23.4375 44.1644 23.4375 43.75V6.25C23.4375 5.8356 23.6021 5.43817 23.8951 5.14515C24.1881 4.85212 24.5856 4.6875 25 4.6875C25.4144 4.6875 25.8118 4.85212 26.1048 5.14515C26.3979 5.43817 26.5625 5.8356 26.5625 6.25V43.75C26.5625 44.1644 26.3979 44.5618 26.1048 44.8549C25.8118 45.1479 25.4144 45.3125 25 45.3125Z'
                  fill='#e94082'
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
