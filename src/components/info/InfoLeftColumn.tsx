import profilePic from "../../assets/profile_pic.png";
import BlurRevealText from "../BlurRevealText";

export default function InfoLeftColumn() {
  return (
    <div className="flex flex-col h-full">
      {/* Title */}
      <div className="mt-[140px]">
        <h1 className="font-inter font-semibold text-[48px] leading-[1.1] tracking-[-0.42px] text-cod-gray">
          <BlurRevealText text="About me." />
        </h1>
      </div>

      {/* Profile Photo */}
      <div className="mt-16">
        <img
          src={profilePic}
          alt="Andreia"
          className="w-[258px] aspect-[258/344] object-cover rounded-lg"
        />
        <p className="font-inter font-semibold text-[14px] text-cod-gray tracking-[-0.42px] text-right mt-2 w-[258px]">
          © 2023-26
        </p>
      </div>

      {/* Contact */}
      <div className="mt-auto">
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
    </div>
  );
}
