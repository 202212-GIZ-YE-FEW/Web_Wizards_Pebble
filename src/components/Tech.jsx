import React from "react";

const Tech = (props) => {
    const { t } = props;

    return (
        <section id='tech' className='m-16 md:m-36'>
            <h2 className='mb-2 text-center text-2xl font-bold md:mb-4 md:text-4xl lg:mb-4 lg:text-4xl'>
                {t("techTitle")}
            </h2>
            <p className='text-center'>{t("techBrief")}</p>
        </section>
    );
};

export default Tech;
