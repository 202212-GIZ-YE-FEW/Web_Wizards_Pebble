import Title from "./Title";

const EventDescription = (props) => {
    const eventData = props.eventData;

    return (
        <div className='order-1 lg:w-7/12 w-full px-2 font-sans text-black-100'>
            <Title text='Event Description:' />
            <p className='  lg:text-lg  text-black-50 font-sans  md:text-md'>
                {eventData?.description}
            </p>
        </div>
    );
};

export default EventDescription;
