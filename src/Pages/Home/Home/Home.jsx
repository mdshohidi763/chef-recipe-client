import React from 'react';
import Loader from '../LoadData/Loader';
import Carousel from '../Carousel/Carousel';
import Galary from '../Galary/Galary';
import Banner from '../Banner/Banner';



const Home = () => {
    // const cardData = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Loader></Loader>
            <Galary></Galary>
            <Carousel></Carousel>
        </div>
    );
};

export default Home;