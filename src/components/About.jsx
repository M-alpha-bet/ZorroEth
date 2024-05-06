import React from "react";

import Cards from "./Cards";

const About = () => {
  return (
    <>
      <div className="text-center px-5 py-20 slide-in-right">
        <h2 className="text-[#c1201d]">
          ABOUT <span className="text-white">$ZORRO</span>
        </h2>
        <p className="text-base md:text-xl pt-8 md:w-[90%] md:mx-auto">
          Zorro is a cutting-edge decentralized blockchain platform designed to
          empower users with privacy, security, and financial freedom. Inspired
          by the legendary character Zorro, our project combines stealthy
          transactions with advanced cryptography to provide a truly anonymous
          and secure environment for financial transactions and smart contracts.
        </p>
      </div>
      <div className="text-center px-5 py-10">
        <div className="slide-in-top md:px-20">
          <h2>
            Unmatched Privacy: The Power of Zero-Knowledge Proofs in{" "}
            <span className="text-[#c1201d]">Zorro</span>
          </h2>
          <p className="text-base md:text-xl py-5">
            Dive into the world of decentralized finance and see how Zorro is
            leading the way.
          </p>
        </div>

        <Cards />
      </div>
    </>
  );
};

export default About;
