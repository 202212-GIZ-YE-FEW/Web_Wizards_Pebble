import React, { useRef, useState } from "react";

import Input from "./LocationInput";

const LocationSelectors = ({ label, t }) => {
    const [locationName, setLocationName] = useState("");

    const inputElementRef = useRef(null);

    const handleLocationNameChange = (event) => {
        setLocationName(event.target.value);
    };

    const handleLocationChange = () => {
        const newLocationName = prompt("Enter new location name:");
        setLocationName(newLocationName);
        inputElementRef.current.focus();
    };

    return (
        <div className='bg-white'>
            <div className='w-full md:w-2/3 mx-auto bg-white rounded-lg p-8 flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2 flex flex-col justify-between'>
                    <div className='mb-4'>
                        <h4
                            className='text-2xl md:text-1xl font-rubik font-bold mb-2 text-black'
                            style={{ color: "#1A1A1A" }}
                        >
                            {t("chooseLocation")}
                        </h4>
                        <p
                            className='text-gray-700'
                            style={{ color: "#878787" }}
                            dangerouslySetInnerHTML={{
                                __html: t("locationDescription"),
                            }}
                        ></p>
                    </div>
                    <Input
                        placeholder={t("locationPlaceholder")}
                        value={locationName}
                        onChange={handleLocationNameChange}
                        inputRef={inputElementRef}
                    />
                </div>
                <div className='w-full md:w-1/2 flex flex-col justify-between md:ml-4 mt-4 md:mt-0'>
                    <div className='flex flex-col mb-4'>
                        <label
                            htmlFor='location'
                            className='text-3xl md:text-6xl font-bold mb-2 text-black'
                            style={{ color: "#1A1A1A" }}
                        >
                            {locationName ? locationName : label || "izmir"}
                        </label>
                        <a
                            href='#'
                            onClick={handleLocationChange}
                            className='text-xl md:text-2x1 text-blue-500 hover:text-blue-700 font-rubik'
                            style={{ color: "#0000FF" }}
                        >
                            {t("changeLocation")}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationSelectors;
