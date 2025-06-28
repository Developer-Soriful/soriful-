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
  },
  {
    period: "Aug 2023 - Apr 2024",
    title: "C/C++",
    description:
      "Spent 8 months learning C/C++ and solving fundamental problems, which gave me strong programming logic.",
    icon: "⚙️",
    color: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
  },
  {
    period: "Jan 2024",
    title: "JavaScript",
    description:
      "Discovered my passion for web, started learning JS. My strong fundamentals made it easy and fun!",
    icon: "🚀",
    color: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20",
  },
  {
    period: "2024",
    title: "React & MERN",
    description:
      "Learned React, joined Programming Hero, and built projects like Book Recipes and Tutor Booking Platform.",
    icon: "⚛️",
    color: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
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
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: i * 0.2, ease: "power2.out", scrollTrigger: { trigger: card, start: "top 90%" } }
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
    <section id="about" className="flex-center md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="About Me"
          sub="👨‍💻 My Programming Journey"
        />
        <div className="mt-32">
          {/* Main Introduction */}
          <div className="about-heading text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Passionate Developer from Bangladesh
            </h2>
            <p className="text-xl text-white-50 max-w-4xl mx-auto leading-relaxed">
              Hi, I'm Soriful! I'm a developer who loves turning ideas into reality through code. My journey in programming started with curiosity and has evolved into a passion for creating meaningful web applications that solve real-world problems.
            </p>
          </div>

          {/* Responsive Journey Stepper */}
          <div className="w-full flex flex-col items-center mb-32">
            {/* Desktop/Tablet: Horizontal Stepper */}
            <div className="relative w-full max-w-6xl hidden md:block">
              {/* Progress Bar */}
              <div className="journey-progress-bar absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-full -translate-y-1/2 z-0" />
              <div className="journey-progress-bar-inner origin-left absolute top-1/2 left-0 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full -translate-y-1/2 z-10" style={{ width: '100%' }} />
              {/* Steps */}
              <div className="flex justify-between items-center relative z-20 px-8">
                {journeyData.map((item, i) => (
                  <div key={i} className="flex flex-col items-center w-1/4 px-4">
                    <div className={`journey-step ${item.color} shadow-lg p-8 rounded-2xl mb-8 border border-white/10 backdrop-blur-sm w-full max-w-xs`}>
                      <span className="text-4xl mb-4 block text-center">{item.icon}</span>
                      <h4 className="text-xl font-bold mb-2 text-white text-center">{item.title}</h4>
                      <p className="text-blue-50 text-sm mb-3 text-center">{item.period}</p>
                      <p className="text-white-50 text-sm leading-relaxed text-center">{item.description}</p>
                    </div>
                    {/* Dot on progress bar */}
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-black-100 z-30" />
                  </div>
                ))}
              </div>
            </div>
            {/* Mobile: Vertical Stepper */}
            <div className="relative w-full flex flex-col items-center md:hidden px-4">
              {/* Progress Bar */}
              <div className="journey-progress-bar absolute left-1/2 top-0 h-full w-2 bg-gradient-to-b from-blue-900/30 to-purple-900/30 rounded-full -translate-x-1/2 z-0" style={{ minHeight: '100%' }} />
              <div className="journey-progress-bar-inner origin-top absolute left-1/2 top-0 w-2 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full -translate-x-1/2 z-10" style={{ minHeight: '100%', height: '100%' }} />
              {/* Steps */}
              <div className="flex flex-col justify-between items-center relative z-20 w-full">
                {journeyData.map((item, i) => (
                  <div key={i} className="flex flex-row items-center w-full mb-16 last:mb-0">
                    {/* Dot on progress bar */}
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-black-100 z-30" />
                    </div>
                    <div className={`journey-step ${item.color} shadow-lg p-6 rounded-2xl border border-white/10 backdrop-blur-sm flex-1`}>
                      <span className="text-3xl mb-3 block">{item.icon}</span>
                      <h4 className="text-lg font-bold mb-2 text-white">{item.title}</h4>
                      <p className="text-blue-50 text-sm mb-2">{item.period}</p>
                      <p className="text-white-50 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Personality & Interests Section */}
          <div className="personality-section mt-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Beyond Programming</h3>
                <div className="space-y-6 text-white-50">
                  <p className="leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
                  </p>
                  <p className="leading-relaxed">
                    I believe in continuous learning and staying updated with the latest trends in web development. My goal is to create applications that not only work flawlessly but also provide exceptional user experiences.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-6">
                    <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm">Problem Solver</span>
                    <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm">Team Player</span>
                    <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-sm">Fast Learner</span>
                    <span className="px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-sm">Detail Oriented</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm">
                  <h4 className="text-2xl font-bold mb-6">What I Enjoy</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3"><span className="text-2xl">💻</span><span className="text-white-50">Building responsive web applications</span></div>
                    <div className="flex items-center gap-3"><span className="text-2xl">🎨</span><span className="text-white-50">Creating beautiful user interfaces</span></div>
                    <div className="flex items-center gap-3"><span className="text-2xl">🚀</span><span className="text-white-50">Learning new technologies</span></div>
                    <div className="flex items-center gap-3"><span className="text-2xl">🤝</span><span className="text-white-50">Collaborating with other developers</span></div>
                    <div className="flex items-center gap-3"><span className="text-2xl">📚</span><span className="text-white-50">Reading tech blogs and documentation</span></div>
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