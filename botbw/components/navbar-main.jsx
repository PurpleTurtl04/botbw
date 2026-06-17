'use client';
import Link from 'next/link';

import football from '@/public/images/8bitFootball.png';
import Image from 'next/image';

export default function NavbarMain() {
    function closeNavMenu() {
        document.activeElement.blur();
    }

    return (
        <div className='bg-primary flex justify-center shadow-sm'>
            <nav className='3xl:px-2 container'>
                <div className='navbar'>
                    <div className='navbar-start'>
                        <div className='dropdown'>
                            <div
                                tabIndex='0'
                                role='button'
                                className='btn btn-ghost btn-square md:hidden'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    className='inline-block h-7 w-7 stroke-current'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M4 6h16M4 12h16M4 18h16'
                                    ></path>
                                </svg>
                            </div>
                            <ul
                                tabIndex='-1'
                                className='menu menu-sm dropdown-content bg-base-300 rounded-box text-base-content z-1 mt-3 w-32 p-2 shadow'
                            >
                                <li>
                                    <Link
                                        href='/daily-tails'
                                        onClick={closeNavMenu}
                                    >
                                        Daily Tails
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/zoo' onClick={closeNavMenu}>
                                        The Zoo
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/keepers'
                                        onClick={closeNavMenu}
                                    >
                                        The Keepers
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='?modal=open'
                                        scroll={false}
                                        className='btn btn-xs btn-soft btn-primary md:pl-0'
                                        onClick={closeNavMenu}
                                    >
                                        Sign Up
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Link href='/' className='flex items-center gap-1'>
                            <div className='w-10'>
                                <Image
                                    src={football}
                                    alt='8 bit football'
                                    width={0}
                                    height={0}
                                    sizes='100vw'
                                    className='h-auto w-full'
                                />
                            </div>
                            <span className='font-pressStart text-primary-content text-shadow-base-content text-2xl text-shadow-[1px_2px_0_#000] md:pl-0'>
                                BOTBW
                            </span>
                        </Link>
                    </div>
                    <div className='navbar-end hidden md:flex'>
                        <ul className='menu menu-horizontal px-1 lg:gap-2'>
                            <li>
                                <Link
                                    href='/weekly-picks'
                                    className='link after:bg-secondary relative font-bold no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:bg-transparent hover:after:scale-x-100'
                                >
                                    Weekly Picks
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/leaderboard'
                                    className='link after:bg-secondary relative font-bold no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:bg-transparent hover:after:scale-x-100'
                                >
                                    Leaderboard
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/admin'
                                    className='link after:bg-secondary relative font-bold no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:bg-transparent hover:after:scale-x-100'
                                >
                                    Admin
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='?modal=open'
                                    scroll={false}
                                    className='btn btn-sm bg-base-100 font-pressStart hover:bg-base-content hover:text-primary-content font-light'
                                >
                                    Log In
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
