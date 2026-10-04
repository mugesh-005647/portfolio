import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const navigation = [
  {
    name: "Home",
    id: "home",
  },
  {
    name: "About",
    id: "about",
  },
  {
    name: "Skills",
    id: "skills",
  },
  {
    name: "Experience",
    id: "experience",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "Contact",
    id: "contact",
  },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);

  /* =========================================================
     SCROLL DETECTION
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsScrolled(scrollY > 30);

      const sections = navigation
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      let currentSection = "home";
      const scrollPosition = scrollY + 200;

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     CLOSE MOBILE MENU ON RESIZE
  ========================================================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* =========================================================
     CLOSE MOBILE MENU WITH ESCAPE
  ========================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileMenu(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* =========================================================
     NAVIGATION
  ========================================================= */

  const handleNavigation = (id) => {
    setMobileMenu(false);

    const element = document.getElementById(id);

    if (!element) return;

    const navbarOffset = 80;

    const elementPosition =
      element.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <>
      {/* =====================================================
          DESKTOP / MAIN NAVBAR
      ====================================================== */}

      <motion.header
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="fixed left-0 right-0 top-0 z-[1000] px-4 py-4 sm:px-6"
      >
        <div
          className={`
            mx-auto flex max-w-7xl items-center justify-between
            rounded-full border
            px-4 py-3
            transition-all duration-500
            ${
              isScrolled
                ? `
                  border-[#1C2927]
                  bg-[#07090B]/85
                  shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                  backdrop-blur-xl
                `
                : `
                  border-transparent
                  bg-transparent
                `
            }
          `}
        >

          {/* =================================================
              LOGO
          ================================================== */}

          <button
            type="button"
            onClick={() => handleNavigation("home")}
            aria-label="Go to homepage"
            className="group flex items-center gap-2"
          >
            <span className="text-xl font-semibold tracking-tight text-[#F5F7F6]">
              M<span className="text-[#8FFFC1]">.</span>
            </span>

            <span className="hidden text-xs text-[#566168] transition-colors duration-300 group-hover:text-[#8FFFC1] sm:block">
              Portfolio
            </span>
          </button>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigation(item.id)}
                  className="
                    relative
                    rounded-full
                    px-4
                    py-2
                    text-xs
                    font-medium
                    transition-colors
                    duration-300
                  "
                >
                  {/* Active background */}

                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute inset-0 rounded-full bg-[#8FFFC1]/[0.08]"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Navigation text */}

                  <span
                    className={`
                      relative z-10
                      ${
                        isActive
                          ? "text-[#8FFFC1]"
                          : "text-[#68747A] hover:text-[#F5F7F6]"
                      }
                    `}
                  >
                    {item.name}
                  </span>

                  {/* Active indicator */}

                  {isActive && (
                    <motion.span
                      layoutId="navbar-dot"
                      className="
                        absolute
                        -bottom-1
                        left-1/2
                        h-1
                        w-1
                        -translate-x-1/2
                        rounded-full
                        bg-[#8FFFC1]
                      "
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* =================================================
              DESKTOP ACTIONS
          ================================================== */}

          <div className="hidden items-center gap-2 md:flex">

            {/* Resume */}

            <a
              href="/Mugesh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full
                border
                border-[#29342F]
                px-4
                py-2
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-[#AAB5B0]
                transition-all
                duration-300
                hover:border-[#8FFFC1]/50
                hover:bg-[#8FFFC1]/5
                hover:text-[#8FFFC1]
              "
            >
              Resume
            </a>

            {/* Contact CTA */}

            <button
              type="button"
              onClick={() => handleNavigation("contact")}
              className="
                rounded-full
                border
                border-[#8FFFC1]/30
                px-4
                py-2
                text-xs
                font-medium
                text-[#8FFFC1]
                transition-all
                duration-300
                hover:border-[#8FFFC1]/70
                hover:bg-[#8FFFC1]/10
              "
            >
              Let's Talk
            </button>

          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenu}
            onClick={() =>
              setMobileMenu((previous) => !previous)
            }
            className="
              relative
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[#1C2927]
              bg-[#0A0D0F]
              md:hidden
            "
          >
            <div className="flex w-4 flex-col gap-1.5">

              <motion.span
                animate={{
                  rotate: mobileMenu ? 45 : 0,
                  y: mobileMenu ? 4 : 0,
                }}
                className="block h-px w-full bg-[#8FFFC1]"
              />

              <motion.span
                animate={{
                  opacity: mobileMenu ? 0 : 1,
                }}
                className="block h-px w-full bg-[#8FFFC1]"
              />

              <motion.span
                animate={{
                  rotate: mobileMenu ? -45 : 0,
                  y: mobileMenu ? -4 : 0,
                }}
                className="block h-px w-full bg-[#8FFFC1]"
              />

            </div>
          </button>

        </div>
      </motion.header>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed
              left-4
              right-4
              top-[82px]
              z-[999]
              rounded-3xl
              border
              border-[#1C2927]
              bg-[#080B0D]/95
              p-4
              shadow-2xl
              backdrop-blur-xl
              md:hidden
            "
          >

            <nav className="flex flex-col">

              {navigation.map((item, index) => {
                const isActive =
                  activeSection === item.id;

                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    onClick={() =>
                      handleNavigation(item.id)
                    }
                    className={`
                      flex
                      items-center
                      justify-between
                      rounded-2xl
                      px-4
                      py-4
                      text-left
                      transition-colors
                      duration-300
                      ${
                        isActive
                          ? "bg-[#8FFFC1]/[0.07]"
                          : "hover:bg-white/[0.03]"
                      }
                    `}
                  >
                    <span
                      className={
                        isActive
                          ? "text-sm font-medium text-[#8FFFC1]"
                          : "text-sm text-[#68747A]"
                      }
                    >
                      {item.name}
                    </span>

                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#8FFFC1]" />
                    )}
                  </motion.button>
                );
              })}

            </nav>

            {/* =================================================
                MOBILE ACTIONS
            ================================================== */}

            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-[#1C2927] pt-3">

              {/* Resume */}

              <a
                href="/Mugesh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-2xl
                  border
                  border-[#29342F]
                  px-4
                  py-3
                  text-center
                  text-xs
                  font-medium
                  text-[#AAB5B0]
                  transition-all
                  duration-300
                  hover:border-[#8FFFC1]/50
                  hover:text-[#8FFFC1]
                "
              >
                Resume
              </a>

              {/* Let's Talk */}

              <button
                type="button"
                onClick={() => handleNavigation("contact")}
                className="
                  rounded-2xl
                  bg-[#8FFFC1]
                  px-4
                  py-3
                  text-xs
                  font-medium
                  text-[#07090B]
                  transition-transform
                  duration-300
                  active:scale-[0.98]
                "
              >
                Let's Talk
              </button>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;