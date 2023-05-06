import Image from "next/image";

import techs from "~/techs.json";

const Tech = (props) => {
    const { t } = props;

    return (
        <div className='h-screen flex flex-col justify-center'>
            <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
                <h2 className='mb-4 text-center text-2xl md:text-4xl font-bold  lg:text-5xl lg:font-bold m-1 md:m-4 font-sans'>
                    {t("techTitle")}
                </h2>
                <div className='flex flex-wrap justify-center'>
                    {techs.map((tech) => (
                        <div key={tech.tech} className='m-6'>
                            <Image
                                src={`/images/tech/${tech.logo}`}
                                alt={tech.tech}
                                width={100}
                                height={100}
                                className='max-h-12'
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tech;
