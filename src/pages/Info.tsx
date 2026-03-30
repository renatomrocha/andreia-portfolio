import InfoLeftColumn from "../components/info/InfoLeftColumn";
import InfoMiddleColumn from "../components/info/InfoMiddleColumn";
import InfoRightColumn from "../components/info/InfoRightColumn";

export default function Info() {
  return (
    <main className="flex gap-8 px-5 flex-1 min-h-0">
      <div className="w-1/4 shrink-0 min-w-0 h-full overflow-hidden">
        <InfoLeftColumn />
      </div>
      <div className="flex-1 min-w-0 h-full overflow-y-auto scrollbar-hidden">
        <InfoMiddleColumn />
      </div>
      <div className="w-1/4 shrink-0 min-w-0 h-full overflow-hidden">
        <InfoRightColumn />
      </div>
    </main>
  );
}
