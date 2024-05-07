import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import React, { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="fixed w-full h-20 md:h-24 border-b-[1px] border-gray-600 md:border-red-800 z-[100]">
        <div className="flex justify-between items-center h-full w-full px-3 md:px-12 2xl:px-20 navgrad">
          <img className="h-[50px] w-[50px] mx-3" src="/images/zorro.png" />
          <div>
            <div className="hidden md:flex px-6 md:items-center">
              <p className="px-4 text-sm font-aeonikBold md:hover:text-red-500">
                ABOUT
              </p>
              <p className="px-4 text-sm font-aeonikBold md:hover:text-red-500">
                KEY FEATURES
              </p>
              <p className="pl-4 pr-20 text-sm font-aeonikBold md:hover:text-red-500">
                SWAP
              </p>
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
              <button
                className="button py-2 px-4 ml-6 text-sm font-aeonikRegular"
                type="submit"
              >
                DAPP
              </button>
            </div>
            <div
              onClick={handleNav}
              className="md:hidden mr-4 py-2 rounded-lg text-white"
            >
              <AiOutlineMenu size={30} />
            </div>
          </div>
        </div>
        <div
          className={
            nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""
          }
        >
          <div
            style={{
              backgroundColor: "#D9D8DE",
            }}
            className={
              nav
                ? "fixed right-0 top-0 w-[100%] sm:w-[80%] md:w-[55%] ease-in duration-700 h-screen"
                : "fixed top-[-200%] ease-in duration-400"
            }
          >
            <div>
              <div className="border-b-[1px] border-gray-600 flex w-full h-20 z-[100] pl-3 pr-3 bg-[#2c1515] items-center justify-between">
                <img
                  className="h-[50px] w-[50px] mx-3"
                  src="/images/zorro.png"
                />
                <div
                  onClick={handleNav}
                  className="px-2 py-2 rounded-lg cursor-pointer text-white"
                >
                  <AiOutlineClose size={30} />
                </div>
              </div>
            </div>
            <div className="bg-[#2c1515] min-h-screen">
              <div className="text-center pt-28">
                <a href="/">
                  <p className=" mx-5 font-aeonikRegular">ABOUT</p>
                </a>
                <a href="/">
                  <p className="mx-5 pt-8 font-aeonikRegular">KEY FEATURES</p>
                </a>
                <a href="/">
                  <p className="mx-5 pt-8 font-aeonikRegular">SWAP</p>
                </a>
              </div>
              <div className="sticky top-[60vh]">
                <div className="pt-20 mx-5">
                  <div className="flex items-center justify-center my-8 w-full sm:w-[80%]">
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
                <div className="w-full text-center">
                  <button
                    className="button py-2 px-4 text-sm font-aeonikRegular"
                    type="submit"
                  >
                    DAPP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
