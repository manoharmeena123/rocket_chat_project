import BackToTop from "../backToTop";
import BlogPage from "./index";

export const metadata = {
  title: "Blog - || AiWave - AI SaaS Website NEXTJS14 UI Kit",
  description: "AiWave - AI SaaS Website NEXTJS14 UI Kit",
};

const BlogLayout = () => {
  return (
    <>
      <BlogPage />
      <BackToTop />
    </>
  );
};

export default BlogLayout;
