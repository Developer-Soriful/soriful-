import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import TitleHeader from "../components/TitleHeader";
import { techStackImgs } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const [expandedCategories, setExpandedCategories] = useState({
    frontend: false,
    backend: false,
    tools: false
  });

  const skillCategories = [
    {
      id: "frontend",
      category: "Frontend",
      skills: [
        { name: "React", level: 85, icon: "/images/logos/react.png" },
        { name: "JavaScript", level: 90, icon: "/images/logos/js.png" },
        { name: "Tailwind CSS", level: 88, icon: "/images/logos/tailwind.png" },
        { name: "HTML5", level: 95, icon: "/images/logos/html.svg" },
        { name: "CSS3", level: 92, icon: "/images/logos/css.svg" },
      ]
    },
    {
      id: "backend",
      category: "Backend",
      skills: [
        { name: "Node.js", level: 80, icon: "/images/logos/node.png" },
        { name: "Express.js", level: 75, icon: "/images/logos/expressjs.png" },
        { name: "MongoDB", level: 70, icon: "/images/logos/mongodb.png" },
        { name: "REST APIs", level: 78, icon: "/images/logos/api.svg" },
        { name: "JWT Auth", level: 72, icon: "/images/logos/jwt.svg" },
      ]
    },
    {
      id: "tools",
      category: "Tools & Others",
      skills: [
        { name: "VS Code", level: 95, icon: "/images/logos/vscode.svg" },
        { name: "Git", level: 78, icon: "/images/logos/git.svg" },
        { name: "Coursera AI", level: 85, icon: "/images/logos/coursera.svg" },
        { name: "Firebase", level: 72, icon: "/images/logos/firebase.png" },
        { name: "C++", level: 65, icon: "/images/logos/cpp.png" },
        { name: "GitHub", level: 80, icon: "/images/logos/github.svg" },
      ]
    }
  ];

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  useGSAP(() => {
    // Animate the title
    gsap.fromTo(
      ".tech-title",
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power2.inOut",
        scrollTrigger: { trigger: ".tech-title", start: "top 80%" }
      }
    );

    // Animate skill levels
    gsap.fromTo(
      ".skill-bar",
      { scaleX: 0 },
      { 
        scaleX: 1, 
        duration: 1.5, 
        ease: "power2.inOut",
        scrollTrigger: { trigger: ".skills-section", start: "top 80%" }
      }
    );

    // Animate skill cards
    gsap.fromTo(
      ".skill-card",
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6, 
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".skills-section", start: "top 80%" }
      }
    );
  }, [expandedCategories]);

  return (
    <section id="skills" className="flex-center md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <div className="tech-title">
        <TitleHeader
            title="My Technical Skills & Expertise"
            sub="🛠️ Technologies I Master"
        />
      </div>

        {/* Skills with Progress Bars */}
        <div className="skills-section mt-32 lg:mt-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 xl:gap-20">
            {skillCategories.map((category, catIndex) => {
              const isExpanded = expandedCategories[category.id];
              const displayedSkills = isExpanded ? category.skills : category.skills.slice(0, 3);
              const hasMoreSkills = category.skills.length > 3;

          return (
                <div key={catIndex} className="space-y-6 md:space-y-8">
                  <h4 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center text-blue-50 mb-8 lg:mb-10">
                    {category.category}
                  </h4>
                  
                  <div className="grid gap-4 md:gap-6">
                    {displayedSkills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-card group relative p-4 md:p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:scale-105">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                                <img 
                                  src={skill.icon} 
                                  alt={skill.name} 
                                  className="w-6 h-6 md:w-7 md:h-7 object-contain"
                                />
                              </div>
                              {/* Circular progress indicator */}
                              <svg className="absolute inset-0 w-10 h-10 md:w-12 md:h-12 transform -rotate-90" viewBox="0 0 100 100">
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="45"
                                  stroke="rgba(255,255,255,0.1)"
                                  strokeWidth="4"
                                  fill="none"
                                />
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="45"
                                  stroke="url(#gradient)"
                                  strokeWidth="4"
                                  fill="none"
                                  strokeDasharray={`${2 * Math.PI * 45}`}
                                  strokeDashoffset={`${2 * Math.PI * 45 * (1 - skill.level / 100)}`}
                                  className="skill-progress transition-all duration-1000 ease-out"
                                />
                                <defs>
                                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#3B82F6" />
                                    <stop offset="100%" stopColor="#8B5CF6" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                            <div>
                              <h5 className="text-base md:text-lg font-bold text-white">{skill.name}</h5>
                              <p className="text-blue-50 text-xs md:text-sm">Expert Level</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl md:text-2xl font-bold text-blue-50">{skill.level}%</div>
                            <div className="text-xs text-white-50">Proficiency</div>
                          </div>
                        </div>
                        
                        {/* Enhanced progress bar */}
                        <div className="relative h-2 md:h-3 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="skill-bar absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full origin-left"
                            style={{ width: `${skill.level}%` }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full" />
                          {/* Animated dots */}
                          <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ left: `${skill.level}%`, transform: 'translate(-50%, -50%)' }} />
                        </div>
                        
                        {/* Skill description */}
                        <div className="mt-3 p-2 rounded-lg bg-white/5 border border-white/5">
                          <p className="text-xs md:text-sm text-white-50">
                            {skill.level >= 90 ? "Master level expertise" : 
                             skill.level >= 80 ? "Advanced proficiency" : 
                             skill.level >= 70 ? "Strong working knowledge" : 
                             "Good understanding"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* See More/Less Button */}
                  {hasMoreSkills && (
                    <div className="text-center mt-6">
                      <button
                        onClick={() => toggleCategory(category.id)}
                        className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-blue-500/30 hover:border-blue-500/50 text-blue-50 font-medium rounded-lg md:rounded-xl transition-all duration-300 hover:scale-105"
                      >
                        {isExpanded ? "See Less" : `See More (+${category.skills.length - 3})`}
                      </button>
              </div>
                  )}
            </div>
          );
        })}
      </div>
    </div>
      </div>
    </section>
  );
};

export default TechStack;
