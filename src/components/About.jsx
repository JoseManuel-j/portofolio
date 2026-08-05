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
        px-8
        md:px-10
        lg:px-12
        xl:px-16
        pt-8
        pb-24
        text-center
        md:text-left
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
              text-blue-400
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
    text-3xl
    sm:text-4xl
    md:text-4xl
    lg:text-[42px]
    xl:text-[48px]
    font-black
    leading-[1.15]
    tracking-tight
  "
>
  Berfokus Merancang dan Mengembangkan{" "}
  <span className="gradient-text">
    Website Modern & Responsif
  </span>
</h2>


          <div
            className="
              w-20
              h-1
              bg-blue-500
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
              Halo! Saya Jose, mahasiswa Teknik Informatika di Universitas Budi Luhur yang fokus mendalami Frontend Development, tetapi saya juga paham dasar-dasar Backend untuk bikin web yang fungsional.
            </p>

            <p className="mt-5">
              Saya juga senang belajar hal baru, terutama teknologi web terbaru. Saya percaya bahwa belajar itu proses yang berkelanjutan, dan saya selalu berusaha untuk meningkatkan kemampuan saya.
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