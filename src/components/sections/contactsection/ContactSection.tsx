import React from "react";
import ContactForm from "./ContactForm";
import { Carter_One } from "next/font/google";
import cx from "classnames";
import { ModalType } from "@/types/types";
const carterOne = Carter_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const ContactSection: React.FC<ModalType> = ({
  toogleModal,
  open,
  videoToggle,
}) => {
  const backgroundImageUrl1 =
    "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714212739/utilities/Vector_9_uu9gsi.svg";
  const bgImg =
    "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705724835/utilities/background_illustration_lcdskr.svg";

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative", // Position relative to allow absolute positioning of child elements
        }}
        className="justify-center w-full flex-row mt-[100px] h-screen items-center space-y-4 py-20"
      >
        <section className="p-20 w-full">
          <div className="text-center mx-auto max-w-3xl">
            <h1
              className={`${carterOne.className} text-5xl text-center font-black leading-tight`}
            >
              <span
                style={{
                  backgroundImage: `url(${backgroundImageUrl1})`,
                  backgroundSize: "contain",
                  //   backgroundPosition: "center",
                  position: "relative",
                  backgroundRepeat: "no-repeat",
                }}
                className="px-4"
              >
                Don't
              </span>{" "}
              miss out
            </h1>
            <p className={cx(carterOne.className, "text-xl mt-8")}>
               Enter your email address below to be among the first to access
              Webspirre and unlock a universe of web design inspiration.
            </p>
          </div>
          <div className=" mt-10 mx-auto w-full">
            <ContactForm
              toogleModal={toogleModal}
              open={open}
              videoToggle={videoToggle}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactSection;
