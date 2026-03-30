import ThreeColumnLayout from "../components/ThreeColumnLayout";
import InfoLeftColumn from "../components/info/InfoLeftColumn";
import InfoMiddleColumn from "../components/info/InfoMiddleColumn";
import InfoRightColumn from "../components/info/InfoRightColumn";

export default function Info() {
  return (
    <ThreeColumnLayout
      left={<InfoLeftColumn />}
      middle={<InfoMiddleColumn />}
      right={<InfoRightColumn />}
    />
  );
}
