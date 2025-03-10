import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

export default function About({ mode }) {
  return (
    <section id="About" className={`${!mode && "text-black"} py-6`}>
      <p className="text-center text-sm opacity-[.5]">MY BIO</p>
      <h1 className="text-center text-xl">
        About <span className="text-myColor">Me</span>
      </h1>
      <div className="sm:flex sm:py-6 sm:px-6 gap-2 sm:items-start">
        <motion.div
          variants={fadeIn("right", 0, 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="left flex py-6 sm:py-0 lg:w-[50%]">
          <div className="m-auto border-[2px] border-solid border-myColor relative rounded-full w-max p-6">
            <img
              src="../../images/profile-img.webp"
              alt=""
              className="rounded-full w-[15rem] lg:w-[25rem] border-[2px] border-solid border-myColor"
            />
            <motion.img
              variants={fadeIn("right", 0.5, 1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              src="../../images/progIcons/js.webp"
              alt=""
              className="icon top-2 left-10 lg:top-6 lg:left-20"
            />
            <motion.img
              variants={fadeIn("right", 0.5, 1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              src="../../images/progIcons/angular.webp"
              alt=""
              className="icon bottom-10 lg:bottom-20"
            />
            <motion.img
              variants={fadeIn("left", 0.5, 1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              src="../../images/progIcons/nodejs.webp"
              alt=""
              className="icon right-2 top-10 lg:right-6 lg:top-20"
            />
            <motion.img
              variants={fadeIn("left", 0.5, 1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              src="../../images/progIcons/go.webp"
              alt=""
              className="icon right-0 bottom-10 lg:right-4 lg:bottom-20"
            />
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0, 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="right flex flex-col gap-6 items-start px-6 lg:w-[50%] lg:px-20  mx-auto">
          <div className="opacity-[.7] text-sm flex flex-col gap-4 lg:text-base">
            <p>
              Greetings! I'm{" "}
              <span className="text-myColor font-medium">Benard Kariuki</span>,
              a seasoned Back-end developer and Front-end developer in
              pursuit of crafting immersive digital experiences. With a degree
              in{" "}
              <span className="text-myColor font-medium">Software Engineering</span>{" "}
              from{" "}
              <span className="text-myColor font-medium">Kisii University</span>
              , my journey into technology began, fueled by an innate curiosity
              for coding and passion to solve real world problems using technology.
            </p>{" "}
            <p>
              In the realm of software development, I specialize in{" "}
              <span className="text-myColor font-medium">NodeJS and Golang</span>, adept
              at transforming conceptual ideas into robust, user-centric
              solutions. Concurrently, my passion for{" "}
              <span className="text-myColor font-medium">Front-end development</span> stems
              from a belief in the power of user-centered front-ends in solving real world problems.
            </p>{" "}
            <p>
              Beyond the screen, I find inspiration in{" "}
              <span className="text-myColor font-medium">Reading</span>. Whether
              it's exploring the latest tech trends or immersing myself in
              nature, I'm always seeking new sources of creativity and
              innovation.
            </p>
          </div>
          <button>
            <a
              href="../file/Resume-Benard-Kariuki.pdf"
              target="_blank"
              className="bg-myColor rounded px-4 py-2 text-black">
              View Resume <i class="fa-solid fa-download text-black ml-2"></i>
            </a>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
