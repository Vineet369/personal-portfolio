import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Ejs, as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "25th June'24 - 5th Aug'24",
    role: "Front-end Web Developer",
    company: "IBM SkillsBuild Summer Internship Program",
    description: `Gained strong technical knowledge in web development, learned and applied new technologies into hand's on project to build a resale e-commerce website with multiple pages.`,
    image: project6,
    title: "E-commerce resale website",
    link: "https://e-commrece-resale-paltform.vercel.app/",
    certificate: "https://drive.google.com/file/d/1HJR7m1IyjZrnyXj8h05gnswN1AmJmvwl/view?usp=drive_link",
    technologies: ["Javascript", "React.js", "HTML","CSS"],
  },
];


// export const CERTIFICATIONS = [
//   {
//     year: "2023 - Present",
//     role: "Senior Full Stack Developer",
//     company: "Google Inc.",
//     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//     technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
//   },
// ]


export const PROJECTS = [
 
  
  {
    title: "Multiplayer Typing Speed Game",
    image: project1,
    link:'https://typingspeed-multiplayer-game.onrender.com/',
    description:
    `Developed a real-time multiplayer typing game using Vanilla JS, WebSocket, HTML, and CSS as a Single Page Application (SPA).
    Real-time Player Updates: Implemented WebSocket for bi-directional communication to provide real-time progress updates of each player as they type.
    Game Flow Control: Admin can start the game after players join, with all participants' words being checked in real-time for accuracy.
    Dynamic Results Calculation: Integrated a timer that stops when each player finishes typing, and calculated the results based on both accuracy and typing duration.
    Focused on delivering a seamless, interactive multiplayer experience on a single page without requiring page reloads.`,
    
    technologies: ["NodeJs", "Web Socket", "HTML", "CSS", "Vanilla Js", "DOM"],
  },
  {
    title: "Network Analysis Dashboard | Frontend",
    image: project2,
    link:'https://network-analysis-dashboard-one.vercel.app/',
    description:
    `Developed an interactive data visualization dashboard using React and Recharts to display network analysis data.
    Implemented various chart types, including pie charts, bar graphs, heatmap, histogram and line charts, providing insightful visualizations for complex data sets.
    Focused on delivering a clean, responsive UI to ensure data is easily interpretable across different devices and screen sizes.`,  
    technologies: ["React", "React-DOM", "Rechart", "Tailwind CSS"],
  },
  {
    title: "Medical Care In Rural Areas | Fullstack",
    image: project3,
    link:'https://github.com/Vineet369/Health-Care-AI',
    description:
    `Fullstack project with functionalities of login-logout forms with authentication.
    Doctorsappointment from user end and appointment approval from doctor’s end.
    Whatsappmessagingintegration, minimalistic frontend with seamless communication with database.`,    
    technologies: ["NodeJs", "ExpressJs", "EJs", "Bootstrap", "MongoDB", "Twilio(API)"],
  },
  {
    title: "Password Generator | Frontend Project",
    image: project4,
    link:'https://github.com/Vineet369/password-generator-react',
    description:
      `React based password generator for generating unique strong passwords.
      Special characters, numbers, and length can be dynamically updated in real time.
      Copy button to copy password directly to clipboard.`,
    technologies: [ "React", "React-dom", "Tailwind CSS"],
  },
  {
    title: "User Authentication And Live-Count | Backend",
    image: project5,
    link:'https://github.com/Vineet369/Mega-project-Backend-',
    description:
      `● Backendproject with functionalities of login-logout, form, like count, subscription.
      ● Professionally used cookieParser, aggregation pipelines, bcrypt, JWTtokens with controllers for secure and
      efficient server-side applications.`,
    technologies: [ "NodeJs", "ExpressJs", "Cloudinary", "MongoDB"],
  },
];

export const CONTACT = {
  // address: "767 Fifth Avenue, New York, NY 10153 ",
  // phoneNo: "+12 4555 666 00 ",
  email: "vineetmaurya.4985@gmail.com",
};
