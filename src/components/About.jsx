import Skills from "./Skills";
import { motion } from "framer-motion";


// .

function About() {
  return (
    <section
      id="about"
      className="
        max-w-[1400px]
        mx-auto
        px-6
        md:px-10
        lg:px-12
        xl:px-16
        pt-16
        pb-24
      "
    >
      <div
        className="
          grid
          lg:grid-cols-[1.1fr_0.9fr]
          gap-14
          lg:gap-16
          xl:gap-20
          items-center
        "
      >
        {/* Tentang Saya */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p
            className="
              text-violet-400
              uppercase
              tracking-[0.25em]
              text-sm
              md:text-base
              font-medium
              mb-5
            "
          >
            About Me
          </p>

          <h2
            className="
              max-w-[780px]
              text-4xl
              sm:text-5xl
              md:text-[54px]
              lg:text-[56px]
              xl:text-[64px]
              font-black
              leading-[1.12]
              tracking-tight
            "
          >
            Web Developer yang membangun{" "}
            <span className="gradient-text">
              website modern
            </span>{" "}
            dan responsif.
          </h2>

          <div
            className="
              w-20
              h-1
              bg-violet-500
              mt-8
              rounded-full
            "
          />

          <div
            className="
              mt-9
              max-w-[680px]
              text-gray-400
              text-base
              md:text-lg
              leading-8
              md:leading-9
            "
          >
            <p>
              Saya adalah mahasiswa Teknik Informatika Universitas Budi Luhur
              yang memiliki ketertarikan pada pengembangan aplikasi web modern.
            </p>

            <p className="mt-5">
              Memiliki pengalaman dalam mengembangkan project menggunakan
              React, Laravel, PHP, MySQL, Git, serta Figma.
            </p>

            <p className="mt-5">
              Saat ini saya sedang mencari kesempatan magang untuk
              mengembangkan kemampuan teknis sekaligus memberikan kontribusi
              nyata dalam tim.
            </p>
          </div>
        </motion.div>

        {/* Daftar Skill */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full"
        >
          <Skills />
        </motion.div>
      </div>
    </section>
  );
}

export default About;