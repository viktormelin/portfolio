import './globals.css';
import { Poppins } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import Link from 'next/link';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });

export const metadata = {
  title: 'Viktor Mellin - Home',
  description: 'Portfolio for Viktor Mellin',
  openGraph: {
    title: 'Viktor Mellin - Home',
    description: 'Portfolio for Viktor Mellin',
    url: 'https://viktormelin.com',
    siteName: 'Viktor Mellin',
    images: [
      {
        url: 'https://dixxel.io/_next/static/media/banner_1024x512.562a7bab.png',
        width: 1024,
        height: 512,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${poppins.className}  text-white min-h-screen m-0 flex flex-col`}>
          <main className='relative flex-1 w-full flex items-center justify-center'>{children}</main>
          <footer className='mt-auto w-full flex justify-center'>
            <div className='p-5 flex flex-col gap-3 items-center px-0'>
              <div className='uppercase flex gap-3 text-sm text-gray-400'>
                <Link href='https://cdn.dixxel.io'>CDN</Link>
                <Link href='/dashboard'>Dashboard</Link>
              </div>
              <p className='text-xs'>© 2023 Viktor Mellin</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
