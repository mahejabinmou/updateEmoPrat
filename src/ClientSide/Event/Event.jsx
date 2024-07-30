// eslint-disable-next-line no-unused-vars
import React from 'react';
import EventHeroSection from './EventHeroSection/EventHeroSection';
import EventGallery from './EventGallery/EventGallery';
import DiscoverMoment from './DiscoverMoment/DiscoverMoment';
import Footer from './../Shared/Footer/Footer';
import EventVideo from './EventVideo/EventVideo';

const Event = () => {
    return (
        <div>
            <EventHeroSection></EventHeroSection>
            <EventGallery></EventGallery>
            <DiscoverMoment></DiscoverMoment>
            <EventVideo></EventVideo>
            <Footer></Footer>
        </div>
    );
};

export default Event;