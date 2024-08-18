/* eslint-disable @next/next/no-img-element */
'use client';

import Button from '@/components/atomic/button/Button';
import SectionCenter from '@/components/layout/sectionCenter/SectionCenter';
import Link from 'next/link';
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
    const container = useRef<HTMLDivElement>(null)
    useGSAP(
        () => {
            gsap.fromTo('.navbar', { y:-100,opacity:0 }, { y:0,opacity:1 }); 
        },
        { scope: container }
    );
    return (
        <nav ref={container} className="bg-transparent text-white absolute top-0 left-0 right-0">
            <SectionCenter className='navbar relative opacity-0'>
                <div className="flex  justify-between items-center pt-10">
                    <div className="w-[19.3rem] h-[4.75rem]">
                        <img
                            className="w-full h-full object-cover object-center"
                            src="https://img.freepik.com/free-photo/cement-texture_1194-5331.jpg"
                            alt="Logo"
                        />
                    </div>
                    <div className="flex gap-12 items-center">
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
