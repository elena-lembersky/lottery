import React from "react";
import LogoWrapper from "../logo-wrapper/logoWrapper";
import Timer from "../timer/timer";
import Jackpot from "../jackpot/jackpot";
import Button from "../button/index";

function caruseLotolItem (props) {
    const {item} = props;
    const {id, name, end_date, logo_src, jackpot, currency} = item;

    return (
        <div className="carousel__item" key={id} data-item-id={id}>
            <LogoWrapper src={logo_src} title={name} />
            <Jackpot amount={jackpot} currency={currency} />
            <Button text="Play Now" dataRole="link" link={`/lottery/${id}`}/>
            <Timer date={end_date} />
        </div>
    )
}

export default caruseLotolItem;