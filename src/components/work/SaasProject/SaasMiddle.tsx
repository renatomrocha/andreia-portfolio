import { Link } from "react-router-dom";

import saasEntityDark from "../../../assets/saas_entity_dark.png";
import saasEntityLight from "../../../assets/saas_entity_light.png";
import saasMain from "../../../assets/saas_main.png";
import saasPersona from "../../../assets/saas_persona.png";
import saasUiBackoffice from "../../../assets/saas_ui_backoffice.png";
import saasUiForms from "../../../assets/saas_ui_forms.png";
import saasUiAi from "../../../assets/saas_ui_ai.png";
import saasNextEbuddy from "../../../assets/saas_next_ebuddy.png";

import odooLogo from "../../../assets/saas_logo_odoo.svg";
import sageLogo from "../../../assets/saas_logo_sage.svg";
import primaveraLogo from "../../../assets/saas_logo_primavera.svg";
import arrowRightIcon from "../../../assets/icons/arrow-right.svg";

import FadeIn from "../../FadeIn";

const TEAL = "#0DAFA1";
const PINK = "#E0559C";

function Metric({ value, label }: { value: string; label: string }) {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="text-[80px] text-[#0DAFA1]">{value}</div>
            <div className="font-bold text-[28px]">{label}</div>
        </div>
    );
}

const competitors = [
    {
        logo: odooLogo,
        name: "odoo",
        pros: ["Modular all-in-one platform", "Modern and relatively intuitive interface"],
        cons: [
            "Can become complex with multiple modules",
            "Customization requires time and resources",
            "Not always fully localized without adjustments",
        ],
    },
    {
        logo: sageLogo,
        name: "sage",
        pros: [
            "Simpler interface",
            "Suitable for small and medium businesses",
            "Strong financial features",
            "Easy initial adoption",
        ],
        cons: [
            "Less flexible than other ERPs",
            "Limited integrations",
            "Fragmented experience between modules",
        ],
    },
    {
        logo: primaveraLogo,
        name: "primavera",
        pros: [
            "Highly integrated system",
            "Solid financial and logistics management",
            "Well structured modular approach",
        ],
        cons: [
            "Complex and less modern UI",
            "Non intuitive navigation",
            "Can feel overwhelming for new users",
        ],
    },
];

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

function PersonaCell({
    title,
    color,
    children,
}: {
    title: string;
    color: string;
    children: React.ReactNode;
}) {
    return (
        <div className="bg-[#F7F7F7] p-8 flex flex-col gap-4">
            <p
                className="font-inter font-semibold text-[18px] tracking-[-0.42px]"
                style={{ color }}
            >
                {title}
            </p>
            {children}
        </div>
    );
}

function UiGuideline({
    image,
    alt,
    leftLabel,
    rightLabel,
}: {
    image: string;
    alt: string;
    leftLabel: string;
    rightLabel: string;
}) {
    return (
        <div className="flex flex-col gap-4">
            <img src={image} alt={alt} className="w-full" />
            <div className="grid grid-cols-2 gap-8">
                <p className="font-inter font-semibold text-[16px] text-cod-gray tracking-[-0.42px] text-center">
                    {leftLabel}
                </p>
                <p className="font-inter font-semibold text-[16px] text-cod-gray tracking-[-0.42px] text-center">
                    {rightLabel}
                </p>
            </div>
        </div>
    );
}

