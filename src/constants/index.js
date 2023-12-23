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
  php,
  series9,
  ExpenseEasy,
  Planty,
  moviesHub,
  Portfolio,
  knight,
  Specialist
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Knight on LeetCode",
    icon: knight,
  },
  {
    title: "Pupil on Codeforces",
    icon: Specialist,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "git",
    icon: git,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "php",
    icon: php,
  },
];

const experiences = [
  {
    title: "PHP Developer",
    company_name: "9Series",
    icon: series9,
    iconBg: "#ffffff",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with team to develop high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Planty",
    description:
      "A web-based social media application that enables users to post photos, with additional features for commenting and liking posts. This project showcases my ability to write clean and productive code, utilize various libraries to create responsive user interfaces, and develop fully functional RESTful APIs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
    ],
    image: Planty,
    source_code_link: "https://github.com/unseen703/Planty",
  },
  {
    name: "Portfolio",
    description:
      "An interactive Modern UI website using React, and Three.js, leveraging the capabilities of Three.js to incorporate 3D visuals. Staying up-to-date with the trends of modern UI designs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Portfolio,
    source_code_link: "https://github.com/",
  },
  {
    name: "MoviesMania",
    description:
      "A Movies Exploration platform that enables users to discover trending shows and TV series. Users can effortlessly fetch and search for their favorite shows and genres.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Material-UI",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: moviesHub,
    source_code_link: "https://github.com/unseen703/MoviesHUB",
  },
  {
    name: "Expense Easy",
    description:
      "It's a web application tool that allows users to record daily expenses and incomes. It can takes voice-based inputs from user. And provides graphical representation of their Transactions.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ExpenseEasy,
    source_code_link: "https://github.com/unseen703/BudgetTracker",
  },
];

export { services, technologies, experiences, projects };
