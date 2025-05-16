import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../ui/Header';
import { Footer } from '../ui/Footer';

 export const MainLayout: React.FC = () => {
 return (
 <div className="min-h-screen flex flex-col">
 <Header />
 <main className="flex-grow">
 <Outlet />
 </main>
 <Footer />
 </div>
  );
 };

 export default MainLayout;
