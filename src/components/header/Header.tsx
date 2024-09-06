import ThemeButton from "@/components/button/theme-button/ThemeButton";
import Contact from "@/components/contact/Contact";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between">
      <h1 className="text-lg font-semibold">Marcelo Lemes</h1>
      <div className="flex">
        <Contact />
        <ThemeButton />
      </div>
    </header>
  );
}
