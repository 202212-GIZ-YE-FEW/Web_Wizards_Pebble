const About = () => {
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
        </section>
    );
};

export default About;
