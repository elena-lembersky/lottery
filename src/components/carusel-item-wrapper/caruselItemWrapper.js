import React from "react";

function CarouselItemWrapper (props) {
    return (
        <div className="carousel__item">{props.children}</div>
    )
}

export default CarouselItemWrapper;