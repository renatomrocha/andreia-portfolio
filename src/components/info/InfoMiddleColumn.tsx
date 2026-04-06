import BlurRevealText from "../BlurRevealText";
import Marquee from "../Marquee";

const experiences = [
  {
    title: "Ux Ui Designer",
    company: "New Consulting",
    period: "2025 - present",
    description:
      "Crafting intuitive SaaS experiences by simplifying complex workflows into clear, user-friendly interfaces across devices, while building scalable and consistent design systems that support growth.",
  },
  {
    title: "Ux Ui Designer",
    company: "Chargylize - Freelance",
    period: "'24 - 2025",
    description:
      "Designing seamless mobile and desktop experiences in the electric mobility ecosystem, simplifying AI-driven features into clear interactions, and prototyping solutions that perform in real-world scenarios.",
  },
  {
    title: "Ux Ui Designer",
    company: "EpicPlays",
    period: "'23 - 2024",
    description:
      "Designing simple, engaging sports app experiences, turning ideas into usable features while adapting to challenges and collaborating to launch the product.",
  },
  {
    title: "User Experience Project manager",
    company: "Leroy Merlin",
    period: "'20 - 2023",
    description:
      "Leading end-to-end customer testing for new products in a global retail environment, turning user insights into actionable decisions across diverse teams and business units.",
  },
];


export default function InfoMiddleColumn() {
  return (
    <div className="bg-white border-x border-mercury rounded-[20px] overflow-hidden">
      {/* Description */}
      <div className="px-4 pt-[140px]">
        <h2 className="font-inter font-semibold text-[22px] leading-[29px] text-cod-gray tracking-[-0.42px] max-w-[600px]">
          <BlurRevealText
            text="Hi! I’m Andreia, nice to meet you :)"
            charDelay={3}
          />
        </h2>
        <p className="max-w-[600px] mt-3">
          <BlurRevealText
            text="Based in Portugal, I’ve always been drawn to creating and bringing ideas to life. Throughout my professional journey as a UX Project Manager, I developed a close connection with UX/UI design, discovering how thoughtful design can shape meaningful experiences.

What started as a professional curiosity quickly grew into a genuine passion for understanding users and solving real problems through design. I’m especially interested in how small details can make a big difference in the way people interact with digital products.

Outside of work, you’ll usually find me sewing my own clothes, staying active through sports or spending time with animals. Things that keep my creativity and energy flowing."
            className="font-inter text-[16px] leading-[24px] text-boulder tracking-[-0.42px]"
            charDelay={3}
          />
        </p>
      </div>

      {/* Experience Section */}
      <div className="px-4 mt-[120px]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="font-inter font-semibold text-[22px] text-cod-gray tracking-[-0.42px]">
            Experience
          </h2>
          <a
            href="#"
            className="font-inter font-semibold text-[14px] text-cod-gray tracking-[-0.42px] underline"
          >
            Download CV
          </a>
        </div>
        <div className="h-px bg-mercury mt-4" />

        {/* Entries */}
        <div className="mt-4">
          {experiences.map((exp, i) => (
            <>
              <div key={i} className="flex gap-6 py-4 ">
                <div className="w-1/2">
                  <h3 className="font-inter font-semibold text-[18px] text-cod-gray tracking-[-0.42px]">
                    {exp.title.toUpperCase()}
                  </h3>
                  <p className="font-inter text-[14px] text-boulder tracking-[-0.42px] mt-1">
                    {exp.company}
                  </p>
                  <p className="font-inter text-[14px] text-boulder tracking-[-0.42px] mt-1">
                    {exp.period}
                  </p>
                </div>
                <div className="w-1/2">
                  <p className="font-inter text-[14px] text-boulder tracking-[-0.42px] leading-[22px]">
                    {exp.description}
                  </p>
                </div>
              </div>
              <div className="h-px bg-mercury " />

              {/* <hr /> */}
            </>
          ))}
        </div>
      </div>



      {/* Spacer before marquee */}
      <div className="h-[146px]" />

      {/* Let's Talk Marquee */}
      <Marquee />

      {/* Spacer after marquee */}
      <div className="h-[240px]" />

      {/* Footer */}
      <div className="px-4 pb-8">
        <p className="font-inter font-semibold text-[14px] text-boulder tracking-[-0.42px] text-right">
          © 2026 All rights reserved
        </p>
      </div>
    </div>
  );
}
