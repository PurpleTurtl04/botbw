import Link from 'next/link';

import football from '@/public/images/8bitFootball.png';
import Image from 'next/image';

export default function NavbarAlt() {
    function closeNavMenu() {
        document.activeElement.blur();
    }

    return (
        <div className='bg-base-200 z-10 flex justify-center shadow-sm'>
            <nav className='3xl:px-2 container'>
                <div className='navbar'>
                    <div className='navbar-start w-2/5 lg:w-1/2'>
                        <div className='dropdown'>
                            <div
                                tabIndex='0'
                                role='button'
                                className='btn hover:bg-primary btn-square md:hidden'
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
                                className='menu menu-sm dropdown-content bg-secondary rounded-box text-primary-content z-1 mt-3 w-32 p-2 shadow'
                            >
                                <li>
                                    <Link
                                        href='/weekly-picks'
                                        onClick={closeNavMenu}
                                        className='hover:bg-neutral/15'
                                    >
                                        Weekly Picks
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/leaderboard'
                                        onClick={closeNavMenu}
                                        className='hover:bg-neutral/15'
                                    >
                                        Leaderboard
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/admin'
                                        onClick={closeNavMenu}
                                        className='hover:bg-neutral/15'
                                    >
                                        Admin
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='?modal=open'
                                        scroll={false}
                                        className='btn btn-xs btn-soft btn-primary md:pl-0'
                                        onClick={closeNavMenu}
                                    >
                                        Log In
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
                            <span className='font-pressStart text-base-content text-shadow-primary text-2xl text-shadow-[1px_2px_0_#000] md:pl-0'>
                                BOTB
                            </span>
                        </Link>
                    </div>
                    <div className='navbar-end hidden md:flex'>
                        <ul className='menu menu-horizontal flex-nowrap items-center gap-2 px-1 text-[16px]'>
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
                                    className='btn btn-sm bg-primary text-base-200 font-pressStart hover:bg-base-content hover:text-primary-content font-light'
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
