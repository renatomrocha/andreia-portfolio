import Marquee from "../Marquee";

const experiences = [
  {
    title: "Ux Ui Designer",
    company: "New Consulting",
    period: "2025 - present",
    description:
      "Working with brands, agencies, and creatives to craft visual identities, design engaging websites, and capture photography that tells authentic stories. Projects range from brand launches to editorial campaigns.",
  },
  {
    title: "Senior Digital Designer",
    company: "Creative Agency, Paris",
    period: "'16 - 2018",
    description:
      "Led design projects for lifestyle, fashion, and cultural brands. Oversaw concept development, UI/UX design, and visual direction while collaborating closely with copywriters, developers, and photographers.",
  },
  {
    title: "Graphic Designer & Photographer",
    company: "Boutique Studio, Lyon",
    period: "'14 - 2016",
    description:
      "Created branding, print materials, and social media visuals for small to mid-sized businesses. Handled in-house photography for campaigns, products, and brand content.",
  },
  {
    title: "Junior Designer",
    company: "Design Studio, Marseille",
    period: "'13 - 2014",
    description:
      "Assisted in the creation of brand assets, editorial layouts, and basic web designs. Supported senior designers and contributed to photography shoots, gaining hands-on experience in multidisciplinary creative work.",
  },
];

const services = [
  {
    number: "1.",
    title: "Ux Ui Design",
    description:
      "Creating thoughtful, cohesive brand identities that reflect your story and values, from logo design and typography to color palettes and brand guidelines.",
  },
  {
    number: "2.",
    title: "Web Design",
    description:
      "Designing intuitive, elegant websites that balance aesthetics and usability. Whether it's a portfolio, landing page, or full site, I craft digital experiences that connect.",
  },
  {
    number: "3.",
    title: "Brand Identity",
    description:
      "Capturing authentic, atmospheric visuals that enhance your brand and tell a story — including lifestyle, editorial, product, and brand photography.",
  },
];

export default function InfoMiddleColumn() {
  return (
    <div className="bg-white border-x border-mercury rounded-[20px] overflow-hidden">
      {/* Description */}
      <div className="px-4 pt-[140px]">
        <h2 className="font-inter font-semibold text-[22px] leading-[29px] text-cod-gray tracking-[-0.42px] max-w-[600px]">
          I'm Andreia — a Ux Ui designer based in Portugal, with over 3 years
          of experience crafting solutions for various fields.
        </h2>
        <p className="font-inter font-semibold text-[22px] leading-[29px] text-cod-gray tracking-[-0.42px] max-w-[600px] mt-3">
          Whether I'm designing an app or website I approach every project with
          care, intention, and a strong sense of visual narrative.
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
            <div key={i} className="flex gap-6 py-4">
              <div className="w-1/2">
                <h3 className="font-inter font-semibold text-[18px] text-cod-gray tracking-[-0.42px]">
                  {exp.title}
                </h3>
                <p className="font-inter text-[14px] text-cod-gray tracking-[-0.42px] mt-1">
                  {exp.company}
                </p>
                <p className="font-inter text-[14px] text-boulder tracking-[-0.42px] mt-1">
                  {exp.period}
                </p>
              </div>
              <div className="w-1/2">
                <p className="font-inter text-[14px] text-cod-gray tracking-[-0.42px] leading-[22px]">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="px-4 mt-[120px]">
        {/* Header */}
        <h2 className="font-inter font-semibold text-[22px] text-cod-gray tracking-[-0.42px]">
          Services
        </h2>
        <div className="h-px bg-mercury mt-4" />

        {/* Service Items */}
        <div className="mt-4">
          {services.map((service, i) => (
            <div key={i} className="flex justify-between py-4 border-b border-mercury">
              <div className="max-w-[520px]">
                <h3 className="font-inter font-semibold text-[18px] text-cod-gray tracking-[-0.42px]">
                  {service.number} {service.title}
                </h3>
                <p className="font-inter text-[14px] text-cod-gray tracking-[-0.42px] leading-[22px] mt-2">
                  {service.description}
                </p>
              </div>
              <div className="w-[180px] h-[135px] bg-mercury rounded-lg shrink-0 ml-6" />
            </div>
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
