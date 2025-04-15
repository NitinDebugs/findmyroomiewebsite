
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

            // Add shine effect to the "Find Roommates" button in the first section
            if (target.classList.contains('section-container') && target === siblings[0]) {
              const findRoommatesBtn = target.querySelector('.neon-button');
              if (findRoommatesBtn && !findRoommatesBtn.classList.contains('shine-effect')) {
                findRoommatesBtn.classList.add('shine-effect');
              }
            }
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

    // Ensure the first section's Find Roommates button has shine effect by default
    setTimeout(() => {
      const firstSection = document.querySelector('.section-container');
      if (firstSection) {
        const findRoommatesBtn = firstSection.querySelector('.neon-button');
        if (findRoommatesBtn) {
          findRoommatesBtn.classList.add('shine-effect');
        }
      }
    }, 500);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return sectionRefs;
}
