import React from "react";
import { timeDiffCalc } from '../../utils/timeDiffCalc'

function Timer (props) {
    const {date} = props;
    const days = timeDiffCalc(new Date(date), new Date());
    return <div data-role="end-date" className="text">{days}</div>
}

export default Timer;