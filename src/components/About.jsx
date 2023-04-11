function Brief(props) {
    const { head, brief } = props;
    return (
        <div className='absolute inset-0 mx-auto translate-y-1/4 h-full w-full flex-col items-center justify-center lg:relative'>
            <h2
                className='
                m-1 text-center text-xl mdP:text-3xl font-bold md:m-4 md:text-5xl md:font-bold lg:text-5xl lg:font-bold'
            >
                {head}
            </h2>
            <p
                className='
                text-sm mr-12 ml-12 text-center md:ml-24 md:mr-24 md:text-2xl lg:ml-32 lg:mr-32 lg:text-2xl'
            >
                {brief}
            </p>
        </div>
    );
}

const About = (props) => {
    const { t } = props;

    return (
        <section id='about'>
            <div
                className='relative overflow-hidden  bg-no-repeat  bg-cover w-full top-[-40px] brightness-200 h-[214px] sm:h-[489px] lg:h-[689px] xl:h-[789px] 2xl:h-[889px] before:absolute before:inset-0 before:bg-zinc-50 before:opacity-10'
                style={{
                    backgroundPosition: "center",
                    backgroundImage: "url(/images/about.png)",
                }}
            ></div>
            <Brief head={t("about")} brief={t("brief")} />
        </section>
    );
};

export default About;
