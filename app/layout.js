import './globals.css';
import BasePathFix from '@/components/common/BasePathFix';
import { withBase } from '@/lib/basePath';

export const metadata = {
  title: 'Nexora Digital',
  description: 'Nexora Digital — a fictional software studio based in Dubai, UAE.',
  icons: {
    icon: [
      {
        url: withBase('/assets/imgs/favicon.ico'),
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        url: withBase('/assets/imgs/favicon.ico'),
        sizes: '16x16',
        type: 'image/x-icon',
      },
    ],
    shortcut: withBase('/assets/imgs/favicon.ico'),
    apple: withBase('/assets/imgs/favicon.ico'),
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#16337d',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href={withBase('/assets/imgs/favicon.ico')}
          type="image/x-icon"
          sizes="32x32"
        />
        <link
          rel="icon"
          href={withBase('/assets/imgs/favicon.ico')}
          type="image/x-icon"
          sizes="16x16"
        />
        <link rel="shortcut icon" href={withBase('/assets/imgs/favicon.ico')} />
        <link rel="apple-touch-icon" href={withBase('/assets/imgs/favicon.ico')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#16337d" />
      </head>
      {children}
      <BasePathFix />
    </html>
  );
}
