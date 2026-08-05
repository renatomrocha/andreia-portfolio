import { Link } from "react-router-dom";

import elHero from "../../../assets/el_hero.png";
import elYellow from "../../../assets/el_yellow.png";
import elUserflow from "../../../assets/el_userflow.png";
import elUiDashboard from "../../../assets/el_ui_dashboard.png";
import elUiCharging from "../../../assets/el_ui_charging.png";
import elUiQ1 from "../../../assets/el_ui_q1.png";
import elUiQ2 from "../../../assets/el_ui_q2.png";
import elUiQComplete from "../../../assets/el_ui_qcomplete.png";
import owlTechno from "../../../assets/owl_techno.png";
import arrowRightIcon from "../../../assets/icons/arrow-right.svg";

import FadeIn from "../../FadeIn";

function MethodCard({
    method,
    title,
    body,
}: {
    method: string;
    title: string;
    body: string;
}) {
    return (
        <div className="bg-[#F7F7F7] flex flex-col items-center justify-center text-center py-16 px-12 gap-4">
            <p className="font-inter font-bold text-[32px] text-cod-gray tracking-[-0.42px]">
                {method}
            </p>
            <p className="font-inter font-semibold text-[24px] text-boulder tracking-[-0.42px] uppercase">
                {title}
            </p>
            <p className="font-inter text-[20px] text-boulder tracking-[-0.42px] leading-relaxed mt-2 max-w-[620px]">
                {body}
            </p>
        </div>
    );
}

function Stat({ value, label }: { value: string; label: string }) {
    return (
        <div className="flex flex-col items-center gap-5">
            <div className="w-48 h-48 rounded-full border-[10px] border-[#E1EDF8] flex items-center justify-center">
                <span className="font-inter font-semibold text-[52px] text-[#9FB8C4]">
                    {value}
                </span>
            </div>
            <p className="font-inter text-[16px] text-boulder tracking-[-0.42px] text-center max-w-[240px] leading-normal">
                {label}
            </p>
        </div>
    );
}

const uiGuidelines = [
    { img: elUiDashboard, alt: "Dashboard overview" },
    { img: elUiCharging, alt: "Charging and cost detail pop-ups" },
    { img: elUiQ1, alt: "Questionnaire — highlighted questions" },
    { img: elUiQ2, alt: "Questionnaire — progress tracker" },
    { img: elUiQComplete, alt: "Questionnaire complete summary" },
];

