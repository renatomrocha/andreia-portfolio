import { Link } from "react-router-dom";

import owlHero from "../../../assets/owl_hero.png";
import owlShowcase from "../../../assets/owl_showcase.png";
import chatbotProject from "../../../assets/chatbot_project.png";
import arrowRightIcon from "../../../assets/icons/arrow-right.svg";

import FadeIn from "../../FadeIn";

const PURPLE = "#743EB9";

export default function OwlMiddle() {
    return (
        <div className="py-[140px] border-x border-mercury px-8 flex flex-col gap-12">
            {/* Project description */}
            <FadeIn delay={100}>
                <p className="font-inter text-[38px] text-boulder tracking-[-0.42px]">
                    Feel the beat before the drop — a seamless way to discover and secure electronic
                    music events
                </p>
            </FadeIn>

            {/* Hero */}
            <FadeIn delay={150}>
                <img src={owlHero} alt="Owl app overview" className="w-full" />
            </FadeIn>

            {/* Tagline */}
            <FadeIn delay={200}>
                <p className="font-inter text-[24px] text-cod-gray tracking-[-0.42px] text-center py-8 max-w-[680px] mx-auto">
                    A go-to platform for buying and selling tickets to the best techno events.
                    Opportunity to connect with fellow fans and never miss a beat!
                </p>
            </FadeIn>

            {/* How might we */}
            <FadeIn delay={250}>
                <div className="flex items-center justify-center bg-[#A8DDED] text-cod-gray text-[40px] text-center py-32 px-12">
                    How might we help electronic music fans find and secure the best events in just
                    a few taps?
                </div>
            </FadeIn>

            {/* Diving into the techno abyss */}
            <FadeIn delay={300}>
                <div className="flex flex-col gap-4">
                    <p className="font-inter font-semibold text-[38px] text-cod-gray tracking-[-0.42px]">
                        Diving into the techno abyss
                    </p>
                    <p className="font-inter text-[20px] text-boulder tracking-[-0.42px] leading-relaxed">
                        To understand the soul of techno, I put on my phones and asked the experts.
                        Through interviews, I uncovered their deepest desires: sound mixing, a dark
                        aesthetic vibe and zero patience for clunky interfaces. Turns out, techno
                        lovers are all about that flow, both in music and in app experience.
                    </p>
                </div>
            </FadeIn>

            {/* Research findings */}
            <FadeIn delay={350}>
                <div className="text-white py-16 px-12" style={{ backgroundColor: PURPLE }}>
                    <p className="font-inter font-bold text-[32px] tracking-[-0.42px] uppercase mb-6">
                        Research findings
                    </p>
                    <ul className="flex flex-col gap-4">
                        {[
                            "Dancers value speed and want to find and purchase tickets with minimal steps.",
                            "Clear and concise event information is essential for quick decision-making.",
                            "A visually engaging interface enhances the overall experience and reflects the energy of electronic music.",
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

            {/* Personas + ideation + UI showcase */}
            <FadeIn delay={400}>
                <img
                    src={owlShowcase}
                    alt="Owl app — personas, sketches and high-fidelity screens"
                    className="w-full"
                />
            </FadeIn>

            {/* Takeaways */}
            <FadeIn delay={450}>
                <div
                    className="flex flex-col gap-4 text-center text-white p-12 py-22"
                    style={{ backgroundColor: PURPLE }}
                >
                    <p className="font-inter text-[33px] tracking-[-0.42px]">Takeaways</p>
                    <p className="font-inter text-[16px] tracking-[-0.42px] leading-relaxed">
                        This project explored the design of a seamless and engaging ticketing
                        experience for electronic music events, focusing on speed, clarity, and a
                        strong visual identity. The final concept simplifies the ticket buying
                        journey while capturing the energy of the scene. As next steps I would love
                        to explore additional features like personalized recommendations and event
                        reminders.
                    </p>
                </div>
            </FadeIn>

            {/* Next project */}
            <Link
                to="/work/chatbot"
                className="flex opacity-90 hover:opacity-100 transition-all duration-500"
                style={{ backgroundColor: PURPLE }}
            >
                <div className="w-1/2 flex flex-col items-center justify-center text-white">
                    <p className="text-[32px] font-medium">Next project</p>
                    <p className="flex items-center gap-2 opacity-80">
                        Chatbot <img src={arrowRightIcon} alt="" />
                    </p>
                </div>
                <div className="w-1/2 flex items-center justify-center">
                    <img src={chatbotProject} alt="Chatbot" className="w-3/4" />
                </div>
            </Link>
        </div>
    );
}
