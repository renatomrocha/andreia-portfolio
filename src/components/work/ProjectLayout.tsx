import { ReactNode } from "react";
import BlurRevealText from "../BlurRevealText";
import ThreeColumnLayout from "../ThreeColumnLayout";

export interface RightItem {
  title: string;
  description: string;
}

interface ProjectLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  middle: ReactNode;
  rightItems: RightItem[];
}

function ProjectLeftColumn({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle: string;
  description: string;
}) {
  return (
    <div className="flex flex-col h-full">
      <div className="mt-[140px]">
        <h1 className="font-inter font-semibold text-[32px] leading-[1.1] tracking-[-0.42px] text-cod-gray">
          <BlurRevealText text={title} charDelay={3} />
        </h1>
      </div>
      <div className="mt-80 pb-0">
        <div className="border-t border-mercury pt-3">
          <p className="font-inter font-semibold text-[14px] text-cod-gray tracking-[-0.42px]">
            {subtitle}
          </p>
          <p className="font-inter text-[14px] text-boulder tracking-[-0.42px] leading-[1.5] mt-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function ProjectRightColumn({ items }: { items: RightItem[] }) {
  return (
    <div className="flex flex-col h-full">
      <div className="mt-[140px] flex flex-col gap-6">
        {items.map((item, i) => (
          <div key={i} className="border-t border-mercury pt-3">
            <p className="font-inter font-semibold text-[14px] text-cod-gray tracking-[-0.42px]">
              {item.title}
            </p>
            <p className="font-inter text-[14px] text-boulder tracking-[-0.42px] leading-[1.5] mt-1">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectLayout({
  title,
  subtitle,
  description,
  middle,
  rightItems,
}: ProjectLayoutProps) {
  return (
    <ThreeColumnLayout
      left={
        <ProjectLeftColumn
          title={title}
          subtitle={subtitle}
          description={description}
        />
      }
      middle={middle}
      right={<ProjectRightColumn items={rightItems} />}
    />
  );
}
