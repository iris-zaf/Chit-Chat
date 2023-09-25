// import { motion } from "framer-motion";
// import Backdrop from "../modal/Backdrop";
// import Lion from "./lion.png";
// import Fox from "./fox.png";
// import Chameo from "./chameleon.png";
// import Owl from "./owl.png";
// import Whale from "./whale.png";
// const flip = {
//   hidden: {
//     transform: "scale(0) rotateX(-360deg)",
//     opacity: 0,
//     transition: {
//       delay: 0.3,
//     },
//   },
//   visible: {
//     transform: " scale(1) rotateX(0deg)",
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//     },
//   },
//   exit: {
//     transform: "scale(0) rotateX(360deg)",
//     opacity: 0,
//     transition: {
//       duration: 0.5,
//     },
//   },
// };
// function Modal({ handleClose, text }) {
//   return (
//     <Backdrop onClick={handleClose}>
//       <motion.div
//         onClick={(e) => e.stopPropagation()}
//         className="modal orange-gradient"
//         variants={flip}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//       >
//         <div>
//           <ModalText text={text} />
//           <ModalButton onClick={handleClose} label="Choose" />
//         </div>
//       </motion.div>
//     </Backdrop>
//   );
// }
// const ModalText = ({ text }) => (
//   <div className="modal-text">
//     <ul style={{ listStyle: "none" }}>
//       <li>
//         <img src={Lion} alt="lion" />
//       </li>
//       <li>
//         <img src={Fox} alt="lion" />
//       </li>
//       <li>
//         <img src={Chameo} alt="lion" />
//       </li>
//       <li>
//         <img src={Owl} alt="lion" />
//       </li>
//       <li>
//         <img src={Whale} alt="lion" />
//       </li>
//     </ul>
//   </div>
// );

// const ModalButton = ({ onClick, label }) => (
//   <motion.button
//     style={{ width: "100px", color: "white" }}
//     type="button"
//     whileHover={{ scale: 1.1 }}
//     whileTap={{ scale: 0.95 }}
//     onClick={onClick}
//   >
//     {label}
//   </motion.button>
// );
// export default Modal;
