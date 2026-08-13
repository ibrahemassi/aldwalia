import './globals.css';

export const metadata = {
  title: 'aldwalya',
  description: 'Aldwalya for Software - Creative Software Solutions',
  icons: {
    icon: [
      {
        url: '/assets/imgs/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        url: '/assets/imgs/favicon.ico',
        sizes: '16x16',
        type: 'image/x-icon',
      },
    ],
    shortcut: '/assets/imgs/favicon.ico',
    apple: '/assets/imgs/favicon.ico',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#16337d',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/imgs/favicon.ico" type="image/x-icon" sizes="32x32" />
        <link rel="icon" href="/assets/imgs/favicon.ico" type="image/x-icon" sizes="16x16" />
        <link rel="shortcut icon" href="/assets/imgs/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/imgs/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#16337d" />
      </head>
      {children}
    </html>
  );
}
