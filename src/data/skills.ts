import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "Python",
        level: SkillLevel.Expert,
        icon: "/skills/python.svg",
      },
      {
        title: "C++",
        level: SkillLevel.Expert,
        icon: "/skills/c++.png",
      },
      {
        title: "JavaScript",
        level: SkillLevel.Expert,
        icon: "/skills/javascript.svg",
      },
      {
        title: "SQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/sql.svg",
      },
    ],
  },

  {
    title: "AI & Machine Learning",
    items: [
      {
        title: "LangChain",
        level: SkillLevel.Intermediate,
        icon: "/skills/langchain.svg",
      },
      {
        title: "TensorFlow",
        level: SkillLevel.Intermediate,
        icon: "/skills/tensorflow.svg",
      },
      {
        title: "OpenCV",
        level: SkillLevel.Intermediate,
        icon: "/skills/opencv.svg",
      },
      {
        title: "Scikit-learn",
        level: SkillLevel.Intermediate,
        icon: "/skills/scikit-learn.svg",
      },
      {
        title: "Pandas",
        level: SkillLevel.Intermediate,
        icon: "/skills/pandas.svg",
      },
    ],
  },

  {
    title: "Web Development",
    items: [
      {
        title: "React.js",
        level: SkillLevel.Expert,
        icon: "/skills/react.svg",
      },
      {
        title: "Next.js",
        level: SkillLevel.Expert,
        icon: "/skills/nextjs.png",
      },
      {
        title: "Node.js",
        level: SkillLevel.Intermediate,
        icon: "/skills/nodejs.svg",
      },
      {
        title: "FastAPI",
        level: SkillLevel.Intermediate,
        icon: "/skills/fastapi.svg",
      },
    ],
  },

  {
    title: "Databases",
    items: [
      {
        title: "PostgreSQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/postgresql.svg",
      },
      {
        title: "MongoDB",
        level: SkillLevel.Intermediate,
        icon: "/skills/mongodb.svg",
      },
      {
        title: "MySQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/mysql.svg",
      },
    ],
  },

  {
    title: "Tools & DevOps",
    items: [
      {
        title: "Git",
        level: SkillLevel.Expert,
        icon: "/skills/git.svg",
      },
      {
        title: "GitHub",
        level: SkillLevel.Expert,
        icon: "/skills/github.svg",
      },
      {
        title: "Docker",
        level: SkillLevel.Intermediate,
        icon: "/skills/docker.svg",
      },
      {
        title: "Linux",
        level: SkillLevel.Intermediate,
        icon: "/skills/linux.svg",
      },
    ],
  },

  {
    title: "Core CS",
    items: [
      {
        title: "DSA",
        level: SkillLevel.Expert,
        icon: "/images/dsa.png",
      },
      {
        title: "OS",
        level: SkillLevel.Intermediate,
        icon: "/skills/os.svg",
      },
      {
        title: "DBMS",
        level: SkillLevel.Intermediate,
        icon: "/skills/dbms.png",
      },
      {
        title: "COA",
        level: SkillLevel.Intermediate,
        icon: "/images/coa.png",
      },
      {
        title: "CN",
        level: SkillLevel.Intermediate,
        icon: "/images/cn.png",
      },
    ],
  },
];

export default skills;