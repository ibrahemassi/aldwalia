import Script from 'next/script';
import { withBase } from '@/lib/basePath';

const SCRIPTS = [
  '/assets/js/ScrollTrigger.min.js',
  '/assets/js/ScrollSmoother.min.js',
  '/assets/js/plugins.js',
  '/assets/js/TweenMax.min.js',
  '/assets/js/charming.min.js',
  '/assets/js/countdown.js',
  '/assets/js/gsap.min.js',
  '/assets/js/splitting.min.js',
  '/assets/js/isotope.pkgd.min.js',
  '/assets/js/imgReveal/imagesloaded.pkgd.min.js',
];

export default function ThemeScripts() {
  return (
    <>
      {SCRIPTS.map((src) => (
        <Script key={src} src={withBase(src)} strategy="beforeInteractive" />
      ))}
      <Script src={withBase('/assets/js/scripts.js')} />
    </>
  );
}
