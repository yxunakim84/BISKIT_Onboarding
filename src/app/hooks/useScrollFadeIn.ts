import { useCallback, useEffect, useRef } from "react";

export enum DirectionType {
  up = "up",
  down = "down",
  left = "left",
  right = "right",
}
const useScrollFadeIn = (
  direction = DirectionType.up,
  duration = 1,
  delay = 0
) => {
  const element = useRef<HTMLDivElement | null>(null);

  const handleDirection = (name: DirectionType) => {
    switch (name) {
      case DirectionType.up:
        return "translate3d(0, 50%, 0)";
      case DirectionType.down:
        return "translate3d(0, -50%, 0)";
      case DirectionType.left:
        return "translate3d(50%, 0, 0)";
      case DirectionType.right:
        return "translate3d(-50%, 0, 0)";
      default:
        return;
    }
  };

  const handleScroll = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      const { current } = element;
      if (current && entry.isIntersecting) {
        current.style.transitionProperty = "all";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = "1";
        current.style.transform = "translate3d(0, 0, 0)";
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });

    if (element.current) {
      observer.observe(element.current);
    }
    return () => observer && observer.disconnect();
  }, [handleScroll]);

  return {
    ref: element,
    style: { opacity: 0, transform: handleDirection(direction) },
  };
};

export default useScrollFadeIn;
