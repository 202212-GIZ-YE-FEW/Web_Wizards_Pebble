const SingleDetail = ({ text, icon }) => {
    return (
        <div className='lg:w-full md:w-1/2 sm:w-full mb-4 xs:w-full'>
            <h3 className='font-semibold lg:text-lg text-md'>
                <span className='mr-2 inline-block'>{icon}</span>
                <span className='inline-block'>{text}</span>
            </h3>
        </div>
    );
};

export default SingleDetail;
