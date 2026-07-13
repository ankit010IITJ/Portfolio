import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
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
    startDate: "Feb 2025",
    endDate: "Apr 2025",
    isCurrentJob: false,
    location: "Jodhpur, India",
    shortDescription:
      "Redesigned and enhanced the user interface of the Centre for Emerging Technologies for Sustainable Development (CETSD) website at IIT Jodhpur.",
    description:
      "Worked under the guidance of Prof. Shreya Banerjee at IIT Jodhpur to redesign and improve the CETSD website. Revamped the user interface with modern, responsive layouts, improved user experience across devices, optimized navigation and accessibility, and implemented reusable frontend components using React and Next.js. Collaborated closely with stakeholders to ensure the website reflected the institute's vision while maintaining performance and maintainability.",
  },
  {
    icon: "/skills/iitj.png",
    designation: "UG Research Assistant",
    company: "IIT Jodhpur",
    startDate: "Jun 2025",
    endDate: "Jul 2025",
    isCurrentJob: false,
    location: "Jodhpur, India",
    shortDescription:
      "Conducted deep learning research on molecular dynamics coarse-graining using PyTorch and scientific computing workflows.",
    description:
      "Worked under Prof. Nil Kamal Hazra on reproducing a published machine learning-based coarse-graining methodology for molecular dynamics simulations. Built PyTorch training pipelines, processed MD trajectories, curated datasets, and trained deep learning models. Evaluated model performance using structural and thermodynamic metrics while gaining hands-on experience in scientific machine learning and reproducible research.",
  },
];

export default experiences;
