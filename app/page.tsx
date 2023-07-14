import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import RecentPosts from "../src/components/RecentPosts";
import RecentProjects from "../src/components/RecentProjects";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <RecentProjects />
        <RecentPosts />
      </main>
      <Footer />
    </>
  );
}
