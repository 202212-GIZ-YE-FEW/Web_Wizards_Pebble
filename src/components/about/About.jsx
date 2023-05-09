import Image from "next/image";

function Brief(props) {
    const { head, brief } = props;
    return (
        <div className='absolute inset-0 lg:relative lg:my-28'>
            <div className='flex h-full w-full flex-col items-center justify-center'>
                <h2
                    className='
                    m-1 text-center text-xl font-black md:m-4 md:text-2xl lg:text-4xl font-sans'
                >
                    {head}
                </h2>
                <p
                    className='
                    text-md mx-12 text-center md:mx-24 md:text-2xl lg:mx-32 lg:text-2xl font-sans'
                >
                    {brief}
                </p>
            </div>
        </div>
    );
}

const About = (props) => {
    const { t } = props;

    return (
        <section id='about'>
            <div className='relative'>
                <Image
                    src='/Images/about.png'
                    alt='About Page Image'
                    width={100}
                    height={100}
                    className='w-full -mt-10'
                    objectFit='contain'
                    layout='responsive'
                />
                <Brief head={t("about")} brief={t("brief")} />
            </div>
        </section>
    );
};

export default About;
