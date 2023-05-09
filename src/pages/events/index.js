// Firebase imports
// Translations imports
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// React imports
import React, { useState } from "react";

// Component imports
import Button from "@/components/Button";
import Divider from "@/components/Divider";
import DateRangePicker from "@/components/events/DatePicker/DateRangePicker";
import EventCard from "@/components/events/EventCard/EventCard";
import Pagination from "@/components/events/Pagination/Pagination";
import YemenCities from "@/components/LocationSelector/YemenCities";

import { useAuthContext } from "@/context/AuthContext";
import useFirestore from "@/firebase/firestore";
import { ArrowButton } from "react-flatifycss";

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
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);
    const { documents, getNextPage, getPrevPage } = useFirestore("events");
    const events = documents;
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [selectedInterests, setSelectedInterests] = useState(["All"]);
    const [selectedDateRange, setSelectedDateRange] = useState(null);
    const { t } = useTranslation("events");
    const handlePageChange = (pageIndex) => {
        setOffset(pageIndex * limit);
    };

    //! Filter by location

    const handleLocationsFilterUpdate = (eventOrLocation) => {
        let interest;

        if (typeof eventOrLocation === "string") {
            // This is the first case, where interest is passed directly as a string parameter
            interest = eventOrLocation;
        } else {
            // This is the second case, where the function is called with an event object
            interest = eventOrLocation.target.value;
        }

        if (selectedLocations.includes(interest)) {
            setSelectedLocations(
                selectedLocations.filter((l) => l !== interest)
            );
        } else {
            setSelectedLocations([...selectedLocations, interest]);
        }
    };

    // ! Filter by Interests

    const handleInterestsFilterUpdate = (eventOrInterest) => {
        let interest;

        if (typeof eventOrInterest === "string") {
            // This is the first case, where interest is passed directly as a string parameter
            interest = eventOrInterest;
        } else {
            // This is the second case, where the function is called with an event object
            interest = eventOrInterest.target.value;
        }

        if (interest === "All") {
            setSelectedInterests([interest]);
        } else {
            setSelectedInterests((prevSelectedInterests) => {
                // Remove "All" from the selected interests if it is included
                const newSelectedInterests = prevSelectedInterests.includes(
                    "All"
                )
                    ? prevSelectedInterests.filter((i) => i !== "All")
                    : prevSelectedInterests;

                // Add or remove the selected interest as necessary
                if (newSelectedInterests.includes(interest)) {
                    return newSelectedInterests.filter((i) => i !== interest);
                } else {
                    return [...newSelectedInterests, interest];
                }
            });
        }
    };

    //! Filter By Date

    const handleDateRangeUpdate = (dateRange) => {
        setSelectedDateRange(dateRange);
    };

    const { user } = useAuthContext();
    const firstName = user?.displayName.split(" ")[0];

    //!Filter Match Event
    const filteredEvents = events.filter((event) => {
        if (
            selectedLocations.length === 0 &&
            selectedInterests.includes("All") &&
            !selectedDateRange
        ) {
            // If no filters are selected, show all events
            return true;
        } else {
            // Otherwise, check if event matches selected locations and interests and Date
            const locationMatch =
                selectedLocations.length === 0 ||
                (event?.location && selectedLocations.includes(event.location));
            const interestMatch =
                selectedInterests.includes("All") ||
                event?.interests?.some((i) => selectedInterests.includes(i));
            const dateMatch =
                !selectedDateRange ||
                (new Date(event?.date?.seconds * 1000) >=
                    selectedDateRange.startDate &&
                    new Date(event?.date?.seconds * 1000) <=
                        selectedDateRange.endDate);

            return locationMatch && interestMatch && dateMatch;
        }
    });
    return (
        <div className='container mx-auto md:grid grid-cols-12 sm:gap-x-8 lg:gap-x-16'>
            {/* PAGE TITLE HEADER */}
            <div className='col-span-12  mx-auto mt-5 mb-12'>
                <div className='flex items-start flex-col gap-3'>
                    <h1 className='text-6xl font-extrabold text-black-100'>
                        {t("welcome")}, {firstName}
                    </h1>
                    <p className='text-md text-start'>
                        {t("exploreAndJoinEvents")}
                    </p>
                </div>
            </div>

            {/* PAGE FILTER SECTION AT MOBILE ..*/}
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
                        {t("changeInterests")}
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
                                {t("changeInterest")}
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
                            controls: "offcanvasLocation",
                            target: "#offcanvasLocation",
                        }}
                        ariaLabel='Arrow button'
                        classes='arrow-button arrow-down'
                    >
                        {t("changeLocation")}
                    </Button>
                    <div
                        className='invisible rounded fixed bottom-0 left-0 right-0 z-[1045] flex h-[40%] max-h-full max-w-full translate-y-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none'
                        tabIndex='-1'
                        style={{
                            borderRadius: "20px 20px 0px 0px",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            borderTop: "2px solid rgba(0, 0, 0, 0.1)",
                        }}
                        id='offcanvasLocation'
                        aria-labelledby='offcanvasLocationLabel'
                        data-te-offcanvas-init
                    >
                        <div className='flex items-center justify-between p-4'>
                            <h3
                                className='mb-0 font-semibold leading-normal text-center w-full text-3xl'
                                id='offcanvasLocationLabel'
                            >
                                {t("changeLocation")}
                            </h3>
                        </div>
                        <div className='small flex-grow overflow-y-auto px-12'>
                            {YemenCities.map((interest, index) => (
                                <label className='checkbox-wrapper' key={index}>
                                    <input
                                        id={interest}
                                        value={interest}
                                        name={interest}
                                        type='checkbox'
                                        checked={selectedLocations.includes(
                                            interest
                                        )}
                                        onChange={handleLocationsFilterUpdate}
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
                        {t("changeDate")}
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
                                {t("changeDate")}
                            </h3>
                        </div>
                        <div className='small flex-grow overflow-y-auto px-12'>
                            <DateRangePicker
                                onDateRangeUpdate={handleDateRangeUpdate}
                            />
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
                <DateRangePicker onDateRangeUpdate={handleDateRangeUpdate} />

                <Divider />

                <div className='w-full'>
                    <h4 className='text-center font-bold underline mb-3'>
                        {t("changeLocation")}
                    </h4>
                    {YemenCities.map((location, index) => (
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
                        {t("changeInterest")}
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
                {filteredEvents.map((event) => (
                    <EventCard
                        t={t}
                        event={event}
                        keyValue={event.id}
                        key={event.id}
                    />
                ))}
            </div>

            {/* PAGINATION SECTION AT TABLET AND DESKTOP */}
            <div className='col-span-12 pagination desktop'>
                <Pagination
                    handleNextPage={getNextPage}
                    handlePrevPage={getPrevPage}
                />
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
