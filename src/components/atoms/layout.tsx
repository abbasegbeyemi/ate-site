import * as React from 'react';
import Footer from '@/components/atoms/footer';
import Header from './header';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

interface ILayoutProps {
  title: string;
  subtitle?: string;
  children: any;
}

const Layout: React.FC<ILayoutProps> = ({ title, subtitle, children }) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <Header title={title} subtitle={subtitle} />
      <main style={{ width: '100%', flex: '1 0 auto' }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
