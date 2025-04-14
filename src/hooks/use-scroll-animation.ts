
import { useEffect, useRef, useState } from "react";

export function useScrollAnimation() {
  const [elementsToAnimate, setElementsToAnimate] = useState<NodeListOf<Element> | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Get all elements with the animation class
    const elements = document.querySelectorAll(".animate-on-scroll");
    setElementsToAnimate(elements);

    // Create intersection observer
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          // Optional: remove the class when the element is out of view
          // entry.target.classList.remove("visible");
        }
      });
    }, {
      threshold: 0.1, // Trigger when at least 10% of the element is in view
      rootMargin: "0px 0px -50px 0px" // Slightly delayed animation
    });

    // Observe all elements
    elements.forEach((element) => {
      observer.current?.observe(element);
    });

    // Cleanup
    return () => {
      if (observer.current) {
        elements.forEach((element) => {
          observer.current?.unobserve(element);
        });
      }
    };
  }, []);

  return elementsToAnimate;
}
