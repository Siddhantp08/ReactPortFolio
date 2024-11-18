import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";

export const HERO_CONTENT = `Welcome to My Portfolio.
I’m a passionate hands-on learner fueled by curiosity and a relentless drive to innovate. With a problem-solving attitude and a strong technical mindset, I thrive on challenges, viewing them as opportunities to grow and excel. My commitment to excellence and resilience keeps me focused on achieving meaningful goals while making a tangible impact.

Scroll down to explore my journey, skills, and projects!`;

export const ABOUT_TEXT = `
I am Siddhant Patnaik, a tech enthusiast and full-stack developer with a strong passion for innovation across diverse domains, including web development, machine learning, IoT, and Web3 technologies. Combining technical expertise with a problem-solving mindset, I thrive on creating impactful solutions that bridge the gap between emerging technologies and real-world challenges.

My journey is fueled by curiosity, resilience, and a commitment to continuous learning. From exploring the possibilities of decentralized systems with Web3 to developing cutting-edge applications, I am dedicated to staying at the forefront of technology. With a focus on excellence and a drive to make meaningful contributions, I aim to shape the future of the digital landscape through creativity, innovation, and hard work.`;

export const EXPERIENCES = [
  {
    year: "July 2024 - Aug 2024",
    role: "Machine Learning Intern",
    company: "INCOIS, Hyderabad",
    description: `During my internship at INCOIS, I worked on a project focused on Sea Surface Temperature (SST) prediction using computer vision and image processing techniques. I gained insights into LSTM models and corporate work dynamics, conducted survey work, and explored research papers from other scientists, enriching my understanding of the field.`,
    technologies: ["Machine Learning", "Python", "OpenCV", "Tensor Flow"],
  },
  {
    year: "April 2024 - May 2024",
    role: "Data Analyst",
    company: "Cognifyz Technologies",
    description: `As a Data Analysis Intern, I utilized Python for data cleaning, preprocessing, statistical analysis, and visualization. My role focused on transforming complex datasets into actionable insights, supporting informed decision-making processes, and contributing to meaningful project outcomes. This experience strengthened my skills in data manipulation and analysis within a collaborative, project-driven environment.`,
    technologies: ["Matplotlib", "Pandas", "NumPy", "SQL"],
  },
  {
    year: "August 2023 - Present",
    role: "Vice Chair(RAS)",
    company: "IEEE BVCOE",
    description: `As Vice Chair of the IEEE Robotics and Automation Society (RAS), I spearheaded IoT initiatives, including a smart glasses project designed to aid visually impaired individuals. Previously, as Head Supervisor of E-Cell and R&D Executive, I cultivated leadership and teamwork skills, fostering collaboration to drive impactful projects and innovative solutions.`,
    technologies: ["Arduino", "Google Cloud", "Networking", "Entrepreneurship Development"],
  },
  
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:   
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Tailwind", "MongoDB"],
  },
  {
    title: "DBank",
    image: project2,
    description:
      "Dbank is a decentralized finance (DeFi) app for secure and transparent digital asset management, enabling lending, borrowing, and earning interest through blockchain-based smart contracts.",
    technologies: ["HTML", "CSS", "JavaScript", "Motoko"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind", "JavaScript"],
  },
  {
    title: "BearBullAI-LSTM",
    image: project4,
    description:
      "This project analyzes the historical stock prices of major tech companies using Python and various data analysis libraries. The focus is on visualizing the adjusted closing prices of tech giants like Apple (AAPL), Google (GOOG), Microsoft (MSFT), and Amazon (AMZN) over the past year, with the addition of Long Short-Term Memory (LSTM) networks for predicting future price trends.",
    technologies: ["TensorFlow", "Neural Networks", "Scikit-learn", "Seaborn"],
  },
  {
    title: "ReactChat App",
    image: project6,
    description:
      "A real-time chat application built with React.js and Firebase for backend services for instant messaging. It features user authentication, responsive design, typing indicators, and message timestamps, providing a smooth chat experience across devices.",
    technologies: ["HTML", "CSS", "React", "JavaScript", "Firebase"],
  },

  {
    title: "Pharm_Solution",
    image: project5,
    description:
      "A machine learning model for predicting plant diseases by analyzing leaf and fruit images. It covers image preprocessing, model training, and evaluation, providing a practical approach to early disease detection in agriculture.",
    technologies: ["TensorFlow", "OpenCV", "Kotlin", "Artificial Neural Networks"],
  },
];

export const CONTACT = {
  address: "Dwarka Sector-1A, New Delhi, India ",
  phoneNo: "+91-9810994316 ",
  email: "siddhantpatnaik08@gmail.com",
};


