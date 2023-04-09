import SecondaryTitle from "./SecondaryTitle";
import SingleInterest from "./SingleInterest";

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
    return (
        <div className='mt-10 '>
            <SecondaryTitle text={t("yourInterests")} />
            <div className='flex flex-wrap justify-evenly'>
                {interests.map((interest) => (
                    <SingleInterest key={interest} text={t(interest)} />
                ))}
            </div>
        </div>
    );
};

export default Interests;
