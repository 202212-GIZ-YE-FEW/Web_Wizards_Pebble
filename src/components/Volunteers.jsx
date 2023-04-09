import { Description, RoundedImage, Title } from "@/components/mini";

import volunteerImage from "~/landing/volunteer.svg";

function Volunteer(props) {
    const { name, occupation, imageSrc, imageAlt, description } = props;
    return (
        <div className='flex flex-col items-center gap-y-10'>
            <RoundedImage
                src={imageSrc}
                alt={imageAlt}
                height={72}
                width={72}
            />
            <h3 className='text-2xl font-sans'>
                {name}, {occupation}
            </h3>
            <Description>{description}</Description>
        </div>
    );
}

export default function Volunteers(props) {
    const { t } = props;
    return (
        <section className='container text-center mt-40'>
            <Title>{t("volunteersTitle")}</Title>
            <div className='flex flex-col gap-y-10 md:flex-row md:gap-y-0 justify-center my-32 gap-x-5'>
                {[0, 1, 2].map((i) => {
                    return (
                        <Volunteer
                            name={t("volunteerName")}
                            occupation={t("volunteerOccupation")}
                            imageSrc={volunteerImage}
                            imageAlt='Person with hand on face'
                            description={t("volunteerDescription")}
                            key={i}
                        />
                    );
                })}
            </div>
        </section>
    );
}
