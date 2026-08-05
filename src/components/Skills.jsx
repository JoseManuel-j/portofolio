import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiBootstrap,
  SiPython,
  SiNextdotjs,
} from "react-icons/si";

import { FaCss3Alt } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { icon: <SiHtml5 size={32} />, title: "HTML" },
      { icon: <FaCss3Alt size={32} />, title: "CSS" },
      { icon: <SiJavascript size={32} />, title: "JavaScript" },
      { icon: <SiReact size={32} />, title: "React" },
      { icon: <SiTailwindcss size={32} />, title: "Tailwind" },
      { icon: <SiBootstrap size={32} />, title: "Bootsrap" },
      { icon: <SiNextdotjs size={32} />, title: "Next.js" },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { icon: <SiPhp size={32} />, title: "PHP" },
      { icon: <SiLaravel size={32} />, title: "Laravel" },
      { icon: <SiMysql size={32} />, title: "MySQL" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { icon: <SiGit size={32} />, title: "Git" },
      { icon: <SiGithub size={32} />, title: "GitHub" },
      { icon: <VscVscode size={32} />, title: "VS Code" },
    ],
  },
];

function Skills() {
  return (
    <div className="space-y-8">
      {skillCategories.map((group, groupIndex) => (
        <div key={groupIndex}>
          {/* Judul Kategori */}
          <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">
            {group.category}
          </h3>
          
          {/* Grid Kartu Skill per Kategori */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {group.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#050816] border border-white/10 rounded-2xl p-4 hover:border-blue-500 hover:-translate-y-1 duration-300 flex items-center gap-4"
              >
                <div className="text-blue-400">
                  {skill.icon}
                </div>
                <p className="font-medium text-sm text-gray-200">
                  {skill.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;