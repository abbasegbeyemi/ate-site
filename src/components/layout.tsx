import * as React from 'react';
import Footer from '@/components/footer';
import Header from './header';

interface ILayoutProps {
  title: string;
  subtitle?: string;
  children: any;
}

const Layout: React.FC<ILayoutProps> = ({ title, subtitle, children }) => {
  return (
    <>
      <Header title={title} subtitle={subtitle} />
      <main style={{ width: '100%', flex: '1 0 auto' }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
