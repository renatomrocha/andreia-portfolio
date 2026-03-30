import LeftColumn from "../components/LeftColumn";
import MiddleColumn from "../components/MiddleColumn";
import RightColumn from "../components/RightColumn";

export default function Home() {
  return (
    <main className="flex gap-8 px-5 flex-1 min-h-0">
      <div className="w-1/4 shrink-0 min-w-0 h-full overflow-hidden">
        <LeftColumn />
      </div>
      <div className="flex-1 min-w-0 h-full overflow-y-auto scrollbar-hidden">
        <MiddleColumn />
      </div>
      <div className="w-1/4 shrink-0 min-w-0 h-full overflow-hidden">
        <RightColumn />
      </div>
    </main>
  );
}
