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
  SiFigma,
} from "react-icons/si";

import {
  FaCss3Alt,
} from "react-icons/fa6";

import { VscVscode } from "react-icons/vsc";

const skills = [

    {
        icon:<SiHtml5 size={40}/>,
        title:"HTML"
    },

    {
        icon: <FaCss3Alt size={40} />,
        title: "CSS"
    },

    {
        icon:<SiJavascript size={40}/>,
        title:"JavaScript"
    },

    {
        icon:<SiReact size={40}/>,
        title:"React"
    },

    {
        icon:<SiLaravel size={40}/>,
        title:"Laravel"
    },

    {
        icon:<SiPhp size={40}/>,
        title:"PHP"
    },

    {
        icon:<SiMysql size={40}/>,
        title:"MySQL"
    },

    {
        icon:<SiGit size={40}/>,
        title:"Git"
    },

    {
        icon:<SiGithub size={40}/>,
        title:"GitHub"
    },

    {
        icon:<SiTailwindcss size={40}/>,
        title:"Tailwind"
    },

    {
        icon:<SiFigma size={40}/>,
        title:"Figma"
    },

    {
        icon: <VscVscode size={40} />,
        title: "VS Code"
    },

];

function Skills(){

    return(

        <div className="grid grid-cols-3 gap-5">

            {skills.map((skill,index)=>(

                <div
                key={index}
                className="bg-[#0E1326] border border-white/10 rounded-2xl p-6 hover:border-violet-500 hover:-translate-y-2 duration-300 flex flex-col items-center justify-center gap-4"
                >

                    <div className="text-violet-400">

                        {skill.icon}

                    </div>

                    <p>

                        {skill.title}

                    </p>

                </div>

            ))}

        </div>

    )

}

export default Skills;