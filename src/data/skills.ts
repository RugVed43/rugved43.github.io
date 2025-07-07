import { ReactRouterDomIcon } from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";
import { SiNextdotjs } from "react-icons/si";

// Languages
import CsssSvg from "@/public/icons/css.svg";
import HtmlSvg from "@/public/icons/html.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import PythonSvg from "@/public/icons/python.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";

// Backend

// Database and ORMS
import MongodbSvg from "@/public/icons/mongodb.svg";

// Tools and Tech
import AwsSvg from "@/public/icons/aws.svg";
import DockerSvg from "@/public/icons/docker.svg";
import GitSvg from "@/public/icons/git.svg";
import PostmanSvg from "@/public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      { name: "HTML", icon: HtmlSvg },
      { name: "CSS", icon: CsssSvg },
      { name: "Javascript", icon: JavascriptSvg },
      { name: "Typescript", icon: TypescriptSvg },
      { name: "Python", icon: PythonSvg },
    ],
  },
  {
    sectionName: "Frameworks and Libraries",
    skills: [
      { name: "React.js", icon: ReactjsSvg },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Express.js" },
      { name: "Vue.js" },
      { name: "Tailwind CSS", icon: TailwindcssSvg },
      { name: "Bootstrap" },
      { name: "Redux", icon: ReduxSvg },
      { name: "React Router Dom", icon: ReactRouterDomIcon },
    ],
  },
  {
    sectionName: "Databases",
    skills: [{ name: "MySQL" }, { name: "MongoDB", icon: MongodbSvg }],
  },
  {
    sectionName: "Testing Frameworks",
    skills: [
      { name: "Mocha" },
      { name: "Jest" },
      { name: "Playwright" },
      { name: "Selenium" },
    ],
  },
  {
    sectionName: "Infrastructure & Cloud",
    skills: [
      { name: "AWS", icon: AwsSvg },
      { name: "Azure" },
      { name: "Render" },
      { name: "Vercel" },
    ],
  },
  {
    sectionName: "Tools and Other Technologies",
    skills: [
      { name: "Git", icon: GitSvg },
      { name: "Docker", icon: DockerSvg },
      { name: "Kubernetes" },
      { name: "Auth0" },
      { name: "Postman", icon: PostmanSvg },
    ],
  },
];
