import ThreeColumnLayout from "../components/ThreeColumnLayout";
import Marquee from "../components/Marquee";
import BlurRevealText from "../components/BlurRevealText";

function ContactMiddle() {
  return (
    <div className="bg-white border-x border-mercury rounded-[20px] overflow-hidden">
      {/* Header */}
      <div className="px-4 pt-[80px]">
        <h1 className="font-inter font-semibold text-[48px] leading-[1.1] tracking-[-0.42px] text-cod-gray">
          <BlurRevealText text="Reach out." />
        </h1>
        <p className="font-inter text-[14px] leading-[22px] text-boulder tracking-[-0.42px] mt-4 max-w-[520px]">
          <BlurRevealText
            text="I'd love to hear from you. Whether you're looking to collaborate on a new project, discuss a commission, or simply say hello"
            charDelay={3}
          />
        </p>
      </div>

      {/* Contact Info */}
      <div className="px-4 mt-[120px] flex items-end justify-between">
        <div className="flex flex-col gap-1">
          <a
            href="mailto:uxui.andreiapereira@gmail.com"
            className="font-inter font-semibold text-[14px] text-cod-gray tracking-[-0.42px] underline"
          >
            uxui.andreiapereira@gmail.com
          </a>
          <a
            href="tel:+351919152975"
            className="font-inter text-[12px] text-cod-gray tracking-[-0.42px]"
          >
            (351) 919 152 975
          </a>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[300px]" />

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

export default function Contact() {
  return (
    <ThreeColumnLayout
      left={<div />}
      middle={<ContactMiddle />}
      right={<div />}
    />
  );
}
