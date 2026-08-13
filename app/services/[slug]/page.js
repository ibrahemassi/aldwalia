import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/cusor';
import LoadingScreen from '@/components/common/loader';
import Footer from '@/components/common/Footer';
import Marq2 from '@/components/common/Marq2';
import Navbar from '@/components/common/Navbar';
import ThemeScripts from '@/components/common/ThemeScripts';

import ServiceHeader from '@/components/services/ServiceHeader';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getServiceSlugs } from '@/lib/data';

export async function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const resolved = params instanceof Promise ? await params : params;
  const service = getServiceBySlug(resolved.slug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.name} - aldwalya`,
    description: service.desc,
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
}

export default async function ServicePage({ params }) {
  const resolved = params instanceof Promise ? await params : params;
  const service = getServiceBySlug(resolved.slug);

  if (!service) {
    notFound();
  }

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
            <ServiceHeader service={service} />
            <ServiceIntro service={service} />
            <ServiceFeatures service={service} />
            <ServiceProcess service={service} />
            <ServiceFAQ service={service} />
            <Marq2 service={service} />
          </main>
          <Footer />
        </div>
      </div>
          <ThemeScripts />
    </body>
  );
}
