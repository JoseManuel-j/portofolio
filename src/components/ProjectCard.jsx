import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function ProjectCard({ project }) {
  const hasGithub = project.github && project.github !== "#";
  const hasDemo = project.demo && project.demo !== "#";

  return (
    <div
      className="
        group
        rounded-3xl
        overflow-hidden
        border
        border-violet-500/30
        bg-[#0B1020]
        hover:border-violet-500
        transition-all
        duration-500
        hover:-translate-y-3
        hover:shadow-[0_0_40px_rgba(124,58,237,.25)]
      "
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      {/* Gambar project */}
      <div className="overflow-hidden h-[320px] bg-[#111827]">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />
      </div>

      {/* Informasi project */}
      <div className="p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className="
              px-3
              py-1
              rounded-full
              bg-blue-500/10
              border
              border-blue-500/30
              text-blue-300
              text-sm
            "
          >
            {project.category}
          </span>

          <span className="text-gray-500 text-sm">
            {project.year}
          </span>
        </div>

        <h2 className="text-3xl font-bold mt-5">
          {project.title}
        </h2>

        <p className="text-gray-400 mt-5 leading-8">
          {project.description}
        </p>

        {/* Teknologi */}
        <div className="flex flex-wrap gap-3 mt-8">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="
                px-4
                py-2
                rounded-full
                bg-violet-500/10
                border
                border-violet-500/30
                text-violet-300
                text-sm
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Tombol */}
        <div className="flex flex-wrap gap-5 mt-10">
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
                hover:bg-violet-500
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
                hover:bg-violet-500
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              Live Demo

              <FiExternalLink />
            </a>
          )}

          {!hasGithub && !hasDemo && (
            <span
              className="
                px-5
                py-3
                rounded-xl
                bg-white/5
                text-gray-500
                text-sm
              "
            >
              Project belum dipublikasikan
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard; 