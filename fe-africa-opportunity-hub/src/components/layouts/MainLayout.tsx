import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="app-layout">
      <Navbar />

      <main className="app-layout__content">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;