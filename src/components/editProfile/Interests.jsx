import { useState } from "react";

import SecondaryTitle from "@/components/editProfile/SecondaryTitle";
import SingleInterest from "@/components/editProfile/SingleInterest";
const Interests = ({ t }) => {
    const interests = [
        "noPoverty",
        "goodHealth",
        "qualityEducation",
        "genderEquality",
        "cleanWater",
        "affordableEnergy",
        "decentWork",
        "innovation",
        "reducedInequalities",
        "sustainableCities",
        "responsibleConsumption",
        "lifeBelowWater",
        "lifeOnLand",
        "peaceJustice",
    ];
    const [clickedInterests, setClickedInterests] = useState([]);

    const handleInterestClick = (interest) => {
        if (clickedInterests.includes(interest)) {
            setClickedInterests(clickedInterests.filter((i) => i !== interest));
        } else {
            setClickedInterests([...clickedInterests, interest]);
        }
    };

    return (
        <div className='mt-10 '>
            <SecondaryTitle text={t("yourInterests")} />
            <div className='flex flex-wrap justify-evenly'>
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
