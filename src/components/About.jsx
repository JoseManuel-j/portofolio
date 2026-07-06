import Skills from "./Skills";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-8 pt-10 pb-24"
    >
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        {/* Tentang saya */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-violet-400 uppercase tracking-widest mb-3">
            About Me
          </p>

          <h2 className="text-5xl font-bold leading-tight">
            Membangun
            <span className="text-violet-500">
              {" "}solusi digital{" "}
            </span>
            dengan kode dan kreativitas.
          </h2>

          <div className="w-20 h-1 bg-violet-500 mt-8 rounded-full" />

          <p className="mt-10 text-gray-400 leading-9">
            Saya adalah mahasiswa Teknik Informatika Universitas Budi Luhur
            yang memiliki ketertarikan pada pengembangan aplikasi web modern.
          </p>

          <p className="mt-6 text-gray-400 leading-9">
            Berpengalaman membuat project menggunakan React, Laravel, PHP,
            MySQL, Git, serta Figma.
          </p>

          <p className="mt-6 text-gray-400 leading-9">
            Saat ini saya sedang mencari kesempatan magang untuk mengembangkan
            kemampuan teknis sekaligus memberikan kontribusi nyata dalam tim.
          </p>
        </motion.div>

        {/* Daftar skill */}
        <Skills />
      </div>
    </section>
  );
}

export default About;