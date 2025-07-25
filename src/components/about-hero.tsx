import Image from "next/image";

import { AnimatePresence } from "framer-motion";

import FadeRight from "@/animation/fade-right";
import FadeUp from "@/animation/fade-up";
import heroProfileImg from "@/public/images/heroProfile.png";
import DuotoneImage from "./duotone-image";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-20 text-center sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:text-left">
      <div className="w-full sm:w-1/2 md:w-2/3 lg:inline-block lg:h-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="hero-image" duration={0.6}>
            <DuotoneImage
              src={heroProfileImg}
              width={100}
              height={100}
              className="h-auto w-full px-0 xl:px-16"
              alt="hero image"
              lightColor="#DAD6FF"
              darkColor="#302B6D"
              unoptimized
            />
          </FadeUp>
        </AnimatePresence>
      </div>
      <div className="sm:1/2 mt-10 w-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="text-6xl font-bold text-accent sm:text-7xl md:text-6xl lg:text-5xl xl:text-7xl">
              Hi, I&apos;m Rugved Gurav
            </h1>
          </FadeUp>
          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              a Senior Frontend Developer with 5+ years of experience building
              fast, scalable, and user-focused web and mobile applications using
              ReactJS, Next.js, React Native, and Node.js. I specialize in
              creating high-performance solutions across domains like finance,
              crypto, and HR tech, delivering SEO-optimized platforms,
              responsive interfaces, and real-time dashboards. My projects have
              improved load times by up to 40%, enhanced user engagement, and
              consistently met tight deadlines with high client satisfaction.
            </p>
          </FadeUp>
          <FadeUp key="description-2" duration={0.6} delay={0.4}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              With a strong foundation in TypeScript, JavaScript, Tailwind CSS,
              and modern DevOps tools like AWS, Docker, and Vercel, I focus on
              writing clean, maintainable code and architecting reusable
              components. I also mentor junior developers, lead code reviews,
              and thrive in collaborative environments. Whether freelancing or
              working with agile teams, my mission is to build impactful digital
              experiences that balance performance, usability, and innovation.
            </p>
          </FadeUp>
          <FadeRight
            key="hero-location"
            duration={0.6}
            delay={0.8}
            className="mr-0 mt-8 flex items-center justify-center gap-4 lg:mr-8 lg:justify-end"
          >
            <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
              <Image
                className="-z-10 h-full w-full bg-cover bg-no-repeat"
                alt="Indian flag"
                src="https://flagcdn.com/in.svg"
                width={15}
                height={15}
              />
            </div>
            <span className="text-lg font-medium text-foreground">
              Mumbai, India
            </span>
          </FadeRight>
        </AnimatePresence>
      </div>
    </div>
  );
}
