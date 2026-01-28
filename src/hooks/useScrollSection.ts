import { useState, useEffect, useRef } from 'react';

export const useScrollSection = () => {
  const [activeSection, setActiveSection] = useState('home');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id || 'home');
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    });

    const observeSections = () => {
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach(section => observerRef.current?.observe(section));
    };

    observeSections();

    // Watch for DOM changes (lazy loaded sections)
    const mutationObserver = new MutationObserver(() => {
      observeSections();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observerRef.current?.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return activeSection;
};
