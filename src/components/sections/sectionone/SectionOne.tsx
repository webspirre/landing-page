"use client";

import React from "react";
import { GiPlayButton } from "react-icons/gi";

import Image from "next/image";
import Link from "next/link";
import { SectionType } from "@/types/types";
import AOS from "aos";

const HeroSection: React.FC<SectionType> = ({ bgImg }) => {
  React.useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  });
  return (
    <>
      <section>
        <div
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative", // Position relative to allow absolute positioning of child elements
          }}
          className=" justify-center w-full flex-row mt-[100px] h-screen items-center space-y-4 py-20"
        >
          <article className="flex-flex-col w-full max-w-full space-y-6">
            <div
              className="flex flex-col max-w-[750px]  w-full mx-auto items-center "
              data-aos="zoom-in-up"
            >
              <h1 className="text-5xl text-center font-black leading-tight">
                Finding web design inspiration doesn’t have to be Hard.
              </h1>
              <h1 className="text-2xl font-medium text-center pt-4">
                {/* Skip the stressful part. Get real and practical web design
                inspiration from the internet’s best designed and
                highest-converting websites. */}
                We are building the ultimate web design inspiration platform.
                Join the waitlist, and be the first person to know when we
                launch.
              </h1>
            </div>

            <div className="flex items-center justify-center gap-4 pt-6">
              <Link
                href="/"
                className="bg-black py-4 px-8 text-white rounded-[20px] border border-[#BBBBBB] font-medium text-[18px]"
              >
                Join the waitlist
              </Link>
              <Link
                href="/"
                className="bg-white p-4 px-8 text-black rounded-[20px] border border-[#BBBBBB] font-medium text-[18px] flex items-center space-x-3"
              >
                <GiPlayButton size={20} />
                <span>See how it works</span>
              </Link>
            </div>
            {/*@todo still working here */}
            <Image
              height={20}
              width={1030}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714127396/utilities/Group_40_fkagjj.svg"
              alt="rice"
              className="w-full backdrop-brightness-75 relative"
              style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}
              data-aos="zoom-in-right"
            />
          </article>
        </div>
        <div></div>
      </section>
    </>
  );
};

export default HeroSection;
