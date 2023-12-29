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
      id="services"
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
          <h2>Install, configure and customize lab and emr systems</h2>
          <p>
            EMR, Laboratory(LIMS) Systems building, implementation, and training
            from clinical application experts have more than 8 years in
            electronic health solutions. Setup and maintain an Electronic
            Medical System(EMR) with hundreds of Latest features + 3 months free
            technical support Configuration. Customization, Programming, and
            Hosting.
          </p>
          <button
            onClick={() =>
              (window.location.href =
                "https://www.fiverr.com/haideralwaqfi/do-web-development-for-applications-ehr-and-laboratory")
            }>
            Go
          </button>
        </motion.div>
        <motion.div
          whileHover={{
            background: "lightgray",
            color: "black",
          }}
          className="box">
          <h2>Deploy and Develop a senaite lims instance on the cloud</h2>
          <p>
            Today lab needs to be more than just a paperless lab; it needs to be
            digital. Our solutions do more than just securely acquire, analyze,
            manage and share your data. They enable you to accelerate your
            scientific discoveries and streamline lab operations. Do more with
            our innovative laboratory data management and analysis solutions.
          </p>
          <button
            onClick={() =>
              (window.location.href =
                "https://www.fiverr.com/haideralwaqfi/do-web-development-for-applications-ehr-and-laboratory")
            }>
            Go
          </button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box">
          <h2>Setup your laboratory using LIMS of your choice</h2>
          <p>
            setup and configuring the Laboratory Information Management System.
          </p>
          <button
            onClick={() =>
              (window.location.href =
                "https://www.fiverr.com/haideralwaqfi/setup-your-laboratory-using-lims-of-your-choice")
            }>
            Go
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
