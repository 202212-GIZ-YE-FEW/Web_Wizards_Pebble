import Image from "next/image";

import { GetStartedButton } from "@/components/mini";

import heroImage from "~/landing/hero.svg";

function LandingTitle(props) {
    const { children } = props;
    return (
        <h1 className='text-black-100 md:tracking-wide leading-[50px] text-5xl font-medium font-sans'>
            {children}
        </h1>
    );
}

function LandingDescription(props) {
    const { children } = props;
    return (
        <p className='text-2xl text-black-50 leading-7 md:tracking-[0.1px]'>
            {children}
        </p>
    );
}

export default function Hero(props) {
    const { t } = props;
    return (
        <header className='container flex flex-col-reverse gap-y-5 justify-center items-center lg:flex-row lg:gap-x-5 lg:gap-y-0'>
            <div className='flex flex-col items-center text-center lg:items-start rtl:lg:text-right ltr:lg:text-left gap-y-5'>
                <LandingTitle>{t("landingTitle")}</LandingTitle>
                <LandingDescription>
                    {t("landingDescription")}
                </LandingDescription>
                <GetStartedButton>{t("landingStart")}</GetStartedButton>
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
