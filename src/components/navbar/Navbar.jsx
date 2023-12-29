import { useState } from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const variants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
    hidden: { opacity: 0 },
  };
  const spanVariable = {
    initial: {
      x: -200,
    },
    animate: {
      x: 0,
      transition: { duration: 2 },
    },
  };
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />

      <div className="wrapper">
        <motion.span
          onClick={() => setClicked((prev) => !prev)}
          whileTap={{ scale: 0.95 }}
          variants={spanVariable}
          initial="initial"
          animate="animate"
          style={
            clicked
              ? { textDecorationLine: "underline" }
              : { textDecorationLine: "overline" }
          }>
          Haider Dev
        </motion.span>
        <motion.div
          className="social"
          variants={variants}
          initial="hidden"
          animate="visible">
          <motion.a href="https://fb.com/haideralwaqfi" target="_blank">
            <motion.img variants={variants} src="./facebook.png" alt="" />
          </motion.a>
          <motion.a
            href="https://github.com/haideralwaqfi?tab=repositories"
            target="_blank">
            <motion.img
              variants={variants}
              src="./github-mark-white.png"
              alt=""
            />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/haider-al-waqfi-pmp%C2%AE-76149480/"
            target="_blank">
            <motion.img
              className="linkedin"
              variants={variants}
              src="./linkedin.png"
              alt=""
            />
          </motion.a>
          <motion.a
            href="https://www.fiverr.com/haideralwaqfi?up_rollout=true"
            target="_blank">
            <motion.img
              className="linkedin"
              variants={variants}
              src="./fiverr.png"
              alt=""
            />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
