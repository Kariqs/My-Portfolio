import React from "react";

export default function Skill() {
  const skills = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JAVASCRIPT" },
    { skill: "NODE JS" },
    { skill: "JAVA" },
    { skill: "MONGODB" },
    { skill: "SQL" },
    { skill: "GIT AND GITHUB" },
    { skill: "EXPRESS JS" },
  ];

  const extendedSkills = [...skills, ...skills];

  return (
    <div className="overflow-hidden">
      <ul className="flex gap-4 px-[2rem] w-max skill-container">
        {extendedSkills.map((skill, index) => {
          return (
            <li
              key={index}
              className=" skill-move p-2 px-3 bg-[#202020] rounded-lg text-[#878787] font-semibold tracking-wider"
            >
              {skill.skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
