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
    desc: "A course Selling website made with React JS. Here you can sell your courses in Programming, Design and Crafts.",
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
    desc: "A website that I made for my Browser Extension 'Showwand' and in this website you will get automated download link based on your browser and This website will help you to know how this works.",
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
    desc: "A Browser extension for 'Showwcase', By this Browser extension you can post, do interaction, get updated about the Showwcase platform.",
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
        alt="Form App"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A minimal, Form app that is Based on Basic Crud operations. Where you can submit what field are you in, also you can delete info.",
    tags: ["React", "JavaScript", "Express", "Node JS", "BootStrap"],
    liveUrl: "https://form-task-client-gilt.vercel.app/",
    codeUrl: "https://github.com/nomandhoni-cs/form-task-101",
    bgColor: "bg-[#9FD0E3]",
  },
];

export default ProjectSection;
