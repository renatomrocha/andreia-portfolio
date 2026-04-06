import MiddleColumn from "../components/home/MiddleColumn";
import LeftColumn from "../components/LeftColumn";
import RightColumn from "../components/RightColumn";
import ThreeColumnLayout from "../components/ThreeColumnLayout";

export default function Home() {
  return (
    <ThreeColumnLayout
      left={<LeftColumn />}
      middle={<MiddleColumn />}
      right={<RightColumn />}
    />
  );
}
