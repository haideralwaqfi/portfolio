import { useRef } from "react";
import "./portfolio.scss";
import { useScroll, useSpring, motion, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Building React Applications",
    img: "/reactApplication2.png",
    desc: "Throughout my journey, I've successfully utilized React's component-based architecture, state management libraries like Redux or Context API, and other associated tools to create seamless user interfaces.",
  },
  {
    id: 2,
    title: "House marketplace",
    img: "/marketHous.png",
    desc: "React.js App integrated with Firebase services",
  },
  {
    id: 3,
    title: "Issue Tracker Next.js App",
    img: "/issueTracker.png",
    desc: "Next.js App integrated with Prisma Database",
  },
  {
    id: 4,
    title: "Admin Page in Next.js",
    img: "/admin.png",
    desc: "Next.js 14 app with new server actions, Next-auth and MongoDB.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button
              onClick={() =>
                (window.location.href =
                  "https://github.com/haideralwaqfi?tab=repositories")
              }>
              Github Repos
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
