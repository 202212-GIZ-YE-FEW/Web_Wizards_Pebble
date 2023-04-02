import React from "react";

function Events() {
    return (
        <div className='container mx-auto grid grid-cols-12'>
            {/* PAGE TITLE HEADER */}
            <div className='col-span-12  mx-auto my-5'>
                <div className='flex items-start flex-col gap-3'>
                    <h1 className='text-6xl font-extrabold '>Welcome, John!</h1>
                    <p className='text-sm text-start'>
                        Explore and Join Events
                    </p>
                </div>
            </div>

            {/* PAGE FILTER SECTION */}
            <p className='text-white bg-black col-span-4'>FILTER</p>

            {/* PAGE EVENTS LIST SECTION */}
            <p className=' col-span-8 text-white bg-red-900'>EVENTS LIST</p>
        </div>
    );
}

export default Events;
