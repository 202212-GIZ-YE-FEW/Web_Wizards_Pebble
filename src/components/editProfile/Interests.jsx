import { useState } from "react";
import { useTranslation } from "react-i18next";

import SecondaryTitle from "./SecondaryTitle";
import SingleInterest from "./SingleInterest";
const Interests = () => {
    const { t } = useTranslation("interests");

    const interests = [
        "no_poverty",
        "zero_hunger",
        "good_health",
        "quality_education",
        "gender_equality",
        "clean_water",
        "affordable_energy",
        "decent_work",
        "innovation",
        "reduced_inequalities",
        "sustainable_cities",
        "responsible_consumption",
        "climate_action",
        "life_below_water",
        "life_on_land",
        "peace_justice",
    ];

    const [clickedInterests, setClickedInterests] = useState([]);

    const handleInterestClick = (interest) => {
        if (clickedInterests.includes(interest)) {
            setClickedInterests(clickedInterests.filter((i) => i !== interest));
        } else {
            setClickedInterests([...clickedInterests, interest]);
        }
    };
    // Here is the clolected data from the intersts button @Addeb you can use it later
    console.log(clickedInterests);

    return (
        <div className='mt-10 '>
            {/* <SecondaryTitle text={t("yourInterests")} /> */}
            <div className='flex flex-wrap items-center justify-center overflow-hidden lg:ml-8 lg:mr-8 lg:flex-row lg:flex-wrap lg:items-center lg:justify-center'>
                {interests.map((interest) => (
                    <SingleInterest
                        key={interest}
                        text={t(interest)}
                        onInterestClick={handleInterestClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default Interests;
