import { motion } from "framer-motion";

function Education() {
  return (
    <section
      id="education"
      className="max-w-7xl mx-auto px-8 pt-10 pb-24"
    >
      {/* Judul pendidikan */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <p className="uppercase tracking-[4px] text-violet-400">
          Education
        </p>

        <h2 className="text-5xl font-bold mt-3">
          Pendidikan
        </h2>
      </motion.div>

      {/* Riwayat pendidikan */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="
          mt-14
          bg-[#0E1326]
          rounded-3xl
          border
          border-white/10
          p-10
          hover:border-violet-500
          hover:-translate-y-2
          transition-all
          duration-300
        "
      >
        <h3 className="text-3xl font-semibold">
          Universitas Budi Luhur
        </h3>

        <p className="mt-3 text-gray-400">
          S1 Teknik Informatika
        </p>

        <p className="mt-2 text-violet-400">
          2023 - Sekarang
        </p>

        <p className="mt-8 text-gray-400 leading-8">
          Aktif mempelajari React, Laravel, Database, UI/UX, serta membangun
          berbagai project web.
        </p>
      </motion.div>
    </section>
  );
}

export default Education;