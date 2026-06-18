import { Suspense } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import GSAPInitializer from '@/components/GSAPInitializer';
import LoadingProgress from '@/components/LoadingProgress';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'H.O.M — Experience Faith, Redefined.',
  description:
    'Join H.O.M every Sunday at 10:00 AM for a transformative worship experience. Find community, serve in a department, and discover your purpose.',
  keywords: 'church, faith, worship, community, departments, sunday service, House of Mercy',
  icons: {
    icon: '/church-logo.png',
    apple: '/church-logo.png',
  },
  openGraph: {
    title: 'H.O.M',
    description: 'Experience Faith, Redefined.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <GSAPInitializer />
        <Suspense fallback={null}>
          <LoadingProgress />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
