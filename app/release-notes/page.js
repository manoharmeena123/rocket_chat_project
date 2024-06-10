import { useRef } from "react";
import BackToTop from "../backToTop";
import ReleaseNotesPage from "./index";

export const metadata = {
  title: "Release Notes - || AiWave - AI SaaS Website NEXTJS14 UI Kit",
  description: "AiWave - AI SaaS Website NEXTJS14 UI Kit",
};

const ReleaseNotesLayout = () => {
  return (
    <>
      <ReleaseNotesPage />
      <BackToTop />
    </>
  );
};

export default ReleaseNotesLayout;
