const capabilities = ["Websites", "IOS and android apps", "User Research"];

const tools = ["Figma", "Adobe xD", "HTML, CSS and Javascript", "Webflow", "AI plugins"];

export default function InfoRightColumn() {
  return (
    <div className="flex flex-col h-full">
      {/* Digital Capabilities */}
      <div className="mt-[140px]">
        <p className="font-inter font-semibold text-[14px] text-cod-gray tracking-[-0.42px] text-right">
          Digital Capabilities
        </p>
        <div className="mt-2">
          {capabilities.map((item) => (
            <div key={item} className="border-b border-mercury py-[4px]">
              <p className="font-inter font-semibold text-[16px] text-cod-gray tracking-[-0.42px] leading-[23px] text-right">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills and Tools */}
      <div className="mt-auto">
        <p className="font-inter font-semibold text-[14px] text-cod-gray tracking-[-0.42px] text-right">
          Skills and Tools
        </p>
        <div className="h-px bg-mercury mt-1" />
        <div className="mt-2">
          {tools.map((item, i) => (
            <div
              key={item}
              className={`py-[4px] ${i < tools.length - 1 ? "border-b border-mercury" : ""}`}
            >
              <p className="font-inter font-semibold text-[16px] text-cod-gray tracking-[-0.42px] leading-[23px] text-right">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
