const OrDivider = ({ text }) => {
    return (
        <div className='flex mt-7 order-3 items-center text-center mb-4'>
            <hr className=' text-gray-400  w-full ' />
            <label className='block font-medium text-sm text-gray-700 ml-6 mr-6'>
                {text}
            </label>
            <hr className=' text-gray-400 w-full' />
        </div>
    );
};
export default OrDivider;
