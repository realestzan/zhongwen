'use client'
import React, { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Header from '@/components/generic/header';
import Footer from '@/components/generic/footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const links = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Practice', href: '/vocabulary/practice' },
    { label: 'Grammar', href: '/grammar' },
    { label: 'Topics', href: '/vocabulary/topics' },
    { label: 'Notebook', href: '/notebook' },
    { label: 'Side Words', href: '/side-words' },
    { label: 'Words', href: '/words' },
    { label: 'Paragraph', href: '/paragraph' },
    { label: 'History', href: '/vocabulary/history' },
    { label: 'Profile', href: '/profile' },
  ];
  const pathname = usePathname();

  return (
    <div>
      <Header />
      <main className='bg-background'>


        <div className="flex min-h-screen w-full flex-col max-md:ml-0">
          <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
            <div className="mx-auto grid w-full max-w-7xl gap-2">
              <h1 className="text-3xl font-semibold">Set<span className='text-ai'>tings</span> </h1>
            </div>
            <div className="mx-auto grid w-full max-w-7xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
              <nav className="grid gap-4 text-sm text-muted-foreground">
                {links.map((link) => (
                  <Link key={link.href} href={link.href} className={pathname === link.href ? 'font-semibold text-primary' : ''}>
                    {link.label}
                  </Link>
                ))}
              </nav>
              {children}
            </div>
          </main>
        </div>



      </main>
      <Footer />
    </div>
  );
};

export default Layout;