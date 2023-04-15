import { Button } from "react-flatifycss";

const EditprofileButton = ({ text }) => {
    const styles = {
        backgroundColor: "white",
        border: "2px solid black",
        borderRadius: "0.5rem",
        boxShadow: "2px 2px #1a1a1a",
    };
    return (
        <div className=' w-1/3 flex justify-center lg:py-3 lg:px-3 md:py-2 md:px-2 sm:py-1 sm:px-2  '>
            <Button style={styles} className='w-full h-16 px-1 transition '>
                <div className='relative flex items-center space-x-4 justify-center'>
                    <span className='block w-max font-semibold tracking-wide text-gray-900 sm:text-base text-sm md:text-lg lg:text-xl '>
                        {text}
                    </span>
                </div>
            </Button>
        </div>
    );
};

export default EditprofileButton;
