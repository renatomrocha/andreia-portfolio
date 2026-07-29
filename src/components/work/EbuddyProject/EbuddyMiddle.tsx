import { Link } from "react-router-dom";

import ebHero from "../../../assets/eb_hero.png";
import ebMap from "../../../assets/eb_map.png";
import ebUserflow from "../../../assets/eb_userflow.png";
import ebPersonaMaria from "../../../assets/eb_persona_maria.png";
import ebPersonaAlex from "../../../assets/eb_persona_alex.png";
import ebUiStartup from "../../../assets/eb_ui_startup.png";
import ebUiOnboarding from "../../../assets/eb_ui_onboarding.png";
import ebUiHomepage from "../../../assets/eb_ui_homepage.png";
import ebUiMap from "../../../assets/eb_ui_map.png";
import ebUiChatbot from "../../../assets/eb_ui_chatbot.png";
import electrify from "../../../assets/electrify.png";
import arrowRightIcon from "../../../assets/icons/arrow-right.svg";

import FadeIn from "../../FadeIn";

const HEADING = "#448294";
const TINT = "#E1EDF8";
const PALETTE = ["#78194F", "#2C2C31", "#FCD34D", "#7DC9DE", "#49E18E"];

function BulletList({ items }: { items: string[] }) {
    return (
        <ul className="flex flex-col gap-3">
            {items.map((item, i) => (
                <li
                    key={i}
                    className="font-inter text-[14px] text-boulder tracking-[-0.42px] leading-normal flex gap-2"
                >
                    <span className="text-cod-gray">•</span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

function InsightCard({ title, body }: { title: string; body: string }) {
    return (
        <div className="bg-[#F7F7F7] flex flex-col items-center justify-center text-center py-16 px-12 gap-4">
            <p className="font-inter font-bold text-[28px] text-cod-gray tracking-[-0.42px]">
                {title}
            </p>
            <p className="font-inter text-[18px] text-boulder tracking-[-0.42px] leading-relaxed max-w-[600px]">
                {body}
            </p>
        </div>
    );
}

function PersonaCell({
    title,
    tinted,
    children,
}: {
    title: string;
    tinted?: boolean;
    children: React.ReactNode;
}) {
    return (
        <div
            className="p-8 flex flex-col gap-4"
            style={{ backgroundColor: tinted ? TINT : "#FFFFFF" }}
        >
            <p
                className="font-inter font-semibold text-[18px] tracking-[-0.42px]"
                style={{ color: HEADING }}
            >
                {title}
            </p>
            {children}
        </div>
    );
}

interface Persona {
    photo: string;
    name: string;
    quote: string;
    background: string;
    motivations: string[];
    goals: string[];
    painPoints: string[];
}

const personas: Persona[] = [
    {
        photo: ebPersonaMaria,
        name: "Maria",
        quote: "“I want to drive electric without stress, knowing help is just a tap away”",
        background:
            "Maria is a 45-year-old marketing manager who drives an electric SUV for city and weekend trips. She prioritizes sustainability and convenience but doesn’t want to be overwhelmed by technical data.",
        motivations: [
            "Get guidance and actionable tips for efficient driving",
            "Easily locate and navigate to charging stations",
        ],
        goals: [
            "Reduce environmental impact while maintaining convenience",
            "Get guidance and tips to make driving more efficient",
            "Easily locate and navigate to nearby charging stations",
        ],
        painPoints: [
            "Limited understanding of vehicle performance metrics",
            "Lack of instant support when unexpected alerts appear",
            "Apps that are cluttered or confusing",
        ],
    },
    {
        photo: ebPersonaAlex,
        name: "Alex",
        quote: "“I want all my driving data and charging info in one place, without having to guess”",
        background:
            "Alex is a 32-year-old software engineer living in the city, driving a fully electric hatchback. He commutes daily relies on technology for efficiency and enjoys data-driven insights.",
        motivations: [
            "Make informed decisions based on clear visualizations",
            "Reduce stress and uncertainty when planning journeys",
            "Access real-time vehicle and charging data in one place",
        ],
        goals: [
            "Monitor energy consumption and optimize trips",
            "Quickly find available charging stations",
            "Use real-time insights to reduce costs and plan routes efficiently",
        ],
        painPoints: [
            "Overly technical vehicle data is hard to interpret",
            "Switching between multiple apps to manage driving and charging",
            "Anxiety when unsure if a charging station is available",
        ],
    },
];

function PersonaBlock({ persona }: { persona: Persona }) {
    return (
        <div className="grid grid-cols-2 gap-2">
            <img
                src={persona.photo}
                alt={`${persona.name} — persona`}
                className="w-full h-full object-cover"
            />
            <div
                className="p-8 flex items-center"
                style={{ backgroundColor: TINT }}
            >
                <p className="font-inter text-[20px] text-cod-gray tracking-[-0.42px] italic leading-snug">
                    {persona.quote}
                </p>
            </div>
            <PersonaCell title="Background" tinted>
                <p className="font-inter text-[14px] text-boulder tracking-[-0.42px] leading-normal">
                    {persona.background}
                </p>
            </PersonaCell>
            <PersonaCell title="Motivations">
                <BulletList items={persona.motivations} />
            </PersonaCell>
            <PersonaCell title="Goals">
                <BulletList items={persona.goals} />
            </PersonaCell>
            <PersonaCell title="Pain points">
                <BulletList items={persona.painPoints} />
            </PersonaCell>
        </div>
    );
}

const uiGuidelines = [
    { img: ebUiStartup, alt: "Start up, log in and registration screens" },
    { img: ebUiOnboarding, alt: "Onboarding screens" },
    { img: ebUiHomepage, alt: "Homepage screens" },
    { img: ebUiMap, alt: "Map screens" },
    { img: ebUiChatbot, alt: "Chatbot screens" },
];

export default function EbuddyMiddle() {
    return (
        <div className="py-[140px] border-x border-mercury px-8 flex flex-col gap-12">
            {/* Project description */}
            <FadeIn delay={100}>
                <p className="font-inter text-[38px] text-boulder tracking-[-0.42px]">
                    Simplifying electric vehicle journeys with insights, smart navigation and
                    personalized support
                </p>
            </FadeIn>

            {/* Hero */}
            <FadeIn delay={150}>
                <img src={ebHero} alt="eBuddy app overview" className="w-full" />
            </FadeIn>

            {/* Tagline */}
            <FadeIn delay={200}>
                <p className="font-inter text-[24px] text-cod-gray tracking-[-0.42px] text-center py-8 max-w-[680px] mx-auto">
                    Connecting drivers to their electric vehicles, charging stations, and insights
                    through a smart and intuitive app
                </p>
            </FadeIn>

            {/* Map block */}
            <FadeIn delay={200}>
                <img src={ebMap} alt="Charging stations map" className="w-full" />
            </FadeIn>

            {/* How might we */}
            <FadeIn delay={250}>
                <div className="flex items-center justify-center bg-[#7DC9DE] text-cod-gray text-[40px] text-center py-32 px-12">
                    How can we make managing and navigating electric vehicle ownership simple,
                    insightful, and stress-free for drivers?
                </div>
            </FadeIn>

            {/* Research insights */}
            <FadeIn delay={300}>
                <div className="flex flex-col gap-6">
                    <p className="font-inter font-semibold text-[38px] text-cod-gray tracking-[-0.42px]">
                        Research insights
                    </p>
                    <InsightCard
                        title="SUPPORT MATTERS"
                        body="Electric vehicle drivers often face uncertainty in situations like finding chargers, understanding alerts or optimizing routes. Having instant, contextual support within the app (instead of relying on external sources), increases confidence and reduces friction throughout the experience."
                    />
                    <InsightCard
                        title="DATA CENTRALIZATION"
                        body="I analyzed existing mobility and fleet management platforms to identify UX patterns, strengths, weaknesses, and opportunities for differentiation."
                    />
                    <div className="pt-8">
                        <p className="font-inter font-semibold text-[32px] text-cod-gray tracking-[-0.42px] mb-4 uppercase">
                            Anxiety impacts user confidence
                        </p>
                        <p className="font-inter text-[20px] text-boulder tracking-[-0.42px] leading-relaxed">
                            Uncertainty around the availability, location, and status of charging
                            stations creates stress during trip planning. Users need real-time,
                            reliable, and easily accessible charging information to feel confident
                            on the road.
                        </p>
                    </div>
                </div>
            </FadeIn>

            {/* Addressing user needs */}
            <FadeIn delay={350}>
                <div className="bg-[#78194F] text-white py-16 px-12">
                    <p className="font-inter font-bold text-[32px] tracking-[-0.42px] uppercase mb-4">
                        Addressing user needs
                    </p>
                    <p className="font-inter text-[20px] tracking-[-0.42px] leading-relaxed">
                        The solution addresses key user needs by simplifying vehicle data through
                        clear visualizations, providing reliable access to charging infrastructure
                        and offering real-time, contextual support throughout the driving
                        experience.
                    </p>
                </div>
            </FadeIn>

            {/* Target users + personas */}
            <FadeIn delay={400}>
                <div className="flex flex-col gap-8">
                    <div>
                        <p className="font-inter font-semibold text-[38px] text-cod-gray tracking-[-0.42px] mb-4">
                            Target users
                        </p>
                        <p className="font-inter text-[20px] text-boulder tracking-[-0.42px] leading-relaxed">
                            I found that both novice and experienced drivers want centralized access
                            to their vehicle data and real-time insights. Casual drivers, in
                            particular, often struggle to understand EV metrics and need information
                            presented in a simple and easily digestible way.
                        </p>
                    </div>
                    <PersonaBlock persona={personas[0]} />
                    <PersonaBlock persona={personas[1]} />
                </div>
            </FadeIn>

            {/* Confusion is the enemy */}
            <FadeIn delay={450}>
                <div className="flex items-center justify-center bg-[#49E18E] text-cod-gray font-bold text-[40px] text-center py-32 px-12 tracking-[-0.42px]">
                    “CONFUSION IS THE ENEMY”
                </div>
            </FadeIn>

            {/* Ideation + user flow */}
            <FadeIn delay={500}>
                <div className="flex flex-col gap-6">
                    <p className="font-inter font-semibold text-[38px] text-cod-gray tracking-[-0.42px]">
                        Ideation
                    </p>
                    <p className="font-inter text-[24px] text-cod-gray tracking-[-0.42px] text-center leading-snug max-w-[720px] mx-auto py-4">
                        What is the minimum information needed to get users started quickly? How can
                        the process feel seamless, intuitive and trustworthy?
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <img src={ebUserflow} alt="User flow of sign up" className="w-4/5" />
                        <p className="font-inter text-[14px] text-boulder tracking-[-0.42px]">
                            User flow of sign up
                        </p>
                    </div>
                </div>
            </FadeIn>

            {/* Building the UI + palette */}
            <FadeIn delay={550}>
                <div className="flex flex-col gap-6">
                    <p className="font-inter font-semibold text-[38px] text-cod-gray tracking-[-0.42px]">
                        Building the UI
                    </p>
                    <div className="font-inter text-[20px] text-boulder tracking-[-0.42px] leading-relaxed flex flex-col gap-6">
                        <p>
                            I wanted the design to be clean, intuitive, and engaging. Since this app
                            is about empowering drivers with insights and support, I wanted users to
                            feel confident and in control every time they open it.
                        </p>
                        <p>
                            Colors, graphics, and data visualizations were chosen to be clear and
                            motivating — informative without overwhelming, and visually appealing
                            without feeling cluttered.
                        </p>
                    </div>
                    <div className="flex gap-6 justify-center pt-4">
                        {PALETTE.map((color) => (
                            <div
                                key={color}
                                className="w-24 h-24 rounded-full"
                                style={{ backgroundColor: color }}
                            />
                        ))}
                    </div>
                </div>
            </FadeIn>

            {/* UI guidelines */}
            <FadeIn delay={600}>
                <div className="flex flex-col gap-12">
                    <p className="font-inter font-semibold text-[38px] text-cod-gray tracking-[-0.42px] text-center">
                        UI Guidelines
                    </p>
                    {uiGuidelines.map((item, i) => (
                        <img key={i} src={item.img} alt={item.alt} className="w-full" />
                    ))}
                </div>
            </FadeIn>

            {/* Takeaways */}
            <FadeIn delay={650}>
                <div className="flex flex-col gap-4 bg-[#F7F7F7] text-center p-12 py-22">
                    <p className="font-inter text-[33px] text-cod-gray tracking-[-0.42px]">
                        Takeaways
                    </p>
                    <p className="font-inter text-[16px] text-boulder tracking-[-0.42px] leading-relaxed">
                        This project demonstrates how thoughtful UX/UI design can simplify the
                        complexity of electric vehicle. The solution focuses on delivering key
                        insights and seamless navigation to support confident decision-making. Next
                        steps include improvements in accessibility and scalability to ensure a more
                        inclusive and future ready product.
                    </p>
                </div>
            </FadeIn>

            {/* Next project */}
            <Link
                to="/work/electrify-lite"
                className="flex bg-[#B6D3E1] opacity-90 hover:opacity-100 transition-all duration-500"
            >
                <div className="w-1/2 flex flex-col items-center justify-center text-cod-gray">
                    <p className="text-[32px] font-medium">Next project</p>
                    <p className="flex items-center gap-2 text-boulder">
                        Electrify Lite <img src={arrowRightIcon} alt="" />
                    </p>
                </div>
                <div className="w-1/2 flex items-center justify-center">
                    <img src={electrify} alt="Electrify Lite" className="w-3/4" />
                </div>
            </Link>
        </div>
    );
}
