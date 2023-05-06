import React from "react";

const Tech = (props) => {
    const { t } = props;

    return (
        <section id='tech' className='m-16 md:m-36'>
            <h5 className='text-center mb-4'>{t("techStack")}</h5>
            <h2 className='mb-2 text-center font-sans text-2xl font-bold md:mb-4 md:text-4xl lg:mb-4 lg:text-4xl'>
                {t("techTitle")}
            </h2>
            <p className='text-center'>
                React.js/Next.js for coding, TailwindCSS for styyling and Jest
                for testing
            </p>
        </section>
    );
};

export default Tech;
