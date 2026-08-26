import { useEffect, useRef } from "react";

/**
 * Fixed reading progress bar rendered at the very top of the viewport.
 * Updates the DOM directly inside a requestAnimationFrame so scrolling
 * stays on the compositor thread and React never re-renders per frame.
 */
export default function ScrollProgress() {
  const fillRef = useRef(null);

  useEffect(() => {
    const fill = fillRef.current;
    if (!fill) return;

    let rafId = null;

    const update = () => {
      rafId = null;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const pct = height > 0 ? Math.min(100, Math.max(0, (scrollTop / height) * 100)) : 0;
      fill.style.transform = `scaleX(${pct / 100})`;
    };

    const onScroll = () => {
      if (rafId == null) {
        rafId = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (rafId != null) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="scroll-progress" role="presentation" aria-hidden="true">
      <div
        ref={fillRef}
        className="scroll-progress-fill"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}