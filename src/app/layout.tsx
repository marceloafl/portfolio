import "@/styles/global.css";
import { raleway } from "@/styles/fonts";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={raleway.className}>
      <body className="max-w-3xl mx-auto p-3">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
