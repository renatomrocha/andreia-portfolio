import { CSSProperties, useEffect, useState } from "react";

interface BlurRevealTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
  /** Kept for API compatibility; no longer used. */
  charDelay?: number;
  /** Fade-in duration in ms. */
  blurDuration?: number;
}

export default function BlurRevealText({
  text,
  className = "",
  style,
  blurDuration = 600,
}: BlurRevealTextProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const lines = text.split("\n");

  return (
    <span
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transition: `opacity ${blurDuration}ms ease-out`,
      }}
    >
      {lines.map((line, i) => (
        <span key={i}>
          {i > 0 && <br />}
          {line}
        </span>
      ))}
    </span>
  );
}
