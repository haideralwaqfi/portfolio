import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -200,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};

function Services() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate={isInView && "animate"}
      ref={ref}>
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br />
          and move forward
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            temporibus. Corrupti cumque, exercitationem, distinctio, quam fuga
            libero atque veritatis quaerat quidem et doloremque assumenda ab
            illum officiis fugiat nemo vero.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{
            background: "lightgray",
            color: "black",
          }}
          className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            temporibus. Corrupti cumque, exercitationem, distinctio, quam fuga
            libero atque veritatis quaerat quidem et doloremque assumenda ab
            illum officiis fugiat nemo vero.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            temporibus. Corrupti cumque, exercitationem, distinctio, quam fuga
            libero atque veritatis quaerat quidem et doloremque assumenda ab
            illum officiis fugiat nemo vero.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            temporibus. Corrupti cumque, exercitationem, distinctio, quam fuga
            libero atque veritatis quaerat quidem et doloremque assumenda ab
            illum officiis fugiat nemo vero.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
