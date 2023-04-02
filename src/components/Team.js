import Image from "next/image";
import data from "public/data.json";

const Team = () => {
    const teamCards = data.map((member) => {
        const socialLinks = member.links.map((link) => {
            return (
                <a key={link.name} className='icon' href={link.link}>
                    <i
                        className={`fa-brands fa-${link.name}  fa-2xs text-2xl m-2`}
                        aria-hidden='true'
                        title="Adeeb'a GitHub Profile"
                    ></i>
                </a>
            );
        });
        return (
            <div
                key={member.id}
                className='
          w-1/2
          lg:w-1/3
          xl:w-1/4
          px-4'
            >
                <div
                    className='
            m-8
            p-8
            rounded-3xl
            bg-[#29C5E6]
            lg:bg-[#bdd6d0]'
                >
                    <div
                        className='
              relative
              w-[170px]h-170px]
              rounded-full
              z-10
              mx-auto
              mb-6'
                    >
                        <Image
                            src={`/images/${member.image}`}
                            alt={member.name}
                            width={70}
                            height={70}
                            className='rounded-full relative mx-auto'
                        />
                    </div>
                    <div className='text-center'>
                        <h4
                            className='font-medium
            text-lg
            text-dark
            mb-2'
                        >
                            {member.name}
                        </h4>
                    </div>
                    <div className='flex justify-center'>{socialLinks}</div>
                </div>
            </div>
        );
    });
    return (
        <section
            id='team'
            className='
        p-10
        lg:pt-[120px]
        pb-10
        lg:pb-20'
        >
            <div className='container'>
                <div
                    className='
          flex
          flex-wrap
          -mx-4'
                >
                    <div className='w-full px-4'>
                        <div className='text-center mx-auto mb-[60px] max-w-[620px]'>
                            <h2
                                className='
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[42px]
                  text-dark
                  mb-4
                '
                            >
                                Our Team
                            </h2>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center -mx-4'>
                    {teamCards}
                </div>
            </div>
        </section>
    );
};

export default Team;
