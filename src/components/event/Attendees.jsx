import SingleAttendees from "./SingleAttendees";
import Title from "./Title";
const Attendees = (props) => {
    const eventData = props.eventData;

    return (
        <div className='order-2 lg:w-1/3 w-full lg:ml-12 md:py-0 py-6'>
            <Title text='Attendees:' />
            <div className='flex flex-wrap lg:justify-start'>
                {eventData?.attendees?.map((attende, index) => (
                    <SingleAttendees key={index} name={attende} />
                ))}
            </div>
        </div>
    );
};

export default Attendees;
