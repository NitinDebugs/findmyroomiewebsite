
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
          // Add visible class with a small delay to create a cascade effect
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, 150);
        } else if (entry.intersectionRatio <= 0.1) {
          // Only remove the visible class when completely out of view
          // Use a longer delay before removing visibility to make transitions smoother
          setTimeout(() => {
            // Check if it's still not intersecting before removing class
            if (!entry.isIntersecting) {
              entry.target.classList.remove("visible");
            }
          }, 300);
        }
      });
    }, {
      threshold: [0, 0.1, 0.3, 0.5, 0.7, 1], // More threshold points for smoother transitions
      rootMargin: "0px 0px -100px 0px" // More delayed animation
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
