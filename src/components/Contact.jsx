import { useState } from "react";
import { motion } from "motion/react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);

  const emailAddress = "mugeshramar1595@gmail.com";

  // =========================================================
  // HANDLE INPUT
  // =========================================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setStatus("");
  };

  // =========================================================
  // COPY EMAIL
  // =========================================================

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Unable to copy email:", error);
    }
  };

  // =========================================================
  // SUBMIT FORM
  // =========================================================

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim()) {
      setStatus("Please enter your name.");
      return;
    }

    if (!formData.email.trim()) {
      setStatus("Please enter your email address.");
      return;
    }

    if (!formData.message.trim()) {
      setStatus("Please enter your message.");
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio Contact - ${formData.name}`
    );

    const body = encodeURIComponent(
      `Hello Mugesh,

Name: ${formData.name}

Email: ${formData.email}

Message:
${formData.message}

--------------------------------
Sent from Mugesh's Portfolio
--------------------------------`
    );

    const mailtoURL =
      `mailto:${emailAddress}` +
      `?subject=${subject}` +
      `&body=${body}`;

    window.location.href = mailtoURL;

    setStatus(
      "✓ Your email application is opening. Complete the email to send your message."
    );
  };

  return (
    <section
      id="contact"
      className="
        relative
        min-h-screen
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

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-[-100px]
            top-[15%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#8FFFC1]/[0.02]
            blur-[110px]
            sm:left-[10%]
            sm:h-[350px]
            sm:w-[350px]
            sm:blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[5%]
            right-[-100px]
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#6D7CFF]/[0.018]
            blur-[120px]
            sm:bottom-[10%]
            sm:right-[10%]
            sm:h-[400px]
            sm:w-[400px]
            sm:blur-[140px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.02]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

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
              Contact
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              mt-6
              max-w-4xl
              text-[2.7rem]
              font-semibold
              leading-[0.98]
              tracking-[-0.045em]
              text-[#F5F7F6]
              sm:mt-7
              sm:text-5xl
              sm:leading-[1]
              md:text-6xl
            "
          >
            Let's build something
            <span className="text-[#8FFFC1]">
              {" "}
              meaningful.
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-[13px]
              leading-6
              text-[#68747A]
              sm:mt-6
              sm:text-base
              sm:leading-8
            "
          >
            Have an idea, project, internship opportunity, or just
            want to connect? Send me a message and I'll get back to
            you.
          </p>
        </motion.div>

        {/* ===================================================
            TWO COLUMN LAYOUT
        ==================================================== */}

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-8">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="space-y-5 sm:space-y-6">

            {/* AVAILABILITY */}

            <motion.div
              initial={{
                opacity: 0,
                x: -35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -4,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-[#1C2927]
                bg-[#090D0F]
                p-6
                transition-all
                duration-500
                hover:border-[#8FFFC1]/25
                hover:bg-[#0A0F11]
                sm:rounded-3xl
                sm:p-8
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-32
                  w-32
                  rounded-full
                  bg-[#8FFFC1]/[0.035]
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-[#8FFFC1]/[0.08]
                "
              />

              <div className="relative z-10 flex items-center gap-3 sm:gap-4">

                <span className="relative flex h-3 w-3 shrink-0 sm:h-4 sm:w-4">
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-[#8FFFC1]
                      opacity-30
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-3
                      w-3
                      rounded-full
                      bg-[#8FFFC1]
                      sm:h-4
                      sm:w-4
                    "
                  />
                </span>

                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.22em]
                    text-[#8FFFC1]
                    sm:text-xs
                    sm:tracking-[0.3em]
                  "
                >
                  Currently Available
                </p>
              </div>

              <p
                className="
                  relative
                  z-10
                  mt-6
                  max-w-lg
                  text-[13px]
                  leading-6
                  text-[#68747A]
                  sm:mt-8
                  sm:text-base
                  sm:leading-8
                "
              >
                I'm open to internships, software development
                opportunities, interesting projects and
                collaborations.
              </p>
            </motion.div>

            {/* EMAIL */}

            <motion.div
              initial={{
                opacity: 0,
                x: -35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -4,
              }}
              className="
                group
                rounded-2xl
                border
                border-[#1C2927]
                bg-[#090D0F]
                p-6
                transition-all
                duration-500
                hover:border-[#8FFFC1]/25
                hover:bg-[#0A0F11]
                sm:rounded-3xl
                sm:p-8
              "
            >
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-[#566168]
                  sm:text-xs
                  sm:tracking-[0.3em]
                "
              >
                Email
              </p>

              <div
                className="
                  mt-5
                  flex
                  flex-col
                  gap-4
                  sm:mt-8
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <a
                  href={`mailto:${emailAddress}`}
                  className="
                    min-w-0
                    break-all
                    text-sm
                    text-[#F5F7F6]
                    transition-colors
                    duration-300
                    hover:text-[#8FFFC1]
                    sm:text-base
                  "
                >
                  {emailAddress}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="
                    w-fit
                    border-0
                    bg-transparent
                    p-0
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.22em]
                    text-[#8FFFC1]
                    transition-all
                    duration-300
                    hover:scale-105
                    sm:text-xs
                    sm:tracking-[0.25em]
                  "
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </motion.div>

            {/* SOCIAL LINKS */}

            <motion.div
              initial={{
                opacity: 0,
                x: -35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -4,
              }}
              className="
                group
                rounded-2xl
                border
                border-[#1C2927]
                bg-[#090D0F]
                p-6
                transition-all
                duration-500
                hover:border-[#8FFFC1]/25
                hover:bg-[#0A0F11]
                sm:rounded-3xl
                sm:p-8
              "
            >
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-[#566168]
                  sm:text-xs
                  sm:tracking-[0.3em]
                "
              >
                Find Me Online
              </p>

              <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">

                <a
                  href="https://github.com/mugesh-005647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-full
                    border
                    border-[#263633]
                    px-5
                    py-2.5
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.16em]
                    text-[#F5F7F6]
                    transition-all
                    duration-300
                    hover:border-[#8FFFC1]
                    hover:bg-[#8FFFC1]/10
                    hover:text-[#8FFFC1]
                    sm:px-7
                    sm:py-3
                    sm:text-xs
                    sm:tracking-[0.2em]
                  "
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/mugesh-r-64a8b0341/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-full
                    border
                    border-[#263633]
                    px-5
                    py-2.5
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.16em]
                    text-[#F5F7F6]
                    transition-all
                    duration-300
                    hover:border-[#8FFFC1]
                    hover:bg-[#8FFFC1]/10
                    hover:text-[#8FFFC1]
                    sm:px-7
                    sm:py-3
                    sm:text-xs
                    sm:tracking-[0.2em]
                  "
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              RIGHT SIDE — CONTACT FORM
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-20
              rounded-2xl
              border
              border-[#1C2927]
              bg-[#090D0F]
              p-5
              sm:rounded-3xl
              sm:p-8
              md:p-10
            "
          >
            <form
              onSubmit={handleSubmit}
              className="relative z-30 flex flex-col"
            >

              {/* NAME */}

              <div className="mb-6 sm:mb-7">
                <label
                  htmlFor="contact-name"
                  className="
                    mb-2.5
                    block
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    text-[#566168]
                    sm:mb-3
                    sm:text-xs
                    sm:tracking-[0.3em]
                  "
                >
                  Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  autoComplete="name"
                  className="
                    block
                    w-full
                    rounded-xl
                    border
                    border-[#263633]
                    bg-[#07090B]
                    px-4
                    py-4
                    text-sm
                    text-[#F5F7F6]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-[#3E494D]
                    focus:border-[#8FFFC1]
                    focus:ring-1
                    focus:ring-[#8FFFC1]/20
                    sm:rounded-2xl
                    sm:px-6
                    sm:py-5
                  "
                />
              </div>

              {/* EMAIL */}

              <div className="mb-6 sm:mb-7">
                <label
                  htmlFor="contact-email"
                  className="
                    mb-2.5
                    block
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    text-[#566168]
                    sm:mb-3
                    sm:text-xs
                    sm:tracking-[0.3em]
                  "
                >
                  Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="
                    block
                    w-full
                    rounded-xl
                    border
                    border-[#263633]
                    bg-[#07090B]
                    px-4
                    py-4
                    text-sm
                    text-[#F5F7F6]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-[#3E494D]
                    focus:border-[#8FFFC1]
                    focus:ring-1
                    focus:ring-[#8FFFC1]/20
                    sm:rounded-2xl
                    sm:px-6
                    sm:py-5
                  "
                />
              </div>

              {/* MESSAGE */}

              <div className="mb-6 sm:mb-7">
                <div className="mb-2.5 flex items-center justify-between sm:mb-3">
                  <label
                    htmlFor="contact-message"
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-[#566168]
                      sm:text-xs
                      sm:tracking-[0.3em]
                    "
                  >
                    Message
                  </label>

                  <span className="text-[10px] text-[#566168] sm:text-xs">
                    {formData.message.length}/1000
                  </span>
                </div>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  maxLength={1000}
                  rows={6}
                  className="
                    block
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-[#263633]
                    bg-[#07090B]
                    px-4
                    py-4
                    text-sm
                    leading-6
                    text-[#F5F7F6]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-[#3E494D]
                    focus:border-[#8FFFC1]
                    focus:ring-1
                    focus:ring-[#8FFFC1]/20
                    sm:rounded-2xl
                    sm:px-6
                    sm:py-5
                    sm:leading-7
                  "
                />
              </div>

              {/* STATUS */}

              {status && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                    mb-6
                    rounded-xl
                    border
                    border-[#8FFFC1]/30
                    bg-[#8FFFC1]/5
                    px-4
                    py-3
                    text-xs
                    leading-5
                    text-[#8FFFC1]
                    sm:mb-7
                    sm:rounded-2xl
                    sm:px-6
                    sm:py-4
                    sm:text-sm
                    sm:leading-6
                  "
                >
                  {status}
                </motion.div>
              )}

              {/* SEND BUTTON */}

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.015,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  relative
                  z-30
                  flex
                  min-h-[58px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  border-2
                  border-[#8FFFC1]
                  bg-[#8FFFC1]
                  px-6
                  py-4
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.17em]
                  text-[#07100C]
                  shadow-[0_0_30px_rgba(143,255,193,0.14)]
                  transition-all
                  duration-300
                  hover:bg-transparent
                  hover:text-[#8FFFC1]
                  sm:min-h-[64px]
                  sm:rounded-2xl
                  sm:px-8
                  sm:py-5
                  sm:text-sm
                  sm:tracking-[0.2em]
                "
              >
                <span>Send Message</span>

                <span
                  className="
                    text-xl
                    leading-none
                    font-semibold
                    sm:text-2xl
                  "
                >
                  →
                </span>
              </motion.button>

              {/* FORM DESCRIPTION */}

              <p
                className="
                  mt-4
                  text-center
                  text-[10px]
                  leading-5
                  text-[#566168]
                  sm:mt-5
                  sm:text-xs
                  sm:leading-6
                "
              >
                Clicking "Send Message" will open your default
                email application with the message already
                prepared.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;