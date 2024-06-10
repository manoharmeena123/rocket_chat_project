import BackToTop from "../backToTop";
import ImageGeneratorPage from "./index";

export const metadata = {
  title: "Image Generator - || AiWave - AI SaaS Website NEXTJS14 UI Kit",
  description: "AiWave - AI SaaS Website NEXTJS14 UI Kit",
};

const ImageGeneratorLayout = () => {
  return (
    <>
      <ImageGeneratorPage />
      <BackToTop />
    </>
  );
};

export default ImageGeneratorLayout;
