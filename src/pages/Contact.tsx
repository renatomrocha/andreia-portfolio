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
        <div className="flex items-center gap-2">
          {/* Instagram */}
          <a href="#" className="text-cod-gray hover:text-boulder transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          {/* Dribbble */}
          <a href="#" className="text-cod-gray hover:text-boulder transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
            </svg>
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
