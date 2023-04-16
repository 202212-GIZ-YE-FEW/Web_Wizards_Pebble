import React, { useState } from "react";
import { DateRange } from "react-date-range";

// Styles
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
// import css from "./DateRangePicker.module.scss";

function DateRangePicker() {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: "selection",
        },
    ]);

    return (
        <div style={{ maxWidth: "100%" }}>
            <DateRange
                editableDateInputs={true}
                onChange={(item) => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
                className='w-full'
            />
        </div>
    );
}

export default DateRangePicker;
