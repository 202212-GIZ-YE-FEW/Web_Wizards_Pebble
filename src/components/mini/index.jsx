import { Button } from "react-flatifycss";

export function BorderlessButton(props) {
    const { children } = props;
    return (
        <Button className='!rounded-none !text-black-100 !bg-transparent !shadow-none after:content-[url("/arrow.svg")] after:mt-[1px] ltr:after:ml-4 after:absolute rtl:after:rotate-180 rtl:after:mr-4'>
            {children}
        </Button>
    );
}

export function Title(props) {
    const { className = "", children } = props;
    return (
        <h2
            className={`text-center text-black-100 text-4xl font-sans ${className}`}
        >
            {children}
        </h2>
    );
}

export function Description(props) {
    const { className = "", children } = props;
    return (
        <p className={`text-black-50 text-xl leading-8 ${className}`}>
            {children}
        </p>
    );
}
