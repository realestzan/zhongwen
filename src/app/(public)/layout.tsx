import Footer from '@/components/generic/footer';
import Header from '@/components/generic/header';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
        <Header />
      <main className='bg-background max-md:p-4'>{children}</main>
    <Footer />
    </div>
  );
};

export default Layout;