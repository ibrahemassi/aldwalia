import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/cusor";
import LoadingScreen from "@/components/common/loader";
import Clients from "@/components/home-main/Clients";
import Feat from "@/components/home-main/Feat";
import Footer from "@/components/common/Footer";
import Header from "@/components/home-main/Header";
import Intro from "@/components/home-main/Intro";
import Marq2 from "@/components/common/Marq2";
import Navbar from "@/components/common/Navbar";
import Portfolio from "@/components/home-main/Portfolio";
import Services from "@/components/home-main/Services";
import Team from "@/components/home-main/Team";
import Testimonials from "@/components/home-main/Testimonials";
import ThemeScripts from '@/components/common/ThemeScripts';

import Marq from "@/components/home-main/Marq";
import Portfolio1 from "@/components/home-main/Portfolio1";

export const metadata = {
  title: "aldwalya",
  icons: {
    icon: '/assets/imgs/favicon.ico',
    shortcut: '/assets/imgs/favicon.ico',
    other: generateStylesheetObject([
      "/assets/css/plugins.css",
      "/assets/css/style.css",
      "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap",
    ]),
  },
};

export default function Home() {
  return (
    <body>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <Header />
            <Intro />
            <Marq />
            <Services />
            <Portfolio1 />
            <Feat />
            <Team />
            <Testimonials />
            <Clients />
            <Marq2 />
          </main>
          <Footer />
        </div>
      </div>
      <ThemeScripts />
    </body>
  );
}
