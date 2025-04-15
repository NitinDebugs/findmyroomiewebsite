
import { useEffect, useRef } from 'react';

export function useSectionAnimation() {
  const sectionRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          const siblings = Array.from(document.querySelectorAll('.section-container'));
          
          if (entry.isIntersecting) {
            target.classList.add('active');
            target.classList.remove('inactive');
            
            // Make siblings slightly smaller
            siblings.forEach((sibling) => {
              if (sibling !== target) {
                sibling.classList.add('inactive');
                sibling.classList.remove('active');
              }
            });
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    const sections = document.querySelectorAll('.section-container');
    sections.forEach((section) => {
      observer.observe(section);
      sectionRefs.current.push(section as HTMLElement);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return sectionRefs;
}
