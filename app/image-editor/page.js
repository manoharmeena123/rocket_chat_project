import BackToTop from "../backToTop";
import ImageEditorPage from "./index";

export const metadata = {
  title: "Image Editor - || AiWave - AI SaaS Website NEXTJS14 UI Kit",
  description: "AiWave - AI SaaS Website NEXTJS14 UI Kit",
};

const ImageEditorLayout = () => {
  return (
    <>
      <ImageEditorPage />
      <BackToTop />
    </>
  );
};

export default ImageEditorLayout;
