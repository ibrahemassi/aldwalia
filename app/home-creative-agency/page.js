import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/cusor';
import LoadingScreen from '@/components/common/loader';
import Header from '@/components/home-creative-agency/Header';
import Footer from '@/components/common/Footer';
import Marq2 from '@/components/common/Marq2';
import Navbar from '@/components/common/Navbar';
import ThemeScripts from '@/components/common/ThemeScripts';
import Services from '@/components/home-creative-agency/Services';
import Intro from '@/components/home-creative-agency/Intro';
import Numbers from '@/components/home-creative-agency/Numbers';
import Portfolio from '@/components/home-creative-agency/Portfolio';
import Intro2 from '@/components/home-creative-agency/Intro2';
import Team from '@/components/home-creative-agency/Team';
import Testimonials from '@/components/home-creative-agency/Testimonials';
import Clients from '@/components/common/Clients';
import Blog from '@/components/home-creative-agency/Blog';
import { getServices } from '@/lib/data';

export const metadata = {
  title: 'Nexora Digital',
  icons: {
    icon: '/assets/imgs/favicon.ico',
    shortcut: '/assets/imgs/favicon.ico',
    other: generateStylesheetObject([
      '/assets/css/plugins.css',
      '/assets/css/style.css',
      'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap',
    ]),
  },
};

export default async function Home() {
  const services = getServices();

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
            <Services Services={services} />
            <Intro />
            <Numbers />
            <Portfolio />
            <Intro2 />
            <Team />
            <Testimonials />
            <Clients />
            <Blog />
            <Marq2 />
          </main>
          <Footer />
        </div>
      </div>
      <ThemeScripts />
    </body>
  );
}
