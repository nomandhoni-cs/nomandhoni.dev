import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import chromacourse from "public/projects/chromacourse.webp";
import showwandwebsite from "public/projects/showwandwebsite.webp";
import showwandextension from "public/projects/showwandextension.webp";
import formapp from "public/projects/formapp.webp";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Other projects can be explored in{" "}
        <a
          href="https://github.com/nomandhon-cs"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my github profile
        </a>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Chroma Course",
    type: "FrontEnd",
    image: (
      <Image
        src={chromacourse}
        sizes="100vw"
        fill
        alt="Chroma Course"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "My portfolio website in terminal version developed with React and TypeScript. In this project, styled-components library is used for styling and multiple themes supported.",
    tags: ["React", "JavaScript", "Bootstrap", "Context API", "SweetAlert"],
    liveUrl: "https://chroma-course.netlify.app/",
    codeUrl: "https://github.com/nomandhoni-cs/chroma-course",
    bgColor: "bg-[#B4BEE0]",
  },
  {
    title: "Showwand - Website",
    type: "FrontEnd",
    image: (
      <Image
        src={showwandwebsite}
        sizes="100vw"
        fill
        alt="Showwand - Website"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "An ecommerce web application where users can browse various products, add to wishlist, add to cart, and make purchase. Available in English and Burmese languages.",
    tags: ["NextJS", "TypeScript", "TailwindCSS", "ContextAPI"],
    liveUrl: "https://showwand.vercel.app/",
    codeUrl: "https://github.com/nomandhoni-cs/Showwand-Website",
    bgColor: "bg-[#A6CECE]",
  },
  {
    title: "Showwand - Browser Extension",
    type: "Backend",
    image: (
      <Image
        src={showwandextension}
        sizes="100vw"
        fill
        alt="Showwand - Browser Extension"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A RESTful API developed for Haru fashion ecommerce project. Include CRUD operations, authentication, authorization, forgot/reset password and full-text search.",
    tags: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://chrome.google.com/webstore/detail/showwand/eccblhhmiljocdidkkcaidegfdoophga",
    codeUrl: "https://github.com/nomandhoni-cs/Showwand",
    bgColor: "bg-[#C5E4E7]",
  },
  {
    title: "Form App",
    type: "Full Stack",
    image: (
      <Image
        src={formapp}
        sizes="100vw"
        fill
        alt="AstroPaper"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A minimal, responsive and SEO-friendly blog theme for Astro. This theme is developed with Astro, TypeScript and React. This theme includes fuzzy-search, pagination etc.",
    tags: ["React", "JavaScript", "Express", "Node JS", "BootStrap"],
    liveUrl: "https://form-task-client-gilt.vercel.app/",
    codeUrl: "https://github.com/nomandhoni-cs/form-task-101",
    bgColor: "bg-[#9FD0E3]",
  },
];

export default ProjectSection;
