// eslint-disable-next-line no-unused-vars
import React from 'react';
import ServiceHero from './ServiceHero/ServiceHero';
import OurService from './OurService/OurService';
import JoysLiving from './JoysLiving/JoysLiving';
import Weelness from './Weelness/Weelness';
import Footer from '../Shared/Footer/Footer';

const Service = () => {
    return (
        <div>
            <ServiceHero></ServiceHero>
            <OurService></OurService>
            <JoysLiving></JoysLiving>
            <Weelness></Weelness>
            <Footer></Footer>
        </div>
    );
};

export default Service;