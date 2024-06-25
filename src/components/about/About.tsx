"use client";
import { SmotionDiv, SmotionHeader } from "../../../libs/framer-motion";
import PS from "./client/PS";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="overflow-hidden scrollbar-hidden bg-primary
                h-[400px]
                md:h-[450px]
                lg:h-[500px]"
    >
      <div
        className="flex flex-col items-center text-white
                mt-6
                sm:mt-9
                md:mt-12
                2xl:max-w-[100rem] 2xl:mx-auto"
      >
        <div>
          <SmotionHeader
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ amount: "some", margin: "100% 0% -8% 0%" }}
            className="text-3xl sm:text-4xl font-extrabold"
          ></SmotionHeader>
          About.
          <SmotionDiv
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.38 }}
            viewport={{ amount: "some", margin: "100% 0% -9% 0%" }}
            className="flex justify-center -mt-0.5"
          >
            <hr className="bg-white h-[0.2rem] w-12 sm:w-16 rounded-xl" />
          </SmotionDiv>
        </div>

        <SmotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          viewport={{ amount: "some", margin: "100% 0% -8% 0%" }}
          className="font-semibold text-center
                px-4 mt-6 text-lg
                md:mt-12 md:text-xl
                lg:px-9"
        >
          <SmotionDiv>
            <p>
              Full-Stack Developer with 2+ years of experience designing,
              developing, and managing complex e-commerce sites and internal
              frameworks. Specializes in React and responsive design.
            </p>
          </SmotionDiv>

          <SmotionDiv className="hidden sm:block">
            <p></p>
          </SmotionDiv>

          <div className="mt-6 flex justify-center">
            <PS />
          </div>
        </SmotionDiv>
      </div>
    </section>
  );
};

export default About;
