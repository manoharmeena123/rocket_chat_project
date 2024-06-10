import BackToTop from "../backToTop";
import EmailGeneratorPage from "./index";

export const metadata = {
  title: "Email Generator - || AiWave - AI SaaS Website NEXTJS14 UI Kit",
  description: "AiWave - AI SaaS Website NEXTJS14 UI Kit",
};

const EmailGeneratorLayout = () => {
  return (
    <>
      <EmailGeneratorPage />
      <BackToTop />
    </>
  );
};

export default EmailGeneratorLayout;
