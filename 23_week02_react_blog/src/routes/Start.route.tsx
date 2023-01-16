import EntryList from '@/components/entrylist/EntryList.component';
import Hero from '@/components/hero/Hero.component';
import React from 'react';

function StartRoute() {
    return (
        <div className="index-view view-padding">
            <Hero />
            <section className="page-grid">
                <div className="spacing"></div>
                <EntryList />
            </section>
        </div>
    );
}

export default StartRoute;
