import SingleAttendees from "./SingleAttendees";
import Title from "./Title";
const Attendees = (props) => {
    const eventData = props.eventData;

    return (
        <div class='order-2 lg:w-1/3 w-full lg:ml-12 py-8'>
            <Title text='Attendees:' />
            <div className='flex flex-wrap lg:justify-start'>
                {eventData.attendees.map((attende, index) => (
                    <SingleAttendees key={index} name={attende} />
                ))}
            </div>
        </div>
    );
};

export default Attendees;
