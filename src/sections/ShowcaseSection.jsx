import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/logos/webmobile.jpg" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                Ryde — a responsive, interactive web application that simplifies
                ride booking with real-time updates and a user-first design.
              </h2>
              <p className="text-white-50 md:text-xl">
                Developed using React for powerful state management and
                TailwindCSS for consistent styling — ensuring an intuitive,
                responsive, and interactive user experience.
              </p>
            </div>
            <div className="flex gap-3 mt-2">
              <a
                href="https://your-live-demo-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm font-semibold shadow"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/yourusername/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 rounded bg-gray-800 text-white hover:bg-gray-900 transition-colors text-sm font-semibold shadow"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>The Library Management Platform</h2>
              <div className="flex gap-3 mt-2">
                <a
                  href="https://your-live-demo-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm font-semibold shadow"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/yourusername/your-repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1 rounded bg-gray-800 text-white hover:bg-gray-900 transition-colors text-sm font-semibold shadow"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
              <div className="flex gap-3 mt-2">
                <a
                  href="https://your-live-demo-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm font-semibold shadow"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/yourusername/your-repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1 rounded bg-gray-800 text-white hover:bg-gray-900 transition-colors text-sm font-semibold shadow"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
