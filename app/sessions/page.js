import BackToTop from "../backToTop";
import SessionsPage from "./index";

export const metadata = {
  title: "Sessions - || AiWave - AI SaaS Website NEXTJS14 UI Kit",
  description: "AiWave - AI SaaS Website NEXTJS14 UI Kit",
};

const SessionsLayout = () => {
  return (
    <>
      <SessionsPage />
      <BackToTop />
    </>
  );
};

export default SessionsLayout;
