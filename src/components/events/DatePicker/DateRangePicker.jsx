import { useState } from "react";
import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function DateRangePicker({ onDateRangeUpdate }) {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: "selection",
        },
    ]);
    const handleDateRangeUpdate = (dateRange) => {
        setState([dateRange]);
        onDateRangeUpdate(dateRange);
    };

    return (
        <div style={{ maxWidth: "100%" }}>
            <DateRange
                editableDateInputs={true}
                onChange={(item) => handleDateRangeUpdate(item.selection)}
                moveRangeOnFirstSelection={false}
                ranges={state}
                className='w-full'
            />
        </div>
    );
}

export default DateRangePicker;
