import { Link } from "react-router-dom";
import chatbotProject from "../assets/chatbot_project.png";
import BlurRevealText from "./BlurRevealText";
import FadeIn from "./FadeIn";
import Marquee from "./Marquee";

const projects = [
  { title: "Project title", category: "Category", year: "2025", image: chatbotProject, projectRoute: "chatbot" },
  { title: "Project title", category: "Category", year: "2025", projectRoute: "project-2" },
  { title: "Project title", category: "Category", year: "2025", projectRoute: "project-3" },
  { title: "Project title", category: "Category", year: "2025", projectRoute: "project-4" },
];

function ProjectImage({ src }: { src?: string }) {
  return (
    <div className="group relative w-full aspect-[844/633] rounded-lg overflow-hidden">
      {src ? (
        <img
          src={src}
          alt=""
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-103"
        />
      ) : (
        <div className="w-full h-full bg-mercury transition-transform duration-500 ease-out group-hover:scale-103" />
      )}
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-20" />
    </div>
  );
}

function ProjectCard({ title, category, year, image, projectRoute }: { title: string; category: string; year: string; image?: string; projectRoute: string }) {
  return (
    <Link to={`/work/${projectRoute}`} className="block">
      <ProjectImage src={image} />
      <div className="flex items-center justify-between mt-[6px]">
        <div className="flex items-center gap-2">
          <span className="font-inter font-semibold text-[14px] text-cod-gray tracking-[-0.42px]">
            {title}
          </span>
          <span className="inline-block w-[4px] h-[4px] bg-cod-gray rounded-full rotate-45" />
          <span className="font-inter font-semibold text-[14px] text-cod-gray tracking-[-0.42px]">
            {category}
          </span>
        </div>
        <span className="font-inter font-semibold text-[14px] text-cod-gray tracking-[-0.42px]">
          {year}
        </span>
      </div>
    </Link>
  );
}

export default function MiddleColumn() {
  return (
    <div className="bg-white border-x border-mercury rounded-[20px] overflow-hidden">
      {/* Description */}
      <div className="px-4 pt-[140px]">
        <h2 className="font-inter font-semibold text-[22px] leading-[29px] text-cod-gray tracking-[-0.42px] max-w-[600px]">
          <BlurRevealText
            text="Ux Ui Designer with 3 years of experience — specializing in crafting visual experiences that feel intentional, refined, and human."
            charDelay={3}
          />
        </h2>
      </div>

      {/* Spacer */}
      <div className="h-[250px]" />

      {/* Selected Work Header */}
      <FadeIn delay={400}>
        <div className="px-4 flex items-baseline justify-between">
          <h3 className="font-inter font-semibold text-[18px] text-cod-gray tracking-[-0.42px]">
            Selected work
          </h3>
          <span className="font-inter text-[14px] text-boulder tracking-[-0.42px]">
            (10)
          </span>
        </div>
      </FadeIn>

      {/* Projects */}
      <div className="px-4 mt-6 flex flex-col gap-5">
        {projects.map((project, i) => (
          <FadeIn key={i} delay={600 + i * 150}>
            <ProjectCard {...project} />
          </FadeIn>
        ))}
      </div>

      {/* Spacer before marquee */}
      <div className="h-[146px]" />

      {/* Let's Talk Marquee */}
      <Marquee />

      {/* Spacer after marquee */}
      <div className="h-[240px]" />

      {/* Footer */}
      <div className="px-4 pb-8">
        <p className="font-inter font-semibold text-[14px] text-boulder tracking-[-0.42px] text-right">
          © 2026 All rights reserved
        </p>
      </div>
    </div>
  );
}
