import FadeUp from "@/animation/fade-up";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Footer() {
  return (
    <footer className="w-full bg-background px-0 pb-0 pt-16">
      <div className="mx-auto flex min-h-[350px] w-full max-w-7xl flex-col-reverse items-center gap-8 px-6 sm:px-14 md:flex-row md:justify-between md:gap-0 md:px-20">
        {/* Left: Contact Info */}
        <FadeUp duration={0.7} delay={0.1}>
          <div className="flex max-w-2xl flex-1 flex-col items-start justify-center gap-4">
            <div className="flex items-center gap-3">
              <h2 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
                Contact Me
              </h2>
              <span className="inline-flex items-center justify-center rounded-lg">
                <PhoneIcon className="h-12 w-12 text-accent" />
              </span>
            </div>
            <div className="mt-2 text-base font-medium text-muted-foreground sm:text-lg md:text-xl">
              Discuss a project or just want to say hi? My inbox is open for
              all.
            </div>
            <a
              href={`mailto:${siteMetadata.email}`}
              className="mt-2 text-2xl font-bold text-accent underline sm:text-3xl md:text-4xl"
              target="_blank"
            >
              {siteMetadata.email}
            </a>
            <div className="mt-6 flex gap-3">
              <a
                href={`mailto:${siteMetadata.email}`}
                target="_blank"
                aria-label="Email"
                className="rounded-full bg-muted p-2 transition-colors hover:bg-accent"
              >
                <MailIcon className="h-6 w-6 text-accent-foreground" />
              </a>
              <a
                href={siteMetadata.github}
                target="_blank"
                aria-label="Github"
                className="rounded-full bg-muted p-2 transition-colors hover:bg-accent"
              >
                <GithubIcon className="h-6 w-6 text-accent-foreground" />
              </a>
              <a
                href={siteMetadata.linkedin}
                target="_blank"
                aria-label="Linkedin"
                className="rounded-full bg-muted p-2 transition-colors hover:bg-accent"
              >
                <LinkedinIcon className="h-6 w-6 text-accent-foreground" />
              </a>
              {/* <a
                href={siteMetadata.instagram}
                target="_blank"
                aria-label="Instagram"
                className="rounded-full bg-muted p-2 transition-colors hover:bg-accent"
              >
                <InstagramIcon className="h-6 w-6 text-accent-foreground" />
              </a> */}
              <a
                href={siteMetadata.twitter}
                target="_blank"
                aria-label="X"
                className="rounded-full bg-muted p-2 transition-colors hover:bg-accent"
              >
                <TwitterIcon className="h-6 w-6 text-accent-foreground" />
              </a>
            </div>
          </div>
        </FadeUp>
        {/* Right: Illustration Placeholder */}
        <FadeUp duration={0.7} delay={0.3}>
          <div className="mb-8 flex w-full flex-1 items-center justify-center md:mb-0 md:w-auto">
            {/* You can replace this with an actual illustration or image */}
            <div className="flex h-64 w-64 items-center justify-center rounded-full bg-muted">
              <MailIcon className="h-32 w-32 text-accent/60" />
            </div>
          </div>
        </FadeUp>
      </div>
      {/* Bottom Bar */}
      <FadeUp duration={0.7} delay={0.5}>
        <div className="mt-8 w-full bg-muted py-4">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 text-sm text-muted-foreground sm:px-14 md:flex-row md:px-20">
            {/* <span>©{new Date().getFullYear()} Rugved Gurav</span> */}
            <span className="mt-2 md:mt-0">
              Made with <span className="text-pink-500">♥</span> by{" "}
              <a
                href={siteMetadata.linkedin}
                target="_blank"
                aria-label="Linkedin"
                className="text-accent underline"
              >
                Rugved Gurav
              </a>
            </span>
          </div>
        </div>
      </FadeUp>
    </footer>
  );
}
