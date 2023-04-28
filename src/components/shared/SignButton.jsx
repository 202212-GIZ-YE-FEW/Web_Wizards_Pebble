import { Loading } from "react-flatifycss";

const SignButton = (props) => {
    const { text, loading } = props;
    const isLoading = loading ? "" : "hidden";
    return (
        <button className='w-full lg:w-auto bg-primary-200 focus:outline-none text-white font-semibold rounded-lg text-md px-5 py-3 flex gap-x-2 items-center'>
            {text}
            <Loading spinner size='sm' theme='orange' className={isLoading} />
        </button>
    );
};
export default SignButton;
