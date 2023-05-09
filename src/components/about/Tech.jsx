import Image from "next/image";

import techs from "~/techs.json";

const Tech = (props) => {
    const { t } = props;

    return (
        <section id='tech'>
            <div className='flex flex-col justify-center'>
                <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <h5 className='text-center mb-4'>{t("techStack")}</h5>
                    <h2 className='p-4 text-center text-2xl md:p-8 md:text-4xl font-bold lg:p-12 lg:text-5xl lg:font-bold m-1 md:m-4 font-sans'>
                        {t("techTitle")}
                    </h2>
                    <div className='flex flex-wrap justify-center items-center'>
                        {techs.map((tech) => (
                            <div key={tech.id} className='m-6'>
                                <Image
                                    src={`/Images/tech/${tech.image}`}
                                    alt={tech.name}
                                    width={100}
                                    height={100}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tech;
