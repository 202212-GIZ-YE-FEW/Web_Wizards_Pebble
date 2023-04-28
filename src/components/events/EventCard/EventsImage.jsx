const EventsImages = ({ eventImg }) => {
    return (
        <div className='border-2 rounded-4 overflow-hidden  h-28 w-48 sm:h-40 sm:w-64'>
            <img
                className='object-fill rounded-8 h-28 w-48 sm:h-40 sm:w-64'
                src={eventImg}
                alt='Card image'
            />
        </div>
    );
};

export default EventsImages;
