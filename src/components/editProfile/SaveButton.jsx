import { Loading } from "react-flatifycss";
const SaveButton = ({ text, className, htmlFor, loading }) => {
    return (
        <label
            className={`!w-36 !h-16 lg:!w-56 !bg-primary-200  !text-white !font-semibold !rounded-lg !text-sm lg:!text-md lg:!p-5 !p-2 !shadow-none !border-none !cursor-pointer !text-center !flex !items-center !justify-center !gap-x-1 ${className}`}
            htmlFor={htmlFor}
        >
            {text}
            <Loading spinner size='sm' theme='orange' hidden={!loading} />
        </label>
    );
};

export default SaveButton;
