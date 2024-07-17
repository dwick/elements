import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Logo from '@/components/Logo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Elements Eatery & Bar',
  description:
    'Experience Latin fusion at Elements Tahoe - breakfast, lunch, dinner, room service, and lake views in every bite. Good Vibes Only!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
      <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <header className='sticky top-0 z-50 shadow-sm'>
          <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800'>
            <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
              <a href='/' className='flex items-center'>
                <Logo width={200} height={60} />
              </a>
              <div
                className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'
                id='mobile-menu-2'>
                <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
                  <li>
                    <a
                      href='/menu'
                      className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'>
                      Menu
                    </a>
                  </li>
                  <li>
                    <a
                      href='/catering'
                      className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'>
                      Catering
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div className="xs:pt-32 sm:pt-32 md:pt-16 pb-36 pl-4 pr-4">
          <div className="max-w-[1000px] mx-auto">
            {children}
          </div>
        </div>
        <footer>
          <div className='bg-gray-800 text-white py-6'>
            <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='flex flex-col items-center justify-between lg:flex-row'>
                <p className='text-left text-sm'>
                  <a href="https://www.google.com/maps/dir/?api=1&destination=3310+Lake+Tahoe+Boulevard+South+Lake+Tahoe+CA+96150">
                    3310 Lake Tahoe Boulevard <br />
                    South Lake Tahoe, CA 96150 <br />
                  </a>
                  530.650.9004 <br />
                  <a href="mailto:info@elementstahoe.com">info@elementstahoe.com</a> <br />
                </p>
                <p className='text-center text-sm'>
                  &copy; 2024 Elements Tahoe. All rights reserved.
                </p>
                <div className='flex flex-row'>
                  <a href="https://www.instagram.com/elements_tahoe/" className="mt-4 lg:mt-0 px-2">
                    <img src="/insta.webp" alt="Instagram" className="w-6 h-6" />
                  </a>
                  <a href="https://www.facebook.com/elements_tahoe/" className="mt-4 lg:mt-0 px-2">
                    <img src="/fb.webp" alt="Facebook" className="w-6 h-6" />
                  </a>
                  <a href="https://www.tiktok.com/elements_tahoe/" className="mt-4 lg:mt-0 px-2">
                    <img src="/tiktok.webp" alt="TikTok" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
