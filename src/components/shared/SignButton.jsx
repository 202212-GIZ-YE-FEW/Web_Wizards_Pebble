const SignButton = ({ text }) => {
    return (
        <div className='px-3'>
            <button className='w-full lg:w-auto bg-primary-200 focus:outline-none text-white font-semibold rounded-lg text-md px-5 py-3 '>
                {text}
            </button>
        </div>
    );
};
export default SignButton;
