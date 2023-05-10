import { useTranslation } from "react-i18next";

import SingleInterest from "./SingleInterest";
const Interests = (props) => {
    const { clickedInterests, setClickedInterests } = props;
    const { t } = useTranslation("interests");

    const interests = [
        "Zero Hunger",
        "No Poverty",
        "Good Health and Well Being",
        "Quality Education",
        "Gender Equality",
        "Clean Water and Sanitation",
        "Affordable and Clean Energy",
        "Decent Work and Economic Growth",
        "Industry, Innovation, and Infrastructure",
        "Reduced Inequalities",
        "Sustainable Cities and Communities",
        "Responsible Consumption/ Production",
        "Life Below Water",
        "Life on Land",
        "Peace, Justice and Strong Institutions",
        "Climate Action",
    ];

    const handleInterestClick = (interest) => {
        if (clickedInterests.includes(interest)) {
            setClickedInterests(clickedInterests.filter((i) => i !== interest));
        } else {
            setClickedInterests([...clickedInterests, interest]);
        }
    };

    return (
        <div className='mt-10 '>
            <div className='flex flex-wrap items-center justify-center overflow-hidden lg:ml-8 lg:mr-8 lg:flex-row lg:flex-wrap lg:items-center lg:justify-center'>
                {interests.map((interest) => (
                    <SingleInterest
                        key={interest}
                        text={t(interest)}
                        id={interest}
                        clicked={clickedInterests.includes(interest)}
                        onInterestClick={handleInterestClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default Interests;
