import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "AI & Machine Learning",
    icons: [
      "/skills/python.svg",
      "/skills/tensorflow.svg",
      "/skills/opencv.svg",
      "/skills/pandas.svg",
      "/skills/scikit-learn.svg",
    ],
    shortDescription:
      "I build intelligent applications powered by AI, Machine Learning, and Large Language Models.",
    description:
      "I develop AI-driven solutions using Python, TensorFlow, scikit-learn, OpenCV, LangChain, Retrieval-Augmented Generation (RAG), and Multi-Agent Systems. My experience includes document understanding, computer vision, predictive analytics, and intelligent assistants that solve real-world problems.",
  },
  {
    id: 2,
    title: "Full Stack Development",
    icons: [
      "/skills/react.svg",
      "/skills/nextjs.png",
      "/skills/nodejs.svg",
      "/skills/html.svg",
      "/skills/css.svg",
    ],
    shortDescription:
      "I build responsive, scalable, and modern web applications.",
    description:
      "I create full-stack web applications using React, Next.js, Node.js, FastAPI, and REST APIs. I focus on clean UI, maintainable architecture, performance optimization, and seamless frontend-backend integration to deliver production-ready applications.",
  },
  {
    id: 3,
    title: "Backend Development",
    icons: [
      "/skills/springboot.svg",
      "/skills/postgresql.svg",
      "/skills/nodejs.svg",
      "/skills/fastapi.svg",
      "/skills/postman.svg",
    ],
    shortDescription:
      "I design secure and scalable backend systems and APIs.",
    description:
      "I develop high-performance backend services using Spring Boot, FastAPI, Kotlin, Node.js, and PostgreSQL. My experience includes authentication, payment gateway integration, RESTful APIs, database design, and microservice-based architectures.",
  },
  {
    id: 4,
    title: "DevOps & Cloud",
    icons: [
      "/skills/docker.svg",
      "/skills/aws.svg",
      "/skills/github.svg",
      "/skills/linux.svg",
      "/skills/git.svg",
    ],
    shortDescription:
      "I automate deployments and build reliable development workflows.",
    description:
      "I use Docker, Git, GitHub, Linux, and cloud technologies to build scalable deployment pipelines. I focus on containerization, CI/CD practices, cloud-ready applications, and maintaining reliable development environments.",
  },
  {
    id: 5,
    title: "Database Design",
    icons: [
      "/skills/mysql.svg",
      "/skills/postgresql.svg",
      "/skills/mongodb.svg",
      "/skills/sqlite.svg",
      "/skills/redis.svg",
    ],
    shortDescription:
      "I design efficient databases for scalable applications.",
    description:
      "I work with relational and NoSQL databases including MySQL, PostgreSQL, MongoDB, SQLite, and Redis. I design optimized schemas, write efficient queries, and ensure data integrity, performance, and scalability.",
  },
  {
    id: 6,
    title: "System Programming",
    icons: [
      "/skills/linux.svg",
      "/skills/cpp.svg",
      "/skills/c.svg",
      "/skills/git.svg",
      "/skills/docker.svg",
    ],
    shortDescription:
      "I build efficient software that interacts directly with operating systems.",
    description:
      "I develop system-level applications using C and C++ on Linux. My experience includes working with the /proc filesystem, process management, POSIX APIs, performance monitoring, and resource optimization, enabling efficient and reliable software solutions.",
  },
];

export default services;