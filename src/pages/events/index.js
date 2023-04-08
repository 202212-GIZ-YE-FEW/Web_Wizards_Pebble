// Translations import
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useState } from "react";

// Component imports
import DateRangePicker from "@/components/events/DatePicker/DateRangePicker";
import Divider from "@/components/Divider";
import Button from "@/components/Button";
import EventCard from "@/components/EventCard/EventCard";

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
            <div className='col-span-4 flex flex-col gap-6 items-center'>
                <DateRangePicker />

                <Divider />
                <div className=''>
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
