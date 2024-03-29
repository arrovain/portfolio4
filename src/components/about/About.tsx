"use client";

import PS from "./client/PS";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="overflow-hidden scrollbar-hidden bg-primary
                h-[400px]
                md:h-[450px]
                lg:h-[500px]"
    >
      <motion.div
        className="flex flex-col items-center text-white
                mt-6
                sm:mt-9
                md:mt-12
                2xl:max-w-[100rem] 2xl:mx-auto"
      >
        <motion.div>
          <motion.div
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ amount: "some", margin: "100% 0% -8% 0%" }}
            className="text-3xl sm:text-4xl font-extrabold"
          ></motion.div>
          About.
          <motion.div
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.38 }}
            viewport={{ amount: "some", margin: "100% 0% -9% 0%" }}
            className="flex justify-center -mt-0.5"
          >
            <hr className="bg-white h-[0.2rem] w-12 sm:w-16 rounded-xl" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          viewport={{ amount: "some", margin: "100% 0% -8% 0%" }}
          className="font-semibold text-center
                px-4 mt-6 text-lg
                md:mt-12 md:text-xl
                lg:px-9"
        >
          <motion.div>
            <p>
              An avid technology believer{" "}
              <br className="hidden xxsm:block xsm:hidden" /> who is{" "}
              <br className="hidden xsm:block sm:hidden" /> continually
              intrigued <br className="hidden lg:block" /> by{" "}
              <br className="hidden xxsm:block xsm:hidden" /> the{" "}
              <br className="hidden sm:block lg:hidden" />
              immense potential <br className="hidden xsm:block sm:hidden" /> of
              web <br className="hidden xxsm:block xsm:hidden" /> and AI can
              revolutionize the future.
            </p>
          </motion.div>

          <motion.div className="hidden sm:block">
            <motion.p>
              Through commitment to professionalism,{" "}
              <motion.span className="sm:hidden md:inline">and </motion.span>
              <span className="hidden lg:inline">focus on</span>{" "}
              <span className="sm:hidden md:inline">excellence,</span>
              I am passionate <br className="hidden md:block lg:hidden" /> about{" "}
              <br className="hidden lg:block" /> creating{" "}
              <br className="hidden sm:block md:hidden lg:hidden" /> elegant and{" "}
              <motion.span className="lg:hidden">agile</motion.span>{" "}
              <motion.span
                className="hidden lg:inline
              "
              >
                efficient{" "}
              </motion.span>
              solutions bringing novelty and comfort to{" "}
              <motion.span className="lg:hidden">life.</motion.span>{" "}
              <motion.span className="hidden lg:inline">
                all aspects of human life
              </motion.span>
            </motion.p>
          </motion.div>

          <motion.div className="mt-6 flex justify-center">
            <PS />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
