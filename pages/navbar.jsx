import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/assets/logo.png';
import {
    Navbar,
    MobileNav,
    Typography,
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from '@material-tailwind/react';

export default function NavBar() {
    const [openNav, setOpenNav] = useState(false);
    const coops = ['/Coop/distributive', '/Coop/ncr', '/Coop/tulip'];
    const router = useRouter();

    useEffect(() => {
        window.addEventListener(
            'resize',
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className='text-[#d4be98] mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
            <Typography as='li' variant='paragraph' className='p-1 font-normal'>
                <Link href='/'>
                    <a
                        className={router.pathname == '/' ? 'font-bold' : ''}
                        onClick={() => setOpenNav(false)}
                        id='nav-item'
                    >
                        Home
                    </a>
                </Link>
            </Typography>
            <Typography as='li' variant='paragraph' className='p-1 font-normal'>
                <Link href='/projects'>
                    <a
                        className={
                            router.pathname == '/projects' ? 'font-bold' : ''
                        }
                        onClick={() => setOpenNav(false)}
                        id='nav-item'
                    >
                        Projects
                    </a>
                </Link>
            </Typography>
            <Menu>
                <MenuHandler>
                    <Typography
                        as='li'
                        variant='paragraph'
                        className='p-1 font-normal'
                    >
                        <a
                            className={
                                coops.includes(router.pathname)
                                    ? 'font-bold hover: cursor-pointer'
                                    : 'hover: cursor-pointer'
                            }
                            id='nav-item'
                        >
                            Work Experience
                        </a>
                    </Typography>
                </MenuHandler>
                <MenuList className='bg-[#1d2021] border-[#d3869b] text-[#ddc7a1]'>
                    <span>
                        <Link href='/Coop/distributive'>
                            <MenuItem onClick={() => setOpenNav(false)}>
                                Distributive
                            </MenuItem>
                        </Link>
                    </span>
                    <span>
                        <Link href='/Coop/ncr'>
                            <MenuItem onClick={() => setOpenNav(false)}>
                                NCR
                            </MenuItem>
                        </Link>
                    </span>
                    <span>
                        <Link href='/Coop/tulip'>
                            <MenuItem onClick={() => setOpenNav(false)}>
                                Tulip
                            </MenuItem>
                        </Link>
                    </span>
                </MenuList>
            </Menu>
        </ul>
    );

    return (
        <Navbar
            shadow={false}
            className='animate-in duration-1000 slide-in-from-top-24 fade-in-5 border-[#d3869b] drop-shadow-2xl bg-[#1d2021] mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4'
        >
            <div className='container mx-auto flex items-center justify-between'>
                <a className='w-10' href='https://www.wijeproject.com'>
                    <Image
                        alt='maneesh-logo'
                        src={logo}
                        width={100}
                        height={100}
                        className='rounded-full cursor-pointer'
                    />
                </a>
                <div className='hidden lg:block'>{navList}</div>
                <IconButton
                    variant='text'
                    className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            className='h-6 w-6'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M6 18L18 6M6 6l12 12'
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>{navList}</MobileNav>
        </Navbar>
    );
}
