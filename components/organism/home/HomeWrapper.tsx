import Diary from "@/components/organism/home/diary";
import Features from "@/components/organism/home/features";
import Help from "@/components/organism/home/help";
import Homepage from "@/components/organism/home/home";
import HomeFooter from "./HomeFooter";

export default function HomeWrapper() {
  return (
    <>
      <div className="space-y-44">
        <Homepage />
        <Help />
        <Features />
        <Diary />
        <HomeFooter />
      </div>
    </>
  );
}
