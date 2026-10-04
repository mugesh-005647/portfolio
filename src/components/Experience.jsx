import { motion } from "motion/react";

const experiences = [
  {
    year: "2026",
    type: "INTERNSHIP",
    title: "Software Development Intern",
    company: "BSNL",
    description:
      "Worked on practical software and networking concepts while gaining experience with real-world development environments and professional workflows.",
    technologies: ["Web Development", "Networking", "Software"],
  },
  {
    year: "2025 — PRESENT",
    type: "EDUCATION",
    title: "B.Tech Information Technology",
    company: "Sri Ramakrishna Institute of Technology",
    description:
      "Building a strong foundation in software development, cloud computing, databases, machine learning, computer networks, and system design.",
    technologies: [
      "Computer Science",
      "Cloud Computing",
      "AI / ML",
    ],
  },
  {
    year: "2025",
    type: "PROJECT",
    title: "Spam Email Detection",
    company: "Machine Learning Project",
    description:
      "Developed a machine learning model to classify emails as spam or legitimate and deployed the model through a web interface.",
    technologies: [
      "Python",
      "Machine Learning",
      "Streamlit",
    ],
  },
];

function ExperienceItem({ experience, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
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
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        grid
        gap-5
        md:grid-cols-[160px_1fr]
        md:gap-8
      "
    >
      {/* DATE / TYPE */}

      <div className="relative pl-7 md:pl-0">
        <p
          className="
            text-[10px]
            font-medium
            tracking-[0.18em]
            text-[#8FFFC1]
            sm:text-xs
            sm:tracking-[0.2em]
          "
        >
          {experience.year}
        </p>

        <p
          className="
            mt-2
            text-[8px]
            uppercase
            tracking-[0.22em]
            text-[#566168]
            sm:text-[9px]
            sm:tracking-[0.25em]
          "
        >
          {experience.type}
        </p>
      </div>

      {/* TIMELINE DOT — DESKTOP */}

      <div
        className="
          absolute
          left-[-29px]
          top-1
          hidden
          h-3
          w-3
          rounded-full
          border-2
          border-[#8FFFC1]
          bg-[#07090B]
          md:block
        "
      >
        <div className="absolute inset-0 m-auto h-1 w-1 rounded-full bg-[#8FFFC1]" />
      </div>

      {/* TIMELINE DOT — MOBILE */}

      <div
        className="
          absolute
          left-0
          top-0.5
          h-3
          w-3
          rounded-full
          border-2
          border-[#8FFFC1]
          bg-[#07090B]
          md:hidden
        "
      >
        <div className="absolute inset-0 m-auto h-1 w-1 rounded-full bg-[#8FFFC1]" />
      </div>

      {/* EXPERIENCE CARD */}

      <motion.div
        whileHover={{
          y: -4,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          group
          relative
          overflow-hidden
          rounded-2xl
          border
          border-[#1C2927]
          bg-[#0A0D0F]/75
          p-5
          backdrop-blur-md
          transition-all
          duration-500
          hover:border-[#8FFFC1]/30
          hover:bg-[#0D1210]
          sm:rounded-3xl
          sm:p-6
          md:p-8
        "
      >
        {/* Decorative glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-40
            w-40
            rounded-full
            bg-[#8FFFC1]/[0.035]
            blur-3xl
            transition-all
            duration-500
            group-hover:bg-[#8FFFC1]/[0.08]
            sm:-right-24
            sm:-top-24
            sm:h-48
            sm:w-48
          "
        />

        {/* Top content */}

        <div
          className="
            relative
            z-10
            flex
            flex-col
            justify-between
            gap-4
            sm:flex-row
            sm:items-start
            sm:gap-5
          "
        >
          <div className="min-w-0">
            <h3
              className="
                text-xl
                font-semibold
                leading-tight
                tracking-tight
                text-[#F5F7F6]
                sm:text-2xl
                md:text-3xl
              "
            >
              {experience.title}
            </h3>

            <p
              className="
                mt-2
                text-xs
                font-medium
                text-[#8FFFC1]
                sm:text-sm
              "
            >
              {experience.company}
            </p>
          </div>

          {/* Number */}

          <span
            className="
              hidden
              shrink-0
              text-2xl
              font-medium
              tracking-tight
              text-[#26332E]
              transition-colors
              duration-300
              group-hover:text-[#8FFFC1]/25
              sm:block
              md:text-3xl
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Description */}

        <p
          className="
            relative
            z-10
            mt-5
            max-w-2xl
            text-[13px]
            leading-6
            text-[#7D898D]
            sm:mt-6
            sm:text-sm
            sm:leading-7
          "
        >
          {experience.description}
        </p>

        {/* Technologies */}

        <div
          className="
            relative
            z-10
            mt-6
            flex
            flex-wrap
            gap-1.5
            sm:mt-7
            sm:gap-2
          "
        >
          {experience.technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-full
                border
                border-[#25302C]
                bg-[#0D1114]
                px-2.5
                py-1.5
                text-[8px]
                uppercase
                tracking-[0.12em]
                text-[#687572]
                transition-all
                duration-300
                group-hover:border-[#8FFFC1]/20
                group-hover:text-[#8FFFC1]/70
                sm:px-3
                sm:text-[9px]
                sm:tracking-[0.15em]
              "
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Bottom accent */}

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
    </motion.div>
  );
}

function Experience() {
  return (
    <section
      id="experience"
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
      {/* BACKGROUND GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[15%]
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#8FFFC1]/[0.03]
          blur-[120px]
          sm:right-[-200px]
          sm:h-[450px]
          sm:w-[450px]
          sm:blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-160px]
          left-[-160px]
          h-[320px]
          w-[320px]
          rounded-full
          bg-[#6D7CFF]/[0.02]
          blur-[120px]
          sm:bottom-[-200px]
          sm:left-[-200px]
          sm:h-[400px]
          sm:w-[400px]
          sm:blur-[140px]
        "
      />

      {/* BACKGROUND GRID */}

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

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}

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
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* SECTION LABEL */}

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
              Experience
            </span>
          </div>

          {/* HEADING + DESCRIPTION */}

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
                md:text-6xl
                lg:text-7xl
              "
            >
              A journey of
              <br />
              <span className="text-[#8FFFC1]">
                continuous growth.
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
              From academic learning to practical projects
              and professional experience, every step has
              helped me strengthen my technical and
              problem-solving skills.
            </p>
          </div>
        </motion.div>

        {/* TIMELINE */}

        <div
          className="
            relative
            mt-14
            sm:mt-20
            md:ml-[160px]
          "
        >
          {/* DESKTOP TIMELINE */}

          <div
            className="
              absolute
              bottom-0
              left-[-24px]
              top-0
              hidden
              w-px
              bg-gradient-to-b
              from-[#8FFFC1]/50
              via-[#26352F]
              to-transparent
              md:block
            "
          />

          {/* MOBILE TIMELINE */}

          <div
            className="
              absolute
              bottom-0
              left-[5px]
              top-0
              w-px
              bg-gradient-to-b
              from-[#8FFFC1]/40
              via-[#26352F]
              to-transparent
              md:hidden
            "
          />

          <div className="space-y-8 sm:space-y-10">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={`${experience.year}-${experience.title}`}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* BOTTOM STATEMENT */}

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
            delay: 0.3,
          }}
          className="
            mt-14
            border-t
            border-[#1C2927]
            pt-6
            sm:mt-20
            sm:pt-8
          "
        >
          <div
            className="
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
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
              Always learning
            </span>

            <span
              className="
                text-xs
                text-[#687477]
                sm:text-sm
              "
            >
              Building. Learning. Improving.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;