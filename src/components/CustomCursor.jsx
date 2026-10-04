import { useEffect, useRef, useState } from "react";

function CustomCursor() {
  const cursorRef = useRef(null);
  const glowRef = useRef(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const cursor = useRef({
    x: 0,
    y: 0,
  });

  const glow = useRef({
    x: 0,
    y: 0,
  });

  const [hasFinePointer, setHasFinePointer] = useState(true);

  /* =========================================================
     DETECT MOUSE / TOUCH
  ========================================================= */

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(pointer: fine)"
    );

    const updatePointer = () => {
      setHasFinePointer(mediaQuery.matches);
    };

    updatePointer();

    mediaQuery.addEventListener(
      "change",
      updatePointer
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updatePointer
      );
    };
  }, []);

  /* =========================================================
     MOUSE MOVEMENT
  ========================================================= */

  useEffect(() => {
    if (!hasFinePointer) {
      return;
    }

    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    let animationFrame;

    const animate = () => {
      /* Smooth main cursor */

      cursor.current.x +=
        (mouse.current.x - cursor.current.x) * 0.25;

      cursor.current.y +=
        (mouse.current.y - cursor.current.y) * 0.25;

      /* Slower glow */

      glow.current.x +=
        (mouse.current.x - glow.current.x) * 0.12;

      glow.current.y +=
        (mouse.current.y - glow.current.y) * 0.12;

      /* Main cursor */

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate3d(
            ${cursor.current.x}px,
            ${cursor.current.y}px,
            0
          )
          translate(-50%, -50%)
        `;
      }

      /* Glow */

      if (glowRef.current) {
        glowRef.current.style.transform = `
          translate3d(
            ${glow.current.x}px,
            ${glow.current.y}px,
            0
          )
          translate(-50%, -50%)
        `;
      }

      animationFrame =
        requestAnimationFrame(animate);
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      cancelAnimationFrame(animationFrame);
    };
  }, [hasFinePointer]);

  /* =========================================================
     MOBILE / TOUCH
  ========================================================= */

  if (!hasFinePointer) {
    return null;
  }

  /* =========================================================
     DESKTOP CURSOR
  ========================================================= */

  return (
    <>
      {/* =====================================================
          MAIN CURSOR
      ====================================================== */}

      <div
        ref={cursorRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[99999]
          h-5
          w-5
          rounded-full
          border
          border-[#8FFFC1]
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-1.5
            w-1.5
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#8FFFC1]
          "
        />
      </div>

      {/* =====================================================
          CURSOR GLOW
      ====================================================== */}

      <div
        ref={glowRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[99998]
          h-10
          w-10
          rounded-full
          border
          border-[#8FFFC1]/10
          bg-[#8FFFC1]/[0.025]
          blur-[2px]
        "
      />
    </>
  );
}

export default CustomCursor;