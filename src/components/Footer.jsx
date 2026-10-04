import { motion } from "motion/react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Experience",
      href: "#experience",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <footer
      id="footer"
      className="
        relative
        overflow-hidden
        border-t
        border-[#1C2927]
        bg-[#07090B]
        px-5
        py-14
        sm:px-6
        sm:py-16
        lg:py-20
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Top glow */}
        <div
          className="
            absolute
            left-1/2
            top-[-150px]
            h-[280px]
            w-[280px]
            -translate-x-1/2
            rounded-full
            bg-[#8FFFC1]/[0.035]
            blur-[120px]
            sm:h-[350px]
            sm:w-[350px]
            sm:blur-[140px]
          "
        />

        {/* Left glow */}
        <div
          className="
            absolute
            bottom-[-150px]
            left-[-150px]
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#8FFFC1]/[0.025]
            blur-[120px]
            sm:h-[350px]
            sm:w-[350px]
            sm:blur-[130px]
          "
        />

        {/* Right glow */}
        <div
          className="
            absolute
            bottom-[-150px]
            right-[-150px]
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#6D7CFF]/[0.02]
            blur-[120px]
            sm:h-[350px]
            sm:w-[350px]
            sm:blur-[130px]
          "
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl">
        {/* =====================================================
            TOP SECTION
        ====================================================== */}

        <div
          className="
            grid
            gap-12
            lg:grid-cols-[1.2fr_0.8fr]
            lg:gap-16
          "
        >
          {/* =================================================
              BRAND
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            {/* Small label */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#8FFFC1]" />

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-[#8FFFC1]
                  sm:text-[10px]
                  sm:tracking-[0.35em]
                "
              >
                Let's build something
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                mt-6
                max-w-2xl
                text-[2.7rem]
                font-semibold
                leading-[0.98]
                tracking-[-0.045em]
                text-[#F5F7F6]
                sm:mt-7
                sm:text-5xl
                md:text-6xl
              "
            >
              Keep building.
              <br />

              <span className="text-[#8FFFC1]">
                Keep learning.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-lg
                text-sm
                leading-7
                text-[#68747A]
                sm:mt-6
              "
            >
              Thanks for visiting my portfolio. I'm always
              interested in learning new technologies, building
              useful projects, and exploring new opportunities.
            </p>

            {/* Availability */}
            <div className="mt-7 flex items-center gap-3 sm:mt-8">
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-[#8FFFC1]
                    opacity-40
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-[#8FFFC1]
                  "
                />
              </span>

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.22em]
                  text-[#566168]
                  sm:text-[10px]
                  sm:tracking-[0.25em]
                "
              >
                Open to opportunities
              </span>
            </div>
          </motion.div>

          {/* =================================================
              NAVIGATION
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="lg:justify-self-end"
          >
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.28em]
                text-[#566168]
                sm:text-[10px]
                sm:tracking-[0.3em]
              "
            >
              Navigation
            </p>

            <div
              className="
                mt-5
                grid
                grid-cols-2
                gap-x-10
                gap-y-4
                sm:mt-6
                sm:grid-cols-3
                sm:gap-x-12
                lg:grid-cols-2
              "
            >
              {footerLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-[#68747A]
                    transition-colors
                    duration-300
                    hover:text-[#8FFFC1]
                  "
                >
                  <span
                    className="
                      text-[9px]
                      text-[#3F4B4F]
                      transition-colors
                      duration-300
                      group-hover:text-[#8FFFC1]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            DIVIDER
        ====================================================== */}

        <div className="my-10 h-px w-full bg-[#1C2927] sm:my-12" />

        {/* =====================================================
            BOTTOM SECTION
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            flex
            flex-col
            gap-7
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:gap-8
          "
        >
          {/* Copyright */}
          <div>
            <p
              className="
                text-lg
                font-semibold
                tracking-tight
                text-[#F5F7F6]
                sm:text-xl
              "
            >
              Mugesh
              <span className="text-[#8FFFC1]">.</span>
            </p>

            <p className="mt-2 text-[11px] text-[#4F5B60] sm:text-xs">
              © {currentYear} Mugesh R. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-4
              sm:gap-5
            "
          >
            {/* GitHub */}
            <a
              href="https://github.com/mugesh-005647"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-[10px]
                uppercase
                tracking-[0.16em]
                text-[#566168]
                transition-colors
                duration-300
                hover:text-[#8FFFC1]
                sm:text-xs
                sm:tracking-[0.18em]
              "
            >
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mugesh-r-64a8b0341/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-[10px]
                uppercase
                tracking-[0.16em]
                text-[#566168]
                transition-colors
                duration-300
                hover:text-[#8FFFC1]
                sm:text-xs
                sm:tracking-[0.18em]
              "
            >
              LinkedIn
            </a>

            {/* Separator */}
            <span className="hidden h-4 w-px bg-[#26332E] sm:block" />

            {/* Back To Top */}
            <a
              href="#home"
              className="
                group
                flex
                items-center
                gap-2
                text-[10px]
                uppercase
                tracking-[0.16em]
                text-[#68747A]
                transition-colors
                duration-300
                hover:text-[#8FFFC1]
                sm:text-xs
                sm:tracking-[0.18em]
              "
            >
              Back to top

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                "
              >
                ↑
              </span>
            </a>
          </div>
        </motion.div>

        {/* =====================================================
            FINAL LINE
        ====================================================== */}

        <div
          className="
            mt-8
            flex
            flex-col
            gap-3
            sm:mt-10
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-[#3F4B4F]
              sm:text-[9px]
              sm:tracking-[0.3em]
            "
          >
            Designed & Built with React
          </span>

          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-[#3F4B4F]
              sm:text-[9px]
              sm:tracking-[0.3em]
            "
          >
            {currentYear}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;