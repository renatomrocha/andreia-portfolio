import { useEffect, useState } from "react";

interface BlurRevealTextProps {
  text: string;
  className?: string;
  charDelay?: number;
  blurDuration?: number;
}

export default function BlurRevealText({
  text,
  className = "",
  charDelay = 15,
  blurDuration = 300,
}: BlurRevealTextProps) {
  const [revealedCount, setRevealedCount] = useState(0);
  const [charTimestamps, setCharTimestamps] = useState<number[]>([]);

  useEffect(() => {
    if (revealedCount >= text.length) return;

    const timeout = setTimeout(() => {
      setRevealedCount((prev) => prev + 1);
      setCharTimestamps((prev) => [...prev, Date.now()]);
    }, charDelay);

    return () => clearTimeout(timeout);
  }, [revealedCount, text.length, charDelay]);

  return (
    <span className={className}>
      {text.split("").map((char, i) => {
        if (char === "\n") {
          return i < revealedCount ? <br key={i} /> : <span key={i} className="opacity-0">{"\n"}</span>;
        }

        if (i >= revealedCount) {
          return (
            <span key={i} className="opacity-0">
              {char}
            </span>
          );
        }

        return (
          <CharWithBlur
            key={i}
            char={char}
            timestamp={charTimestamps[i]}
            blurDuration={blurDuration}
          />
        );
      })}
    </span>
  );
}

function CharWithBlur({
  char,
  timestamp,
  blurDuration,
}: {
  char: string;
  timestamp: number;
  blurDuration: number;
}) {
  const [state, setState] = useState({ blur: 8, opacity: 0.7, y: -5 });

  useEffect(() => {
    let animationFrame: number;

    function animate() {
      const elapsed = Date.now() - timestamp;
      const progress = Math.min(elapsed / blurDuration, 1);
      const eased = 1 - (1 - progress) * (1 - progress); // ease-out quadratic

      setState({
        blur: (1 - eased) * 8,
        opacity: 0.7 + eased * 0.3,
        y: (1 - eased) * 5,
      });

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    }

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [timestamp, blurDuration]);

  return (
    <span
      className="inline-block"
      style={{
        filter: state.blur > 0.1 ? `blur(${state.blur}px)` : "none",
        opacity: state.opacity,
        transform: Math.abs(state.y) > 0.1 ? `translateY(${state.y}px)` : "none",
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  );
}
