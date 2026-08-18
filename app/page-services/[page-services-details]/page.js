import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/cusor';
import LoadingScreen from '@/components/common/loader';
import Footer from '@/components/common/Footer';
import Marq2 from '@/components/common/Marq2';
import Navbar from '@/components/common/Navbar';
import ThemeScripts from '@/components/common/ThemeScripts';

import Header from '@/components/page-services-details/Header';
import ServiceContent from '@/components/page-services-details/ServiceContent';
import {
  getProjectsByService,
  getServiceBySlug,
  getServiceSlugs,
} from '@/lib/data';

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

export async function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({
    'page-services-details': slug,
  }));
}

export default async function ServicePage({ params }) {
  const resolved = params instanceof Promise ? await params : params;
  const slugOrId = resolved['page-services-details'];
  const service = getServiceBySlug(slugOrId);

  if (!service) {
    return (
      <body>
        <div
          className="main-bg"
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
          }}
        >
          Service not found
        </div>
        <ThemeScripts />
      </body>
    );
  }

  const relatedProjects = getProjectsByService(service);

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
            <Header service={service} />
            <ServiceContent service={service} projects={relatedProjects} />
            <Marq2 service={service} />
          </main>
          <Footer />
        </div>
      </div>
      <ThemeScripts />
    </body>
  );
}