export default function SaasMiddle() {
    return (
        <div className="py-[140px] border-x border-mercury px-8 flex flex-col gap-12">
            {/* Project description */}
            <FadeIn delay={100}>
                <p className="font-inter text-[38px] text-boulder tracking-[-0.42px]">
                    Designing a modular SaaS platform for collaboration and scale
                </p>
            </FadeIn>

            {/* Hero */}
            <FadeIn delay={200}>
                <img src={saasMain} alt="Pulse platform overview" className="w-full" />
            </FadeIn>

            {/* Scope metrics */}
            <FadeIn delay={200}>
                <div className="grid grid-cols-3">
                    <Metric value="8" label="Módulos" />
                    <Metric value="3" label="Devices" />
                    <Metric value="50+" label="Components" />
                </div>
            </FadeIn>

            {/* Entity images */}
            <FadeIn delay={300}>
                <div className="grid grid-cols-2 gap-6">
                    <img src={saasEntityLight} alt="Entity list — light theme" />
                    <img src={saasEntityDark} alt="Entity list — dark theme" />
                </div>
            </FadeIn>

            {/* How might we */}
            <FadeIn delay={300}>
                <div className="flex items-center justify-center bg-[#0DAFA1] text-white text-[40px] text-center py-32 px-12">
                    How might we help users navigate and manage multiple business processes
                    efficiently without feeling overwhelmed?
                </div>
            </FadeIn>

            {/* Research */}
            <FadeIn delay={400}>
                <div>
                    <div className="font-bold text-[32px] mb-4">RESEARCH OBJECTIVE</div>
                    <div className="text-[20px] text-boulder flex flex-col gap-6">
                        <p>
                            The main objective of this research was to understand how users
                            interact with complex, multi-module SaaS platforms, identifying pain
                            points related to navigation, consistency, and information overload.
                        </p>
                        <p>
                            Additionally, the research aimed to uncover best practices and
                            opportunities to design a more intuitive, efficient, and cohesive user
                            experience across different modules.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-col gap-6">
                        <div className="bg-[#F7F7F7] flex flex-col items-center justify-center py-16 px-12 gap-4">
                            <div className="font-bold text-[32px]">METHOD 1</div>
                            <div className="font-semibold text-boulder text-[24px]">
                                COMPETITIVE ANALYSIS
                            </div>
                            <div className="text-boulder text-[20px] mt-4">
                                Analysis of similar SaaS platforms to identify patterns, strengths,
                                and usability gaps, helping define best practices for structure and
                                consistency.
                            </div>
                        </div>
                        <div className="bg-[#F7F7F7] flex flex-col items-center justify-center py-16 px-12 gap-4">
                            <div className="font-bold text-[32px]">METHOD 2</div>
                            <div className="font-semibold text-boulder text-[24px]">
                                QUESTIONNAIRES
                            </div>
                            <div className="text-boulder text-[20px] mt-4">
                                Collected user insights to understand challenges, frustrations, and
                                needs when managing large amounts of information across multiple
                                modules.
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#7C63E6] py-16 px-12 text-white mt-8">
                        <div className="font-bold text-[32px]">RESEARCH FINDINGS</div>
                        <div className="text-[20px] mt-4">
                            Users often feel overwhelmed when managing multiple tools in one
                            platform, emphasizing the need for clarity, simplicity, and seamless
                            navigation between modules.
                        </div>
                    </div>
                </div>
            </FadeIn>

            {/* Competitor comparison */}
            <FadeIn delay={500}>
                <div className="flex flex-col gap-8">
                    <p className="font-inter font-semibold text-[32px] text-cod-gray tracking-[-0.42px] text-center py-8">
                        Users expected a seamless and consistent experience across all modules
                    </p>
                    <div className="flex flex-col gap-2">
                        {/* Header row */}
                        <div className="grid grid-cols-3 gap-2">
                            {["Competitor", "Pros", "Cons"].map((h) => (
                                <div
                                    key={h}
                                    className="bg-[#F7F7F7] py-4 font-inter font-semibold text-[16px] text-cod-gray tracking-[-0.42px] text-center uppercase"
                                >
                                    {h}
                                </div>
                            ))}
                        </div>
                        {/* Competitor rows */}
                        {competitors.map((c) => (
                            <div key={c.name} className="grid grid-cols-3 gap-2">
                                <div className="bg-[#F7F7F7] flex items-center justify-center p-8">
                                    <img
                                        src={c.logo}
                                        alt={`${c.name} logo`}
                                        className="max-w-[70%] max-h-16 object-contain"
                                    />
                                </div>
                                <div className="bg-[#F7F7F7] p-8">
                                    <BulletList items={c.pros} />
                                </div>
                                <div className="bg-[#F7F7F7] p-8">
                                    <BulletList items={c.cons} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeIn>

            {/* Persona */}
            <FadeIn delay={600}>
                <div className="flex flex-col gap-6">
                    <p className="font-inter font-semibold text-[32px] text-cod-gray tracking-[-0.42px] text-center py-8">
                        Target users are professionals in medium to large organizations
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                        <img
                            src={saasPersona}
                            alt="Sofia — persona"
                            className="w-full h-full object-cover"
                        />
                        <div className="bg-[#EAF7F5] p-8 flex items-center">
                            <p className="font-inter text-[20px] text-cod-gray tracking-[-0.42px] italic leading-snug">
                                “I need a platform where everything feels connected, so I can focus
                                on my work instead of figuring out how the software works”
                            </p>
                        </div>
                        <PersonaCell title="Background" color={TEAL}>
                            <p className="font-inter text-[14px] text-boulder tracking-[-0.42px] leading-normal">
                                Sofia works in a medium-sized company managing projects, HR, finance,
                                and client relationships. She often switches between modules and
                                tools to track team progress, approve expenses, and manage
                                schedules.
                            </p>
                        </PersonaCell>
                        <PersonaCell title="Motivations" color={PINK}>
                            <BulletList
                                items={[
                                    "Efficiency and time-saving",
                                    "Clear and organized workflows",
                                    "Confidence that she is not missing important data",
                                ]}
                            />
                        </PersonaCell>
                        <PersonaCell title="Goals" color={TEAL}>
                            <BulletList
                                items={[
                                    "Complete tasks quickly without confusion",
                                    "Seamlessly move between modules",
                                    "Reduce cognitive overload while accessing key data",
                                ]}
                            />
                        </PersonaCell>
                        <PersonaCell title="Pain points" color={PINK}>
                            <BulletList
                                items={[
                                    "Important information is buried under complex menus",
                                    "Switching between modules requires relearning navigation",
                                ]}
                            />
                        </PersonaCell>
                    </div>
                </div>
            </FadeIn>

            {/* Addressing user needs */}
            <FadeIn delay={700}>
                <div className="flex flex-col gap-4 py-8">
                    <p className="font-inter font-semibold text-[38px] text-cod-gray tracking-[-0.42px]">
                        Addressing user needs
                    </p>
                    <p className="font-inter text-[20px] text-boulder tracking-[-0.42px] leading-relaxed">
                        Designed a unified and intuitive platform that reduces complexity, ensures
                        consistency across modules, and helps users complete tasks efficiently.
                    </p>
                </div>
            </FadeIn>

            {/* UI Guidelines */}
            <FadeIn delay={700}>
                <div className="flex flex-col gap-12">
                    <p className="font-inter font-semibold text-[38px] text-cod-gray tracking-[-0.42px] text-center">
                        UI Guidelines
                    </p>
                    <UiGuideline
                        image={saasUiBackoffice}
                        alt="Back office table view"
                        leftLabel="Clear hierarchy"
                        rightLabel="Consistent spacing and layout"
                    />
                    <UiGuideline
                        image={saasUiForms}
                        alt="Filters and add-user forms"
                        leftLabel="Search filter"
                        rightLabel="Prominent CTA"
                    />
                    <UiGuideline
                        image={saasUiAi}
                        alt="AI assistant and pop-up navigation"
                        leftLabel="AI assistance integration"
                        rightLabel="Pop-ups navigation"
                    />
                </div>
            </FadeIn>

            {/* Conclusion */}
            <FadeIn delay={800}>
                <div className="flex flex-col gap-4 bg-[#F7F7F7] text-center p-12 py-22">
                    <p className="font-inter text-[33px] text-cod-gray tracking-[-0.42px]">
                        Conclusion
                    </p>
                    <p className="font-inter text-[16px] text-boulder tracking-[-0.42px] leading-relaxed">
                        This project successfully delivered a unified, intuitive SaaS platform that
                        simplifies complex workflows and enhances user efficiency through consistent
                        design and clear navigation. While the desktop experience is fully designed,
                        work on mobile and tablet versions is ongoing to ensure a seamless,
                        responsive experience across all devices.
                    </p>
                </div>
            </FadeIn>

            {/* Next project */}
            <Link
                to="/work/ebuddy"
                className="flex bg-[#82215a] opacity-90 hover:opacity-100 transition-all duration-500"
            >
                <div className="w-1/2 flex flex-col items-center justify-center text-white">
                    <p className="text-[32px] font-medium">Next project</p>
                    <p className="flex items-center gap-2 opacity-80">
                        eBuddy app <img src={arrowRightIcon} alt="" />
                    </p>
                </div>
                <div className="w-1/2 flex items-center justify-center">
                    <img src={saasNextEbuddy} alt="eBuddy app" className="w-3/4" />
                </div>
            </Link>
        </div>
    );
}
