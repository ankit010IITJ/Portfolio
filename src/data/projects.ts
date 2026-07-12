import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "agentic-digital-evaluation",
    title: "Agentic Digital Evaluation",
    description:
      "Multi-Agent AI system for automated examination document processing and digital answer sheet generation.",
    icon: "/images/agentic.png",
    repoType: RepoType.Public,
    projectType: ProjectType.TeamProject,
    githubUrl: "https://github.com/ankit010IITJ/agentic-model",
    tags: [
      "FastAPI",
      "Gemini Vision",
      "GPT-4o Vision",
      "Multi-Agent",
      "LLMs",
    ],
    summary:
      "Built a scalable multi-agent system that converts handwritten answer sheets into structured digital documents using Vision LLMs.",
    duration: "Sep 2025 - Nov 2025",
    location: "IIT Jodhpur",
    roles: ["AI Engineer", "Backend Developer"],
    responsibilities: [
      "Designed a multi-agent architecture using FastAPI and Vision LLMs.",
      "Built an automated document understanding pipeline.",
      "Integrated Moodle using REST APIs.",
    ],
    highlights: [
      "Successfully piloted with 25 students.",
      "Generated structured digital answer sheets.",
      "Scalable microservice architecture.",
    ],
    metrics: [
      {
        label: "Students Tested",
        value: "25+",
        description: "Pilot deployment",
      },
      {
        label: "Accuracy",
        value: "91.6%",
        description: "Document mapping accuracy",
      },
    ],
  },
  {
    id: "rag-legal-assistant",
    title: "RAG Legal Assistant",
    description:
      "Multi-Agent legal assistant powered by Fusion-RAG and Large Language Models.",
    icon: "/images/rag.png",
    repoType: RepoType.Public,
    projectType: ProjectType.TeamProject,
    githubUrl: "https://github.com/ankit010IITJ/LegalRAG",
    tags: [
      "Python",
      "LangChain",
      "RAG",
      "LLMs",
      "Multi-Agent",
    ],
    summary:
      "AI assistant for legal document retrieval, drafting, and analysis.",
    duration: "Sep 2024 - Nov 2024",
    location: "IIT Jodhpur",
    roles: ["AI Engineer"],
    responsibilities: [
      "Built Fusion-RAG pipeline.",
      "Implemented multi-agent architecture.",
      "Evaluated generated legal responses.",
    ],
    highlights: [
      "Processed 1900 legal case documents.",
      "Improved legal drafting consistency.",
    ],
    metrics: [
      {
        label: "ROUGE-L",
        value: "37.9%",
        description: "Evaluation score",
      },
      {
        label: "BLEU-3",
        value: "27.4%",
        description: "Evaluation score",
      },
    ],
  },
  {
    id: "linux-resource-monitor",
    title: "Linux Resource Monitor",
    description:
      "Real-time Linux system monitoring tool using the /proc filesystem.",
    icon: "/images/linux.png",
    repoType: RepoType.Public,
    projectType: ProjectType.CourseWork,
    githubUrl: "github.com/crgoku7/Resource_Monitor_Linux",
    tags: [
      "C++",
      "Linux",
      "/proc",
      "System Programming",
    ],
    summary:
      "Built a lightweight Linux monitoring tool with real-time CPU, memory, and process tracking.",
    duration: "Sep 2024 - Nov 2024",
    location: "IIT Jodhpur",
    roles: ["System Programmer"],
    responsibilities: [
      "Parsed Linux /proc filesystem.",
      "Implemented process monitoring.",
      "Built live terminal dashboard.",
    ],
    highlights: [
      "Under 2% runtime overhead.",
      "Supports process termination.",
    ],
    metrics: [
      {
        label: "Overhead",
        value: "<2%",
        description: "Runtime overhead",
      },
    ],
  },
  {
    id: "bitcoin-insights",
    title: "Bitcoin Insights",
    description:
      "Machine learning pipeline for cryptocurrency trading analytics and forecasting.",
    icon: "/images/bitcoin.png",
    repoType: RepoType.Public,
    projectType: ProjectType.CourseWork,
    githubUrl: "https://github.com/ankit010IITJ/Bitcoin_insights",
    tags: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "SARIMAX",
      "ML",
    ],
    summary:
      "Analyzed over 211k cryptocurrency trades using machine learning and time-series forecasting.",
    duration: "Sep 2024 - Nov 2024",
    location: "IIT Jodhpur",
    roles: ["ML Engineer"],
    responsibilities: [
      "Performed feature engineering.",
      "Built Random Forest classifier.",
      "Forecasted PnL using SARIMAX.",
    ],
    highlights: [
      "93.9% prediction accuracy.",
      "Analyzed 211k+ trades.",
    ],
    metrics: [
      {
        label: "Accuracy",
        value: "93.9%",
        description: "Random Forest",
      },
      {
        label: "Dataset",
        value: "211k+",
        description: "Trades analyzed",
      },
    ],
  },
  {
    id: "face-identification-system",
    title: "Face Identification System",
    description:
      "Deep learning-based face recognition system using classical computer vision and CNN embeddings.",
    icon: "/images/face.png",
    repoType: RepoType.Public,
    projectType: ProjectType.CourseWork,
    githubUrl: "https://github.com/dhyeyinf/Face_Identification",
    tags: [
      "Python",
      "OpenCV",
      "TensorFlow",
      "VGG16",
      "Flask",
    ],
    summary:
      "Developed a face identification system combining traditional computer vision techniques with deep learning for accurate real-time recognition.",
    duration: "Feb 2023 - Apr 2023",
    location: "IIT Jodhpur",
    roles: ["Machine Learning Engineer"],
    responsibilities: [
      "Preprocessed the LFW dataset and extracted facial features.",
      "Implemented feature extraction using LBP, HOG, and VGG16 embeddings.",
      "Evaluated multiple classifiers and deployed the system using Flask.",
    ],
    highlights: [
      "Processed over 13,000 facial images.",
      "Achieved 88.6% test accuracy using LDA + SVM.",
      "Built a real-time web interface for face identification.",
    ],
    metrics: [
      {
        label: "Dataset",
        value: "13k+",
        description: "LFW face images",
      },
      {
        label: "Accuracy",
        value: "88.6%",
        description: "LDA + SVM (RBF Kernel)",
      },
    ],
    links: [
      {
        title: "Source Code",
        url: "YOUR_GITHUB_LINK",
        type: "github",
      },
    ],
    context:
      "Built to explore and compare classical computer vision techniques with deep learning approaches for robust face recognition.",
    approach:
      "Combined image preprocessing, feature extraction (LBP, HOG, and VGG16), dimensionality reduction using PCA/LDA, and classification with SVM, KNN, and Random Forest before deploying the model with Flask.",
    impact:
      "Achieved reliable face identification performance while providing hands-on experience in computer vision, deep learning, and web deployment.",
  }
];

export default projects;

export function getProjectName(id: string) {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item.title;
}

export function getProjectDetails(id: string): IProjectItem | null {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item;
}
