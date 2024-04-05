"use client";
import Quote from "./utils/Quote";
import { SOCIAL_FOOTER } from "@/utils/constants";
import { SmotionDiv, SmotionHeader } from "../../../libs/framer-motion";
import SocialMediaTile from "./utils/SocialMediaTile";
import { HorizontalCommonVariants } from "@/utils/framerVariants";

const SocialMedia = () => {
  const horizontalVariants = HorizontalCommonVariants(90);
  return (
    <div
      className="overflow-hidden -mt-40 h-fit
    lg:-mt-52"
    >
      <Quote />

      <SmotionDiv
        initial="hidden"
        whileInView="shown"
        viewport={{
          amount: "some",
          margin: "100% 0% -9% 0%",
        }}
        variants={horizontalVariants}
        className="flex flex-col gap-6 mt-16 mb-12
                px-3
                xxsm:px-6
                sm:px-9
                xmmd:px-24 
                2xl:px-[14rem]"
      >
        <div>
          <SmotionDiv
            variants={horizontalVariants}
            className="text-4xl font-bold"
          >
            Follow me on the internet
          </SmotionDiv>
          <SmotionDiv
            variants={horizontalVariants}
            className="text-xl font-bold"
          >
            Let&apos;s be friend!
          </SmotionDiv>
          <SmotionDiv
            variants={horizontalVariants}
            className="text-sm tracking-tight font-bold -mt-1 text-gray-500"
          >
            Or let&apos;s just...you know...follow and never say anything to
            each other! SMH...
          </SmotionDiv>
        </div>

        <SmotionDiv
          variants={horizontalVariants}
          className="flex flex-col gap-3"
        >
          {SOCIAL_FOOTER.map((social) => {
            return (
              <SmotionDiv
                key={social.id}
                variants={horizontalVariants}
                whileHover={{ y: -3 }}
              >
                <SocialMediaTile social={social} />
              </SmotionDiv>
            );
          })}
        </SmotionDiv>
      </SmotionDiv>
    </div>
  );
};

export default SocialMedia;
