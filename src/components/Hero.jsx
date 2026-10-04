import { lazy, Suspense } from "react";
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

/*
=========================================================
LAZY LOAD 3D HERO SCENE
=========================================================
*/

const HeroScene = lazy(() =>
  import("./HeroScene")
);

/*
=========================================================
HERO
=========================================================
*/

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        bg-[#07090B]
        px-6
        pt-28
        pb-16
        sm:px-8
        sm:pt-32
        sm:pb-20
        lg:px-12
        lg:pt-24
        lg:pb-12
      "
    >

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Main glow */}

        <div
          className="
            absolute
            left-[5%]
            top-[15%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#8FFFC1]/[0.035]
            blur-[140px]
            sm:h-[450px]
            sm:w-[450px]
          "
        />

        {/* Secondary glow */}

        <div
          className="
            absolute
            bottom-[5%]
            right-[5%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#6D7CFF]/[0.025]
            blur-[130px]
            sm:h-[450px]
            sm:w-[450px]
          "
        />

        {/* Grid */}

        <div
          className="
            grid-background
            absolute
            inset-0
            opacity-30
          "
        />

      </div>

      {/* =====================================================
          3D SCENE
      ====================================================== */}

      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          w-full
          max-w-7xl
        "
      >

        <div
          className="
            max-w-4xl
            lg:max-w-3xl
          "
        >

          {/* =================================================
              EYEBROW
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="
              flex
              items-center
              gap-3
            "
          >

            <span
              className="
                h-px
                w-8
                bg-[#8FFFC1]
                sm:w-10
              "
            />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.28em]
                text-[#8FFFC1]
                sm:text-xs
                sm:tracking-[0.35em]
              "
            >
              Developer · AI/ML · Cloud
            </span>

          </motion.div>

          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
            className="
              mt-7
              max-w-4xl
              text-[3.2rem]
              font-semibold
              leading-[0.94]
              tracking-[-0.055em]
              text-[#F5F7F6]
              sm:mt-8
              sm:text-6xl
              md:text-7xl
              lg:text-[5.8rem]
              xl:text-[6.4rem]
            "
          >
            Building
            <br />

            <span className="text-[#8FFFC1]">
              digital
            </span>{" "}
            experiences.

          </motion.h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.35,
            }}
            className="
              mt-7
              max-w-xl
              text-sm
              leading-7
              text-[#89949A]
              sm:mt-8
              sm:text-base
              sm:leading-8
            "
          >
            I’m a B.Tech Information Technology student
            passionate about software development,
            artificial intelligence, machine learning,
            cloud computing, and building practical
            technology solutions.
          </motion.p>

          {/* =================================================
              CTA BUTTONS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.45,
            }}
            className="
              mt-9
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-center
              sm:gap-4
            "
          >

            {/* View Projects */}

            <a
              href="#projects"
              className="
                group
                inline-flex
                w-full
                items-center
                justify-center
                rounded-full
                border
                border-[#8FFFC1]
                bg-[#8FFFC1]
                px-6
                py-3.5
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#07100C]
                transition-all
                duration-300
                hover:bg-transparent
                hover:text-[#8FFFC1]
                sm:w-auto
                sm:px-7
              "
            >
              <span>
                View Projects
              </span>

              <ArrowUpRight
                size={15}
                className="
                  ml-2
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>

            {/* Contact */}

            <a
              href="#contact"
              className="
                group
                inline-flex
                w-full
                items-center
                justify-center
                rounded-full
                border
                border-[#263633]
                bg-[#0D1114]/80
                px-6
                py-3.5
                text-xs
                font-medium
                uppercase
                tracking-[0.18em]
                text-[#AAB5B0]
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#8FFFC1]/40
                hover:bg-[#0D1714]
                hover:text-[#8FFFC1]
                sm:w-auto
                sm:px-7
              "
            >
              <span>
                Contact Me
              </span>

              <ArrowUpRight
                size={15}
                className="
                  ml-2
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>

          </motion.div>

          {/* =================================================
              TECHNOLOGIES
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.65,
            }}
            className="
              mt-10
              flex
              max-w-xl
              flex-wrap
              items-center
              gap-x-4
              gap-y-2
              sm:mt-12
              sm:gap-x-5
            "
          >

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-[#4F5B60]
              "
            >
              Working with
            </span>

            <span className="text-xs text-[#68747A]">
              Python
            </span>

            <span className="text-[#26332E]">
              /
            </span>

            <span className="text-xs text-[#68747A]">
              React
            </span>

            <span className="text-[#26332E]">
              /
            </span>

            <span className="text-xs text-[#68747A]">
              Flask
            </span>

            <span className="text-[#26332E]">
              /
            </span>

            <span className="text-xs text-[#68747A]">
              MySQL
            </span>

            <span className="text-[#26332E]">
              /
            </span>

            <span className="text-xs text-[#68747A]">
              Machine Learning
            </span>

          </motion.div>

        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.a
        href="#about"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
        className="
          absolute
          bottom-7
          left-6
          z-30
          hidden
          items-center
          gap-3
          text-[#566168]
          transition-colors
          duration-300
          hover:text-[#8FFFC1]
          sm:flex
          lg:left-12
        "
      >

        <span
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-[#26332E]
          "
        >
          <ArrowDown
            size={14}
            className="animate-bounce"
          />
        </span>

        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.3em]
          "
        >
          Scroll to explore
        </span>

      </motion.a>

      {/* =====================================================
          HERO INDEX
      ====================================================== */}

      <div
        className="
          absolute
          bottom-8
          right-6
          z-30
          hidden
          text-[9px]
          uppercase
          tracking-[0.3em]
          text-[#4F5B60]
          sm:block
          lg:right-12
        "
      >
        01 / 06
      </div>

      {/* =====================================================
          MOBILE BOTTOM FADE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-10
          h-32
          bg-gradient-to-t
          from-[#07090B]
          to-transparent
        "
      />

    </section>
  );
}

export default Hero;