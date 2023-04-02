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
                    brightness-200
                    h-[231px]
                    md:h-[493px]
                    lg:h-[690px]
                    xl:h-[787px]
                    overlay-container
                '
                style={{
                    backgroundPosition: "center",
                    backgroundImage: "url(/images/about.png)",
                }}
            ></div>
            <div
                className='
                    absolute
                    inset-0
                    opacity-60
                    text-center
                    lg:relative
                '
            >
                <h2
                    className='
                        font-black
                        top-1/2
                        text-xl
                        md:text-4xl
                        lg:text-5xl
                        text-dark
                        mt-16
                        mb-4
                        md:mt-52
                    '
                >
                    About Pebble Works
                </h2>
                <p
                    className='
                        text-sm
                        relative
                        mx-auto
                        w-1/2
                        md:text-xl
                        lg:text-3xl
                    '
                >
                    Body placeholder for text paragraph. A paragraph is a
                    self-contained unit of text dealing with a particular point
                    or idea.
                </p>
            </div>
        </section>
    );
};

export default About;
