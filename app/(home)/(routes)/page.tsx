"use client";

import Header from '@/components/header';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="bg-[#404eed] overflow-hidden z-[9999]">
      <div className="z-30 flex flex-col lg:justify-center lg:items-center lg:text-center text-white p-6 mt-6 lg:mt-16 pb-0 relative md:h-[80vh] lg:h-[70vh] xl:h-[50vh] lg:container lg:mx-auto">
        <div className="z-20 space-y-4 lg:space-y-8">
          <h1 className="font-[900] text-3xl sm:text-5xl md:text-6xl text-center md:text-left lg:text-center md:max-w-lg xl:max-w-4xl lg:mx-auto">
            IMAGINE A PLACE...
          </h1>
          <p className="leading-7 md:max-w-lg lg:max-w-3xl lg:text-xl">
            ...where you can belong a gaming group or gaming community. Where just you and a handful of friends can
            spend time together by playing . A place that makes it easy to talk every day
            and hang out more often and play games easily.
          </p>
        </div>
        <div className="mt-14 h-full w-full z-10">
          <Image
            src="/home-center.svg"
            alt="Background"
            className="-z-10 -ml-20 hidden md:block lg:block lg:absolute md:left-[-50%] lg:left-[-1%] xl:left-[-1%] lg:bottom-0"
            width={1550}
            height={1000}
          />
          <Image
            src="/home-left.svg"
            alt="Have fun"
            className="-z-10 -ml-20 md:hidden lg:block lg:absolute lg:left-[-20%] xl:left-[-10%] lg:bottom-0"
            width={600}
            height={600}
          />
          <Image
            src="/home-right.svg"
            alt="Discuss"
            className="md:absolute md:right-0 md:bottom-0 hidden md:block md:left-[50%] lg:left-auto lg:right-[-25%] -ml-20 xl:right-[-14%] -z-10"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};
const Card = ({}) => {
  return (
    <div className={`${false ? "bg-[#f6f6f6] py-3" : "bg-white"}`}>
      <div
        className={`p-6 md:container md:mx-auto lg:p-12 space-y-4 md:flex md:items-center md:justify-between xl:justify-between lg:gap-20 ${true ? "md:flex-row" : "md:flex-row-reverse"
          }`}
      >
        <div className="md:flex-1 lg:flex-[1.5]">
          <Image src="/invite-only.svg" alt="Create an invite-only place where you belong" width={700} height={700} />
        </div>
        <div className="md:flex-1">
          <h2 className="font-[700] text-gray-800 text-lg leading-6 md:text-5xl md:max-w-xs">
            Create an invite-only place where you belong
          </h2>
          <p className="text-sm md:text-lg leading-6 text-gray-500 md:mt-8">
            Gaming Hub servers are organized into topic-based channels where you can talk while playing games and also through text channels.
          </p>
        </div>
      </div>
    </div>
  );
};


export default function Home() {
  return (
    <div className="">
      <Header />
      <HomePage />
      <Card />
    </div>
  )
}
