import React from "react";
import Carousel from "react-elastic-carousel";

function CustomCarousel (props) {
    const { data,onNext } = props;
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 480, itemsToShow: 2 },
        { width: 768, itemsToShow: 4 },
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
