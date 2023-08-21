import Footer from './components/footer/Footer';
// import Footer from '@/app/'
import Navbar from './components/navbar/Navbar';

import './globals.css';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider>
          <div className='container'>
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
