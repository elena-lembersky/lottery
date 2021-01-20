import React from "react";
import Carousel from "react-elastic-carousel";
import CarouselItem from "../carusel-item/caruselItem";
import CarouselItemWrapper from "../carusel-item-wrapper/caruselItemWrapper";

function CustomCarousel (props) {
    const { data,onNext } = props;
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 5 },
    ];
    if (!data.length) return null;
    return (
        <div className="carousel__container">
            <Carousel breakPoints={breakPoints} pagination={false} onNextStart={onNext} >
                {data.map(item => (
                    React.cloneElement(props.children, {item})
                ))}
            </Carousel>
        </div>
    )
}

export default CustomCarousel;
