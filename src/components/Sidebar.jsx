import { useState } from "react";
import { Link } from "react-scroll";

import {
  FaHome,
  FaUser,
  FaCode,
  FaCertificate,
  FaGraduationCap,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const menus = [
  {
    title: "Home",
    to: "home",
    icon: <FaHome />,
  },
  {
    title: "About",
    to: "about",
    icon: <FaUser />,
  },
  {
    title: "Projects",
    to: "projects",
    icon: <FaCode />,
  },
  {
    title: "Certificates",
    to: "certificates",
    icon: <FaCertificate />,
  },
  {
    title: "Education",
    to: "education",
    icon: <FaGraduationCap />,
  },
  {
    title: "Contact",
    to: "contact",
    icon: <FaEnvelope />,
  },
];

function Sidebar() {
  const [activeMenu, setActiveMenu] = useState("home");

  return (
    <>
      {/* Sidebar desktop */}
      <aside
        className="
          hidden
          lg:flex
          fixed
          left-0
          top-0
          h-screen
          w-24
          bg-[#070B18]/90
          backdrop-blur-xl
          border-r
          border-white/10
          flex-col
          justify-between
          items-center
          py-8
          z-50
        "
      >
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={400}
          offset={0}
          onClick={() => setActiveMenu("home")}
          className="cursor-pointer"
        >
          <div
            className="
              text-5xl
              font-black
              bg-gradient-to-b
              from-blue-400
              to-violet-500
              bg-clip-text
              text-transparent
              transition-transform
              duration-300
              hover:scale-110
            "
          >
            J.
          </div>
        </Link>

        {/* Menu */}
        <nav className="flex flex-col gap-3">
          {menus.map((menu) => (
            <Link
              key={menu.to}
              to={menu.to}
              spy={true}
              smooth={true}
              duration={400}
              offset={0}
              onClick={() => setActiveMenu(menu.to)}
              onSetActive={() => setActiveMenu(menu.to)}
              className="
                sidebar-link
                group
                relative
                cursor-pointer
              "
            >
              <div
                className={`
                  w-14
                  h-14
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-xl
                  transition-all
                  duration-300
                  ${
                    activeMenu === menu.to
                      ? "bg-gradient-to-br from-blue-500 to-violet-500 text-white scale-110 shadow-[0_10px_30px_rgba(99,102,241,0.4)]"
                      : "text-gray-400 hover:bg-white/5 hover:text-violet-400 hover:scale-110"
                  }
                `}
              >
                {menu.icon}
              </div>

              {/* Tooltip */}
              <span
                className="
                  absolute
                  left-16
                  top-1/2
                  -translate-y-1/2
                  -translate-x-2
                  whitespace-nowrap
                  px-3
                  py-2
                  rounded-lg
                  bg-[#111827]
                  border
                  border-white/10
                  text-white
                  text-sm
                  opacity-0
                  invisible
                  group-hover:opacity-100
                  group-hover:visible
                  group-hover:translate-x-0
                  transition-all
                  duration-300
                  pointer-events-none
                  shadow-xl
                "
              >
                {menu.title}
              </span>
            </Link>
          ))}
        </nav>

        {/* Social media */}
        <div className="flex flex-col gap-5">
          <a
            href="https://github.com/JoseManuel-j"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              text-gray-400
              hover:text-white
              transition-all
              duration-300
              hover:scale-125
            "
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/jose-manuel-151352330/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              text-gray-400
              hover:text-blue-400
              transition-all
              duration-300
              hover:scale-125
            "
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </aside>

      {/* Navigasi mobile */}
      <nav
        className="
          lg:hidden
          fixed
          bottom-4
          left-1/2
          -translate-x-1/2
          z-50
          w-[calc(100%-24px)]
          max-w-[430px]
        "
      >
        <div
          className="
            flex
            items-center
            justify-around
            px-2
            py-2
            rounded-2xl
            bg-[#070B18]/90
            backdrop-blur-xl
            border
            border-white/10
            shadow-2xl
          "
        >
          {menus.map((menu) => (
            <Link
              key={menu.to}
              to={menu.to}
              spy={true}
              smooth={true}
              duration={400}
              offset={0}
              onClick={() => setActiveMenu(menu.to)}
              onSetActive={() => setActiveMenu(menu.to)}
              aria-label={menu.title}
              className={`
                w-11
                h-11
                sm:w-12
                sm:h-12
                rounded-xl
                flex
                items-center
                justify-center
                text-lg
                cursor-pointer
                transition-all
                duration-300
                ${
                  activeMenu === menu.to
                    ? "bg-gradient-to-br from-blue-500 to-violet-500 text-white -translate-y-1 scale-110 shadow-[0_8px_25px_rgba(99,102,241,0.45)]"
                    : "text-gray-400"
                }
              `}
            >
              {menu.icon}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Sidebar;