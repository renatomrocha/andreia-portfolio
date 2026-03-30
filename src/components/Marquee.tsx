export default function Marquee() {
  const items = Array(8).fill("Let's Talk");

  return (
    <div className="border-y border-mercury overflow-hidden py-2">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((text, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="inline-block w-[10px] h-[10px] bg-cod-gray rounded-full rotate-45 mx-6" />
            <span className="font-inter font-semibold text-[72px] text-cod-gray tracking-[-0.42px] leading-[80px]">
              {text}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
