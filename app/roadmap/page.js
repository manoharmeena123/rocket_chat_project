import BackToTop from "../backToTop";
import RoadmapPage from "./index";

export const metadata = {
  title: "Roadmap - || AiWave - AI SaaS Website NEXTJS14 UI Kit",
  description: "AiWave - AI SaaS Website NEXTJS14 UI Kit",
};

const RoadmapLayout = () => {
  return (
    <>
      <RoadmapPage />
      <BackToTop />
    </>
  );
};

export default RoadmapLayout;
