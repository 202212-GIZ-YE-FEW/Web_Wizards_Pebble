const SignTitle = ({ text }) => {
    return (
        <div className='flex justify-center lg:justify-start'>
            <h3 className='font-semibold !font-sans mb-8 tracking-tight text-custom-blue lg:text-gray-800 text-3xl order-first'>
                {text}
            </h3>
        </div>
    );
};
export default SignTitle;
