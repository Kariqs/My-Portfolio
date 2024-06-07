import { motion } from "framer-motion";
import { fadeIn } from "/src/components/Variants.js";

export default function Projects({ mode }) {
  const projects = [
    {
      title: "DEVSHOP",
      image: "/images/project/DevShop.webp",
      button: [
        {
          btnText: "Demo",
          link: "https://fancy-tapioca-545212.netlify.app/",
        },
        {
          btnText: "Code",
          link: "https://github.com/Kariqs/WebShop",
        },
      ],
    },
    {
      title: "BUYABOOK",
      image: "/images/project/BuyABook.webp",
      button: [
        {
          btnText: "Demo",
          link: "https://fancy-tapioca-545212.netlify.app/",
        },
        {
          btnText: "Code",
          link: "https://github.com/Kariqs/BuyaBook",
        },
      ],
    },
  ];

  return (
    <ul className="py-6 flex flex-col gap-6 flex-wrap lg:gap-10 sm:flex-row justify-center z-[1]">
      {projects.map((project) => {
        return (
          <motion.li
            variants={fadeIn("up", 0, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            key={project.title}
            className={`${
              !mode ? "bg-white" : "bg-[#070707]"
            }  shadow shadow-slate-800 rounded-xl border-solid border-myColor sm:w-[20rem] lg:w-[25rem]`}>
            <a href={project.button[0].link}>
              <img
                loading="lazy"
                src={project.image}
                target="_blank"
                alt=""
                className="rounded sm:h-[15rem] w-full overflow-hidden border-[1px] border-myColor"
              />
            </a>
            <div className="flex items-center justify-between p-4 py-6">
              <h1 className="">{project.title}</h1>
              <div className="flex gap-2">
                <button>
                  <a
                    href={project.button[0].link}
                    target="_blank"
                    className="border-[1px] border-myColor rounded px-2 py-1 btn-anim">
                    {project.button[0].btnText}
                  </a>
                </button>
                <button>
                  <a
                    href={project.button[1].link}
                    target="_blank"
                    className="border-[1px] border-solid border-myColor rounded px-2 py-1">
                    {project.button[1].btnText}
                  </a>
                </button>
              </div>
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
}
