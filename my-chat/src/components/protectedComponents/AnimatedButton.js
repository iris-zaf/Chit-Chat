import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./modal/Modal";
export const AnimatedButton = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="save-button"
        onClick={() => (modalOpen ? close() : open())}
      >
        Choose your Avatar
      </motion.button>
      {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
    </div>
  );
};
