import Image from "next/image";
import { Button } from "react-flatifycss";

import heroImage from "~/landing/hero.svg";

function Title(props) {
    const { text } = props;
    return (
        <h1 className='text-black-100 tracking-wide leading-[50px] text-5xl font-medium font-sans'>
            {text}
        </h1>
    );
}

function Description(props) {
    const { text } = props;
    return (
        <p className='text-2xl text-black-50 leading-7 tracking-[0.1px]'>
            {text}
        </p>
    );
}

function GetStartedButton(props) {
    const { text } = props;
    return (
        <Button className='text-white font-medium bg-[#2F7DA9] shadow-none h-[52px] w-[166px] rounded-lg'>
            {text}
        </Button>
    );
}

export default function Hero(props) {
    const { t } = props;
    return (
        <header className='container flex flex-col-reverse gap-y-5 justify-center items-center lg:flex-row lg:gap-x-5 lg:gap-y-0'>
            <div className='flex flex-col items-center text-center lg:items-start rtl:lg:text-right ltr:lg:text-left gap-y-5'>
                <Title text={t("landingTitle")} />
                <Description text={t("landingDescription")} />
                <GetStartedButton text={t("landingStart")} />
            </div>
            <Image
                src={heroImage}
                alt='Five people standing together in a farm'
                height={638}
                width={638}
            />
        </header>
    );
}
