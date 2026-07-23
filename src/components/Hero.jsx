import profile from "../assets/Profile.JPG";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import Counter from "./Counter";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-0"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-24 w-[420px] h-[420px] bg-violet-600/20 blur-[150px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-blue-500/20 blur-[150px] rounded-full" />
      </div>  

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-[1400px] mx-auto px-8 lg:px-12 xl:px-20"
      >
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Informasi */}
          <div className="lg:pl-6 mt-6">
              <h1
                className="
                  mt-6
                  md:mt-8
                  text-6xl
                  md:text-5xl
                  lg:text-[88px]
                  xl:text-[88px]
                  font-black
                  leading-[0.95]
                  tracking-tight
                  text-center 
                  md:text-left
                "
              >
                <span className="gradient-text mr-3">Jose</span>

                <span className="gradient-text">Manuel</span>
              </h1>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold gradient-text text-center md:text-left">
              Web Developer
            </h2>

            <p className="mt-7 max-w-[520px] text-gray-400 leading-9 text-lg">
              Mahasiswa Teknik Informatika Universitas Budi Luhur yang memiliki
              ketertarikan dalam pengembangan website modern menggunakan React,
              Laravel, PHP, dan MySQL.

              <br />
              <br />

              Saat ini sedang mencari kesempatan magang untuk mengembangkan
              kemampuan teknis sekaligus memberikan kontribusi nyata di dunia
              industri.
            </p>

            {/* Tombol */}
            <div className="flex flex-wrap gap-5 mt-10">
              <Link
                to="projects"
                smooth={true}
                duration={400}
                offset={0}
                className="
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                  bg-gradient-to-r
                  from-blue-500
                  to-violet-600
                  hover:scale-105
                  transition-transform
                  duration-300
                  shadow-lg
                  shadow-violet-500/20
                  cursor-pointer
                "
              >
                🚀 Lihat Project
              </Link>

              <a
                href="/Cv/CV Jose Manuel.pdf"
                download
                className="
                  px-8
                  py-4
                  rounded-full
                  border
                  border-violet-500
                  hover:bg-violet-600/20
                  duration-300
                "
              >
                📄 Download CV
              </a>
            </div>

            {/* Social media */}
            <div className="flex gap-5 mt-8">
              <a
                href="https://github.com/JoseManuel-j"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  glass
                  w-16
                  h-16
                  flex
                  items-center
                  justify-center
                  rounded-full
                  hover:scale-110
                  hover:text-violet-400
                  duration-300
                "
              >
                <FaGithub size={28} />
              </a>

              <a
                href="https://www.linkedin.com/in/jose-manuel-151352330/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  glass
                  w-16
                  h-16
                  flex
                  items-center
                  justify-center
                  rounded-full
                  hover:scale-110
                  hover:text-violet-400
                  duration-300
                "
              >
                <FaLinkedin size={28} />
              </a>

              <a
                href="https://wa.me/6281271829644"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="
                  glass
                  w-16
                  h-16
                  flex
                  items-center
                  justify-center
                  rounded-full
                  hover:scale-110
                  hover:text-violet-400
                  duration-300
                "
              >
                <FaWhatsapp size={28} />
              </a>
              <a
                href="https://www.instagram.com/jose_mnlll/" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  glass
                  w-16
                  h-16
                  flex
                  items-center
                  justify-center
                  rounded-full
                  hover:scale-110
                  hover:text-violet-400
                  duration-300
                "
              >
                <FaInstagram size={28} />
              </a>
            </div>

            {/* Statistik */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              <Counter
                end={2}
                suffix="+"
                title="Projects"
              />

              <Counter
                end={10}
                suffix="+"
                title="Tech Stack"
              />

              <Counter
                end={2}
                title="Certificates"
              />
            </div>
          </div>

          {/* Foto */}
          <div className="flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
              }}
              className="relative"
            >
              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  to-violet-600
                  blur-[120px]
                  opacity-30
                "
              />

              <motion.img
                src={profile}
                alt="Jose Manuel"
                className="
                  relative
                  w-[380px]
                  md:w-[500px]
                  lg:w-[590px]
                  xl:w-[640px]
                  aspect-square
                  object-cover
                  rounded-full
                  border-4
                  border-violet-500
                  shadow-[0_0_80px_rgba(139,92,246,.35)]
                "
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll */}
      <motion.div
        className="
          hidden
          xl:flex
          absolute
          bottom-4
          left-1/2
          -translate-x-1/2
          flex-col
          items-center
          text-gray-400
        "
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
      >
        <span className="text-sm tracking-widest uppercase">
          Scroll Down
        </span>

        <div className="mt-3 w-[2px] h-14 bg-gradient-to-b from-violet-500 to-transparent" />
      </motion.div>
    </section>
  );
}

export default Hero;