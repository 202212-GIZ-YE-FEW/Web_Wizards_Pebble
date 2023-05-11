import Link from "next/link";
import { BorderlessButton } from "@/components/mini";

const FormFooter = ({ message, linkText, linkHref, t }) => {
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
            {linkHref === "/signup" && (
                <BorderlessButton>{t("forgetPassword")}</BorderlessButton>
            )}
        </div>
    );
};
export default FormFooter;
