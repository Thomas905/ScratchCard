import React from 'react';
import ScratchCard from 'react-scratchcard';

const Home = () => {
    const settings = {
        width: 640,
        height: 480,
        image: 'https://i.imgur.com/IC1KpJp.jpg',
        finishPercent: 50,
        onComplete: () => console.log('The card is now clear!')
    };

    return (
        <div>
            <h1>Home</h1>
            <ScratchCard {...settings}>
                Congratulations! You WON!
            </ScratchCard>;
        </div>
    );
};

export default Home;