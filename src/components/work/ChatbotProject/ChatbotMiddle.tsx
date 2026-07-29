import chatbotDemo from "../../../assets/chatbot_demo.mp4";
import chatbotUserFlow2 from "../../../assets/chatbot_quick_question.mp4";
import chatbotSpeech from "../../../assets/chatbot_speech.mp4";

import chatbotScope1 from "../../../assets/chatbot_scope_1.png";
import chatbotScope2 from "../../../assets/chatbot_scope_2.png";
import chatbotUserFlow1 from "../../../assets/chatbot_user_flow_1.mp4";
import chatbotUserFlow3 from "../../../assets/chatbot_user_flow_3.png";
import chatbotWarning from "../../../assets/chatbot_warning.png";
import nextProjectSaaS from "../../../assets/next_project_saas.png";

import arrowRightIcon from "../../../assets/icons/arrow-right.svg";
import arrowIcon from "../../../assets/icons/arrow.svg";

import { Link } from "react-router-dom";
import FadeIn from "../../FadeIn";
import HoverCard from "../HoverCard";
import UserFlowsGrid from "../UserFlowsGrid";

const scopeItems = [
  "End-to-end chatbot experience",
  "Mobile app integration",
  "Onboarding flow design",
  "Conversational UI patterns",
  "Contextual help system",
  "Accessibility considerations",
];

