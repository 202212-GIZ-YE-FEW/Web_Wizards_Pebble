import Link from "next/link";
import { withTranslation } from "next-i18next";

import Logo from "@/components/Logo";

function Footer(props) {
    const { t } = props;
    return (
        <footer className='sm:h-[180px] h-[449px] bg-primary-200 mt-10'>
            <div className='container flex flex-col lg:flex-row items-center min-h-full justify-evenly sm:justify-between'>
                <Link href='/'>
                    <Logo />
                </Link>
                <div className='flex flex-col gap-y-4 mr-1'>
                    <div className='flex justify-center gap-x-12'>
                        <Link
                            href='/events'
                            className='font-extrabold !text-black-100'
                        >
                            {t("events")}
                        </Link>
                        <Link
                            href='/about'
                            className='font-extrabold !text-black-100'
                        >
                            {t("about")}
                        </Link>
                        <Link
                            href='/#how_it_works'
                            className='font-extrabold !text-black-100'
                        >
                            {t("howItWorks")}
                        </Link>
                    </div>
                    <div className='text-center'>
                        <p>{t("madeBy")}</p>
                    </div>
                </div>
                <div>
                    <div className='flex gap-7'>
                        <Link href='/api/twitter'>
                            <svg
                                width='30'
                                height='26'
                                viewBox='0 0 35 31'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M29.2578 2.62682C30.9347 2.28241 32.5884 1.39473 32.5884 1.39473C33.3256 1.04856 33.6012 1.31906 33.2037 2.01651C33.2037 2.01651 32.2112 4.07413 30.6949 5.02984C32.1797 4.84341 33.52 4.29924 33.52 4.29924C34.2926 4.0365 34.5007 4.66055 33.9952 5.29167C33.9952 5.29167 32.6842 7.11819 31.25 8.20833C31.2624 8.53802 31.2682 8.47983 31.2682 8.81639C31.2682 20.4922 25.3761 30.8125 10.3789 30.8125C4.74279 30.8125 1.72544 28.5762 1.72544 28.5762C0.269777 27.8354 0.435023 26.9706 2.05229 26.7287C2.05229 26.7287 7.48179 26.2115 9.99381 24.1372C-4.37503 16.9583 1.48563 3.05932 1.48563 3.05932C1.54196 2.25827 2.09591 2.05424 2.68917 2.61642C2.68917 2.61642 9.15627 9.35606 16.7492 9.67889C16.6231 9.11272 16.5601 8.52497 16.5601 7.91857C16.5601 3.64926 19.8479 0.1875 23.8993 0.1875C26.0129 0.1875 27.922 1.12555 29.2578 2.62682Z'
                                    fill='#1A1A1A'
                                />
                            </svg>
                        </Link>
                        <Link href='/api/facebook'>
                            <svg
                                width='30'
                                height='26'
                                viewBox='0 0 33 33'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M0.458252 16.539C0.458252 7.65794 7.64035 0.458374 16.4999 0.458374C25.3595 0.458374 32.5416 7.65794 32.5416 16.539C32.5416 24.8822 26.2031 31.7414 18.09 32.5417C18.1335 32.5341 18.1768 32.5259 18.2201 32.5172V21.1551H22.3906L23.0147 16.3013H18.2201V13.2024C18.2201 11.797 18.6092 10.8396 20.6198 10.8396L23.1836 10.8383V6.49719C22.7401 6.43784 21.2183 6.30589 19.4475 6.30589C15.751 6.30589 13.2198 8.56769 13.2198 12.7219V16.3013H9.03863V21.1551H13.2198V32.2833C5.93343 30.7657 0.458252 24.2933 0.458252 16.539Z'
                                    fill='#1A1A1A'
                                />
                            </svg>
                        </Link>
                        <Link href='/api/google'>
                            <svg
                                width='30'
                                height='26'
                                viewBox='0 0 33 33'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M16.7257 13.3234V18.6752C16.7257 19.2281 17.1736 19.676 17.7264 19.6753C19.5968 19.6728 23.6062 19.6679 25.5201 19.6679C24.1418 23.7872 21.9993 26.0298 16.7257 26.0298C11.3887 26.0298 7.22315 21.7631 7.22315 16.4994C7.22315 11.2369 11.3887 6.97025 16.7257 6.97025C19.5472 6.97025 21.3698 7.94853 23.0413 9.31162C24.3791 7.99225 24.2674 7.8036 27.6714 4.63262C24.7814 2.03886 20.9408 0.458374 16.7257 0.458374C7.74226 0.458374 0.458252 7.63992 0.458252 16.4994C0.458252 25.3589 7.74226 32.5417 16.7257 32.5417C30.154 32.5417 33.4362 21.011 32.3485 13.3234H16.7257Z'
                                    fill='#1A1A1A'
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default withTranslation("common")(Footer);
