import { useEffect, useRef } from "react";
import Nav from '../components/Nav'
import AboutSection from '../sections/AboutSection'
import InitialSection from '../sections/InitialSection'
import ProjectsSection from '../sections/ProjectsSection'
import ContactSection from '../sections/ContactSection'

const Home = () => {

  const containerRef = useRef(null);
  const scrollTimeout = useRef(null);
  const isAnimating = useRef(false);

  const easeOutQuad = (t) => t * (2 - t);

  const smoothScrollTo = (targetY, duration = 900) => {
    const el = containerRef.current;
    const startY = el.scrollTop;
    const diff = targetY - startY;
    let start;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const time = timestamp - start;
      const progress = Math.min(time / duration, 1);

      el.scrollTop = startY + diff * easeOutQuad(progress);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        isAnimating.current = false;
      }
    };

    requestAnimationFrame(step);
  };

  const handleScroll = () => {
    if (isAnimating.current){
      isAnimating.current = false;
      return;
    };

    clearTimeout(scrollTimeout.current);

    // aguarda o scroll parar
    scrollTimeout.current = setTimeout(() => {
      const el = containerRef.current;
      const sections = Array.from(el.children);

      const scrollTop = el.scrollTop;
      const viewHeight = el.clientHeight;

      // encontra a section mais próxima
      const nearest = sections.reduce(
        (closest, sec) => {
          const offset = Math.abs(sec.offsetTop - scrollTop);
          return offset < closest.offset
            ? { el: sec, offset }
            : closest;
        },
        { el: null, offset: Infinity }
      );

      isAnimating.current = true;
      smoothScrollTo(nearest.el.offsetTop);
    }, 600); // tempo para detectar "parou de rolar"
  };

  return (
    <div id="main-container" ref={containerRef} className='h-screen w-screen overflow-x-hidden overflow-y-scroll' onScroll={handleScroll}>
      <Nav />
      <InitialSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />

    </div>
  )
} 
export default Home