// Translations import
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

// Component imports
import DateRangePicker from "@/components/events/DatePicker/DateRangePicker";

function Events() {
    return (
        <div className='container mx-auto grid grid-cols-12 gap-4'>
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
            <div className='text-white bg-black col-span-4'>
                <DateRangePicker />

                <div className='h-1 w-full bg-black-100 rounded-full my-8'></div>
            </div>

            {/* PAGE EVENTS LIST SECTION */}
            <p className='col-span-8 text-white bg-red-400'>EVENTS LIST</p>
        </div>
    );
}

export default Events;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "events"])),
            // Will be passed to the page component as props
        },
    };
}
