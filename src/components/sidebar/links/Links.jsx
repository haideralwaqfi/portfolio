import React from "react";
import { motion } from "framer-motion";
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const itemsVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
function Links() {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          variants={itemsVariants}
          whileHover={{ scale: 1.1, textDecoration: "underLine" }}
          whileTap={{ scale: 1 }}
          href={`#${item}`}
          key={item}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}

export default Links;
