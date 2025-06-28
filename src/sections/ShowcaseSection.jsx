import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      name: "TutorHub",
      image: "/main.png",
      liveDemo: "https://assignment-11-19334.web.app",
      github: "https://github.com/Developer-Soriful/Booking-Tutor",
      description: "A responsive, interactive web application that streamlines tutor booking with real-time scheduling, secure access, and a student-focused experience.",
      techStack: ["React", "TailwindCSS", "Firebase", "React Router", "Context API"],
      briefDescription: "TutorHub is a comprehensive platform that connects students with qualified tutors. It features real-time scheduling, secure authentication, and an intuitive booking system designed to enhance the learning experience.",
      challenges: [
        "Implementing real-time scheduling without conflicts",
        "Managing complex state for booking flows",
        "Creating responsive design for all devices",
        "Integrating Firebase authentication securely"
      ],
      improvements: [
        "Add video calling integration",
        "Implement payment gateway",
        "Add review and rating system",
        "Create mobile app version"
      ]
    },
    {
      id: 2,
      name: "Recipe Book Hub",
      image: "/Book_recipe.png",
      liveDemo: "https://recipe-book-app-steel.vercel.app",
      github: "https://github.com/Developer-Soriful/Recipe-book-app",
      description: "A comprehensive recipe management platform with cooking instructions, ingredient tracking, and meal planning features.",
      techStack: ["React", "Node.js", "MongoDB", "Express.js", "JWT"],
      briefDescription: "Recipe Book Hub is a complete solution for food enthusiasts to discover, save, and share recipes. It features detailed cooking instructions, ingredient management, nutritional information, and meal planning capabilities with user-friendly interface.",
      challenges: [
        "Designing efficient database schema for recipe ingredients and instructions",
        "Implementing user authentication and recipe sharing system",
        "Creating responsive design for recipe cards and cooking steps",
        "Optimizing search and filter functionality for recipes"
      ],
      improvements: [
        "Add recipe rating and review system",
        "Implement meal planning calendar",
        "Create shopping list generator",
        "Add recipe video tutorials"
      ]
    },
    {
      id: 3,
      name: "App Store Hub",
      image: "/App_store.png",
      liveDemo: "https://spontaneous-gumption-cdc712.netlify.app/",
      github: "https://github.com/Developer-Soriful/App-Store-Hub",
      description: "A comprehensive app discovery platform featuring mobile applications with detailed information, ratings, and download statistics.",
      techStack: ["React", "TailwindCSS", "Vite"],
      briefDescription: "App Store Hub is a comprehensive platform for discovering and exploring mobile applications. It provides detailed app information, user ratings, download statistics, and advanced filtering options for users to find the perfect apps for their needs.",
      challenges: [
        "Handling large datasets of app information efficiently",
        "Implementing complex filtering and search for apps",
        "Creating responsive design for app showcase interface",
        "Optimizing performance with virtual scrolling for app lists"
      ],
      improvements: [
        "Add real-time app data updates",
        "Implement advanced app analytics",
        "Create developer dashboard",
        "Add app comparison features"
      ]
    }
  ];

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectDetails = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each project card
    gsap.utils.toArray(".project-card").forEach((card, index) => {
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
    <div id="work" ref={sectionRef} className="app-showcase relative">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Main Project */}
          <div className="first-project-wrapper ">
            <div className="project project-card ">
              <div className="image-wrapper rounded-xl bg-[#FFEFDB] ">
                <img className="px-10 py-6" src={projects[0].image} alt={projects[0].name} />
              </div>
              <div className="text-content">
                <h2>{projects[0].name}</h2>
                <p className="text-white-50 md:text-xl">
                  {projects[0].description}
                </p>
              </div>
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => openProjectDetails(projects[0])}
                  className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm font-semibold shadow"
                >
                  View Details
                </button>
                <a
                  href={projects[0].liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition-colors text-sm font-semibold shadow"
                >
                  Live Demo
                </a>
                <a
                  href={projects[0].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-900 transition-colors text-sm font-semibold shadow"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Other Projects */}
          <div className="project-list-wrapper overflow-hidden">
            {projects.slice(1).map((project) => (
              <div key={project.id} className="project project-card">
                <div className="image-wrapper bg-[#FFEFDB]">
                  <img src={project.image} alt={project.name} />
                </div>
                <h2>{project.name}</h2>
                <p className="text-white-50 text-sm mt-2">
                  {project.description}
                </p>
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => openProjectDetails(project)}
                    className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm font-semibold shadow"
                  >
                    View Details
                  </button>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition-colors text-sm font-semibold shadow"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-900 transition-colors text-sm font-semibold shadow"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {isModalOpen && selectedProject && (
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-white">{selectedProject.name}</h2>
                <button
                  onClick={closeProjectDetails}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Project Image */}
              <div className="mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* Technology Stack */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-3">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Brief Description */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-3">Description</h3>
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.briefDescription}
                </p>
              </div>

              {/* Challenges */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-3">Challenges Faced</h3>
                <ul className="space-y-2">
                  {selectedProject.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1 text-lg">•</span>
                      <span className="text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Improvements */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-3">Future Improvements</h3>
                <ul className="space-y-2">
                  {selectedProject.improvements.map((improvement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-400 mt-1 text-lg">•</span>
                      <span className="text-gray-300">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 border-t border-gray-700">
                <a
                  href={selectedProject.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors shadow-lg"
                >
                  View Live Demo
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors shadow-lg"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppShowcase;
