import Link from "next/link";

const FormFooter = ({ message, linkText, linkHref }) => {
    return (
        <div className='pb-3 px-3'>
            <p>
                {message}
                {linkHref && (
                    <Link href={linkHref}>
                        <span className='text-gray-800 underline'>
                            {linkText}
                        </span>
                    </Link>
                )}
            </p>
        </div>
    );
};
export default FormFooter;