export default function ElectrifyMiddle() {
    return (
        <div className="py-[140px] border-x border-mercury px-8 flex flex-col gap-12">
            {/* Project description */}
            <FadeIn delay={100}>
                <p className="font-inter text-[38px] text-boulder tracking-[-0.42px]">
                    Empowering smarter fleet decisions through data-driven electric mobility insights
                </p>
            </FadeIn>

            {/* Hero */}
            <FadeIn delay={150}>
                <img src={elHero} alt="Electrify Lite dashboard overview" className="w-full" />
            </FadeIn>

            {/* Tagline */}
            <FadeIn delay={200}>
                <p className="font-inter text-[24px] text-cod-gray tracking-[-0.42px] text-center py-8 max-w-[680px] mx-auto">
                    Helping users navigate the shift to electric vehicles with clarity and confidence
                </p>
            </FadeIn>

            {/* Yellow dashboard block */}
            <FadeIn delay={200}>
                <img src={elYellow} alt="Dashboard highlight" className="w-full" />
            </FadeIn>

            {/* How might we */}
            <FadeIn delay={250}>
                <div className="flex items-center justify-center bg-[#F7F7F7] text-cod-gray text-[40px] text-center py-32 px-12">
                    How can we support smarter fleet decisions through data?
                </div>
            </FadeIn>

            {/* Research */}
            <FadeIn delay={300}>
                <div className="flex flex-col gap-6">
                    <div>
                        <p className="font-inter font-semibold text-[38px] text-cod-gray tracking-[-0.42px] mb-4">
                            Research objective
                        </p>
                        <p className="font-inter text-[20px] text-boulder tracking-[-0.42px] leading-relaxed">
                            To understand how fleet managers and individual drivers make decisions
                            around electric vehicles, identifying their needs, pain points, and gaps
                            in current tools.
                        </p>
                    </div>
                    <MethodCard
                        method="METHOD 1"
                        title="User interviews"
                        body="I conducted interviews with fleet managers and individual drivers to uncover behaviors, motivations, and challenges related to EV adoption and management."
                    />
                    <MethodCard
                        method="METHOD 2"
                        title="Competitive analysis"
                        body="I analyzed existing mobility and fleet management platforms to identify UX patterns, strengths, weaknesses, and opportunities for differentiation."
                    />
                </div>
            </FadeIn>

            {/* Research findings */}
            <FadeIn delay={350}>
                <div className="bg-[#2F6FED] text-white py-16 px-12">
                    <p className="font-inter font-bold text-[32px] tracking-[-0.42px] uppercase mb-6">
                        Research findings
                    </p>
                    <ul className="flex flex-col gap-4">
                        {[
                            "There is a strong need for personalized insights based on usage context",
                            "Existing tools tend to be either too technical or not user-friendly enough",
                            "Charging related information is often unclear",
                        ].map((item, i) => (
                            <li
                                key={i}
                                className="font-inter text-[20px] tracking-[-0.42px] leading-normal flex gap-3"
                            >
                                <span>•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </FadeIn>

            {/* Insight + stats */}
            <FadeIn delay={400}>
                <div className="flex flex-col gap-12 py-8">
                    <p className="font-inter font-semibold text-[32px] text-cod-gray tracking-[-0.42px] text-center uppercase max-w-[700px] mx-auto leading-snug">
                        The lack of clear, centralized information makes EV decisions confusing and
                        time-consuming
                    </p>
                    <div className="grid grid-cols-2 gap-8 justify-items-center">
                        <Stat
                            value="80%"
                            label="of users struggle to understand the true cost of EV ownership"
                        />
                        <Stat
                            value="70%"
                            label="rely on manual comparisons to make vehicle decisions"
                        />
                    </div>
                </div>
            </FadeIn>

            {/* Addressing user needs */}
            <FadeIn delay={450}>
                <div className="bg-[#EAB308] text-white py-16 px-12">
                    <p className="font-inter font-bold text-[32px] tracking-[-0.42px] uppercase mb-4">
                        Addressing user needs
                    </p>
                    <p className="font-inter text-[20px] tracking-[-0.42px] leading-relaxed">
                        Designed a streamlined dashboard that simplifies cost and charging insights,
                        ensures a cohesive experience and helps users manage EV decisions
                        efficiently.
                    </p>
                </div>
            </FadeIn>

            {/* Ideation + user flow */}
            <FadeIn delay={500}>
                <div className="flex flex-col gap-6">
                    <p className="font-inter font-semibold text-[38px] text-cod-gray tracking-[-0.42px]">
                        Ideation
                    </p>
                    <p className="font-inter text-[20px] text-boulder tracking-[-0.42px] leading-relaxed">
                        During the ideation phase I focused on enhancing the fleet manager’s
                        experience, ensuring insights and interactions were both useful and
                        engaging.
                    </p>
                    <div className="flex flex-col items-center gap-4 pt-4">
                        <img
                            src={elUserflow}
                            alt="User flow — verify charging details"
                            className="w-full"
                        />
                        <p className="font-inter text-[14px] text-boulder tracking-[-0.42px]">
                            User flow verify charging details
                        </p>
                    </div>
                </div>
            </FadeIn>

            {/* UI guidelines */}
            <FadeIn delay={550}>
                <div className="flex flex-col gap-12 bg-[#F7F7F7] p-12">
                    <p className="font-inter font-semibold text-[38px] text-cod-gray tracking-[-0.42px] text-center">
                        UI Guidelines
                    </p>
                    {uiGuidelines.map((item, i) => (
                        <img key={i} src={item.img} alt={item.alt} className="w-full" />
                    ))}
                </div>
            </FadeIn>

            {/* Takeaways */}
            <FadeIn delay={600}>
                <div className="flex flex-col gap-4 bg-[#F7F7F7] text-center p-12 py-22">
                    <p className="font-inter text-[33px] text-cod-gray tracking-[-0.42px]">
                        Takeaways
                    </p>
                    <p className="font-inter text-[16px] text-boulder tracking-[-0.42px] leading-relaxed">
                        This project shows how clear and actionable EV insights can transform complex
                        data into confident decisions. Moving forward, validating with users,
                        enhancing personalization, and expanding data capabilities will be key to
                        scaling the solution.
                    </p>
                </div>
            </FadeIn>

            {/* Next project */}
            <Link
                to="/work/owl-techno"
                className="flex bg-[#9747FF] opacity-90 hover:opacity-100 transition-all duration-500"
            >
                <div className="w-1/2 flex flex-col items-center justify-center text-white">
                    <p className="text-[32px] font-medium">Next project</p>
                    <p className="flex items-center gap-2 opacity-80">
                        Owl app <img src={arrowRightIcon} alt="" />
                    </p>
                </div>
                <div className="w-1/2 flex items-center justify-center">
                    <img src={owlTechno} alt="Owl app" className="w-3/4" />
                </div>
            </Link>
        </div>
    );
}
