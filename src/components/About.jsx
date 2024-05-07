import React from "react";

import Cards from "./Cards";
import { motion } from "framer-motion";

const About = () => {
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

  const fadeInRightAnimationVariants = {
    initial: {
      opacity: 0,
      x: 200,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <>
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        transition={{ delay: 0.2 }}
        className="text-center px-5 py-20"
      >
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
      </motion.div>
      <div className="text-center px-5 py-10">
        <motion.div
          variants={fadeInRightAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ delay: 0.2 }}
          className="slide-in-top md:px-20"
        >
          <h2>
            Unmatched Privacy: The Power of Zero-Knowledge Proofs in{" "}
            <span className="text-[#c1201d]">Zorro</span>
          </h2>
          <p className="text-base md:text-xl py-5">
            Dive into the world of decentralized finance and see how Zorro is
            leading the way.
          </p>
        </motion.div>

        <Cards />
      </div>
    </>
  );
};

export default About;
