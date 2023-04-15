const SaveButton = ({ text, className }) => {
    return (
        <div className='px-3 py-2 lg:py-4 '>
            <button
                className={`w-36 h-16 lg:w-56 bg-primary-200  text-white font-semibold rounded-lg text-sm lg:text-md px-3 sm:px-5 py-3  ${className}`}
            >
                {text}
            </button>
        </div>
    );
};

export default SaveButton;
