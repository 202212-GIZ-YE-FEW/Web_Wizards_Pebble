const SingleAttendees = ({ name }) => {
    const firstLetter = name && name.charAt(0).toUpperCase();

    return (
        <div className='py-2 w-1/3 md:w-1/6 lg:w-1/4'>
            <div className='flex items-center justify-center w-16 h-16 rounded-full bg-black-100 text-white text-md font-bold mb-1'>
                <span>{firstLetter}</span>
            </div>
            <p className='text-sm font-semibold'>{name}</p>
        </div>
    );
};

export default SingleAttendees;
