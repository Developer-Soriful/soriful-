const navLinks = [
  {
    name: "Project",
    link: "#work",
  },
  {
    name: "About Me",
    link: "#about",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: "Some", suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "ES6",
    imgPath: "/images/logos/js.png",
  },
  {
    name: "React ",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Node",
    imgPath: "/images/logos/node.png",
  },

  {
    name: "Express",
    imgPath: "/images/logos/expressjs.png",
  },
  {
    name: "MongoDB",
    imgPath: "/images/logos/mongodb.png",
  },
  {
    name: "Firebase",
    imgPath: "/images/logos/firebase.png",
  },

  {
    name: "Tailwind",
    imgPath: "/images/logos/tailwind.png",
  },

  {
    name: "CPP",
    imgPath: "/images/logos/cpp.png",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "NextJS Developer",
    modelPath: "/models/nextjs.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Tailwind",
    modelPath: "/models/tailwindcss.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "JavaScript",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Soriful brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/logos/self-learning.png",
    logoPath: "/images/logos/self-learning.png",
    title: "Frontend Developer",
    date: "present",
    responsibilities: [
      "Independently developed and refined multiple user-facing features through self-initiated projects using modern front-end technologies.",
      "Consistently collaborated with online communities and design inspiration platforms to align personal projects with current UI/UX best practices.",
      "Focused on writing clean, scalable, and performance-optimized code while actively exploring advanced topics like state management, authentication, animations, and responsive design.",
    ],
  },
  {
    review:
      "Soriful's contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/logos/javascript.png",
    logoPath: "/images/logos/javascript.png",
    title: "MERN Stack Developer",
    date: "present",
    responsibilities: [
      "Built and maintained full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) through self-driven projects.",
      "Integrated RESTful APIs and handled complex data flows between frontend and backend components efficiently.",
      "Designed responsive and user-centric interfaces while managing application state using tools like React Context API and Redux.",
      "Explored authentication, authorization, and secure routing in MERN applications using JWT and Firebase Auth.",
      "Continuously improved project structure and performance by learning and applying industry-standard practices, aiming to contribute to professional MERN-based systems in the near future, In Shaa Allah.",
    ],
  },
  // something change 
  {
    review:
      "Soriful's work on our C++ backend systems brought a high level of performance and reliability. He delivered optimized solutions that enhanced system efficiency and aligned perfectly with our technical goals.",
    imgPath: "/images/logos/cpp.png",
    logoPath: "/images/logos/cpp.png",
    title: "C++",
    date: "Aug 2023 - April 2024",
    responsibilities: [
      "Developed high-performance system-level applications using C++, focusing on memory efficiency and speed.",
      "Implemented complex algorithms and data structures to optimize backend logic and processing time.",
      "Collaborated with cross-functional teams to integrate C++ modules with frontend interfaces and other services.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can't say enough good things about Soriful. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Soriful was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Soriful was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Soriful's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Soriful is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Soriful was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that's both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Soriful's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He's a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Soriful was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    socialLink: "https://www.instagram.com/1md_soriful_islam/",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    socialLink: "https://www.facebook.com/mdsorifulislam123",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    socialLink: "",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    socialLink: "https://www.linkedin.com/in/md-soriful-islam-819491259/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
