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
            
            siblings.forEach((sibling) => {
              if (sibling !== target) {
                sibling.classList.add('inactive');
                sibling.classList.remove('active');
              }
            });

            if (target.classList.contains('section-container') && target === siblings[0]) {
              const findRoommatesBtn = target.querySelector('.neon-button');
              if (findRoommatesBtn && !findRoommatesBtn.classList.contains('shine-effect')) {
                findRoommatesBtn.classList.add('shine-effect');
              }
            }
          } else {
            if (entry.intersectionRatio <= 0.1) {
              target.classList.add('inactive');
              
              if (!siblings.some(s => s.classList.contains('active'))) {
                target.classList.add('semi-visible');
              } else {
                target.classList.remove('semi-visible');
              }
            }
          }
        });
      },
      {
        threshold: [0, 0.1, 0.3, 0.5, 0.7, 1],
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    const sections = document.querySelectorAll('.section-container');
    sections.forEach((section) => {
      observer.observe(section);
      sectionRefs.current.push(section as HTMLElement);
    });

    setTimeout(() => {
      const firstSection = document.querySelector('.section-container');
      if (firstSection) {
        firstSection.classList.add('active');
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
