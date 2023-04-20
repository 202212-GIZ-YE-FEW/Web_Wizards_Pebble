import Link from "next/link";

import {
    BorderlessButton,
    Description,
    GetStartedButton,
    Title,
} from "@/components/mini";

export default function Ending(props) {
    const { t } = props;
    return (
        <section className='container my-60'>
            <div className='flex flex-col place-items-center text-center'>
                <Title className='font-medium tracking-[0.18px] lg:h-[88px] lg:w-[500px]'>
                    {t("endingTitle")}
                </Title>
                <Description className='lg:h-[33px] lg:w-[792px] !mb-20'>
                    {t("endingDescription")}
                </Description>
                <div className='flex flex-col md:flex-row md:gap-x-10'>
                    <Link href='/events'>
                        <GetStartedButton>{t("endingButton")}</GetStartedButton>
                    </Link>
                    <Link href='/about'>
                        <BorderlessButton>
                            {t("endingAboutButton")}
                        </BorderlessButton>
                    </Link>
                </div>
            </div>
        </section>
    );
}
