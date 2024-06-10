import BackToTop from "../backToTop";
import ProfileDetailsPage from "./index";

export const metadata = {
  title: "Profile Details - || AiWave - AI SaaS Website NEXTJS14 UI Kit",
  description: "AiWave - AI SaaS Website NEXTJS14 UI Kit",
};

const ProfileDetailsLayout = () => {
  return (
    <>
      <ProfileDetailsPage />
      <BackToTop />
    </>
  );
};

export default ProfileDetailsLayout;
