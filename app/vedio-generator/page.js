import BackToTop from "../backToTop";
import VedioGeneratorPage from "./index";

export const metadata = {
  title: "Vedio Generator - || AiWave - AI SaaS Website NEXTJS14 UI Kit",
  description: "AiWave - AI SaaS Website NEXTJS14 UI Kit",
};

const VedioGeneratorLayout = () => {
  return (
    <>
      <VedioGeneratorPage />
      <BackToTop />
    </>
  );
};

export default VedioGeneratorLayout;
