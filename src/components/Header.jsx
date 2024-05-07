import React from "react";

import { motion } from "framer-motion";

const Header = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const fadeInUpAnimationVariants = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      <div className="text-center pt-40 md:pt-48">
        <div className="lg:bg-[url('/images/parallax-money.png')] lg:bg-center">
          <motion.img
            variants={fadeInUpAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            transition={{ duration: 0.5, ease: "linear" }}
            src="/images/zorro.png"
            className="w-[75%] md:w-[20%] mx-auto"
          />
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="px-4 py-6"
          >
            <h1 className="pb-4 md:py-5 drop-shadow-lg tracking-wide header-Shadow">
              $ZORRO
            </h1>
            <p className=" md:w-[75%] md:mx-auto">
              Zorro is a cutting-edge decentralized blockchain platform designed
              to empower users with privacy security, and financial freedom
            </p>
          </motion.div>
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="flex justify-between items-center mx-10 slide-in-top md:w-[25%] md:mx-auto"
          >
            <hr className="w-[15%] bg-[#c1201d] border-0 h-[2px]" />
            <a href="https://app.uniswap.org/swap?use=V2&inputCurrency=ETH&outputCurrency=">
              <button
                className="button py-4 px-4 text-sm md:text-base font-aeonikLight tracking-wider"
                type="submit"
              >
                BUY
              </button>
            </a>
            <a href="https://www.dextools.io/app/en/ether/pair-explorer/">
              <button
                className="button py-4 px-4 text-sm md:text-base font-aeonikLight tracking-wider"
                type="submit"
              >
                CHART
              </button>
            </a>
            <hr className="w-[15%] bg-[#c1201d] border-0 h-[2px]" />
          </motion.div>
          <p className="text-[13px] md:text-base font-aeonikLight py-6">
            0x000000000000000000000000000000000
          </p>
        </div>

        <div className="my-12 bg-[#320202] text-center slide-in-top">
          <div className="flex justify-center items-center py-6">
            <p className="mr-4 md:mr-20 py-2">Telegram</p>
            <div className="border-l border-gray-500 pl-4 md:pl-20">
              <p className="py-2">Twitter</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
