import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/cusor';
import LoadingScreen from '@/components/common/loader';
import Footer from '@/components/common/Footer';
import Marq2 from '@/components/common/Marq2';
import Navbar from '@/components/common/Navbar';
import ThemeScripts from '@/components/common/ThemeScripts';

import Clients from '@/components/common/Clients';
import Services from '@/components/home-digital-agency/Services';
import Intro2 from '@/components/home-digital-agency/Intro2';
import Testimonials from '@/components/home-digital-agency/Testimonials';
import Blog from '@/components/home-digital-agency/Blog';
import Header from '@/components/page-services/Header';
import ServicesGrid from '@/components/page-services/ServicesGrid';
import Numbers from '@/components/page-services/Numbers';
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
            {/* <Header Services={services} /> */}
            <ServicesGrid services={services} />
            {/* <Services Services={services}/>
            <Intro2 Services={services}/>
            <Numbers Services={services}/>
            <Testimonials Services={services}/>
            <Clients Services={services}/>
            <Blog Services={services}/> */}
            <Marq2 Services={services}/>
          </main>
          <Footer />
        </div>
      </div>
      <ThemeScripts />
    </body>
  );
}
