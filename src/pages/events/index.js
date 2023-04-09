// Translations import
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useState } from "react";

// Component imports
import DateRangePicker from "@/components/events/DatePicker/DateRangePicker";
import Divider from "@/components/Divider";
import Button from "@/components/Button";
import EventCard from "@/components/events/EventCard/EventCard";
import Pagination from "@/components/events/Pagination/Pagination";

const locations = ["İzmir, TR", "İzmir, TRT"];

const interests = [
    "All",
    "Zero Hunger",
    "Good Health and Well Being",
    "Quality Education",
    "No Poverty",
    "Gender Equality",
    "Clean Water and Sanitation",
    "Affordable and Clean Energy",
    "Decent Work and Economic Growth",
    "Industry, Innovation, and Infrastructure",
    "Reduced Inequalities",
    "Sustainable Cities and Communities",
    "Responsible Consumption/ Production",
    "Life Below Water",
    "Life on Land",
    "Peace, Justice and Strong Institutions",
    "Climate Action",
];

function Events() {
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [selectedInterests, setSelectedInterests] = useState([]);

    const handleLocationsFilterUpdate = (location) => {
        if (selectedLocations.includes(location)) {
            setSelectedLocations(
                selectedLocations.filter((l) => l !== location)
            );
        } else {
            setSelectedLocations([...selectedLocations, location]);
        }
    };

    // const handleInterestsFilterUpdate = (interest) => {
    //     if (selectedInterests.includes(interest)) {
    //         setSelectedInterests(
    //             selectedInterests.filter((l) => l !== interest)
    //         );
    //     } else {
    //         setSelectedInterests([...selectedInterests, interest]);
    //     }
    // };

    const handleInterestsFilterUpdate = (eventOrInterest) => {
        let interest;

        if (typeof eventOrInterest === "string") {
            // This is the first case, where interest is passed directly as a string parameter
            interest = eventOrInterest;
        } else {
            // This is the second case, where the function is called with an event object
            interest = eventOrInterest.target.value;
        }

        if (selectedInterests.includes(interest)) {
            setSelectedInterests(
                selectedInterests.filter((l) => l !== interest)
            );
        } else {
            setSelectedInterests([...selectedInterests, interest]);
        }
        console.log(selectedInterests);
    };

    return (
        <div className='container mx-auto md:grid grid-cols-12 sm:gap-x-8 lg:gap-x-16'>
            {/* PAGE TITLE HEADER */}
            <div className='col-span-12  mx-auto mt-5 mb-12'>
                <div className='flex items-start flex-col gap-3'>
                    <h1 className='text-6xl font-extrabold text-black-100'>
                        Welcome, John!
                    </h1>
                    <p className='text-md text-start'>
                        Explore and Join Events
                    </p>
                </div>
            </div>

            {/* PAGE FILTER SECTION AT MOBILE */}
            <div className='mobile'>
                <Divider />
                <div className='flex justify-between'>
                    <Button
                        dropDownButton={{
                            controls: "offcanvasInterest",
                            target: "#offcanvasInterest",
                        }}
                        ariaLabel='Arrow button'
                        classes='arrow-button arrow-down'
                    >
                        Change Interest
                    </Button>
                    <div
                        className='invisible rounded fixed bottom-0 left-0 right-0 z-[1045] flex h-[40%] max-h-full max-w-full translate-y-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none'
                        tabIndex='-1'
                        style={{
                            borderRadius: "20px 20px 0px 0px",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            borderTop: "2px solid rgba(0, 0, 0, 0.1)",
                        }}
                        id='offcanvasInterest'
                        aria-labelledby='offcanvasInterestLabel'
                        data-te-offcanvas-init
                    >
                        <div className='flex items-center justify-between p-4'>
                            <h3
                                className='mb-0 font-semibold leading-normal text-center w-full text-3xl'
                                id='offcanvasInterestLabel'
                            >
                                Change Interest
                            </h3>
                        </div>
                        <div className='small flex-grow overflow-y-auto px-12'>
                            {interests.map((interest, index) => (
                                <label className='checkbox-wrapper' key={index}>
                                    <input
                                        id={interest}
                                        value={interest}
                                        name={interest}
                                        type='checkbox'
                                        checked={selectedInterests.includes(
                                            interest
                                        )}
                                        onChange={handleInterestsFilterUpdate}
                                    />
                                    <span className='check'></span>
                                    {interest}
                                </label>
                            ))}
                        </div>
                    </div>

                    <Button
                        dropDownButton={{
                            controls: "offcanvasDate",
                            target: "#offcanvasDate",
                        }}
                        ariaLabel='Arrow button'
                        classes='arrow-button arrow-down'
                    >
                        Change Date
                    </Button>
                    <div
                        className='invisible rounded fixed bottom-0 left-0 right-0 z-[1045] flex h-[40%] max-h-full max-w-full translate-y-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none'
                        tabIndex='-1'
                        style={{
                            borderRadius: "20px 20px 0px 0px",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            borderTop: "2px solid rgba(0, 0, 0, 0.1)",
                        }}
                        id='offcanvasDate'
                        aria-labelledby='offcanvasDateLabel'
                        data-te-offcanvas-init
                    >
                        <div className='flex items-center justify-between p-4'>
                            <h3
                                className='mb-0 font-semibold leading-normal text-center w-full text-3xl'
                                id='offcanvasDateLabel'
                            >
                                Change Date
                            </h3>
                        </div>
                        <div className='small flex-grow overflow-y-auto px-12'>
                            <DateRangePicker />
                        </div>
                    </div>
                </div>
                <Divider />
            </div>

            {/* PAGINATION SECTION AT MOBILE */}
            <div className='col-span-12 mobile'>
                <Pagination />
            </div>

            {/* PAGE FILTER SECTION AT TABLET AND DESKTOP */}
            <div className='col-span-4 flex flex-col gap-6 items-center desktop'>
                <DateRangePicker />

                <Divider />

                <div className='w-full'>
                    <h4 className='text-center font-bold underline mb-3'>
                        Change Location
                    </h4>
                    {locations.map((location, index) => (
                        <Button
                            handleClick={handleLocationsFilterUpdate}
                            classes={`w-full ${
                                selectedLocations.includes(location)
                                    ? "!bg-[#fbc495]"
                                    : ""
                            }`}
                            key={index}
                        >
                            {location}
                        </Button>
                    ))}
                </div>
                <Divider />
                <div className=''>
                    <h4 className='text-center font-bold underline mb-3'>
                        Change Interest
                    </h4>
                    {interests.map((interest, index) => (
                        <Button
                            classes={`w-full ${
                                selectedInterests.includes(interest)
                                    ? "!bg-[#fbc495]"
                                    : ""
                            }`}
                            key={index}
                            handleClick={handleInterestsFilterUpdate}
                        >
                            {interest}
                        </Button>
                    ))}
                </div>
            </div>

            {/* PAGE EVENTS LIST SECTION */}
            <div className='col-span-8'>
                <EventCard />
            </div>

            {/* PAGINATION SECTION AT TABLET AND DESKTOP */}
            <div className='col-span-12 desktop'>
                <Pagination />
            </div>
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
