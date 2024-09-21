import MainBanner from "@/components/banner/MainBanner";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import List from "@/components/list/List";
import Skills from "@/components/list/Skills";
import { listItems } from "./data";
import ThemeWrapper from "@/components/theme-wrapper/ThemeWrapper";

export default function Page() {
  return (
    <ThemeWrapper>
      <div className="max-w-3xl mx-auto p-3">
        <Header />
        <main>
          <MainBanner />
          <List items={listItems} />
          <Skills />
        </main>
        <Footer />
      </div>
    </ThemeWrapper>
  );
}
