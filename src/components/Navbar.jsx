import Link from "next/link";
import { usePathname } from "next/navigation";
import { withTranslation } from "next-i18next";
import {
    Button,
    Dropdown,
    DropdownBody,
    DropdownButton,
} from "react-flatifycss";

import Logo from "@/components/Logo";

import { useAuthContext } from "@/context/AuthContext";

import { RoundedImage } from "./mini";
import { signOut } from "../../lib/useAuth";

import person from "~/person.svg";

//TODO:  do dyanmic routers
//
// read paths of pages dir and extract their respective name and href

const routes = [
    { name: "events", href: "/events" },
    { name: "about", href: "/about" },
];

function Nav(props) {
    const { name, t, href, className = "" } = props;
    return (
        <Link className={className} href={href}>
            {t(name)}
        </Link>
    );
}

function SwitchLangDropDown(props) {
    const { to, lang } = props;
    return (
        <Dropdown autoClose offsetX={-40} id='lang-dropdown'>
            <DropdownButton buttonStyle={false} className='!text-white'>
                {lang.toUpperCase()}
            </DropdownButton>
            <DropdownBody
                isMenu
                className='shadow-[2px_2px_0px_#1A1A1A] border-2 border-[#1A1A1A] rounded-none'
            >
                {
                    //TODO: do dynamic languages
                }
                <li className='menu-item'>
                    <Link
                        href={to}
                        locale='en'
                        onClick={() => (document.dir = "ltr")}
                    >
                        English
                    </Link>
                </li>
                <li className='menu-item'>
                    <Link
                        href={to}
                        locale='ar'
                        onClick={() => (document.dir = "rtl")}
                    >
                        العربية
                    </Link>
                </li>
            </DropdownBody>
        </Dropdown>
    );
}

function MobileDropDown(props) {
    const { t } = props;
    return (
        <Dropdown
            autoClose
            id='mobile-dropdown'
            className='md:hidden place-self-center'
            offsetX={65}
        >
            <DropdownButton buttonStyle={false} hasArrow={false}>
                <svg
                    width='25'
                    height='19'
                    viewBox='0 0 25 19'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M22.955 0.664062H1.67799C-0.348392 0.664062 -0.348392 2.69044 1.67799 2.69044H22.955C24.9813 2.69044 24.9813 0.664062 22.955 0.664062ZM1.67799 8.76958H22.955C24.9813 8.76958 24.9813 10.796 22.955 10.796H1.67799C-0.348392 10.796 -0.348392 8.76958 1.67799 8.76958ZM1.67799 16.8751H22.955C24.9813 16.8751 24.9813 18.9015 22.955 18.9015H1.67799C-0.348392 18.9015 -0.348392 16.8751 1.67799 16.8751Z'
                        fill='white'
                    />
                </svg>
            </DropdownButton>
            <DropdownBody
                isMenu
                className='shadow-[2px_2px_0px_#1A1A1A] border-2 border-[#1A1A1A] rounded-none'
            >
                {
                    //TODO: do dynamic languages
                }
                {routes.map((route, index) => {
                    return (
                        <li className='menu-item' key={index}>
                            <Nav
                                t={t}
                                name={
                                    route.name === "events"
                                        ? "allEvents"
                                        : route.name
                                }
                                href={route.href}
                            />
                        </li>
                    );
                })}
                <li className='menu-item'>
                    <Nav t={t} name='howItWorks' href='#howitworks' />
                </li>
                <li className='menu-item'>
                    <Nav t={t} name='signIn' href='/signin' />
                </li>
                <li className='menu-item'>
                    <Nav t={t} name='signUp' href='/signup' />
                </li>
            </DropdownBody>
        </Dropdown>
    );
}

