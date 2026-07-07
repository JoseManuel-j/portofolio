import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";

const contacts = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "josemanlll04@gmail.com",
    button: "Send Email",
    link: "mailto:josemanlll04@gmail.com",
    color: "from-pink-500 to-violet-500",
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    value: "+62 812 7182 9644",
    button: "Chat Now",
    link: "https://wa.me/6281271829644",
    color: "from-green-400 to-green-600",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    value: "github.com/JoseManuel-j",
    button: "View Profile",
    link: "https://github.com/JoseManuel-j",
    color: "from-slate-500 to-slate-700",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    value: "linkedin.com/in/jose-manuel-151352330",
    button: "View Profile",
    link: "https://www.linkedin.com/in/jose-manuel-151352330/",
    color: "from-blue-500 to-cyan-500",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-8 pt-10 pb-24"
    >
      {/* Judul kontak */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <p className="uppercase tracking-[6px] text-violet-400">
          Contact
        </p>

        <h1 className="text-6xl font-black mt-4">
          Let's Connect
        </h1>

        <p className="text-gray-400 mt-6 max-w-xl leading-8">
          Saya terbuka untuk kesempatan magang, freelance, maupun kolaborasi
          dalam pengembangan website. Jangan ragu untuk menghubungi saya.
        </p>
      </motion.div>

      {/* Daftar kontak */}
      <div className="grid lg:grid-cols-2 gap-8 mt-16">
        {contacts.map((item, index) => (
          <motion.a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-[#0B1020]
              p-8
              hover:-translate-y-2
              hover:border-violet-500
              hover:shadow-[0_0_35px_rgba(124,58,237,.25)]
              duration-300
            "
          >
            {/* Efek glow */}
            <div
              className={`
                absolute
                -top-20
                -right-20
                w-40
                h-40
                rounded-full
                blur-3xl
                opacity-20
                bg-gradient-to-r
                ${item.color}
                group-hover:opacity-40
                duration-300
              `}
            />

            <div className="relative">
              <div
                className={`
                  w-16
                  h-16
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-3xl
                  bg-gradient-to-r
                  ${item.color}
                `}
              >
                {item.icon}
              </div>

              <h2 className="text-3xl font-bold mt-8">
                {item.title}
              </h2>

              <p className="text-gray-400 mt-3">
                {item.value}
              </p>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  mt-10
                  text-violet-400
                  font-semibold
                  group-hover:gap-5
                  duration-300
                "
              >
                {item.button}

                <FaArrowRight />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default Contact;