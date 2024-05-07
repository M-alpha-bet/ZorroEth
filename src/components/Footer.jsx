import React from "react";

import { IoArrowUpOutline } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { motion } from "framer-motion";

const Footer = () => {
  const top = () => {
    window.scrollTo(0, 0);
  };

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

  return (
    <>
      <div className="text-center lg:flex lg:justify-between lg:items-center md:py-8">
        <img
          src="/images/zorro.png"
          className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] mx-auto md:mx-16"
        />
        <div className="flex justify-center py-6">
          <a href="/">
            <p className="px-4  md:text-base md:hover:text-red-500">ABOUT</p>
          </a>
          <a href="/">
            <p className="px-4  md:text-base md:hover:text-red-500">
              KEY FEATURES
            </p>
          </a>
          <a href="/">
            <p className="px-4  md:text-base md:hover:text-red-500">SWAP</p>
          </a>
        </div>
        <button
          onClick={top}
          className="text-white bg-[#c1201d] px-5 py-4 mb-5 md:mx-16"
        >
          <IoArrowUpOutline size={25} />
        </button>
      </div>
      <div className="border-t-[1px] border-gray-600 text-center py-6 lg:flex lg:justify-between lg:items-center lg:px-16">
        <p className="lg:text-base lg:text-gray-400">
          © 2024 Zorro. All Rights Reserved.
        </p>
        <div className="flex items-center justify-center py-4">
          <div className="text-[#c1201d] px-5 cursor-pointer hover:scale-115 ease-in duration-300">
            <a href="https://t.me/zorroportal_erc">
              <FaTelegramPlane size={25} />
            </a>
          </div>
          <div className="text-[#c1201d] px-5 cursor-pointer hover:scale-115 ease-in duration-300">
            <a href="https://x.com/zorro_erc20">
              <FaTwitter size={25} />
            </a>
          </div>
          <div className="text-[#c1201d] px-5 cursor-pointer hover:scale-115 ease-in duration-300">
            <a href="mailto:support@zerroeth.xyz">
              <MdMail size={25} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
