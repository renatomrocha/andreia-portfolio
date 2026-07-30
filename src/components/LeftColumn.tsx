import BlurRevealText from "./BlurRevealText";

export default function LeftColumn() {
  return (
    <div className="flex flex-col h-full">
      {/* Intro */}
      <div className="mt-[140px]">
        <h1 className="font-inter font-semibold text-[48px] leading-[1.1] tracking-[-0.42px] text-cod-gray">
          <BlurRevealText text={"Hello!\nI'm Andreia."} charDelay={5} />
        </h1>
      </div>

      {/* Services */}
      <div className="mt-auto pb-0">
        {["Ux Ui Designer", "Web design", "Brand Identity"].map((service) => (
          <div
            key={service}
            className="border-b border-mercury py-[4px]"
          >
            <p className="font-inter font-semibold text-[16px] text-cod-gray tracking-[-0.42px] leading-[23px]">
              {service}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
