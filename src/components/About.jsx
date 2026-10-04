import { motion } from "motion/react";
import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Sparkles,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const interests = [
  {
    number: "01",
    icon: Code2,
    title: "Software Development",
    description:
      "Building modern applications with clean architecture, responsive interfaces, and practical engineering principles.",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "Exploring machine learning and intelligent systems that transform data into useful real-world solutions.",
  },
  {
    number: "03",
    icon: Cloud,
    title: "Cloud Computing",
    description:
      "Working with cloud technologies and learning how scalable applications are designed, deployed, and maintained.",
  },
  {
    number: "04",
    icon: Database,
    title: "Backend & Data",
    description:
      "Designing APIs, databases, and backend systems that keep applications reliable and maintainable.",
  },
];

const stats = [
  {
    value: "3+",
    label: "Projects",
  },
  {
    value: "10+",
    label: "Technologies",
  },
  {
    value: "3+",
    label: "Years Learning",
  },
  {
    value: "∞",
    label: "Curiosity",
  },
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const revealUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const revealLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const revealRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   ABOUT COMPONENT
========================================================= */

function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#07090B]
        px-5
        py-24
        sm:px-6
        sm:py-32
        lg:py-40
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-[18%]
          h-[350px]
          w-[350px]
          rounded-full
          bg-emerald-500/[0.035]
          blur-[120px]
          sm:left-[-200px]
          sm:h-[500px]
          sm:w-[500px]
          sm:blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-150px]
          right-[-120px]
          h-[350px]
          w-[350px]
          rounded-full
          bg-teal-400/[0.035]
          blur-[120px]
          sm:bottom-[-200px]
          sm:right-[-150px]
          sm:h-[500px]
          sm:w-[500px]
          sm:blur-[150px]
        "
      />

      {/* =====================================================
          GRID BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.02]
          sm:opacity-[0.025]
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl">

        {/* ===================================================
            SECTION HEADER
        ==================================================== */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >
          {/* Label */}

          <motion.div
            variants={revealUp}
            className="flex items-center gap-3 sm:gap-4"
          >
            <span className="h-px w-8 bg-[#8FFFC1] sm:w-10" />

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
              About Me
            </span>
          </motion.div>

          {/* Heading + description */}

          <div
            className="
              mt-6
              grid
              gap-6
              sm:mt-7
              sm:gap-8
              lg:grid-cols-[1fr_0.55fr]
              lg:items-end
            "
          >
            <motion.h2
              variants={revealLeft}
              className="
                max-w-4xl
                text-[2.7rem]
                font-semibold
                leading-[0.98]
                tracking-[-0.045em]
                text-[#F5F7F6]
                sm:text-5xl
                sm:leading-[1]
                md:text-7xl
              "
            >
              Turning ideas into
              <br />

              <span className="text-[#8FFFC1]">
                useful experiences.
              </span>
            </motion.h2>

            <motion.p
              variants={revealRight}
              className="
                max-w-md
                text-[13px]
                leading-6
                text-[#89949A]
                sm:text-sm
                sm:leading-7
                lg:pb-2
              "
            >
              I believe great software is a combination of
              thoughtful engineering, purposeful design, and
              continuous curiosity.
            </motion.p>
          </div>
        </motion.div>

        {/* ===================================================
            ABOUT CONTENT
        ==================================================== */}

        <div
          className="
            mt-14
            grid
            gap-5
            sm:mt-20
            sm:gap-6
            lg:grid-cols-[0.8fr_1.2fr]
          "
        >

          {/* =================================================
              PROFILE CARD
          ================================================== */}

          <motion.div
            variants={revealLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            whileHover={{
              y: -5,
              transition: {
                duration: 0.3,
              },
            }}
            className="
              relative
              min-h-0
              overflow-hidden
              rounded-3xl
              border
              border-[#1C2927]
              bg-[#0D1114]/60
              p-6
              backdrop-blur-md
              sm:min-h-[500px]
              sm:p-10
            "
          >
            {/* Number */}

            <div
              className="
                absolute
                right-6
                top-6
                text-[9px]
                tracking-[0.3em]
                text-[#566168]
                sm:right-8
                sm:top-8
                sm:text-[10px]
              "
            >
              001
            </div>

            {/* Decorative circle */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                -bottom-20
                -right-20
                h-48
                w-48
                rounded-full
                border
                border-[#8FFFC1]/10
                sm:-bottom-32
                sm:-right-32
                sm:h-72
                sm:w-72
              "
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                -bottom-12
                -right-12
                h-32
                w-32
                rounded-full
                border
                border-dashed
                border-[#8FFFC1]/10
                sm:-bottom-20
                sm:-right-20
                sm:h-48
                sm:w-48
              "
            />

            {/* Main content */}

            <div className="relative z-10 flex h-full flex-col">

              {/* Icon */}

              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#294039]
                  bg-[#0D1714]
                  sm:h-14
                  sm:w-14
                "
              >
                <Sparkles
                  size={21}
                  className="text-[#8FFFC1] sm:h-[23px] sm:w-[23px]"
                />
              </motion.div>

              {/* Heading */}

              <h3
                className="
                  mt-8
                  text-2xl
                  font-semibold
                  leading-tight
                  text-[#F5F7F6]
                  sm:mt-10
                  sm:text-3xl
                "
              >
                Curious by nature.
                <br />

                <span className="text-[#8FFFC1]">
                  Builder by choice.
                </span>
              </h3>

              {/* Description */}

              <div
                className="
                  mt-6
                  space-y-4
                  text-[13px]
                  leading-6
                  text-[#89949A]
                  sm:mt-7
                  sm:space-y-5
                  sm:text-sm
                  sm:leading-7
                "
              >
                <p>
                  I'm passionate about technology and enjoy
                  turning ideas into practical software solutions.
                </p>

                <p>
                  My interests span software development,
                  artificial intelligence, cloud computing,
                  databases, and modern web technologies.
                </p>

                <p>
                  Every project is an opportunity to learn
                  something new and improve the way I build.
                </p>
              </div>

              {/* Status */}

              <div className="mt-8 pt-4 sm:mt-auto sm:pt-10">
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    border-t
                    border-[#1C2927]
                    pt-5
                    sm:pt-6
                  "
                >
                  <span className="relative flex h-2 w-2">
                    <span
                      className="
                        absolute
                        h-full
                        w-full
                        animate-ping
                        rounded-full
                        bg-[#8FFFC1]
                        opacity-50
                      "
                    />

                    <span
                      className="
                        relative
                        h-2
                        w-2
                        rounded-full
                        bg-[#8FFFC1]
                      "
                    />
                  </span>

                  <span
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      text-[#566168]
                      sm:text-xs
                      sm:tracking-[0.2em]
                    "
                  >
                    Always learning
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              INTEREST CARDS
          ================================================== */}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {interests.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  variants={cardReveal}
                  whileHover={{
                    y: -7,
                    scale: 1.015,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-[#1C2927]
                    bg-[#0D1114]/50
                    p-6
                    backdrop-blur-md
                    transition-colors
                    duration-300
                    hover:border-[#8FFFC1]/25
                    hover:bg-[#0D1714]
                    sm:p-7
                  "
                >
                  {/* Number */}

                  <span
                    className="
                      absolute
                      right-5
                      top-5
                      text-[9px]
                      tracking-[0.2em]
                      text-[#566168]
                      sm:right-6
                      sm:top-6
                      sm:text-[10px]
                    "
                  >
                    {item.number}
                  </span>

                  {/* Icon */}

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 5,
                    }}
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[#294039]
                      bg-[#0D1714]
                      transition-all
                      duration-300
                      group-hover:border-[#8FFFC1]/30
                      group-hover:bg-[#11251D]
                      sm:h-12
                      sm:w-12
                    "
                  >
                    <Icon
                      size={20}
                      className="text-[#8FFFC1]"
                    />
                  </motion.div>

                  {/* Title */}

                  <h3
                    className="
                      mt-6
                      text-lg
                      font-medium
                      text-[#F5F7F6]
                      sm:mt-7
                      sm:text-xl
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mt-3
                      text-[13px]
                      leading-6
                      text-[#68747A]
                      sm:text-sm
                      sm:leading-7
                    "
                  >
                    {item.description}
                  </p>

                  {/* Explore */}

                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      gap-2
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      text-[#566168]
                      transition-colors
                      duration-300
                      group-hover:text-[#8FFFC1]
                      sm:mt-7
                      sm:text-xs
                      sm:tracking-[0.2em]
                    "
                  >
                    Explore

                    <ArrowUpRight
                      size={13}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        sm:h-[14px]
                        sm:w-[14px]
                      "
                    />
                  </div>

                  {/* Hover glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -bottom-16
                      -right-16
                      h-32
                      w-32
                      rounded-full
                      bg-[#8FFFC1]/[0.04]
                      blur-3xl
                      transition-all
                      duration-500
                      group-hover:bg-[#8FFFC1]/[0.1]
                      sm:-bottom-20
                      sm:-right-20
                      sm:h-40
                      sm:w-40
                    "
                  />

                  {/* Hover border line */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-px
                      w-0
                      bg-[#8FFFC1]
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ===================================================
            STATS
        ==================================================== */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="
            mt-5
            grid
            grid-cols-2
            overflow-hidden
            rounded-3xl
            border
            border-[#1C2927]
            bg-[#0D1114]/40
            sm:mt-6
            lg:grid-cols-4
          "
        >
          {stats.map((stat, index) => {
            const borderClasses = {
              0: `
                border-b
                border-r
                border-[#1C2927]
                lg:border-b-0
                lg:border-r
              `,
              1: `
                border-b
                border-[#1C2927]
                lg:border-b-0
                lg:border-r
              `,
              2: `
                border-r
                border-[#1C2927]
                lg:border-r
              `,
              3: "",
            };

            return (
              <motion.div
                key={stat.label}
                variants={cardReveal}
                whileHover={{
                  backgroundColor:
                    "rgba(143,255,193,0.035)",
                }}
                className={`
                  group
                  relative
                  p-6
                  transition-colors
                  duration-300
                  sm:p-8
                  ${borderClasses[index]}
                `}
              >
                {/* Number */}

                <div
                  className="
                    text-3xl
                    font-semibold
                    tracking-tight
                    text-[#F5F7F6]
                    sm:text-5xl
                  "
                >
                  {stat.value}
                </div>

                {/* Label */}

                <div
                  className="
                    mt-2
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-[#566168]
                    transition-colors
                    duration-300
                    group-hover:text-[#8FFFC1]
                    sm:mt-3
                    sm:text-[10px]
                    sm:tracking-[0.25em]
                  "
                >
                  {stat.label}
                </div>

                {/* Bottom line */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-[#8FFFC1]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* ===================================================
            BOTTOM STATEMENT
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-12
            flex
            flex-col
            justify-between
            gap-4
            border-t
            border-[#1C2927]
            pt-6
            sm:mt-16
            sm:flex-row
            sm:items-center
            sm:gap-5
          "
        >
          <p
            className="
              max-w-xl
              text-[13px]
              leading-6
              text-[#566168]
              sm:text-sm
              sm:leading-7
            "
          >
            The best projects are built by combining curiosity,
            consistency, and a willingness to keep improving.
          </p>

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-[#566168]
              sm:text-[10px]
              sm:tracking-[0.3em]
            "
          >
            Keep building.
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default About;