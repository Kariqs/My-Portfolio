import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

export default function Services() {
  const cards = [
    {
      index: "01",
      icon: <i class="fa-solid fa-code"></i>,
      title: "Back-end Web Developer",
      writeUp: `I specialize in building robust and scalable
       back ends tailored to meet diverse user
        needs and business requirements using NodeJS and Express.`,
    },
    {
      index: "02",
      icon: <i class="fa-solid fa-palette"></i>,
      title: "Mobile Application Developer",
      writeUp: `With a keen eye for detail and a focus
       on user-centric design principles, I create
        fully functioning mobile apps that enhance user
         experience and engagement.`,
    },
  ];
  return (
    <section
      id="Services"
      className="py-10 rounded-lg lg:rounded-none bg-[#131313]"
    >
      <div>
        <p className="text-center opacity-[.5] text-sm">SERVICES</p>
        <h1 className="text-center text-2xl">
          What&nbsp;<span className="text-myColor">I do</span>
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-20 mt-6 justify-center px-8">
        {cards.map((card) => {
          const cardStyle =
            card.index === "01" ? "bg-myColor text-[#070707]" : "";
          const lineStyle = card.index === "01" ? "bg-black" : "bg-white";
          return (
            <motion.div
              variants={fadeIn("up", 0, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              key={card.index}
              className={`${cardStyle} relative sm:w-[25rem] border-2 border-solid border-myColor rounded-xl py-10 px-4`}
            >
              <h1 className="absolute right-[2rem] top-[1rem] text-4xl font-medium opacity-[.3]">
                {card.index}
              </h1>
              <div className="text-2xl mb-4">{card.icon}</div>
              <h1 className="text-xl mb-4 font-medium">{card.title}</h1>
              <div
                className={`${lineStyle} w-[5rem] h-[2px] rounded-full mb-2 opacity `}
              ></div>
              <p>{card.writeUp}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
