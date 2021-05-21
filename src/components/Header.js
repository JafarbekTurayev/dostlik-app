import React,{useState} from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
const items = [
    {
        src: "../images/caruselimg.jpg",
        caption: 'O`ZBEKISTON RESPUBLIKASI\n' +
            '"O`ZDONMAXSULOT" AKSIYADORLIK KOMPANIYASI\n' +
            '"DO`STLIKDONMAXSULOTLARI" AKSIYADORLIK JAMIYATI'
    },
    {
        src:"../images/caruselimg.jpg",
        altText: 'Slide 2',
        caption: 'O`ZBEKISTON RESPUBLIKASI\n' +
            '"O`ZDONMAXSULOT" AKSIYADORLIK KOMPANIYASI\n' +
            '"DO`STLIKDONMAXSULOTLARI" AKSIYADORLIK JAMIYATI'
    },
    {
        src:"../images/caruselimg.jpg",
        altText: 'Slide 3',
        caption: 'O`ZBEKISTON RESPUBLIKASI' +
            '"O`ZDONMAXSULOT" AKSIYADORLIK KOMPANIYASI\n' +
            '"DO`STLIKDONMAXSULOTLARI" AKSIYADORLIK JAMIYATI'
    }
];

const Header = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }
    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });
    return (
        <div className="container-1">
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
            <img className="don-logo" src="../images/logotype%20(111).png" alt=""/>
            <h3 className="text-white text-center">O`ZBEKISTON RESPUBLIKASI <br/>
                "O`ZDONMAXSULOT" AKSIYADORLIK KOMPANIYASI <br/>
                "DO`STLIKDONMAXSULOTLARI" AKSIYADORLIK JAMIYATI</h3>
        </div>
    );

    return (
        <div>

        </div>
    );
};

export default Header;