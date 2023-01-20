import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/gui/header/Header';
import Footer from '@/components/gui/footer/Footer';

function Root() {
    return (
        <div className="root-inner">
            <Header />
            <main className="root container-responsive">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Root;
