import BackToTop from "../backToTop";
import ApplicationsPage from "./index";

export const metadata = {
  title: "Applications - || AiWave - AI SaaS Website NEXTJS14 UI Kit",
  description: "AiWave - AI SaaS Website NEXTJS14 UI Kit",
};

const ApplicationsLayout = () => {
  return (
    <>
      <ApplicationsPage />
      <BackToTop />
    </>
  );
};

export default ApplicationsLayout;
