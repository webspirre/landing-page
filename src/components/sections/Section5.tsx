import Link from 'next/link';
import React from 'react'

function Section5() {
     const backgroundImageUrl =
       "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705724835/utilities/background_illustration_lcdskr.svg";

  return (
    <div>
      <section className="h-[598px]">
        <div
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative", // Position relative to allow absolute positioning of child elements
          }}
          className="grid grid-cols-8 gap-4"
        >
          {" "}
          <div className="col-span-4 ">
            <h1 className="text-[32px]">
              Webspirre has everything you need to ignite your creative fire.
            </h1>
            <p className="text-[20px]">
              Tired of endlessly trawling through different websites searching
              for that perfect spark of inspiration for the project at hand? We
              get it. That's why we're building Webspirre.
            </p>

            <Link
              href="/"
              className="bg-white p-4 px-8 text-black rounded-[20px] border border-[#BBBBBB] font-medium text-[18px]"
            >
              Learn More
            </Link>
          </div>
          <div className="col-span-4 "></div>
        </div>
      </section>
    </div>
  );
}

export default Section5
