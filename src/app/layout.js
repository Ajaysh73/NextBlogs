import Footer from './components/footer/Footer';
// import Footer from '@/app/'
import Navbar from './components/navbar/Navbar';

import './globals.css';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import { ThemeProvider } from '@/context/ThemeContext';
import AuthProvider from '@/components/AuthProvider/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sharma Blogs',
  description: 'Sharma Blogs generated NextJS',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className='container'>
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
