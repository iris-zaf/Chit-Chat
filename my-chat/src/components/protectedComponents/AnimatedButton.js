import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Modal from "./modal/Modal";
import Lion from "./modal/lion.png";
import Fox from "./modal/fox.png";
import Chameo from "./modal/chameleon.png";
import Owl from "./modal/owl.png";
import Whale from "./modal/whale.png";
export const AnimatedButton = () => {
  const options = [
    { name: "owl", value: <Lion /> },
    { name: "cat", value: <Fox /> },
    { name: "chameleon", value: <Chameo /> },
    { name: "owl", value: <Owl /> },
    { name: "whale", value: <Whale /> },
  ];
  // const [modalOpen, setModalOpen] = useState(false);

  // const close = (e) => {
  //   e.preventDefault();
  //   setModalOpen(false);
  // };
  // const open = () => {
  //   setModalOpen(true);
  // };
  return (
    <div>
      {/* <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="save-button"
        onClick={() => (modalOpen ? close() : open())}
      >
        Choose your Avatar
      </motion.button>
      {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />} */}
    </div>
  );
};
