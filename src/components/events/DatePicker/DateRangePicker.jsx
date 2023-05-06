import { useState } from "react";
import { DateRange } from "react-date-range";
import { Button } from "react-flatifycss";

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

    const handleThisWeekClick = () => {
        const startDate = new Date();
        const currentDayOfWeek = startDate.getDay();
        startDate.setDate(startDate.getDate() - currentDayOfWeek + 1);
        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + 6);
        setState([
            {
                startDate,
                endDate,
                key: "selection",
            },
        ]);
        onDateRangeUpdate({ startDate, endDate });
    };

    const handleNextWeekClick = () => {
        const startDate = new Date(state[0].startDate);
        startDate.setDate(startDate.getDate() + 7);
        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + 6);
        if (endDate.getMonth() !== startDate.getMonth()) {
            endDate.setDate(0);
        }
        setState([
            {
                startDate,
                endDate,
                key: "selection",
            },
        ]);
        onDateRangeUpdate({ startDate, endDate });
    };

    return (
        <div>
            <DateRange
                editableDateInputs={true}
                onChange={(item) => handleDateRangeUpdate(item.selection)}
                moveRangeOnFirstSelection={false}
                ranges={state}
            />
            <div className='flex justify-between mt-3'>
                <Button className='w-5/12' onClick={handleThisWeekClick}>
                    This Week
                </Button>
                <Button className='w-5/12' onClick={handleNextWeekClick}>
                    Next Week
                </Button>
            </div>
        </div>
    );
}

export default DateRangePicker;
