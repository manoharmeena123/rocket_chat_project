import BackToTop from "@/app/backToTop";
import BlogDetailsPage from "../index";

export const metadata = {
  title: "Blog Details - || AiWave - AI SaaS Website NEXTJS14 UI Kit",
  description: "AiWave - AI SaaS Website NEXTJS14 UI Kit",
};

const BlogDetailsLayout = ({ params }) => {
  return (
    <>
      <BlogDetailsPage getBlog={params} />
      <BackToTop />
    </>
  );
};

export default BlogDetailsLayout;
