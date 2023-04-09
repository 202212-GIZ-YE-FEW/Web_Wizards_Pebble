import { Button } from "react-flatifycss";

const SingleInterest = ({ text }) => {
    const styles = {
        border: "2px solid black",
        borderRadius: "0.5rem",
        boxShadow: "2px 2px #1a1a1a",
    };

    return (
        <div className=' w-[33%] flex justify-center lg:py-3 lg:px-3 md:py-2 md:px-2 py-1 px-1 '>
            <Button
                style={styles}
                className='bg-white w-full lg:h-18 h-16 px-1 transition focus:bg-primary-100'
            >
                <div className='relative flex items-center justify-center '>
                    <p className='block w-max font-semibold text-gray-900 text-xs py-1 '>
                        {text}
                    </p>
                </div>
            </Button>
        </div>
    );
};

export default SingleInterest;
