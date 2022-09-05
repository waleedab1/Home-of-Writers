import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';

import './styles/NovelCarousel.css';

const items = [
    {
        src: 'https://wallpaperaccess.com/full/31189.jpg',
        title: '1',
        text: '1',
        key: 1,
    },
    {
        src: 'https://wallpaperaccess.com/full/31191.jpg',
        title: '2',
        text: '2',
        key: 2,
    },
    {
        src: 'https://wallpaperaccess.com/full/31198.jpg',
        title: '3',
        text: '3',
        key: 3,
    },
];

function NovelCarousel(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.title} width='100%' height='300px' />
                <CarouselCaption
                    captionText={item.text}
                    captionHeader={item.title}
                />
            </CarouselItem>
        );
    });

    return (
        <div>
            <Carousel
                className='custom-tag'
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                {...args}
            >
                <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                />
            </Carousel>
        </div>
    );
}

export default NovelCarousel;
