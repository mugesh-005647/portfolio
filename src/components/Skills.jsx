import { motion } from "motion/react";
import {
  BrainCircuit,
  Cloud,
  Database,
  Globe,
  Layers3,
  Server,
  Terminal,
} from "lucide-react";

/* =========================================================
   SKILL DATA
========================================================= */

const skillGroups = [
  {
    title: "Frontend",
    number: "01",
    icon: Globe,
    description:
      "Building responsive and modern user interfaces.",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    title: "Programming",
    number: "02",
    icon: Terminal,
    description:
      "Programming languages used for problem solving and development.",
    skills: [
      { name: "Python", level: 85 },
      { name: "Java", level: 70 },
      { name: "C", level: 75 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "AI / ML",
    number: "03",
    icon: BrainCircuit,
    description:
      "Exploring machine learning and data-driven solutions.",
    skills: [
      { name: "Machine Learning", level: 75 },
      { name: "NumPy", level: 75 },
      { name: "Pandas", level: 75 },
      { name: "Scikit-learn", level: 70 },
    ],
  },
  {
    title: "Backend & Database",
    number: "04",
    icon: Database,
    description:
      "Developing backend systems and working with structured data.",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "Flask", level: 70 },
      { name: "REST APIs", level: 70 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "Cloud",
    number: "05",
    icon: Cloud,
    description:
      "Learning cloud concepts, deployment, and scalable systems.",
    skills: [
      { name: "Cloud Fundamentals", level: 70 },
      { name: "Deployment", level: 65 },
      { name: "Cloud Architecture", level: 60 },
    ],
  },
  {
    title: "Development",
    number: "06",
    icon: Server,
    description:
      "Tools and workflows used for software development.",
    skills: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Linux", level: 65 },
    ],
  },
];

/* =========================================================
   CORE TECHNOLOGIES
========================================================= */

const coreTechnologies = [
  "Python",
  "JavaScript",
  "React",
  "MySQL",
  "Flask",
  "Machine Learning",
  "Git",
  "Cloud",
];

/* =========================================================
   SKILL CARD
========================================================= */

function SkillCard({ group, index }) {
  const Icon = group.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 45,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        delay: (index % 3) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-[#1C2927]
        bg-[#0D1114]/70
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-[#8FFFC1]/30
        hover:bg-[#0D1714]
        sm:p-7
      "
    >
      {/* Top glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-px
          w-0
          bg-[#8FFFC1]
          transition-all
          duration-500
          group-hover:w-full
        "
      />

      {/* Header */}

      <div className="flex items-start justify-between">
        <motion.div
          whileHover={{
            rotate: 6,
            scale: 1.05,
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
            transition-colors
            duration-300
            group-hover:border-[#8FFFC1]/40
            sm:h-12
            sm:w-12
          "
        >
          <Icon
            size={20}
            className="text-[#8FFFC1] sm:h-[21px] sm:w-[21px]"
          />
        </motion.div>

        <span
          className="
            text-[9px]
            tracking-[0.25em]
            text-[#566168]
            sm:text-[10px]
          "
        >
          {group.number}
        </span>
      </div>

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
        {group.title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-3
          text-[13px]
          leading-6
          text-[#566168]
          sm:text-xs
          sm:leading-6
        "
      >
        {group.description}
      </p>

      {/* Skills */}

      <div className="mt-6 space-y-5 sm:mt-7">
        {group.skills.map((skill, skillIndex) => (
          <div key={`${skill.name}-${skillIndex}`}>
            {/* Skill name */}

            <div className="mb-2 flex items-center justify-between gap-4">
              <span
                className="
                  min-w-0
                  truncate
                  text-xs
                  text-[#89949A]
                "
              >
                {skill.name}
              </span>

              <span className="shrink-0 text-[9px] text-[#566168] sm:text-[10px]">
                {skill.level}%
              </span>
            </div>

            {/* Progress background */}

            <div className="relative h-[3px] overflow-hidden rounded-full bg-[#18201E]">
              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: `${skill.level}%`,
                }}
                viewport={{
                  once: true,
                  amount: 0.8,
                }}
                transition={{
                  duration: 1,
                  delay: 0.25 + skillIndex * 0.08,
                  ease: "easeOut",
                }}
                className="relative h-full rounded-full bg-[#8FFFC1]"
              >
                {/* Moving highlight */}

                <motion.span
                  animate={{
                    x: ["-100%", "300%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    inset-y-0
                    w-8
                    bg-white/40
                    blur-sm
                  "
                />
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom glow */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-20
          -right-20
          h-40
          w-40
          rounded-full
          bg-[#8FFFC1]/[0.035]
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-[#8FFFC1]/[0.1]
          sm:-bottom-24
          sm:-right-24
          sm:h-48
          sm:w-48
        "
      />

      {/* Corner decoration */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-14
          w-14
          rounded-bl-full
          border-b
          border-l
          border-[#8FFFC1]/[0.04]
          sm:h-16
          sm:w-16
        "
      />
    </motion.div>
  );
}

/* =========================================================
   SKILLS COMPONENT
========================================================= */

function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-[#0A0D0F]
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
          left-[-160px]
          top-[18%]
          h-[350px]
          w-[350px]
          rounded-full
          bg-emerald-400/[0.035]
          blur-[120px]
          sm:left-[-200px]
          sm:h-[450px]
          sm:w-[450px]
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
          GRID
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
            HEADER
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Label */}

          <div className="flex items-center gap-3 sm:gap-4">
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
              Skills & Technologies
            </span>
          </div>

          {/* Heading */}

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
            <h2
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
              Tools I use to
              <br />

              <span className="text-[#8FFFC1]">
                build things.
              </span>
            </h2>

            <p
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
              A growing collection of technologies I use to
              design, develop, deploy, and experiment with
              digital products.
            </p>
          </div>
        </motion.div>

        {/* ===================================================
            CORE TECHNOLOGIES
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            duration: 0.8,
            delay: 0.15,
          }}
          className="
            mt-12
            sm:mt-16
          "
        >
          <div className="mb-4 flex items-center justify-between sm:mb-5">
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
              Core technologies
            </span>

            <span className="text-[9px] text-[#566168] sm:text-[10px]">
              {String(coreTechnologies.length).padStart(2, "0")}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {coreTechnologies.map((technology, index) => (
              <motion.div
                key={technology}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.8,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                className="
                  cursor-default
                  rounded-lg
                  border
                  border-[#1C2927]
                  bg-[#0D1114]
                  px-3.5
                  py-2
                  text-[11px]
                  text-[#89949A]
                  transition-all
                  duration-300
                  hover:border-[#8FFFC1]/30
                  hover:bg-[#0D1714]
                  hover:text-[#8FFFC1]
                  hover:shadow-[0_0_25px_rgba(143,255,193,0.06)]
                  sm:px-4
                  sm:py-2.5
                  sm:text-sm
                "
              >
                {technology}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ===================================================
            SKILL CARDS
        ==================================================== */}

        <div
          className="
            mt-10
            grid
            gap-4
            sm:mt-12
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {skillGroups.map((group, index) => (
            <SkillCard
              key={group.title}
              group={group}
              index={index}
            />
          ))}
        </div>

        {/* ===================================================
            BOTTOM MESSAGE
        ==================================================== */}

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
            duration: 0.8,
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
          <div className="flex items-center gap-3">
            <Layers3
              size={16}
              className="shrink-0 text-[#8FFFC1]"
            />

            <span className="text-[13px] text-[#566168] sm:text-sm">
              Always learning. Always experimenting.
            </span>
          </div>

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
            03 / Skills
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;