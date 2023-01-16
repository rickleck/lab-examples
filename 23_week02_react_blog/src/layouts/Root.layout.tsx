import Navigation from '@/components/navigation/Navigation.component';
import Footer from '@/components/footer/Footer.component';
import React from 'react';
import { Outlet } from 'react-router-dom';

function RootLayout() {
    return (
        <div className="root-inner">
            <header>
                <Navigation />
            </header>
            <main className="root container-responsive">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default RootLayout;
