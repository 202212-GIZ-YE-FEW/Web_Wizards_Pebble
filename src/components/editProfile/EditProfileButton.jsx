import { Button } from "react-flatifycss";

const EditprofileButton = (props) => {
    const { text, onClick, className = "" } = props;
    return (
        <Button
            className={`!w-36 !h-16 !py-2 !px-1 !transition !bg-white !border-2 !border-[black] !rounded-lg !shadow-[2px_2px_#1A1A1A] ${className}`}
            onClick={onClick}
            type='button'
        >
            {text}
        </Button>
    );
};

export default EditprofileButton;
