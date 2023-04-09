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
    const handleInterestsFilterUpdate = (interest) => {
        if (selectedInterests.includes(interest)) {
            setSelectedInterests(
                selectedInterests.filter((l) => l !== interest)
            );
        } else {
            setSelectedInterests([...selectedInterests, interest]);
        }
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
                        classes='arrow-button arrow-down'
                        ariaLabel='Arrow button'
                    >
                        Change Interest
                    </Button>

                    <Button
                        classes='arrow-button arrow-down'
                        ariaLabel='Arrow button'
                    >
                        Change Location
                    </Button>

                    <Button
                        dropDownButton={{
                            controls: "offcanvasBottom",
                            target: "#offcanvasBottom",
                        }}
                        ariaLabel='Arrow button'
                        classes='arrow-button arrow-down'
                    >
                        Change Date
                    </Button>
                    <div
                        class='invisible rounded fixed bottom-0 left-0 right-0 z-[1045] flex h-[40%] max-h-full max-w-full translate-y-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none'
                        tabindex='-1'
                        style={{
                            borderRadius: "20px 20px 0px 0px",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            borderTop: "2px solid rgba(0, 0, 0, 0.1)",
                        }}
                        id='offcanvasBottom'
                        aria-labelledby='offcanvasBottomLabel'
                        data-te-offcanvas-init
                    >
                        <div class='flex items-center justify-between p-4'>
                            <h3
                                class='mb-0 font-semibold leading-normal text-center w-full text-3xl'
                                id='offcanvasBottomLabel'
                            >
                                Change Date
                            </h3>
                        </div>
                        <div class='small flex-grow overflow-y-auto px-12'>
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
                        Change Location
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
