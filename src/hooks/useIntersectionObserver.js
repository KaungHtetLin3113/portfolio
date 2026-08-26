import { useEffect, useRef, useState } from "react";

export default function useIntersectionObserver(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Track options in a ref so an inline options object doesn't re-run the effect.
  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, ...optionsRef.current }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}
