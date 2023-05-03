import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

import Input from "./LocationInput";
import Interests from "../editProfile/Interests";
import YemenCities from "./YemenCities";
import useFirestore from "@/firebase/firestore";
import useFirebaseStorage from "@/firebase/firestorage";

const EventCreation = ({ label, t }) => {
    const router = useRouter();

    const [dateInput, setDateInput] = useState();
    const [timeInput, setTimeInput] = useState();
    const [clickedInterests, setClickedInterests] = useState([]);
    function handleDate(e) {
        setDateInput(e.target.value);
    }
    function handleTime(e) {
        setTimeInput(e.target.value);
    }
    const [selectedFile, setSelectedFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [{ searchLocation, locationName }, setState] = useState({
        searchLocation: "",
        locationName: "",
        title: "",
    });

    const inputElementRef = useRef(null);

    const handleLocationNameChange = (event) => {
        const selectedCity = event.target.innerText;
        setState({ searchLocation: "", locationName: selectedCity });
        inputElementRef.current.value = "";
    };

    const handleSearch = (e) => {
        const enteredSearchLocation = e.target;
        setState({
            searchLocation: enteredSearchLocation.value,
            locationName: "",
        });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;

        setEventData({ ...eventData, [name]: value });
    };

    const filteredCities = YemenCities.filter((city) => {
        const searchCity = searchLocation.toLowerCase();
        const cityData = city.toLowerCase();
        return (
            searchCity &&
            cityData.includes(searchCity) &&
            searchCity !== cityData
        );
    });
    const createEventDataWithLocation = () => {
        return {
            ...eventData,
            location: locationName ? locationName : searchLocation,
            title: eventData.title,
            description: eventData.description,
            address: eventData.address,
            date: `${dateInput}T${timeInput}`,
        };
    };

    const [eventData, setEventData] = useState({
        location: searchLocation,
        title: "",
        description: "",
        address: "",
        date: `${dateInput}T${timeInput}`,
    });

    const { addDocument } = useFirestore("events");

    const { uploadFile, downloadUrl, error } =
        useFirebaseStorage("eventsPictures");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log("file", file);
        setSelectedFile(file);
        if (file) {
            setIsUploading(true);
            uploadFile(file);
        }
    };

    useEffect(() => {
        if (downloadUrl) {
            // Retrieve download URL from useFirebaseStorage hook
            setEventData({ ...eventData, image: downloadUrl });
            setIsUploading(false);
        }
        setIsUploading(false);
    }, [downloadUrl]);

    const handleSubmit = async (e) => {
        if (!eventData.address || !eventData.title) {
            alert("Please fill out all the required fields.");
            return;
        }
        const eventDataWithLocation = createEventDataWithLocation();
        const result = await addDocument(eventDataWithLocation, eventData);
        if (result.success) {
            console.log("Event added successfully with ID:", result.id);
            window.alert("Event added successfully with ID:", result?.title);

            router.push("/events");
        } else {
            console.error("Error adding event:", result.error);
        }
    };

    return (
        <div className=' w-full md:w-2/3 mx-auto rounded-lg p-2 flex flex-col md:flex-row'>
            <div>
                <div className='flex flex-wrap justify-between '>
                    <div className='flex flex-col mr-13'>
                        <div className='mb-4'>
                            <h4 className='font-sans font-semibold text-black-100 mb-2'>
                                {t("chooseLocation")}
                            </h4>
                            <p
                                className='text-black-50'
                                dangerouslySetInnerHTML={{
                                    __html: t("locationDescription"),
                                }}
                            ></p>
                        </div>
                        <Input
                            id='location'
                            name='Location name'
                            value={searchLocation}
                            onChange={handleSearch}
                            placeholder={t("locationPlaceholder")}
                            inputRef={inputElementRef}
                            className='!rounded-md !border-2 !border-black-100 !bg-white w-80 '
                        />

                        <div>
                            {filteredCities.slice(0, 5).map((city, index) => (
                                <div
                                    key={index}
                                    onClick={handleLocationNameChange}
                                    className='cursor-pointer p-2 px-4 hover:bg-primary-200'
                                >
                                    {city}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='w-full md:w-1/2 flex flex-col justify-between'>
                        <div className='flex flex-col mb-4'>
                            <label
                                htmlFor='location'
                                className='text-6xl md:text-6xl font-semibold mb-2 text-black-100'
                            >
                                {locationName ? locationName : label || "izmir"}
                            </label>
                            <a
                                href='#'
                                onClick={handleLocationNameChange}
                                className='!text-secondary-400'
                            >
                                {t("changeLocation")}
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-center md:justify-between mb-6'>
                    <div className='w-full md:w-auto md:mr-2 mb-2 md:mb-0 md:flex-1 md:mr-0'>
                        <Input
                            id='address'
                            name='address'
                            value={eventData.address}
                            onChange={handleChange}
                            placeholder={t("locationAddress")}
                            className='!rounded-md !border-2 !border-black-100 !bg-white w-full px-1'
                        />
                    </div>

                    <div className='w-full md:w-auto md:mr-1'>
                        <div className='relative'>
                            <Input
                                type='time'
                                value={timeInput}
                                onChange={handleTime}
                                className='!w-full !rounded-md !border-black-100 !bg-white !border-2 pl-8'
                            />
                            <label
                                htmlFor='time'
                                className='absolute top-0 left-0 px-1 text-black-50'
                                style={{
                                    top: "30%",
                                    transform: "translateY(-50%)",
                                }}
                            >
                                {t("eventTime")}
                            </label>
                        </div>
                    </div>
                    <div className='w-full md:w-auto md:mr-2'>
                        <div className='relative'>
                            <Input
                                type='date'
                                id='date'
                                value={dateInput}
                                onChange={handleDate}
                                className='block w-full !rounded-md !border-black-100 !bg-white !border-2 pl-8'
                            />
                            <label
                                htmlFor='date'
                                className='absolute top-0 left-0 px-1 text-black-50'
                            >
                                {t("eventDate")}
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='text-black-100 font-sans font-semibold text-xl'>
                        {t("EventType.eventTypeTitle")}
                    </h2>
                    <p className='text-black-50 mt-1'>
                        {t("EventType.EventTypeDescription")}
                    </p>
                </div>
                <div className='md:flex md:justify-between'>
                    <Interests
                        t={t}
                        clickedInterests={clickedInterests}
                        setClickedInterests={setClickedInterests}
                        className='!text-primary-200 !border-primary-200'
                        button='hidden'
                    />
                </div>

                <div className='mb-2 flex flex-col gap-10 py-3 md:flex-row md:justify-between '>
                    <div className='w-full'>
                        <h2 className='py-1 text-xl text-black-100 font-sans font-semibold'>
                            {t("CreateEventInfo.eventTitle")}
                        </h2>
                        <p className='my-1 text-black-50 md:w-full'>
                            {t("CreateEventInfo.eventTitleDescription")}
                        </p>
                        <div className='max-w-screen-xl mx-auto'>
                            <div className='py-5 md:max-w-96 lg:max-w-128 '>
                                <Input
                                    id='title'
                                    name='title'
                                    value={eventData.title}
                                    onChange={handleChange}
                                    placeholder={t(
                                        "CreateEventInfo.eventTitlePlaceholder"
                                    )}
                                    className='!w-full md:w-96 !rounded !border-2 !border-black-100  !bg-white'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-2 mb-4 flex flex-col md:flex-row md:justify-between gap-10'>
                    <div className='w-full'>
                        <h2 className='text-xl py-1 text-black-100 font-sans font-semibold'>
                            {t("CreateEventInfo.eventDescriptionHeading")}
                        </h2>
                        <p className='my-1 text-black-50'>
                            {t("CreateEventInfo.eventDescriptionText")}
                        </p>
                        <textarea
                            value={eventData.description}
                            name='description'
                            onChange={handleChange}
                            placeholder={t(
                                "CreateEventInfo.eventDescriptionPlaceholder"
                            )}
                            className='!w-full !h-40  !rounded  !border-2 !border-black-100  !bg-white'
                        />
                    </div>
                </div>
                <div className='py-2 pr-4 md:pr-1 mb-4 md:flex md:flex-row md:justify-between md:flex-wrap'>
                    <div className='w-full md:w-2/2'>
                        <h2 className='text-xl text-black-100 font-sans font-semibold py-1'>
                            {t("CreateEventInfo.eventImageHeading")}
                        </h2>
                        <p className='text-black-50 my-1'>
                            {t("CreateEventInfo.eventImageText")}
                        </p>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <div className='relative py-2'>
                            <input
                                name='image'
                                onChange={handleFileChange}
                                type='file'
                                accept='image/x-png,image/gif,image/jpeg'
                                className='!w-full !h-12  !rounded  !border-2 !border-black-100  !bg-white'
                            />
                        </div>
                    </div>
                </div>

                <div className='mb-3 flex flex-col gap-5 md:flex-row md:justify-between flex-grow'>
                    <div>
                        <h2 className='py-2 text-2xl font-semibold text-black-100 font-sans'>
                            {t("Guidelines.guidelinesHeading")}
                        </h2>

                        <p className='my-2 w-full text-black-50'>
                            {t("Guidelines.guidelinesText")}
                        </p>
                        <ul className='my-1 w-full list-disc pl-5 !text-black-100'>
                            <li>{t("Guidelines.list1")}</li>
                            <li>{t("Guidelines.list2")}</li>
                            <li>{t("Guidelines.list3")}</li>
                        </ul>
                        <p className='my-1 text-black-50'>
                            {t("Guidelines.guidelinesCommunity")}
                            <a href='#' className='p-1 !text-secondary-400'>
                                {t("Guidelines.guidelinesLink")}
                            </a>
                        </p>
                    </div>
                </div>
                <div className='mb-4 flex w-full flex-col items-center justify-center gap-10 py-3'>
                    <button
                        className='rounded border border-b-4 border-r-4 border-opacity-100 border-gray-700 shadow-black py-4 px-4 md:w-96 p-4 text-black-100 font-sans font-semibold hover:bg-primary-200'
                        onClick={handleSubmit}
                    >
                        {t("Guidelines.submitButton")}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventCreation;
