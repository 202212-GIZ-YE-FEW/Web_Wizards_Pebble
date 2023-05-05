import Image from "next/image";
import Link from "next/link";

import { BorderlessButton, Description, Title } from "@/components/mini";

import attendImage from "~/landing/attend.svg";
import boyImage from "~/landing/boy.svg";
import girlImage from "~/landing/girl.svg";

function Cards(props) {
    const { t } = props;
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-20 lg:gap-x-10'>
            <Card
                title={`${t("registerTitle")}`}
                description={`${t("registerDescription")}`}
                img={boyImage}
                height={237.71}
                width={274}
                alt='Boy with notebook.'
                buttonText={`${t("registerButton")}`}
                buttonTo='/signup'
            />
            <Card
                title={`${t("attendTitle")}`}
                description={`${t("attendDescription")}`}
                img={attendImage}
                height={326.03}
                width={236.42}
                alt='People in an event.'
                buttonText={`${t("attendButton")}`}
                buttonTo='/events'
            />
            <Card
                title={`${t("organizeTitle")}`}
                description={`${t("organizeDescription")}`}
                img={girlImage}
                height={245.75}
                width={216}
                alt='Girl with a speaker'
                buttonText={`${t("organizeButton")}`}
                buttonTo='/'
            />
        </div>
    );
}

function Card(props) {
    const {
        title,
        description,
        img,
        alt,
        height,
        width,
        buttonText,
        buttonTo,
    } = props;
    return (
        <div className='flex flex-col items-center text-center'>
            <Image
                src={img}
                alt={alt}
                width={height}
                height={width}
                className='h-full'
            />
            <h3 className='text-black-100 font-medium mt-2 text-3xl font-sans'>
                {title}
            </h3>
            <Description className='!my-4'>{description}</Description>
            <Link href={buttonTo}>
                <BorderlessButton>{buttonText}</BorderlessButton>
            </Link>
        </div>
    );
}

export default function How(props) {
    const { t } = props;
    return (
        <section className='container mt-40' id='how_it_works'>
            <Title className='pb-32'>{t("howItWorks")}</Title>
            <Cards t={t} />
        </section>
    );
}
