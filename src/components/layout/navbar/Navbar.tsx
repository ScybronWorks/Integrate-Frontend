/* eslint-disable @next/next/no-img-element */
'use client';

import Button from '@/components/atomic/button/Button';
import SectionCenter from '@/components/layout/sectionCenter/SectionCenter';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { twMerge } from 'tailwind-merge';

const Navbar = () => {
    const pathname = usePathname();
    const navRef = useRef(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useClickAway(navRef, () => setIsOpen(false));
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);


    return (
        <nav ref={container} className="bg-transparent text-white absolute top-0 left-0 right-0">
            <SectionCenter className="navbar relative opacity-0">
                <div className="flex  justify-between items-center pt-10">
                    <div className="w-[11.65rem] md:w-[19.3rem] h-[4rem] md:h-[4.75rem]">
                        <img
                            className="w-full h-full object-cover object-center"
                            src="https://img.freepik.com/free-photo/cement-texture_1194-5331.jpg"
                            alt="Logo"
                        />
                    </div>

                    <div className="hidden gap-12 items-center md:flex">
                        {links.map(link => (
                            <div key={link.id}>
                                <Link
                                    className="text-sm font-semibold w-20 whitespace-nowrap"
                                    href={link.href}
                                >
                                    {link.label}
                                </Link>
                            </div>
                        ))}
                        <Button
                            className="flex justify-center items-center w-32 h-7"
                            isLink={true}
                            href="/blogs"
                        >
                            Blogs
                        </Button>
                    </div>

                    <div className="flex items-center">
                        <button className="md:hidden" onClick={() => setIsOpen(true)}>
                            <Image
                                src="/icons/Hamburger.png"
                                alt="hamburger"
                                width={30}
                                height={30}
                            />
                        </button>
                        {isOpen && (
                            <div
                            ref={navRef}
                                className="absolute bg-black w-[70%] min-h-screen z-50 top-0 right-0
                             text-white"
                            >
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-4 right-4"
                                >
                                    <FontAwesomeIcon
                                        icon={faXmark}
                                        className="size-8 text-textMuted hover:text-primary"
                                    />
                                </button>
                                <div className="py-14 flex flex-col divide-y divide-gray-500">
                                    {links.map(link => (
                                        <Link
                                            key={link.id}
                                            className={twMerge(
                                                location.pathname === link.href && 'bg-primary',
                                                `w-full px-6 py-5 uppercase text-sm hover:bg-primary
                                         transition-colors duration-300 ease-linear`
                                            )}
                                            href={link.href}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </SectionCenter>
        </nav>
    );
};

export default Navbar;

const links = [
    {
        id: 1,
        label: 'Home',
        href: '/',
        isButton: false,
    },
    {
        id: 2,
        label: 'About Us',
        href: '/about',
        isButton: false,
    },
    {
        id: 3,
        label: 'Team',
        href: '/team',
        isButton: false,
    },
    {
        id: 4,
        label: 'Courses',
        href: '/courses',
        isButton: false,
    },
    {
        id: 5,
        label: 'Gallery',
        href: '/gallery',
        isButton: false,
    },
    {
        id: 6,
        label: 'Contact',
        href: '/contact',
        isButton: false,
    },
] as const;
