import React, { useState } from "react";
import { motion } from "framer-motion";
export const AnimatedButton = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  return (
    <motion.div>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="save-button"
        onClick={() => (modalOpen ? close() : open())}
      >
        Choose your Avatar
      </motion.button>
    </motion.div>
  );
};
