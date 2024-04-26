import Image from "next/image";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function Home() {
  const backgroundImageUrl =
    "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705724835/utilities/background_illustration_lcdskr.svg";

  return (
    <main className="">
      <NavBar />

      {/* Hero Section */}
      <section>
        <div
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative", // Position relative to allow absolute positioning of child elements
          }}
          className=" justify-center flex-row mt-[100px] h-screen"
        >
          <h1 className="text-[60px]">
            Finding web design inspiration doesn’t have to be Hard.
          </h1>
          <h1 className="text-[24px] w-[600px] pt-4 text-center">
            Skip the stressful part. Get real and practical web design
            inspiration from the internet’s best designed and highest-converting
            websites.
          </h1>
          <div className="flex items-center justify-center gap-4 pt-6">
            <Link
              href="/"
              className="bg-black py-4 px-8 text-white rounded-[20px] border border-[#BBBBBB] font-medium text-[18px]"
            >
              Get started now
            </Link>
            <Link
              href="/"
              className="bg-white p-4 px-8 text-black rounded-[20px] border border-[#BBBBBB] font-medium text-[18px]"
            >
              Learn More
            </Link>
          </div>
          <Image
            height={20}
            width={1030}
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714127396/utilities/Group_40_fkagjj.svg"
            alt="rice"
            className=""
          />
        </div>
        <div></div>
      </section>

      {/* Section 2 */}
      <section className="h-[779px]">
        <div className="grid grid-cols-8 gap-4">
          <div className="col-span-4  flex-row">
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
          <div className="col-span-4 ">
            {" "}
            <Image
              height={20}
              width={130}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714127895/utilities/Rectangle_1_xva0pc.svg"
              alt="rice"
              className=""
            />
          </div>
        </div>
      </section>

      {/* section 3  */}
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
              A vast collection of some of the internet’s best designed
              websites.
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
      {/* section 4 */}
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
          <div className="col-span-4 "></div>
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
        </div>
      </section>
      {/* section 5 */}
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
    </main>
  );
}
