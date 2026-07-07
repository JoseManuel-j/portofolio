import { motion } from "framer-motion";
import projects from "../data/Projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-8 pt-10 pb-24"
    >
      {/* Judul project */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <p className="uppercase tracking-[5px] text-violet-400">
          Selected Works
        </p>

        <h1 className="text-6xl font-black mt-5">
          Projects
        </h1>

        <p className="mt-8 text-gray-400 max-w-2xl leading-8">
          Berikut beberapa project yang pernah saya kerjakan selama belajar Web
          Development menggunakan React, Laravel, PHP dan MySQL.
        </p>
      </motion.div>

      {/* Daftar project */}
      <div className="mt-16 space-y-16">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;