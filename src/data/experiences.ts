import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  // {
  //   icon: "/skills/devlup.png",
  //   designation: "Full Stack Developer",
  //   company: "Develop Labs",
  //   startDate: "Feb 2024",
  //   endDate: "",
  //   isCurrentJob: true,
  //   location: "Jodhpur, India",
  //   shortDescription:
  //     "Building modern full-stack web applications and collaborating on innovative software projects.",
  //   description:
  //     "As a Full Stack Developer at Develop Labs, I build scalable web applications using modern technologies such as React, Next.js, Node.js, and databases. I collaborate with fellow developers to design, develop, and deploy high-quality software solutions while following clean coding practices, responsive design principles, and efficient API integration.",
  // },
  {
    icon: "/skills/astrobodh.png",
    designation: "Software Developer Intern",
    company: "RHGMAK Pvt. Ltd. (Astrobodh)",
    startDate: "May 2025",
    endDate: "Jul 2025",
    isCurrentJob: false,
    location: "Remote",
    shortDescription:
      "Developed scalable backend services, REST APIs, and modern web applications for an astrology platform with 500+ users.",
    description:
      "During my internship at RHGMAK Pvt. Ltd. (Astrobodh), I designed and implemented backend modules using Kotlin, Spring Boot, and PostgreSQL while developing REST APIs for mobile and web applications. I integrated Razorpay payment gateway with secure webhook authentication, built reusable Next.js frontend components, containerized applications using Docker, and improved code quality through unit testing and Spring Security, contributing to a scalable production-ready platform.",
  },
  {
    icon: "/skills/iitj.png",
    designation: "Frontend Developer",
    company: "CETSD, IIT Jodhpur",
    startDate: "2024", // Replace with actual month if you remember
    endDate: "2024",
    isCurrentJob: false,
    location: "Jodhpur, India",
    shortDescription:
      "Redesigned and enhanced the user interface of the Centre for Emerging Technologies for Sustainable Development (CETSD) website at IIT Jodhpur.",
    description:
      "Worked under the guidance of a faculty member at IIT Jodhpur to redesign and improve the CETSD website. Revamped the user interface with modern, responsive layouts, improved user experience across devices, optimized navigation and accessibility, and implemented reusable frontend components using React and Next.js. Collaborated closely with stakeholders to ensure the website reflected the institute's vision while maintaining performance and maintainability.",
  },
  {
    icon: "/skills/iitj.png", // Use IIT Jodhpur logo if available
    designation: "UG Research Assistant",
    company: "IIT Jodhpur",
    startDate: "Jun 2025",
    endDate: "Jul 2025",
    isCurrentJob: false,
    location: "Jodhpur, India",
    shortDescription:
      "Conducted deep learning research on molecular dynamics coarse-graining using PyTorch and scientific computing workflows.",
    description:
      "Worked under Prof. Nil Kamal Hazra on reproducing a published machine learning-based coarse-graining methodology for molecular dynamics simulations. Generated and preprocessed MD trajectories, extracted structural features, and curated supervised datasets for training deep learning models. Built PyTorch training pipelines to learn coarse-grained forces and potentials, validated models using radial distribution functions and thermodynamic observables, and performed model selection, hyperparameter tuning, and quantitative evaluation to ensure structural and thermodynamic consistency. Gained hands-on experience in scientific machine learning, dataset curation, trajectory parsing, and reproducible research workflows.",
  },
];

export default experiences;
