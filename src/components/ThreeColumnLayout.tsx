import { ReactNode, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ThreeColumnLayout({
  left,
  middle,
  right,
}: {
  left: ReactNode;
  middle: ReactNode;
  right: ReactNode;
}) {
  const { pathname } = useLocation();
  const middleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    middleRef.current?.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <main className="flex gap-8 px-5 flex-1 min-h-0">
      <div className="w-1/4 shrink-0 min-w-0 h-full overflow-hidden pb-4">
        {left}
      </div>
      <div
        ref={middleRef}
        className="flex-1 min-w-0 h-full overflow-y-auto scrollbar-hidden"
      >
        {middle}
      </div>
      <div className="w-1/4 shrink-0 min-w-0 h-full overflow-hidden pb-4">
        {right}
      </div>
    </main>
  );
}
