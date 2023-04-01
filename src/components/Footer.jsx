import Image from "next/image";
import Link from "next/link";

import logo from "~/logo.svg";

export default function Footer() {
    return (
        <footer className='h-[180px] bg-primary-200 min-w-full absolute'>
            <div className='container mx-auto flex flex-col md:flex-row items-center min-h-full justify-between'>
                <Image
                    src={logo}
                    alt='PebbleWork Logo'
                    priority
                    className='h-[32.32px] w-p[100.75px] md:h-[69.13px] md:w-[215.44px] mr-1 flex-1 md:flex-none'
                />
                <div className='flex flex-col gap-y-4'>
                    <div className='flex justify-center gap-x-12'>
                        <Link
                            href='/events'
                            className='font-extrabold'
                            //Overriding flatify with tailwindcss classes doesn't work
                            style={{ color: "black" }}
                        >
                            Event
                        </Link>
                        <Link
                            href='/about'
                            className='font-extrabold'
                            style={{ color: "black" }}
                        >
                            About
                        </Link>
                        <Link
                            href='#how_it_works'
                            className='font-extrabold'
                            style={{ color: "black" }}
                        >
                            How it works
                        </Link>
                    </div>
                    <div className='text-center'>
                        <p>Made with ♥ by Web Wizards</p>
                    </div>
                </div>
                <div>
                    <div className='flex gap-7 md:mr-24'>
                        <Link href='/api/facebook'>
                            <svg
                                width='22'
                                height='22'
                                viewBox='0 0 22 22'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M0 11.0267C0 4.93684 4.92487 0 11 0C17.0751 0 22 4.93684 22 11.0267C22 16.7478 17.6536 21.4512 12.0904 22C12.1201 21.9948 12.1499 21.9892 12.1796 21.9832V14.1921H15.0394L15.4673 10.8638H12.1796V8.73875C12.1796 7.77507 12.4464 7.11854 13.825 7.11854L15.5831 7.11767V4.1409C15.279 4.10021 14.2355 4.00973 13.0212 4.00973C10.4864 4.00973 8.7508 5.56067 8.7508 8.4093V10.8638H5.88369V14.1921H8.7508V21.8228C3.75441 20.7821 0 16.344 0 11.0267Z'
                                    fill='#1A1A1A'
                                />
                            </svg>
                        </Link>
                        <Link href='/api/facebook'>
                            <svg
                                width='22'
                                height='22'
                                viewBox='0 0 22 22'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M0 11.0267C0 4.93684 4.92487 0 11 0C17.0751 0 22 4.93684 22 11.0267C22 16.7478 17.6536 21.4512 12.0904 22C12.1201 21.9948 12.1499 21.9892 12.1796 21.9832V14.1921H15.0394L15.4673 10.8638H12.1796V8.73875C12.1796 7.77507 12.4464 7.11854 13.825 7.11854L15.5831 7.11767V4.1409C15.279 4.10021 14.2355 4.00973 13.0212 4.00973C10.4864 4.00973 8.7508 5.56067 8.7508 8.4093V10.8638H5.88369V14.1921H8.7508V21.8228C3.75441 20.7821 0 16.344 0 11.0267Z'
                                    fill='#1A1A1A'
                                />
                            </svg>
                        </Link>
                        <Link href='/api/facebook'>
                            <svg
                                width='22'
                                height='22'
                                viewBox='0 0 22 22'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M0 11.0267C0 4.93684 4.92487 0 11 0C17.0751 0 22 4.93684 22 11.0267C22 16.7478 17.6536 21.4512 12.0904 22C12.1201 21.9948 12.1499 21.9892 12.1796 21.9832V14.1921H15.0394L15.4673 10.8638H12.1796V8.73875C12.1796 7.77507 12.4464 7.11854 13.825 7.11854L15.5831 7.11767V4.1409C15.279 4.10021 14.2355 4.00973 13.0212 4.00973C10.4864 4.00973 8.7508 5.56067 8.7508 8.4093V10.8638H5.88369V14.1921H8.7508V21.8228C3.75441 20.7821 0 16.344 0 11.0267Z'
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
