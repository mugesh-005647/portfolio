import { motion } from "motion/react";
import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section
      id="projects"
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
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="grid-background absolute inset-0 opacity-20 sm:opacity-30" />

        <div
          className="
            absolute
            left-[-100px]
            top-[18%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#8FFFC1]/[0.02]
            blur-[110px]
            sm:left-[8%]
            sm:h-[350px]
            sm:w-[350px]
            sm:blur-[130px]
          "
        />

        <div
          className="
            absolute
            bottom-[8%]
            right-[-100px]
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#6D7CFF]/[0.018]
            blur-[120px]
            sm:right-[5%]
            sm:h-[400px]
            sm:w-[400px]
            sm:blur-[150px]
          "
        />
      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 sm:mb-16"
        >
          {/* Section label */}

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
              Selected Work
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
                text-[2.8rem]
                font-semibold
                leading-[0.98]
                tracking-[-0.05em]
                text-[#F5F7F6]
                sm:text-5xl
                sm:leading-[1]
                md:text-6xl
                lg:text-7xl
              "
            >
              Things I've
              <br />
              <span className="text-[#8FFFC1]">
                built.
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
              A selection of projects I've worked on while
              exploring software development, machine learning,
              databases, and modern web technologies.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            PROJECT GRID
        ====================================================== */}

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* =====================================================
            GITHUB BUTTON
        ====================================================== */}

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
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-12 flex justify-center sm:mt-16"
        >
          <a
            href="https://github.com/mugesh-005647?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              w-full
              items-center
              justify-center
              rounded-full
              border
              border-[#263633]
              bg-[#0D1114]
              px-6
              py-3.5
              text-[10px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-[#AAB5B0]
              transition-all
              duration-300
              hover:border-[#8FFFC1]/40
              hover:bg-[#0D1714]
              hover:text-[#8FFFC1]
              sm:w-auto
              sm:px-7
              sm:text-xs
              sm:tracking-[0.18em]
            "
          >
            <span>View More on GitHub</span>

            <span
              className="
                ml-3
                text-[#8FFFC1]
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project, index }) {
  const hasGithub =
    project.github &&
    project.github !== "#";

  const hasDemo =
    project.demo &&
    project.demo !== "#";

  return (
    <motion.article
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
        amount: 0.12,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-[#1C2927]
        bg-[#090D0F]
        p-5
        transition-all
        duration-500
        hover:border-[#8FFFC1]/30
        hover:bg-[#0A0F11]
        sm:rounded-3xl
        sm:p-7
        md:p-8
        lg:p-9
      "
    >
      {/* =====================================================
          HOVER GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          bg-[#8FFFC1]/[0.035]
          blur-[70px]
          transition-all
          duration-500
          group-hover:bg-[#8FFFC1]/[0.09]
          sm:-right-20
          sm:-top-20
          sm:h-48
          sm:w-48
          sm:blur-[80px]
        "
      />

      {/* =====================================================
          TOP ROW
      ====================================================== */}

      <div className="relative flex items-start justify-between gap-4">
        <span
          className="
            text-xs
            font-medium
            tracking-[0.2em]
            text-[#566168]
            sm:text-sm
          "
        >
          {project.number}
        </span>

        {project.featured && (
          <span
            className="
              shrink-0
              rounded-full
              border
              border-[#8FFFC1]/20
              bg-[#8FFFC1]/5
              px-2.5
              py-1
              text-[8px]
              uppercase
              tracking-[0.16em]
              text-[#8FFFC1]
              sm:px-3
              sm:text-[10px]
              sm:tracking-[0.2em]
            "
          >
            Featured
          </span>
        )}
      </div>

      {/* =====================================================
          CATEGORY
      ====================================================== */}

      <p
        className="
          relative
          mt-9
          text-[9px]
          uppercase
          tracking-[0.25em]
          text-[#8FFFC1]
          sm:mt-12
          sm:text-[11px]
          sm:tracking-[0.3em]
        "
      >
        {project.category}
      </p>

      {/* =====================================================
          TITLE
      ====================================================== */}

      <h3
        className="
          relative
          mt-3
          text-2xl
          font-semibold
          leading-tight
          tracking-tight
          text-[#F5F7F6]
          transition-colors
          duration-300
          group-hover:text-[#8FFFC1]
          sm:mt-4
          sm:text-3xl
        "
      >
        {project.title}
      </h3>

      {/* =====================================================
          DESCRIPTION
      ====================================================== */}

      <p
        className="
          relative
          mt-4
          min-h-0
          text-[13px]
          leading-6
          text-[#68747A]
          sm:mt-5
          sm:min-h-[96px]
          sm:text-sm
          sm:leading-7
        "
      >
        {project.description}
      </p>

      {/* =====================================================
          TECHNOLOGIES
      ====================================================== */}

      <div
        className="
          relative
          mt-6
          flex
          flex-wrap
          gap-1.5
          sm:mt-7
          sm:gap-2
        "
      >
        {project.technologies?.map((technology) => (
          <span
            key={technology}
            className="
              rounded-full
              border
              border-[#263633]
              bg-[#07090B]
              px-2.5
              py-1.5
              text-[8px]
              uppercase
              tracking-[0.1em]
              text-[#68747A]
              transition-all
              duration-300
              group-hover:border-[#8FFFC1]/20
              group-hover:text-[#788783]
              sm:px-3
              sm:text-[10px]
              sm:tracking-[0.12em]
            "
          >
            {technology}
          </span>
        ))}
      </div>

      {/* =====================================================
          DIVIDER
      ====================================================== */}

      <div
        className="
          relative
          my-6
          h-px
          w-full
          bg-[#1C2927]
          sm:my-8
        "
      />

      {/* =====================================================
          LINKS
      ====================================================== */}

      <div
        className="
          relative
          flex
          flex-wrap
          items-center
          gap-4
          sm:gap-6
        "
      >
        {/* GitHub */}

        {hasGithub && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group/link
              inline-flex
              items-center
              gap-2
              text-[10px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-[#F5F7F6]
              transition-colors
              duration-300
              hover:text-[#8FFFC1]
              sm:text-xs
              sm:tracking-[0.2em]
            "
          >
            <span>GitHub</span>

            <span
              className="
                transition-transform
                duration-300
                group-hover/link:-translate-y-1
                group-hover/link:translate-x-1
              "
            >
              ↗
            </span>
          </a>
        )}

        {/* Live Demo */}

        {hasDemo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group/link
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#8FFFC1]/20
              bg-[#8FFFC1]/5
              px-3.5
              py-2
              text-[10px]
              font-medium
              uppercase
              tracking-[0.13em]
              text-[#8FFFC1]
              transition-all
              duration-300
              hover:border-[#8FFFC1]/40
              hover:bg-[#8FFFC1]/10
              sm:px-4
              sm:text-xs
              sm:tracking-[0.16em]
            "
          >
            <span>Live Demo</span>

            <span
              className="
                transition-transform
                duration-300
                group-hover/link:-translate-y-1
                group-hover/link:translate-x-1
              "
            >
              ↗
            </span>
          </a>
        )}
      </div>

      {/* =====================================================
          BOTTOM ACCENT
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-0
          bg-[#8FFFC1]
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </motion.article>
  );
}

export default Projects;