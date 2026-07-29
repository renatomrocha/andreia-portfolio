interface HoverCardProps {
  title: string;
  description: string;
}

export default function HoverCard({ title, description }: HoverCardProps) {
  return (
    <div className="group h-90 [perspective:1000px] cursor-default">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-[#F9EBCD] p-6 flex items-center justify-center">
          <p className="font-inter font-semibold text-[22px] text-cod-gray tracking-[-0.42px] leading-tight text-center">
            {title.toUpperCase()}
          </p>
        </div>
        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#F9EBCD] p-6 flex items-center">
          <p className="font-inter text-[14px] text-boulder tracking-[-0.42px] leading-normal text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
