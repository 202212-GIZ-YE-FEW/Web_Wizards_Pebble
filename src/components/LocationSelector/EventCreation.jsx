import React from "react";

const EventCreation = () => {
    return (
        <div className='bg-white p-4'>
            <div className='w-full md:w-2/3 mx-auto bg-white rounded-lg p-4 md:p-8 flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2 flex flex-col justify-between flex-grow'>
                    <div className='py-3 mb-4 flex flex-col md:flex-row md:justify-between gap-10'>
                        <div className='w-full pr-20'>
                            <h2
                                className='text-xl font-medium py-1 text-black'
                                style={{ color: "#1A1A1A", fontWeight: 600 }}
                            >
                                Event Description:
                            </h2>
                            <p className='my-1 text-gray-500'>
                                Describe the purpose of your event. Who should
                                join and what will you do at the event?
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
                                placeholder='Please write at least 50 characters'
                                className='w-full h-40 px-3 py-2 rounded border-black shadow focus:border-black focus:outline-none focus:ring-0 focus:ring-black'
                            />
                        </div>
                    </div>

                    <div className='mb-3 flex flex-col gap-5 md:flex-row md:justify-between flex-grow'>
                        <div>
                            <h2
                                className='py-1 text-2xl font-medium font-rubik text-black'
                                style={{ color: "#1A1A1A", fontWeight: 600 }}
                            >
                                Almost Done! Just take a minute to review our
                                guidlines.
                            </h2>

                            <p className='my-2  w-full text-gray-500'>
                                Pebble is all about helping people with the help
                                of volunteers like you. This means that all
                                events should:
                            </p>
                            <ul
                                className='my-1  w-full list-disc pl-5 text-black'
                                style={{ color: "#1A1A1A" }}
                            >
                                <li>
                                    Be transparent about the event’s intentions
                                </li>
                                <li>
                                    Encourage real human interactions in person
                                    or online
                                </li>
                                <li>Have the host present in all events</li>
                            </ul>
                            <p className='my-1 text-gray-400'>
                                You can read more about all of this in our
                                <a
                                    href='#'
                                    className='p-1 text-blue-600 hover:text-primary-200'
                                >
                                    community guidelines.
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className='mb-4 flex w-full flex-col items-center justify-center gap-10 py-3 '>
                        <button
                            className='rounded border border-b-4 border-r-4 border-opacity-100 border-gray-700 shadow-black py-4 px-4 md:w-96 p-4 '
                            style={{ color: "#1A1A1A", fontWeight: 500 }}
                        >
                            Agree with terms and Create Event!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCreation;
