import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  // {
  //   id: "kubernetes-orchestration",
  //   title: "Cost-Efficient Kubernetes Orchestration",
  //   description:
  //     "Engineered a custom Kubernetes scheduler and autoscaler (HTAS) on GKE, optimizing container placement across heterogeneous VMs for 10+ services and batch workloads, achieving 28% cost savings.",
  //   icon: "/images/kubernetes-project.png",
  //   repoType: RepoType.Public,
  //   projectType: ProjectType.TeamProject,
  //   githubUrl: "https://github.com/Shivanshu-Verma/VCC_Course_Project",
  //   tags: ["Kubernetes", "GCP", "Python", "Autoscaling", "Cloud Optimization"],
  //   summary:
  //     "Developed a cost-optimized Kubernetes orchestration system featuring a hybrid task autoscaler and custom scheduling algorithms for heterogeneous cluster environments on Google Cloud.",
  //   duration: "Jan 2025 – Apr 2025",
  //   location: "IIT Jodhpur, India",
  //   roles: ["Cloud Architect", "Systems Engineer"],
  //   responsibilities: [
  //     "Built a custom Kubernetes scheduler and autoscaler (HTAS) leveraging CRDs and event-driven scaling for GKE clusters",
  //     "Designed the Resource Profiler for dynamic workload characterization and Task Packer using BFD/TBFD bin-packing algorithms",
  //     "Benchmarked performance through synthetic and real workloads, tuning placement heuristics for compute heterogeneity",
  //   ],
  //   highlights: [
  //     "Achieved 28% cost reduction and 35% higher utilization compared to default GKE scheduler",
  //     "Implemented fault-tolerant scheduling logic resilient to preemptible VM churn",
  //     "Enabled per-pod telemetry collection with Prometheus for real-time scaling insight",
  //   ],
  //   metrics: [
  //     {
  //       label: "Cost reduction",
  //       value: "↓ 28%",
  //       description:
  //         "Measured through comparative GCP billing analysis across identical workloads",
  //     },
  //     {
  //       label: "Utilization gain",
  //       value: "+35%",
  //       description:
  //         "Average CPU/memory efficiency improvement on test cluster",
  //     },
  //     {
  //       label: "Services orchestrated",
  //       value: "10+",
  //       description: "Microservices and batch workloads balanced across nodes",
  //     },
  //   ],
  //   links: [
  //     {
  //       title: "Source code",
  //       url: "https://github.com/Shivanshu-Verma/VCC_Course_Project",
  //       type: "github",
  //     },
  //     {
  //       title: "Implemented Research Paper",
  //       url: "https://dl.acm.org/doi/abs/10.1145/3378447",
  //       type: "live",
  //     },
  //   ],
  //   context:
  //     "High GKE costs from inefficient default scheduling motivated the need for custom orchestration tuned for mixed workloads and preemptible resources.",
  //   approach:
  //     "Devised a modular Kubernetes extension with CRDs and autoscaling logic driven by real-time resource profiling, integrating seamlessly with GCP’s managed cluster APIs.",
  //   impact:
  //     "Delivered a cost-conscious orchestration platform demonstrating tangible infrastructure savings and improved utilization, informing future IITJ cloud infrastructure research.",
  // },
  // {
  //   id: "prometeo",
  //   title: "Prometeo | IITJ TechFest Website",
  //   description:
  //     "Optimized 3D models, improving performance and reducing loading time. Reduced server load with caching. Integrated payment processing system (Razorpay). Enhanced security with SSL and CSRF protection.",
  //   icon: "/images/prometeo.jpg",
  //   repoType: RepoType.Public,
  //   projectType: ProjectType.TeamProject,
  //   githubUrl: "https://github.com/Shivanshu-Verma/server-prometeo-25",
  //   url: "https://prometeo.in/",
  //   tags: ["Three.js", "Django", "Docker", "Redis", "AWS"],
  //   summary:
  //     "Led the relaunch of Prometeo, IIT Jodhpur's annual tech fest portal, creating an immersive 3D landing experience that remained performant for 25k+ visitors during ticketing peaks.",
  //   duration: "Oct 2024 – Dec 2024",
  //   location: "IIT Jodhpur, India",
  //   roles: ["Full-stack Developer", "DevOps"],
  //   responsibilities: [
  //     "Refined Three.js scene composition and glTF optimisations to balance aesthetics with sub-2s LCP across broadband networks",
  //     "Built stateless Django API layer with Redis caching and auto-scaling Docker deployment on AWS Fargate",
  //     "Integrated Razorpay checkout flow with webhook validation, CSRF safeguards, and encrypted audit logs",
  //   ],
  //   highlights: [
  //     "Cut hero scene payload by 38% via mesh decimation, texture compression, and route-level code splitting",
  //     "Designed automated CloudFront cache invalidation ensuring fresh content within 60 seconds of CMS publish",
  //     "Implemented real-time ticket inventory dashboard for core organizing team",
  //   ],
  //   metrics: [
  //     {
  //       label: "Page load",
  //       value: "↓ 42%",
  //       description:
  //         "LCP dropped from 3.8s to 2.2s after asset optimisation pipeline",
  //     },
  //     {
  //       label: "Traffic",
  //       value: "25k+",
  //       description: "Unique visitors served over the three-day launch window",
  //     },
  //     {
  //       label: "Support",
  //       value: "0 incidents",
  //       description:
  //         "No downtime or payment failures recorded during registrations",
  //     },
  //   ],
  //   links: [
  //     {
  //       title: "Live site",
  //       url: "https://prometeo.in/",
  //       type: "live",
  //     },
  //     {
  //       title: "Server repository",
  //       url: "https://github.com/Shivanshu-Verma/server-prometeo-25",
  //       type: "github",
  //     },
  //   ],
  //   context:
  //     "The organising team needed a visually striking web presence that could withstand sudden ticket sale surges without compromising security or UX.",
  //   approach:
  //     "Modernised the 3D experience with progressive loading, served content through a hardened Django API, and containerised the stack with CI-driven deployments.",
  //   impact:
  //     "Delivered a resilient launch with stellar Core Web Vitals, higher conversion on passes, and positive feedback from attendees and sponsors.",
  // },
  // {
  //   id: "iitj-voting-app",
  //   title: "IITJ Voting Electron App",
  //   description:
  //     "Voting Portal to conduct Institute student representative elections for IITJ Community.",
  //   icon: "/images/voting.png",
  //   repoType: RepoType.Private,
  //   projectType: ProjectType.TeamProject,
  //   githubUrl: "https://github.com/Shivanshu-Verma/IITJ-Voting",
  //   // url: "",
  //   tags: ["React", "Django", "PostgreSQL", "Encryption", "Biometrics"],
  //   summary:
  //     "Delivered a kiosk-ready desktop voting application with encrypted ballot storage, biometric verification, and admin dashboards for the IITJ election committee.",
  //   duration: "Aug 2023 – Oct 2023",
  //   location: "IIT Jodhpur, India",
  //   roles: ["Full-stack Engineer", "Security Lead"],
  //   responsibilities: [
  //     "Crafted cross-platform Electron shell with offline-first caching to support remote polling booths",
  //     "Engineered Django REST services with cryptographic ballot signing and audit-ready event logs",
  //     "Integrated Aadhaar-based biometric SDK and fallback OTP verification flow",
  //   ],
  //   highlights: [
  //     "Digitised end-to-end voting flow reducing manual counting effort by 80%",
  //     "Designed role-based access control for commissioners, poll officers, and observers",
  //     "Implemented tamper detection that locked stations on suspicious state changes",
  //   ],
  //   metrics: [
  //     {
  //       label: "Ballots processed",
  //       value: "2.1k",
  //       description: "Secure votes cast across 12 polling stations",
  //     },
  //     {
  //       label: "Verification",
  //       value: "< 5s",
  //       description: "Average biometric + OTP verification time",
  //     },
  //   ],
  //   links: [
  //     {
  //       title: "Source code (private-request access)",
  //       url: "https://github.com/Shivanshu-Verma/IITJ-Voting",
  //       type: "github",
  //     },
  //   ],
  //   context:
  //     "Manual paper-based elections were error-prone, slow, and vulnerable to manipulation.",
  //   approach:
  //     "Built a secure digital voting system with layered authentication, offline resilience, and transparent audit trails.",
  //   impact:
  //     "Used successfully in the 2023 student body elections with no disputed ballots and rapid result publication.",
  // },
  // {
  //   id: "virus-detection-system",
  //   title: "Virus Detection System",
  //   description:
  //     "Implemented a multi-threaded virus scanning system using SHA256 hashing techniques, comparing over 100,000 virus signatures per second. Integrated Microsoft Detours Library for real-time API hooking and process monitoring.",
  //   icon: "/images/virus.png",
  //   repoType: RepoType.Public,
  //   projectType: ProjectType.CourseWork,
  //   githubUrl:
  //     "https://github.com/Shivanshu-Verma/Infectious-Virus-Detection-System",
  //   //url: "",
  //   tags: ["C/C++", "Microsoft Detours", "Network", "SHA256"],
  //   summary:
  //     "Prototyped a Windows-native malware detection engine featuring signature scanning, heuristic analysis, and quarantining for suspicious processes.",
  //   duration: "Jan 2023 – Apr 2023",
  //   location: "IIT Jodhpur, India",
  //   roles: ["Systems Programmer"],
  //   responsibilities: [
  //     "Developed multi-threaded scanning core leveraging memory-mapped files for signature throughput",
  //     "Hooked critical Win32 APIs using Microsoft Detours to observe file and registry operations in real time",
  //     "Authored heuristic scoring and quarantine workflow with CLI reporting dashboard",
  //   ],
  //   highlights: [
  //     "Reached 120k signature comparisons per second on benchmark dataset",
  //     "Implemented sandbox simulator that replayed malware behaviour for detection tuning",
  //     "Built exportable incident reports for security teams",
  //   ],
  //   metrics: [
  //     {
  //       label: "Detection rate",
  //       value: "96%",
  //       description: "On curated virus corpus during evaluation",
  //     },
  //     {
  //       label: "False positives",
  //       value: "< 1%",
  //       description: "After heuristic tuning and whitelist support",
  //     },
  //   ],
  //   links: [
  //     {
  //       title: "Source code",
  //       url: "https://github.com/Shivanshu-Verma/Infectious-Virus-Detection-System",
  //       type: "github",
  //     },
  //   ],
  //   context:
  //     "Needed a performant detection prototype to explore real-time malware interception without access to enterprise antiviruses.",
  //   approach:
  //     "Combined hash-based scanning with API hooking, enabling rapid signature checks alongside behavioural heuristics.",
  //   impact:
  //     "Demonstrated reliable detection in academic evaluations and provided a foundation for further research.",
  // },
  {
    id: "agentic-digital-evaluation",
    title: "Agentic Digital Evaluation",
    description:
      "Multi-Agent AI system for automated examination document processing and digital answer sheet generation.",
    icon: "/images/agentic.png",
    repoType: RepoType.Public,
    projectType: ProjectType.TeamProject,
    githubUrl: "YOUR_GITHUB_LINK",
    tags: [
      "FastAPI",
      "Gemini Vision",
      "GPT-4o Vision",
      "Multi-Agent",
      "LLMs",
    ],
    summary:
      "Built a scalable multi-agent system that converts handwritten answer sheets into structured digital documents using Vision LLMs.",
    duration: "Sep 2025 – Nov 2025",
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
    githubUrl: "YOUR_GITHUB_LINK",
    tags: [
      "Python",
      "LangChain",
      "RAG",
      "LLMs",
      "Multi-Agent",
    ],
    summary:
      "AI assistant for legal document retrieval, drafting, and analysis.",
    duration: "Sep 2024 – Nov 2024",
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
    githubUrl: "YOUR_GITHUB_LINK",
    tags: [
      "C++",
      "Linux",
      "/proc",
      "System Programming",
    ],
    summary:
      "Built a lightweight Linux monitoring tool with real-time CPU, memory, and process tracking.",
    duration: "Sep 2024 – Nov 2024",
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
    githubUrl: "YOUR_GITHUB_LINK",
    tags: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "SARIMAX",
      "ML",
    ],
    summary:
      "Analyzed over 211k cryptocurrency trades using machine learning and time-series forecasting.",
    duration: "Sep 2024 – Nov 2024",
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
    githubUrl: "YOUR_GITHUB_LINK",
    tags: [
      "Python",
      "OpenCV",
      "TensorFlow",
      "VGG16",
      "Flask",
    ],
    summary:
      "Developed a face identification system combining traditional computer vision techniques with deep learning for accurate real-time recognition.",
    duration: "Feb 2023 – Apr 2023",
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
