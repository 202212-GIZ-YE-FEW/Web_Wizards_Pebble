import Image from "next/image";

import teamInfo from "~/teamInfo.json";

const Team = (props) => {
    const { t } = props;

    const teamCard = teamInfo.map((member) => {
        const teamSocial = member.links.map((link) => {
            return (
                <a key={link.name} href={link.link}>
                    <i
                        className={`fa-brands fa-${link.name} text-white text-lv m-2`}
                        aria-hidden='true'
                        title={`${member.name}'s ${link.name} Profile`}
                    ></i>
                </a>
            );
        });
        return (
            <div
                key={member.id}
                className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4'
            >
                <div className='m-8 py-6 rounded-3xl bg-[#29C5E6] lg:bg-[#bdd6d0]'>
                    <div
                        className='
          relative w-20 h-20 rounded-full z-10 mx-auto'
                    >
                        <Image
                            src={`/images/${member.image}`}
                            alt={member.name}
                            width={100}
                            height={100}
                            className='w-[100%] h-[100%] mx-auto rounded-full'
                        />
                    </div>
                    <div className='text-center'>
                        <h4 className='pt-2 pb-2 text-center text-[10px] font-medium md:pb-2 md:pt-2 md:text-[24px]'>
                            {member.name}
                        </h4>
                    </div>
                    <div className='flex justify-center'>{teamSocial}</div>
                </div>
            </div>
        );
    });
    return (
        <section
            id='team'
            className='m-10 min-h-[320px] overflow-hidden rounded-3xl bg-[#fef1e6] md:m-20 md:min-h-[900px] lg:m-44'
        >
            <h2 className='p-4 text-center text-2xl font-medium md:p-8 md:text-4xl md:font-bold lg:p-12 lg:text-5xl lg:font-bold'>
                {t("ourTeam")}
            </h2>
            <div className='flex flex-wrap justify-center'>{teamCard}</div>
        </section>
    );
};

export default Team;
