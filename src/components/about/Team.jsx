import Image from "next/image";

import teamInfo from "~/teamInfo.json";

const Team = (props) => {
    const { t } = props;

    const teamCard = teamInfo.map((member) => {
        const teamSocial = member.links.map((link) => {
            return (
                <a key={link.name} href={link.link}>
                    <i
                        className={`fa-brands fa-${link.name} text-white text-lg md:text-2xl mx-2`}
                        aria-hidden='true'
                        title={`${member.name}'s ${link.name} Profile`}
                    ></i>
                </a>
            );
        });
        return (
            <div
                key={member.id}
                className='m-2 h-28 w-28 rounded-2xl lg:bg-secondary-100 bg-[#29C5E6] md:m-4 md:h-56 md:w-56 lg:m-8 lg:h-72 lg:w-72'
            >
                <Image
                    src={`/images/team/${member.image}`}
                    alt={member.name}
                    width={100}
                    height={100}
                    className='w-10 h-10 md:w-20 md:h-20 md:my-4 lg:w-32 lg:h-32 lg:my-6 mx-auto rounded-full mt-2'
                />
                <h4 className='pt-2 pb-2 text-center text-[10px] font-medium md:pb-2 md:pt-2 md:text-[24px]'>
                    {member.name}
                </h4>
                <div className='flex justify-center'>{teamSocial}</div>
            </div>
        );
    });
    return (
        <section id='team' className='relative'>
            <div className='m-4 p-5 min-h-[320px] rounded-3xl bg-[#fef1e6] md:m-20 md:min-h-[900px] lg:m-8'>
                <h5 className='text-center mb-4'>{t("ourTeam")}</h5>
                <h2 className='p-4 text-center text-2xl md:p-8 md:text-4xl font-bold lg:p-12 lg:text-5xl lg:font-bold m-1 md:m-4 font-sans'>
                    Web Wizard
                </h2>
                <div className='flex flex-wrap justify-around'>{teamCard}</div>
            </div>
        </section>
    );
};

export default Team;
