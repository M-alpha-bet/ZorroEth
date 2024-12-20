import React from "react";

import { motion } from "framer-motion";

import "./Card.css";

const Cards = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:mx-10">
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 0.5 }}
          className="cardbg pl-6 pr-4 py-6 md:pb-16 text-left mt-4 slide-in-right card-hover"
        >
          <h3 className="py-3 md:py-8 md:mr-10">
            PRIVACY-FOCUSED TRANSACTIONS
          </h3>
          <p className="md:text-base">
            Zorro leverages state-of-the-art zero-knowledge proofs and advanced
            cryptographic techniques to ensure confidential and untraceable
            transactions.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 0.5 }}
          className="cardbg pl-6 pr-4 py-6 md:pb-16 text-left mt-4 slide-in-right card-hover"
        >
          <h3 className="py-3 md:py-8 md:mr-10">
            SMART CONTRACTS WITH ENHANCED SECURITY
          </h3>
          <p className="md:text-base">
            Our platform incorporates a secure and efficient smart contract
            infrastructure, allowing users to deploy complex agreements while
            maintaining the highest level of security.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 0.5 }}
          className="cardbg pl-6 pr-4 py-6 md:pb-16 text-left mt-4 slide-in-right card-hover"
        >
          <h3 className="py-3 md:py-8 md:mr-10">COMMUNITY GOVERNANCE</h3>
          <p className="md:text-base">
            Zorro is governed by its community, giving token holders the power
            to shape the future of the platform through decentralized
            decision-making.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 0.5 }}
          className="cardbg pl-6 pr-4 py-6 md:pb-16 text-left mt-4 slide-in-right card-hover"
        >
          <h3 className="py-3 md:py-8 md:mr-10">SCALABILITY</h3>
          <p className="md:text-base">
            With a robust and scalable architecture, Zorro can handle a high
            throughput of transactions, ensuring a smooth and efficient user
            experience.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 0.5 }}
          className="cardbg pl-6 pr-4 py-6 md:pb-16 text-left mt-4 slide-in-right card-hover"
        >
          <h3 className="py-3 md:py-8 md:mr-10">CROSS-CHAIN COMPATIBILITY</h3>
          <p className="md:text-base">
            Zorro's aims to promote interoperability by facilitating cross-chain
            compatibility, enabling seamless interactions with other blockchain
            networks.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 0.5 }}
          className="cardbg pl-6 pr-4 py-6 md:pb-16 text-left mt-4 slide-in-right card-hover"
        >
          <h3 className="py-3 md:py-8 md:mr-10">ZORRO TOKEN</h3>
          <p className="md:text-base">
            ZORRO is the native utility token of the Zorro ecosystem. It serves
            various purposes, including transaction fees, staking, and
            participating in governance decisions.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Cards;
