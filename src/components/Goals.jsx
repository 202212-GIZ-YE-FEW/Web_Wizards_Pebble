import Image from "next/image";

import { Description, Title } from "@/components/mini";

import goal1 from "~/landing/goal1.svg";
import goal2 from "~/landing/goal2.svg";
import goal3 from "~/landing/goal3.svg";
import goal4 from "~/landing/goal4.svg";
import goal5 from "~/landing/goal5.svg";
import goal6 from "~/landing/goal6.svg";
import goal7 from "~/landing/goal7.svg";
import goal8 from "~/landing/goal8.svg";
import goal9 from "~/landing/goal9.svg";
import goal10 from "~/landing/goal10.svg";
import goal11 from "~/landing/goal11.svg";
import goal12 from "~/landing/goal12.svg";
import goal13 from "~/landing/goal13.svg";
import goal14 from "~/landing/goal14.svg";
import goal15 from "~/landing/goal15.svg";
import goal16 from "~/landing/goal16.svg";
import goal17 from "~/landing/goal17.svg";
import wheel from "~/landing/wheel.svg";

function getImages() {
    return [
        {
            src: goal1,
            alt: 'Family with title "No poverty"',
        },
        {
            src: goal2,
            alt: 'Cup with soup in it with title "ZERO HUNGER"',
        },
        {
            src: goal3,
            alt: 'Heart with title "GOOD HEALTH AND WELL-BEING"',
        },
        {
            src: goal4,
            alt: 'Book open with title "QUALITY EDUACTION"',
        },
        {
            src: goal5,
            alt: 'Male and female gender symbol with title "GENDER EQUITY"',
        },
        {
            src: goal6,
            alt: 'Water dripping down with title "CLEAN WATER AND SANITATION"',
        },
        {
            src: goal7,
            alt: 'Sun with shutdown symbol with title "AFFORDABLE AND CLEAN ENERGY"',
        },
        {
            src: goal8,
            alt: 'Line goning up with title "DECENT WORK AND ECONOMIC GROWTH"',
        },
        {
            src: goal9,
            alt: 'three cubes with title "INDUSTRY, INNOVATION AND INFRASTRUCTURE"',
        },
        {
            src: goal10,
            alt: 'Equal symbol with title "REDUCED INEQUALITIES"',
        },
        {
            src: goal11,
            alt: 'four buildings with title "SUSTAINABLE CITIES AND COMMUNITIES"',
        },
        {
            src: goal12,
            alt: 'Infinity arrow with title "RESPONSIBLE CONSUMPTION AND PRODUCTION"',
        },
        {
            src: goal13,
            alt: 'Eye with globe as pupil with title "CLIMATE ACTION"',
        },
        {
            src: goal14,
            alt: 'Fish with title "LIFE BELOW WATER"',
        },
        {
            src: goal15,
            alt: 'Tree with title "LIFE ON LAND"',
        },
        {
            src: goal16,
            alt: 'Bird with title "PEACE, JUSTICE and STRONG institutions"',
        },
        {
            src: goal17,
            alt: 'Circles intersection with title "Partnerships for the goals"',
        },
        {
            src: wheel,
            alt: "SDG Wheel",
            height: 142,
            width: 142,
        },
    ];
}

export default function Goals(props) {
    const { t } = props;

    return (
        <section className='container text-center mt-40'>
            <Title>{t("goalsTitle")}</Title>
            <Description className='!my-10'>
                {t("goalsDescription")}
            </Description>
            <div className='grid grid-cols-3 lg:grid-cols-6 gap-y-14'>
                {getImages().map((goal, index) => (
                    <Image
                        src={goal.src}
                        alt={goal.alt}
                        height={goal.height || 152}
                        width={goal.width || 180}
                        key={index}
                    ></Image>
                ))}
            </div>
        </section>
    );
}