function UserDropDown(props) {
    const { t, user } = props;
    return (
        <Dropdown
            autoClose
            id='user-dropdown'
            offsetX={-60}
            className='place-self-center'
        >
            <DropdownButton buttonStyle={false} hasArrow={false}>
                <RoundedImage
                    src={user.photoURL ? user.photoURL : person}
                    alt='User Profile Picture'
                    height={68}
                    width={68}
                    className='ml-4 max-w-[1.8rem] max-h-[1.8rem] lg:max-h-full lg:max-w-full'
                />
            </DropdownButton>
            <DropdownBody
                isMenu
                className='shadow-[2px_2px_0px_#1A1A1A] border-2 border-[#1A1A1A] rounded-none'
            >
                <li className='menu-item'>
                    <Link href='/events'>{t("viewEvents")}</Link>
                </li>
                <li className='menu-item'>
                    <Link href='/editprofile'>{t("viewProfile")}</Link>
                </li>
                <li className='menu-item'>
                    <Link href='/editprofile'>{t("viewSettings")}</Link>
                </li>
                <li className='menu-item'>
                    <Link onClick={() => signOut()} href='/'>
                        {t("logOut")}
                    </Link>
                </li>
            </DropdownBody>
        </Dropdown>
    );
}

export function Navbar(props) {
    const path = usePathname() || "/";
    const { user } = useAuthContext();
    // const query = useSearchParams();
    const { t, i18n } = props;
    const lang = i18n.language.toUpperCase();

    return (
        <nav className='bg-primary-200 h-[120px] mb-10'>
            <div className='container flex h-full md:justify-between items-center'>
                <MobileDropDown t={t} />
                <Link
                    href='/'
                    className='mr-1 justify-center flex flex-1 md:flex-none'
                >
                    <Logo />
                </Link>
                <div className='flex gap-[10px] !items-center'>
                    {user &&
                        user.emailVerified &&
                        routes.map((route, index) => {
                            return (
                                <Nav
                                    name={route.name}
                                    key={index}
                                    className='hidden md:inline !text-white !text-[22px] !font-medium !px-2 !leading-[30px]'
                                    t={t}
                                    href={route.href}
                                />
                            );
                        })}
                    {(!user || !user.emailVerified) && (
                        <>
                            <Link
                                href='/signin'
                                role='button'
                                className='hover:!no-underline'
                            >
                                <Button className='hidden md:block w-[113px] h-[52px] !rounded-[8px] !py-[11px] !px-[16px] !bg-white !shadow-[2px_2px_0px_#1A1A1A] !border-2 !border-[#1A1A1A] !border-solid !text-black-100'>
                                    {t("signIn")}
                                </Button>
                            </Link>
                            <Link
                                href='/signup'
                                role='button'
                                className='hover:!no-underline'
                            >
                                <Button className='hidden md:block w-[113px] h-[52px] !rounded-[8px] !py-[11px] !px-[16px] !bg-[#2F7DA9] !text-white !shadow-none !border-none'>
                                    {t("signUp")}
                                </Button>
                            </Link>
                        </>
                    )}
                    <div className='hidden md:flex items-center gap-1'>
                        <svg
                            width='28'
                            height='28'
                            viewBox='0 0 28 28'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M14 27.75C21.5939 27.75 27.75 21.5939 27.75 14C27.75 6.40608 21.5939 0.25 14 0.25C6.40608 0.25 0.25 6.40608 0.25 14C0.25 21.5939 6.40608 27.75 14 27.75ZM11.6258 25.2121C9.49226 21.8802 8.30818 18.5222 8.08965 15.1458H2.59824C3.09437 20.1428 6.80075 24.1954 11.6258 25.2121ZM8.08965 12.8542C8.30818 9.47784 9.49226 6.11978 11.6258 2.78795C6.80075 3.80459 3.09437 7.85719 2.59824 12.8542H8.08965ZM19.9104 12.8542C19.6918 9.47784 18.5077 6.11978 16.3742 2.78795C21.1993 3.80459 24.9056 7.85719 25.4018 12.8542H19.9104ZM16.3742 25.2121C18.5077 21.8802 19.6918 18.5222 19.9104 15.1458H25.4018C24.9056 20.1428 21.1993 24.1954 16.3742 25.2121ZM10.3869 12.8542C10.621 9.71035 11.8191 6.54607 14 3.35196C16.1809 6.54607 17.379 9.71035 17.6131 12.8542H10.3869ZM14 24.648C11.8191 21.4539 10.621 18.2896 10.3869 15.1458H17.6131C17.379 18.2896 16.1809 21.4539 14 24.648Z'
                                fill='white'
                            />
                        </svg>
                        <SwitchLangDropDown to={path} lang={lang} />
                    </div>
                    {user && user.emailVerified && (
                        <UserDropDown user={user} t={t} />
                    )}
                </div>
            </div>
        </nav>
    );
}

export default withTranslation("common")(Navbar);
