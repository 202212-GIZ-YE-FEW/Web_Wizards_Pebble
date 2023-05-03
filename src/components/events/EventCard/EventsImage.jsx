const EventsImages = ({ eventImg }) => {
    return (
        <div className='border-2 rounded-lg overflow-hidden h-28 w-48 lg:h-40 lg:w-64 sm:h-36 sm:w-58'>
            <img
                className='object-fill h-28 w-48 lg:h-40 lg:w-64 sm:h-36 sm:w-58'
                src={eventImg}
                alt='Card image'
            />
        </div>
    );
};

export default EventsImages;
