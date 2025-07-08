import { ReactRouterDomIcon } from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";
import { SiAuth0, SiNextdotjs, SiVercel } from "react-icons/si";

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
import AzureSvg from "@/public/icons/Azure.svg";
import BootstrapSvg from "@/public/icons/Bootstrap.svg";
import DockerSvg from "@/public/icons/docker.svg";
import ExpressSvg from "@/public/icons/Express.svg";
import GitSvg from "@/public/icons/git.svg";
import JestSvg from "@/public/icons/Jest.svg";
import KubernetesSvg from "@/public/icons/Kubernetes.svg";
import MochaSvg from "@/public/icons/Mocha.svg";
import MySQLSvg from "@/public/icons/MySQL.svg";
import PlaywrightSvg from "@/public/icons/Playwrite.svg";
import PostmanSvg from "@/public/icons/postman.svg";
import SeleniumSvg from "@/public/icons/Selenium.svg";
import VuejsSvg from "@/public/icons/Vue.js.svg";

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
      { name: "Express.js", icon: ExpressSvg },
      { name: "Vue.js", icon: VuejsSvg },
      { name: "Tailwind CSS", icon: TailwindcssSvg },
      { name: "Bootstrap", icon: BootstrapSvg },
      { name: "Redux", icon: ReduxSvg },
      { name: "React Router Dom", icon: ReactRouterDomIcon },
    ],
  },
  {
    sectionName: "Databases",
    skills: [
      { name: "MySQL", icon: MySQLSvg },
      { name: "MongoDB", icon: MongodbSvg },
    ],
  },
  {
    sectionName: "Testing Frameworks",
    skills: [
      { name: "Mocha", icon: MochaSvg },
      { name: "Jest", icon: JestSvg },
      { name: "Playwright", icon: PlaywrightSvg },
      { name: "Selenium", icon: SeleniumSvg },
    ],
  },
  {
    sectionName: "Infrastructure & Cloud",
    skills: [
      { name: "AWS", icon: AwsSvg },
      { name: "Azure", icon: AzureSvg },
      { name: "Vercel", icon: SiVercel },
    ],
  },
  {
    sectionName: "Tools and Other Technologies",
    skills: [
      { name: "Git", icon: GitSvg },
      { name: "Docker", icon: DockerSvg },
      { name: "Kubernetes", icon: KubernetesSvg },
      { name: "Auth0", icon: SiAuth0 },
      { name: "Postman", icon: PostmanSvg },
    ],
  },
];
