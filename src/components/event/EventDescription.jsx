import Title from "./Title";

const EventDescription = (props) => {
    const eventData = props.eventData;

    return (
        <div className='order-1 lg:w-7/12 w-full px-2'>
            <Title text='Eevent Description:' />
            <p className='  lg:text-lg  md:text-md'>{eventData.description}</p>
        </div>
    );
};

export default EventDescription;