const hoverCards = [
  {
    title: "Guide and Free Interaction",
    description:
      "Combined open chat input with suggested prompts to support both exploratory and goal-oriented behaviors.",
  },
  {
    title: "Progressive disclosure",
    description:
      "Combined open chat input with suggested prompts to support both exploratory and goal-oriented behaviors.",
  },
  {
    title: "Structured Responses",
    description:
      "Combined open chat input with suggested prompts to support both exploratory and goal-oriented behaviors.",
  },
  {
    title: "Human-Centered",
    description:
      "Combined open chat input with suggested prompts to support both exploratory and goal-oriented behaviors.",
  },
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

      {/* Side-by-side images */}
      <FadeIn delay={300}>
        <div className="flex gap-[4%]">
          <img src={chatbotScope1} alt="Chatbot screen 1" className="w-[48%] object-cover" />
          <img src={chatbotScope2} alt="Chatbot screen 2" className="w-[48%] object-cover" />
        </div>
      </FadeIn>

      {/* Big text + caption */}
      <FadeIn delay={400}>
        <div className="py-40">
          <p className="font-inter text-[38px] text-cod-gray tracking-[-0.42px] leading-tight text-center">
            How might we improve the electric vehicle ownership experience through an intelligent and accessible chatbot?
          </p>
          <p className="font-inter text-[13px] text-boulder tracking-[-0.42px] mt-3 text-center">
            This question guided the design decisions throughout the project
          </p>
        </div>
      </FadeIn>

      {/* Hoverable cards */}
      <FadeIn delay={500}>
        <div>

          <div className="grid grid-cols-2 gap-4">
            {hoverCards.map((card, i) => (
              <HoverCard key={i} title={card.title} description={card.description} />
            ))}
          </div>
        </div>
      </FadeIn>

      {/* User Flows */}
      <FadeIn delay={600}>
        <div>
          <p className="font-inter font-semibold text-[38px] text-cod-gray tracking-[-0.42px] mb-4">
            User Flows
          </p>
          <UserFlowsGrid
            cells={[
              <div className="p-16 bg-[#2f80eb] flex items-center justify-center">
                <video src={chatbotUserFlow1} autoPlay loop muted playsInline className="w-3/4 h-full object-cover " />
              </div>,
              <div className="flex flex-col h-full pt-12  items-center text-center px-12 bg-[#F7F7F7]">
                <p className="font-inter font-semibold text-[#1D75E7] text-[80px] tracking-[-0.42px] mb-12">1</p>
                <p className="font-inter text-[13px] text-cod-gray font-bold tracking-[-0.42px] leading-normal mt-1 mb-8">
                  ONBOARDING & FIRST INTERACTION
                </p>
                <p className="font-inter text-[13px] text-boulder tracking-[-0.42px] leading-normal mt-1">
                  Introduces the chatbot’s capabilities and guides users with suggested questions to reduce initial friction.
                </p>
              </div>,
              <div className="flex flex-col h-full pt-12  items-center text-center px-12 bg-[#F7F7F7]">
                <p className="font-inter font-semibold text-[#78194F] text-[80px] tracking-[-0.42px] mb-12">2</p>
                <p className="font-inter text-[13px] text-cod-gray font-bold tracking-[-0.42px] leading-normal mt-1 mb-8">
                  QUICK QUESTION FLOW
                </p>
                <p className="font-inter text-[13px] text-boulder tracking-[-0.42px] leading-normal mt-1">
                  Users can ask direct questions and receive immediate, concise answers supported by structured content.
                </p>
              </div>,
              <div className="p-16 bg-[#82215a] flex items-center justify-center">
                <video src={chatbotUserFlow2} autoPlay loop muted playsInline className="w-3/4 h-full object-cover  " />
              </div>,
              <div>
                <img src={chatbotUserFlow3} />
              </div>,
              <div className="flex flex-col h-full pt-12  items-center text-center px-12 bg-[#F7F7F7]">
                <p className="font-inter font-semibold text-[#00867A] text-[80px] tracking-[-0.42px] mb-12">3</p>
                <p className="font-inter text-[13px] text-cod-gray font-bold tracking-[-0.42px] leading-normal mt-1 mb-8">
                  GUIDED SCENARIOS
                </p>
                <p className="font-inter text-[13px] text-boulder tracking-[-0.42px] leading-normal mt-1">
                  Users can dive deeper into topics through follow-up prompts and contextual suggestions.
                </p>
              </div>,
            ]}
          />
        </div>
      </FadeIn>

      {/* Centered title + side-by-side video and image */}
      <FadeIn delay={700}>
        <div className="flex flex-col gap-8">
          <p className="font-inter font-semibold text-[32px] text-cod-gray tracking-[-0.42px] text-center">
            Designing a chatbot that guides not overwhelms
          </p>
          <div className="flex gap-[4%]">
            <video
              src={chatbotSpeech}
              autoPlay
              loop
              muted
              playsInline
              className="w-[48%] object-cover p-16"
            />
            <img
              src={chatbotWarning}
              alt=""
              className="w-[48%] object-cover p-16"
            />
          </div>
        </div>
      </FadeIn>

      {/* Title + description */}
      <FadeIn delay={800}>
        <div className="flex flex-col gap-4 bg-[#F7F7F7] text-center p-12 py-22">
          <p className="font-inter text-[33px] text-cod-gray tracking-[-0.42px]">
            Takeaways
          </p>
          <p className="font-inter text-[16px] text-boulder tracking-[-0.42px] leading-relaxed ">
            Balancing technical accuracy with simplicity. Electric mobility involves complex concepts and translating them into conversational interactions required careful prioritization of information and progressive disclosure.
          </p>
          <p className="font-inter text-[16px] text-boulder tracking-[-0.42px] leading-relaxed">
            Another key trade-off was designing for both new and experienced users, ensuring the experience remained intuitive without limiting depth.
          </p>
        </div>
      </FadeIn>

      <Link to="/work/saas" className="flex bg-[#B3CFA8] opacity-80 hover:opacity-100 transition-all duration-500">
        <div className="w-1/2 flex flex-col items-center justify-center">
          <p className="text-[32px] font-medium">Next project</p>
          <p className="text-boulder flex items-center gap-2">SaaS software <img src={arrowRightIcon} /></p>
        </div>
        <div>
          <img src={nextProjectSaaS} />
        </div>
      </Link>
    </div>
  );
}
