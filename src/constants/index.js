import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  mysql,
  python,
  pytorch,
  numpy,
  pandas,
  scikitlearn,
  jupyter,
  series9,
  DK,
  ExpenseEasy,
  Planty,
  moviesHub,
  Portfolio,
  mlpCover,
  vggCover,
  transformerCover,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Deep Learning Engineer",
    icon: web,
  },
  {
    title: "ML / Data Science Researcher",
    icon: creator,
  },
  {
    title: "Agentic AI Engineer",
    icon: mobile,
  },
  {
    title: "Full-Stack Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "NumPy",
    icon: numpy,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "scikit-learn",
    icon: scikitlearn,
  },
  {
    name: "Jupyter",
    icon: jupyter,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
];

const experiences = [
  {
    title: "Data Science Research Scholar",
    company_name: "IIT Madras",
    icon: DK,
    iconBg: "#ffffff",
    date: "2024 - Present",
    points: [
      "Pursuing graduate research in data science with a focus on deep learning and computational biology.",
      "Building graph- and transformer-based models for modeling biological systems, with end-to-end experiment tracking in Weights & Biases.",
      "Implementing core deep learning components from scratch (MLPs, CNNs, attention) to ground research in first principles.",
      "Developing agentic AI workflows to accelerate research and academic tasks.",
    ],
  },
  {
    title: "PHP / Web Developer",
    company_name: "9Series",
    icon: series9,
    iconBg: "#ffffff",
    date: "March 2020 - April 2021",
    points: [
      "Developed and maintained web applications using PHP, React.js and related technologies.",
      "Collaborated with the team to deliver high-quality products on schedule.",
      "Implemented responsive design and ensured cross-browser compatibility.",
      "Participated in code reviews and provided constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Neural Network from Scratch",
    description:
      "A modular, configurable Multi-Layer Perceptron built in pure NumPy for MNIST and Fashion-MNIST. Implements forward/backprop, six optimizers (SGD, Momentum, NAG, RMSProp, Adam, Nadam), multiple activations and weight inits, plus a 100+ config W&B hyperparameter sweep. Reaches ~98% test accuracy.",
    tags: [
      { name: "NumPy", color: "blue-text-gradient" },
      { name: "MLP", color: "green-text-gradient" },
      { name: "Backprop", color: "pink-text-gradient" },
    ],
    image: mlpCover,
    source_code_link: "https://github.com/unseen703/da6401_assignment_1",
  },
  {
    name: "Multi-Task Visual Perception",
    description:
      "A unified perception pipeline in PyTorch on the Oxford-IIIT Pet dataset using a VGG11 shared encoder with three task-specific heads: classification (37 breeds), bounding-box localization, and U-Net semantic segmentation. Features a custom dropout, a numerically stable IoU loss, and full W&B tracking.",
    tags: [
      { name: "PyTorch", color: "blue-text-gradient" },
      { name: "VGG11", color: "green-text-gradient" },
      { name: "U-Net", color: "pink-text-gradient" },
    ],
    image: vggCover,
    source_code_link: "https://github.com/unseen703/da6401_assignment_2",
  },
  {
    name: "Transformer for Translation",
    description:
      "A from-scratch implementation of the 'Attention Is All You Need' Transformer for German-to-English translation on Multi30k. Includes multi-head scaled dot-product attention, Noam learning-rate scheduling, label smoothing, BLEU evaluation, and five ablation studies (scaling factor, positional encodings, label smoothing, attention rollout).",
    tags: [
      { name: "PyTorch", color: "blue-text-gradient" },
      { name: "Transformer", color: "green-text-gradient" },
      { name: "Attention", color: "pink-text-gradient" },
    ],
    image: transformerCover,
    source_code_link: "https://github.com/unseen703/da6401_assignment_3",
  },
  {
    name: "Planty",
    description:
      "A web-based social application that lets users post photos, comment, and like posts. Demonstrates clean, productive code, responsive UI, and fully functional RESTful APIs.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongoDB", color: "green-text-gradient" },
      { name: "Node", color: "pink-text-gradient" },
    ],
    image: Planty,
    source_code_link: "https://github.com/unseen703/Planty",
  },
  {
    name: "Expense Easy",
    description:
      "A web app to record daily expenses and incomes with voice-based input and graphical representation of transactions, helping users track and visualize their spending.",
    tags: [
      { name: "Reactjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: ExpenseEasy,
    source_code_link: "https://github.com/unseen703/BudgetTracker",
  },
  {
    name: "MoviesMania",
    description:
      "A movie exploration platform to discover trending shows and TV series, with effortless search across favorite shows and genres.",
    tags: [
      { name: "Reactjs", color: "blue-text-gradient" },
      { name: "Material-UI", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: moviesHub,
    source_code_link: "https://github.com/unseen703/MoviesHUB",
  },
];

export { services, technologies, experiences, projects };
