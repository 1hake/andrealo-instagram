import { useState, useEffect } from "react";

export const useIsOffScreen = (
  element: React.RefObject<HTMLElement>,
  rootMargin: string = "0px"
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { rootMargin }
    );

    element.current && observer.observe(element.current);

    return () => {
      element.current && observer.unobserve(element.current);
    };
  }, []);

  return isVisible;
};
