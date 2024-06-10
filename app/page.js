import BackToTop from "./backToTop";
import HomePage from "./home/page";

export const metadata = {
  title: "Softinators",
  description: "Ai powered hiring",
};

export default function Home() {
  return (
    <main>
      <HomePage />
      <BackToTop />
    </main>
  );
}
