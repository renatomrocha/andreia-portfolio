import chatbotDemo from "../../../assets/chatbot_demo.mp4";
import arrowIcon from "../../../assets/icons/arrow.svg";
import FadeIn from "../../FadeIn";

const scopeItems = [
  "End-to-end chatbot experience",
  "Mobile app integration",
  "Onboarding flow design",
  "Conversational UI patterns",
  "Contextual help system",
  "Accessibility considerations",
];

const designDecisions = [
  {
    title: "Progressive Disclosure",
    description:
      "Surface complex information gradually to reduce cognitive load and guide users through multi-step queries.",
  },
  {
    title: "Contextual Suggestions",
    description:
      "Offer smart follow-up prompts based on user intent to reduce input effort and increase confidence.",
  },
  {
    title: "Error Recovery",
    description:
      "Provide clear fallback messages and alternative paths when the chatbot cannot resolve a query.",
  },
  {
    title: "Consistent Voice",
    description:
      "Maintain a friendly, informative tone across all flows to reinforce brand trust.",
  },
];

const userFlows = [
  {
    number: "01",
    title: "Onboarding",
    description:
      "New users are guided through a brief setup to personalise their electric mobility experience and set preferences.",
  },
  {
    number: "02",
    title: "Quick Questions",
    description:
      "Returning users can ask single-turn questions and receive immediate, concise answers with source links.",
  },
  {
    number: "03",
    title: "Guided Scenarios",
    description:
      "Complex topics unfold through a structured multi-turn conversation, keeping users oriented at every step.",
  },
];

const takeaways = [
  "Conversational design requires constant iteration — early lo-fi prototypes saved significant rework.",
  "User testing revealed that response length matters more than response accuracy for perceived quality.",
  "Designing for voice and text simultaneously surfaced edge cases invisible in either channel alone.",
];

export default function ChatbotMiddle() {
  return (
    <div className="py-[140px] flex flex-col gap-12 border-x border-mercury px-8">
      {/* Project description */}
      <FadeIn delay={100}>
        <p className="font-inter text-[38px] text-boulder tracking-[-0.42px] ">
          Designed a chatbot assistant for an electric mobility app, focused on providing users with instant, clear, and accessible support throughout their transition to electric vehicles.
        </p>
      </FadeIn>

      {/* Hero video */}
      <FadeIn className="flex w-full justify-center py-20" delay={200}>
        <video
          src={chatbotDemo}
          autoPlay
          loop
          muted
          playsInline
          className="w-1/3"
        />
      </FadeIn>

      {/* Scope */}
      <FadeIn delay={200}>
        <div>
          <p className="font-inter font-semibold text-[38px] text-cod-gray tracking-[-0.42px] mb-3">
            Scope
          </p>
          <div className="grid grid-cols-3 gap-px ">
            {scopeItems.map((item, i) => (
              <div key={i} className="bg-white py-3 pr-4 flex items-start gap-2">
                <img src={arrowIcon} alt="" className="mt-[3px] shrink-0" />
                <p className="font-inter text-[14px] text-boulder tracking-[-0.42px] leading-normal">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Key Design Decisions */}
      <FadeIn delay={300}>
        <div>
          <p className="font-inter font-semibold text-[14px] text-cod-gray tracking-[-0.42px] mb-3">
            Key Design Decisions
          </p>
          <div className="h-px bg-mercury mb-4" />
          <div className="grid grid-cols-2 gap-4">
            {designDecisions.map((item, i) => (
              <div key={i} className="border border-mercury p-4">
                <p className="font-inter font-semibold text-[14px] text-cod-gray tracking-[-0.42px]">
                  {item.title}
                </p>
                <p className="font-inter text-[13px] text-boulder tracking-[-0.42px] leading-[1.5] mt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* User Flows */}
      <FadeIn delay={400}>
        <div>
          <p className="font-inter font-semibold text-[14px] text-cod-gray tracking-[-0.42px] mb-3">
            User Flows
          </p>
          <div className="h-px bg-mercury mb-4" />
          <div className="flex flex-col gap-4">
            {userFlows.map((flow, i) => (
              <div key={i} className="flex gap-4 border-b border-mercury pb-4">
                <span className="font-inter font-semibold text-[32px] text-mercury leading-none w-10 shrink-0">
                  {flow.number}
                </span>
                <div>
                  <p className="font-inter font-semibold text-[14px] text-cod-gray tracking-[-0.42px]">
                    {flow.title}
                  </p>
                  <p className="font-inter text-[13px] text-boulder tracking-[-0.42px] leading-[1.5] mt-1">
                    {flow.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Takeaways */}
      <FadeIn delay={500}>
        <div>
          <p className="font-inter font-semibold text-[14px] text-cod-gray tracking-[-0.42px] mb-3">
            Takeaways
          </p>
          <div className="h-px bg-mercury mb-3" />
          <div className="flex flex-col">
            {takeaways.map((item, i) => (
              <div
                key={i}
                className={`py-[6px] flex gap-3 ${i < takeaways.length - 1 ? "border-b border-mercury" : ""}`}
              >
                <span className="font-inter text-[12px] text-mercury shrink-0 mt-[2px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-inter text-[14px] text-boulder tracking-[-0.42px] leading-[1.5]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
