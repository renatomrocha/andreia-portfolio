import ThreeColumnLayout from "../components/ThreeColumnLayout";
import LeftColumn from "../components/LeftColumn";
import MiddleColumn from "../components/MiddleColumn";
import RightColumn from "../components/RightColumn";

export default function Home() {
  return (
    <ThreeColumnLayout
      left={<LeftColumn />}
      middle={<MiddleColumn />}
      right={<RightColumn />}
    />
  );
}
