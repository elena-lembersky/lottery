import Text from '../text/Text';
import dayjs from "dayjs";

function EndDate (props) {
    const {date} = props;

    const date1 = dayjs(date)
    const date2 = dayjs()

    const diffDays = date1.diff(date2, 'day');
    //const diffDays = date1.diff(date2, 'day');


    return (
        <Text role="end-date" text={diffDays}/>
    )
}
export default EndDate;