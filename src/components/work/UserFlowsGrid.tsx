import { ReactNode } from "react";

interface UserFlowsGridProps {
  cells: ReactNode[];
}

export default function UserFlowsGrid({ cells }: UserFlowsGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {cells.map((cell, i) => (
        <div key={i} className="border border-mercury w-full">
          {cell}
        </div>
      ))}
    </div>
  );
}
