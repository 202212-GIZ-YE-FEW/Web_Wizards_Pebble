function Brief(props) {
    const { head, lineOne, lineTwo } = props;
    return (
        <div
            className='absolute
    inset-0
    w-[250px]
    mx-auto
    my-[40px]
    translate-y-1/2
    text-center
    sm:w-[450px]
    lg:relative
    lg:w-[650px]
  '
        >
            <h2
                className='
      relative
      font-black
      text-black
      mb-4
      sm:text-3xl
      lg:text-5xl
    '
            >
                {head}
            </h2>
            <p
                className='
      relative
      mx-auto
      sm:text-2xl
      lg:text-4xl
      leading-relaxed
      sm:leading-relaxed
      text-body-color
    '
            >
                {lineOne} <br /> {lineTwo}
            </p>
        </div>
    );
}

const About = (props) => {
    const { t } = props;

    return (
        <section id='about'>
            <div
                className='
          relative
          overflow-hidden 
          bg-no-repeat 
          bg-cover 
          w-full
          top-[-40px]
          brightness-200
          h-[214px]
          sm:h-[489px]
          lg:h-[689px]
          xl:h-[789px]
          2xl:h-[889px]
          before:absolute
          before:inset-0
          before:bg-stone-400
          before:opacity-20
        '
                style={{
                    backgroundPosition: "center",
                    backgroundImage: "url(/images/about.png)",
                }}
            ></div>

            <Brief
                head={`${t("about")}`}
                lineOne={`${t("briefLineOne")}`}
                lineTwo={t("briefLineTwo")}
            />
        </section>
    );
};

export default About;
