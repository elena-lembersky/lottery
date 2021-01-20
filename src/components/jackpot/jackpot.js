import React from "react";
import { mFormatter } from '../../utils/currencyFormatter';

function Jackpot (props) {
    const {amount, currency} = props;

    return (
        <div data-role="jackpot" className="text">
            {mFormatter(amount,currency)}
        </div>
    );
}

export default Jackpot;