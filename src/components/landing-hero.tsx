import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
    >
      <div className="w-full">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                Rugved Gurav
              </h1>
              <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                Software Developer
              </span>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl">
                I am a software developer specializing in building
                high-performance, user-focused web applications. Skilled in{" "}
                <span className="font-semibold text-accent">ReactJS</span>,{" "}
                <span className="font-semibold text-accent">NextJS</span>, and
                an expert in{" "}
                <span className="font-semibold text-accent">JavaScript</span>,{" "}
                <span className="font-semibold text-accent">HTML</span> and{" "}
                <span className="font-semibold text-accent">CSS</span>
              </div>
            </FadeUp>
            <FadeUp key="contact-icons" duration={0.6} delay={0.3}>
              <div className="pointer-events-auto mt-8 flex justify-start gap-8">
                <a
                  href={`mailto:${siteMetadata.email}`}
                  target="_blank"
                  className="h-8 w-8"
                  aria-label="link to Email"
                >
                  <MailIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
                </a>
                <a
                  href={siteMetadata.github}
                  target="_blank"
                  className="h-8 w-8"
                  aria-label="link to Github"
                >
                  <GithubIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
                </a>
                <a
                  href={siteMetadata.linkedin}
                  target="_blank"
                  className="h-8 w-8"
                  aria-label="link to Linkedin"
                >
                  <LinkedinIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
                </a>
                <a
                  href={siteMetadata.instagram}
                  target="_blank"
                  className="h-8 w-8"
                  aria-label="link to Instagram"
                >
                  <InstagramIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
                </a>
                <a
                  href={siteMetadata.twitter}
                  target="_blank"
                  className="h-8 w-8"
                  aria-label="link to X"
                >
                  <TwitterIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
                </a>
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
