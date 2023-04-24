import { Loading } from "react-flatifycss";

const SignButton = (props) => {
    const { text, loading } = props;
    const isLoading = loading ? "" : "hidden";
    return (
        <div className='px-3 flex gap-x-4'>
            <button className='w-full lg:w-auto bg-primary-200 focus:outline-none text-white font-semibold rounded-lg text-md px-5 py-3 disabled:opacity-40'>
                {text}
            </button>
            <Loading spinner size='lg' theme='orange' className={isLoading} />
        </div>
    );
};
export default SignButton;
