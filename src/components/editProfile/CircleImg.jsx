const CircleImg = (props) => {
    const { letter } = props;
    return (
        <div className='flex items-center justify-center w-32 h-32 md:w-36 md:h-36 lg:w-64 lg:h-64 rounded-full bg-black-100 text-white text-3xl font-bold'>
            <span className=''>{letter}</span>
        </div>
    );
};

export default CircleImg;
