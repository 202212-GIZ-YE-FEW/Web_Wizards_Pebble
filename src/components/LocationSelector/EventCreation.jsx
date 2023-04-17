import React from "react";
import Input from "./LocationInput";
import Interests from "../editProfile/Interests";
const EventCreation = ({ t }) => {
    return (
        <div className='bg-white p-4'>
            <div className='w-full md:w-2/3 mx-auto bg-white rounded-lg p-4 md:p-8 flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2 flex flex-col justify-between flex-grow'>
                    {/* <div className='pt-3 flex flex-col'>
                        <div>
                            <h2 className='text-black font-medium text-xl py-1'>
                                {t("EventType.eventTypeTitle")}
                            </h2>
                            <p className='text-gray-500 pr-20 mt-1'>
                                {t("EventType.EventTypeDescription")}
                            </p>
                            <div className='md:flex md:justify-between'>
                                <Interests
                                    beforeClick='text-primary-200  border-primary-200'
                                    button='hidden'
                                />
                            </div>
                        </div>
                        <div className='flex justify-between md:flex md:justify-between'></div>
                    </div> */}

                    <div className='mb-4 flex   flex-col gap-10 py-3 md:flex-row md:justify-between'>
                        <div>
                            <h2
                                className='py-1 text-xl font-medium  font-rubik text-black'
                                style={{
                                    color: "#1A1A1A",
                                    fontWeight: 600,
                                    fontSize: 25,
                                }}
                            >
                                {t("CreateEventInfo.eventTitle")}
                            </h2>
                            <p className='my-1 pr-20 text-gray-500 md:w-full'>
                                {t("CreateEventInfo.eventTitleDescription")}
                            </p>
                            <div className='max-w-screen-xl mx-auto'>
                                <div className='py-5 md:max-w-96 lg:max-w-128'>
                                    <Input
                                        placeholder={t(
                                            "CreateEventInfo.eventTitlePlaceholder"
                                        )}
                                        className='w-full md:w-96 rounded border border-black px-3 py-2 shadow focus:border-black focus:outline-none focus:ring-0 focus:ring-black'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-2 mb-4 flex flex-col md:flex-row md:justify-between gap-10'>
                        <div className='w-full'>
                            <h2
                                className='text-xl font-medium py-1 text-black'
                                style={{ color: "#1A1A1A", fontWeight: 600 }}
                            >
                                {t("CreateEventInfo.eventDescriptionHeading")}
                            </h2>
                            <p className='my-1 text-gray-500'>
                                {t("CreateEventInfo.eventDescriptionText")}
                            </p>
                            <textarea
                                style={{
                                    resize: "none",
                                    color: "#1A1A1A",
                                    backgroundColor: "white",
                                    borderColor: "#1A1A1A",
                                    borderRadius: "8px",
                                    borderWidth: "2px",
                                }}
                                placeholder={t(
                                    "CreateEventInfo.eventDescriptionPlaceholder"
                                )}
                                className='w-full h-40 px-3 py-2 rounded border-black shadow focus:border-black focus:outline-none focus:ring-0 focus:ring-black'
                            />
                        </div>
                    </div>
                    <div className='py-3 pr-4 md:pr-20 mb-4 md:flex md:flex-row md:justify-between md:flex-wrap '>
                        <div className='w-full md:w-2/2'>
                            <h2
                                className='text-xl md:text-2xl font-medium text-black py-1'
                                style={{ color: "#1A1A1A", fontWeight: 600 }}
                            >
                                {t("CreateEventInfo.eventImageHeading")}
                            </h2>
                            <p className='text-gray-500 my-1'>
                                {t("CreateEventInfo.eventImageText")}
                            </p>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <div className='relative py-2'>
                                <input
                                    type='file'
                                    accept='image/x-png,image/gif,image/jpeg'
                                    style={{
                                        resize: "none",
                                        color: "#1A1A1A",
                                        backgroundColor: "white",
                                        borderColor: "#1A1A1A",
                                        borderRadius: "8px",
                                        borderWidth: "2px",
                                        width: "570px",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mb-3 flex flex-col gap-5 md:flex-row md:justify-between flex-grow'>
                        <div>
                            <h2
                                className='py-1 text-2xl font-medium font-rubik text-black'
                                style={{ color: "#1A1A1A", fontWeight: 600 }}
                            >
                                {t("Guidelines.guidelinesHeading")}
                            </h2>

                            <p className='my-2  w-full text-gray-500'>
                                {t("Guidelines.guidelinesText")}
                            </p>
                            <ul
                                className='my-1  w-full list-disc pl-5 text-black'
                                style={{ color: "#1A1A1A" }}
                            >
                                <li>{t("Guidelines.list1")}</li>
                                <li>{t("Guidelines.list2")}</li>
                                <li>{t("Guidelines.list3")}</li>
                            </ul>
                            <p className='my-1 text-gray-400'>
                                {t("Guidelines.guidelinesCommunity")}
                                <a
                                    href='#'
                                    className='p-1 text-blue-600 hover:text-primary-200'
                                >
                                    {t("Guidelines.guidelinesLink")}
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className='mb-4 flex w-full flex-col items-center justify-center gap-10 py-3 '>
                        <button
                            className='rounded border border-b-4 border-r-4 border-opacity-100 border-gray-700 shadow-black py-4 px-4 md:w-96 p-4 '
                            style={{ color: "#1A1A1A", fontWeight: 500 }}
                        >
                            {t("Guidelines.submitButton")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCreation;
