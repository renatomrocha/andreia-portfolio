import { useParams } from "react-router-dom";
import { ChatbotProject } from "../components/work/ChatbotProject";
import ProjectLayout from "../components/work/ProjectLayout";

const projects: Record<
  string,
  {
    title: string;
    subtitle: string;
    description: string;
    rightItems: { title: string; description: string }[];
    middle: React.ReactNode;
  }
> = {
  chatbot: ChatbotProject
};

export default function Work() {
  const { projectName } = useParams<{ projectName: string }>();
  const project = projectName ? projects[projectName] : undefined;

  if (!project) {
    return (
      <main className="flex flex-1 items-center justify-center">
        <p className="font-inter text-[16px] text-boulder tracking-[-0.42px]">
          Project not found.
        </p>
      </main>
    );
  }

  return (
    <ProjectLayout
      title={project.title}
      subtitle={project.subtitle}
      description={project.description}
      middle={project.middle}
      rightItems={project.rightItems}
    />
  );
}
