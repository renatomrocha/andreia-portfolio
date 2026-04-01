import profilePic from "../assets/profile_pic.png";
import FadeIn from "./FadeIn";

export default function RightColumn() {
  return (
    <div className="flex flex-col h-full">
      {/* Profile Photo */}
      <div className="mt-[140px]">
        <FadeIn delay={300}>
          <img
            src={profilePic}
            alt="Andreia"
            className="w-full aspect-[470/620] object-cover rounded-lg"
          />
        </FadeIn>

        {/* Info */}
        <div className="flex flex-col items-end gap-[1px] mt-8">
          <p className="font-inter font-semibold text-[14px] text-cod-gray tracking-[-0.42px]">
            Ux Ui Designer
          </p>
          <p className="font-inter font-semibold text-[14px] text-cod-gray tracking-[-0.42px]">
            Based in Portugal
          </p>
          <p className="font-inter font-semibold text-[14px] text-cod-gray tracking-[-0.42px]">
            Since 2023
          </p>
        </div>
      </div>

      {/* Contact */}
      <div className="mt-auto">
        <div className="flex items-end justify-between">
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
          <span className="font-inter font-semibold text-[14px] text-cod-gray tracking-[-0.42px]">
            © 2026
          </span>
        </div>
      </div>
    </div>
  );
}
