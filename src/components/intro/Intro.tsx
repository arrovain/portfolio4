"use client";
import Image from "next/image";
import { ImMail } from "react-icons/im";
import { VerticalCommonVariants } from "@/utils/framerVariants";
import {
  SmotionDiv,
  SmotionHeader,
  SmotionLink,
  SmotionSpan,
} from "../../../libs/framer-motion";
import { LINKEDIN_LINK, GITHUB_LINK, EMAIL_LINK } from "@/utils/constants";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Intro = () => {
  const descriptionVariants = VerticalCommonVariants(60, 9, 0.9);
  return (
    <section
      className="h-screen overflow-hidden scrollbar-hidden
                lg:min-h-[100vh]
                2xl:max-w-[100rem] 2xl:mx-auto"
      id="intro"
    >
      <div className="h-full flex flex-col items-center justify-around relative">
        <div
          className="flex flex-col text-center mt-28
                     gap-6
                     sm:gap-12"
        >
          <div className="drop-shadow-xl">
            <SmotionHeader
              elementType="h1"
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-primary font-extrabold flex gap-1 justify-center
                    text-3xl
                    sm:text-4xl"
            >
              Howdy,
              <SmotionSpan
                animate={{
                  rotate: [0, 30, 0, 30, 0, 0, 0],
                  transition: { duration: 1.4, repeat: Infinity },
                }}
                className="cursor-pointer select-none"
              >
                👋
              </SmotionSpan>{" "}
              It&apos;s Mahmut İÇME{" "}
              <span className="hidden xxsm:inline">;)</span>
            </SmotionHeader>
            <SmotionHeader
              elementType="h2"
              initial={{ opacity: 0, x: -90 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-primary font-medium
                    text-lg sm:text-xl"
            ></SmotionHeader>
          </div>

          <SmotionDiv
            initial="hidden"
            whileInView="shown"
            viewport={{ once: true }}
            variants={descriptionVariants}
            className="text-lg sm:text-xl font-bold drop-shadow-xl"
          >
            <SmotionDiv variants={descriptionVariants}>
              Frontend Developer.
            </SmotionDiv>
          </SmotionDiv>
        </div>

        <div className="flex flex-col">
          <div className="text-5xl flex flex-wrap justify-center gap-9 xxsm:gap-12 sm:gap-16 lg:gap-20 py-3 text-teal-600">
            <SmotionLink
              initial={{ opacity: 0, x: -21 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -0.5 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              href={LINKEDIN_LINK as string}
              target="_blank"
              className="cursor-pointer hover:text-[#0A66C2]"
              title="LinkedIn"
            >
              <AiFillLinkedin />
            </SmotionLink>
            <SmotionLink
              initial={{ opacity: 0, y: 21 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -0.5 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              href={GITHUB_LINK}
              target="_blank"
              className="cursor-pointer hover:text-black"
              title="GitHub"
            >
              <AiFillGithub />
            </SmotionLink>
            <SmotionLink
              initial={{ opacity: 0, x: 21 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -0.5 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              href={EMAIL_LINK}
              target="_blank"
              className="cursor-pointer hover:text-red-600 flex items-center"
              title="Gmail"
            >
              <ImMail size={40} />
            </SmotionLink>
          </div>

          <div className="flex justify-center">
            <SmotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileInView={{
                y: [0, 21, 0],
                transition: { duration: 2, repeat: Infinity },
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 1.4 }}
              className={`rounded-full relative
                        w-72 h-72
                        sm:w-[19rem] sm:h-[19rem]
                        lg:w-80 lg:h-80
                        2xl:w-[21rem] 2xl:h-[21rem]`}
            >
              <Image
                className="absolute inset-0 w-full h-full object-center object-cover rounded-full select-none"
                src={"/assets/avatars/profile_pic.png"}
                alt="quiet-node"
                width={300}
                height={300}
              />
            </SmotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
