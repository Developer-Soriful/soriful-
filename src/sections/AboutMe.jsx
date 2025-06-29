import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const journeyData = [
  {
    period: "April 2023",
    title: "HTML & CSS",
    description:
      "Started my journey with HTML and CSS. Built many design projects and learned the basics of web development.",
    icon: "🎨",
    color: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    glowColor: "shadow-blue-500/20",
  },
  {
    period: "Aug 2023 - Apr 2024",
    title: "C/C++",
    description:
      "Spent 8 months learning C/C++ and solving fundamental problems, which gave me strong programming logic.",
    icon: "⚙️",
    color: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    glowColor: "shadow-purple-500/20",
  },
  {
    period: "Jan 2024",
    title: "JavaScript",
    description:
      "Discovered my passion for web, started learning JS. My strong fundamentals made it easy and fun!",
    icon: "🚀",
    color: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20",
    borderColor: "border-yellow-500/30",
    glowColor: "shadow-yellow-500/20",
  },
  {
    period: "2024",
    title: "React & MERN",
    description:
      "Learned React, joined Programming Hero, and built projects like Book Recipes and Tutor Booking Platform.",
    icon: "⚛️",
    color: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    glowColor: "shadow-green-500/20",
  },
];

const AboutMe = () => {
  useGSAP(() => {
    // Animate the main heading
    gsap.fromTo(
      ".about-heading",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.inOut", scrollTrigger: { trigger: ".about-heading", start: "top 80%" } }
    );
    // Animate journey cards horizontally
    gsap.utils.toArray(".journey-step").forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 60, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, delay: i * 0.2, ease: "power2.out", scrollTrigger: { trigger: card, start: "top 90%" } }
      );
    });
    // Animate the progress bar
    gsap.fromTo(
      ".journey-progress-bar-inner",
      { scaleX: 0 },
      { scaleX: 1, duration: 1.2, ease: "power2.inOut", scrollTrigger: { trigger: ".journey-progress-bar", start: "top 90%" } }
    );
    // Animate the personality section
    gsap.fromTo(
      ".personality-section",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.inOut", scrollTrigger: { trigger: ".personality-section", start: "top 80%" } }
    );
  }, []);

  return (
    <section id="about" className="flex-center mt-16 sm:mt-20 md:mt-32 lg:mt-40 xl:mt-48 section-padding">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <TitleHeader
          title="About Me"
          sub="👨‍💻 My Programming Journey"
        />
        
        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32">
          {/* Main Introduction */}
          <div className="about-heading text-center mb-16 sm:mb-20 md:mb-24 lg:mb-32">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-white via-blue-50 to-purple-50 bg-clip-text text-transparent">
              Passionate Developer from Bangladesh
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white-50 max-w-4xl mx-auto leading-relaxed px-4">
              Hi, I'm Soriful! I'm a developer who loves turning ideas into reality through code. My journey in programming started with curiosity and has evolved into a passion for creating meaningful web applications that solve real-world problems.
            </p>
          </div>

          {/* Responsive Journey Stepper */}
          <div className="w-full flex flex-col items-center mb-20 sm:mb-24 md:mb-28 lg:mb-32">
            {/* Large screens: Horizontal Stepper */}
            <div className="relative w-full max-w-7xl hidden lg:block">
              {/* Progress Bar */}
              <div className="journey-progress-bar absolute top-1/2 left-0 w-full h-3 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-full -translate-y-1/2 z-0" />
              <div className="journey-progress-bar-inner origin-left absolute top-1/2 left-0 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full -translate-y-1/2 z-10" style={{ width: '100%' }} />
              {/* Steps */}
              <div className="flex justify-between items-center relative z-20 px-4 lg:px-8 xl:px-12">
                {journeyData.map((item, i) => (
                  <div key={i} className="flex flex-col items-center w-1/4 px-2 lg:px-3 xl:px-4">
                    <div className={`journey-step group ${item.color} ${item.borderColor} ${item.glowColor} shadow-2xl hover:shadow-3xl p-6 lg:p-8 xl:p-10 rounded-3xl mb-8 lg:mb-10 xl:mb-12 border backdrop-blur-sm w-full h-[320px] lg:h-[360px] xl:h-[400px] max-w-[280px] lg:max-w-[320px] xl:max-w-[360px] transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative overflow-hidden flex flex-col justify-center`}>
                      {/* Animated background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      
                      {/* Floating particles */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="absolute bottom-4 right-6 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-bounce" style={{ animationDelay: '0.3s' }} />
                      
                      <div className="relative z-10 flex flex-col h-full justify-center">
                        <span className="text-3xl lg:text-4xl xl:text-5xl mb-4 lg:mb-6 block text-center group-hover:scale-110 transition-transform duration-500">{item.icon}</span>
                        <h4 className="text-lg lg:text-xl xl:text-2xl font-bold mb-2 lg:mb-3 text-white text-center group-hover:text-blue-50 transition-colors duration-300 leading-tight">{item.title}</h4>
                        <p className="text-blue-50 text-sm lg:text-base mb-3 lg:mb-4 text-center font-medium">{item.period}</p>
                        <p className="text-white-50 text-sm lg:text-base leading-relaxed text-center flex-grow">{item.description}</p>
                      </div>
                    </div>
                    {/* Dot on progress bar */}
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-black-100 z-30 shadow-lg" />
                  </div>
                ))}
              </div>
            </div>

            {/* Medium screens: 2x2 Grid */}
            <div className="relative w-full hidden md:block lg:hidden">
              <div className="grid grid-cols-2 gap-6 lg:gap-8 px-4 max-w-5xl mx-auto">
                {journeyData.map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className={`journey-step group ${item.color} ${item.borderColor} ${item.glowColor} shadow-xl hover:shadow-2xl p-6 lg:p-8 rounded-2xl mb-6 border backdrop-blur-sm w-full h-[280px] lg:h-[320px] max-w-[320px] lg:max-w-[360px] transition-all duration-500 hover:scale-105 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-center`}>
                      {/* Animated background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      
                      {/* Floating particles */}
                      <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="absolute bottom-3 right-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-bounce" style={{ animationDelay: '0.3s' }} />
                      
                      <div className="relative z-10 flex flex-col h-full justify-center">
                        <span className="text-3xl lg:text-4xl mb-4 block text-center group-hover:scale-110 transition-transform duration-500">{item.icon}</span>
                        <h4 className="text-lg lg:text-xl font-bold mb-2 text-white text-center group-hover:text-blue-50 transition-colors duration-300 leading-tight">{item.title}</h4>
                        <p className="text-blue-50 text-sm mb-3 text-center font-medium">{item.period}</p>
                        <p className="text-white-50 text-sm leading-relaxed text-center flex-grow">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Small screens: Vertical Stepper */}
            <div className="relative w-full flex flex-col items-center md:hidden px-4">
              {/* Progress Bar */}
              <div className="journey-progress-bar absolute left-1/2 top-0 h-full w-2 bg-gradient-to-b from-blue-900/30 to-purple-900/30 rounded-full -translate-x-1/2 z-0" style={{ minHeight: '100%' }} />
              <div className="journey-progress-bar-inner origin-top absolute left-1/2 top-0 w-2 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full -translate-x-1/2 z-10" style={{ minHeight: '100%', height: '100%' }} />
              {/* Steps */}
              <div className="flex flex-col justify-between items-center relative z-20 w-full">
                {journeyData.map((item, i) => (
                  <div key={i} className="flex flex-row items-center w-full mb-12 sm:mb-16 last:mb-0">
                    {/* Dot on progress bar */}
                    <div className="flex flex-col items-center mr-4 sm:mr-6">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-3 sm:border-4 border-black-100 z-30 shadow-lg" />
                    </div>
                    <div className={`journey-step group ${item.color} ${item.borderColor} ${item.glowColor} shadow-lg hover:shadow-xl p-4 sm:p-6 rounded-2xl border backdrop-blur-sm flex-1 h-[200px] sm:h-[220px] transition-all duration-500 hover:scale-105 relative overflow-hidden flex flex-col justify-center`}>
                      {/* Animated background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      
                      {/* Floating particles */}
                      <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="absolute bottom-2 right-3 w-0.5 h-0.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-bounce" style={{ animationDelay: '0.3s' }} />
                      
                      <div className="relative z-10 flex flex-col h-full justify-center">
                        <span className="text-2xl sm:text-3xl mb-3 block group-hover:scale-110 transition-transform duration-500">{item.icon}</span>
                        <h4 className="text-base sm:text-lg font-bold mb-2 text-white group-hover:text-blue-50 transition-colors duration-300 leading-tight">{item.title}</h4>
                        <p className="text-blue-50 text-xs sm:text-sm mb-2 font-medium">{item.period}</p>
                        <p className="text-white-50 text-xs sm:text-sm leading-relaxed flex-grow">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Personality & Interests Section */}
          <div className="personality-section mt-20 sm:mt-24 md:mt-28 lg:mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
              <div className="space-y-6 sm:space-y-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-blue-50 bg-clip-text text-transparent">
                  Beyond Programming
                </h3>
                <div className="space-y-4 sm:space-y-6 text-white-50">
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    I believe in continuous learning and staying updated with the latest trends in web development. My goal is to create applications that not only work flawlessly but also provide exceptional user experiences.
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
                    <span className="px-3 sm:px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs sm:text-sm hover:bg-blue-500/30 transition-colors duration-300 cursor-default">Problem Solver</span>
                    <span className="px-3 sm:px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs sm:text-sm hover:bg-purple-500/30 transition-colors duration-300 cursor-default">Team Player</span>
                    <span className="px-3 sm:px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-xs sm:text-sm hover:bg-green-500/30 transition-colors duration-300 cursor-default">Fast Learner</span>
                    <span className="px-3 sm:px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-xs sm:text-sm hover:bg-orange-500/30 transition-colors duration-300 cursor-default">Detail Oriented</span>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:bg-gradient-to-br hover:from-white/10 hover:to-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Floating particles */}
                  <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="absolute bottom-4 right-6 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-bounce" style={{ animationDelay: '0.3s' }} />
                  
                  <div className="relative z-10">
                    <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-white group-hover:text-blue-50 transition-colors duration-300">
                      What I Enjoy
                    </h4>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center gap-3 group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-xl sm:text-2xl group-hover/item:scale-110 transition-transform duration-300">💻</span>
                        <span className="text-white-50 text-sm sm:text-base group-hover/item:text-white transition-colors duration-300">Building responsive web applications</span>
                      </div>
                      <div className="flex items-center gap-3 group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-xl sm:text-2xl group-hover/item:scale-110 transition-transform duration-300">🎨</span>
                        <span className="text-white-50 text-sm sm:text-base group-hover/item:text-white transition-colors duration-300">Creating beautiful user interfaces</span>
                      </div>
                      <div className="flex items-center gap-3 group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-xl sm:text-2xl group-hover/item:scale-110 transition-transform duration-300">🚀</span>
                        <span className="text-white-50 text-sm sm:text-base group-hover/item:text-white transition-colors duration-300">Learning new technologies</span>
                      </div>
                      <div className="flex items-center gap-3 group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-xl sm:text-2xl group-hover/item:scale-110 transition-transform duration-300">🤝</span>
                        <span className="text-white-50 text-sm sm:text-base group-hover/item:text-white transition-colors duration-300">Collaborating with other developers</span>
                      </div>
                      <div className="flex items-center gap-3 group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-xl sm:text-2xl group-hover/item:scale-110 transition-transform duration-300">📚</span>
                        <span className="text-white-50 text-sm sm:text-base group-hover/item:text-white transition-colors duration-300">Reading tech blogs and documentation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 