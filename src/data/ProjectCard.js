import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

function ProjectCard({ project }) {
  const hasGithub = project.github && project.github !== "#";
  const hasDemo = project.demo && project.demo !== "#";

  return (
    <div
      className="
        group
        bg-[#0B1224]
        border
        border-white/10
        rounded-3xl
        overflow-hidden
        hover:border-violet-500
        hover:-translate-y-3
        hover:shadow-[0_0_40px_rgba(124,58,237,0.20)]
        transition-all
        duration-500
      "
    >
      <div className="overflow-hidden bg-[#111827]">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-72
            object-cover
            group-hover:scale-105
            transition-transform
            duration-700
          "
        />
      </div>

      <div className="p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm text-violet-400">
            {project.category}
          </span>

          <span className="text-gray-600">
            •
          </span>

          <span className="text-sm text-gray-400">
            {project.year}
          </span>
        </div>

        <h3 className="text-3xl font-bold mt-4">
          {project.title}
        </h3>

        <p className="text-gray-400 mt-5 leading-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mt-7">
          {project.tech.map((item, index) => (
            <span
              key={index}
              className="
                px-4
                py-2
                rounded-full
                bg-violet-500/10
                border
                border-violet-500/20
                text-violet-300
                text-sm
              "
            >
              {item}
            </span>
          ))}
        </div>

        {(hasGithub || hasDemo) && (
          <div className="flex flex-wrap gap-4 mt-8">
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-xl
                  bg-white/5
                  border
                  border-white/10
                  hover:bg-violet-500
                  hover:border-violet-500
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <FaGithub />

                GitHub
              </a>
            )}

            {hasDemo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-xl
                  border
                  border-violet-500
                  text-violet-300
                  hover:bg-violet-500
                  hover:text-white
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                Live Demo

                <FiArrowUpRight />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;