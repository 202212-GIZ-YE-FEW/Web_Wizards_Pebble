import { Button } from "react-flatifycss";

const SaveButton = ({ text, className }) => {
    return (
        <Button
            className={`!w-36 !h-16 lg:!w-56 !bg-primary-200  !text-white !font-semibold !rounded-lg !text-sm lg:!text-md !px-3 sm:!px-5 !py-3 !shadow-none !border-none ${className}`}
        >
            {text}
        </Button>
    );
};

export default SaveButton;
