import Button from '@/components/atomic/button/Button';

import {
    faFacebook,
    faInstagram,
    faLinkedinIn,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import SectionCenter from '@/components/layout/sectionCenter/SectionCenter';
import Image from 'next/image';

const navLinks = [
    { title: 'HOME', href: '/' },
    { title: 'ABOUT US', href: '/about' },
    { title: 'COURSES', href: '/courses' },
    { title: 'NEWS', href: '/' },
    { title: 'CONTACT US', href: '/contact' },
];
const socialMediaLinks = [
    { icon: faFacebook, href: '#' },
    { icon: faInstagram, href: '#' },
    { icon: faYoutube, href: '#' },
    { icon: faLinkedinIn, href: '#' },
];

const SocialMediaIcon: React.FC<{ icon: any; href: string }> = ({ icon, href }) => {
    return (
        <Link href={href}>
            <FontAwesomeIcon icon={icon} className="h-6 w-6" />
        </Link>
    );
};

const Footer = () => {
    return (
        <footer className=" bg-titleBlack w-full h-[33rem]">
            <SectionCenter className="py-20">
                <div className="flex  items-center justify-between">
                    <div className="w-[22.8rem] h-36">
                        <Image
                            src="/img/logo/logo.jpg"
                            className="h-full w-full object-cover"
                            alt="logo"
                            width={366}
                            height={116}
                        />
                    </div>
                    <div className="">
                        <div className="w-48 h-12 ">
                            <Button type="outline" className="flex justify-center items-center">
                                COURSES
                            </Button>
                        </div>
                        <div className="w-48 h-12 ">
                            <Button className="mt-6  flex justify-center items-center">
                                BLOGS
                            </Button>
                        </div>
                    </div>
                    <div className="flex gap-10 text-white text-xs">
                        {navLinks.map((item, idx) => (
                            <div key={idx}>
                                <Link href={item.href}>{item.title}</Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex mt-12 items-start justify-between text-white text-sm">
                    <div className="flex gap-2">
                        <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
                        <span>0123456789 | 0123456789</span>
                    </div>
                    <div className="flex gap-2 max-w-[24.5rem] ">
                        <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
                        <span>
                            4904 Robson Street, Vancouver, British Columbia - V6B 3K9, Canada
                        </span>
                    </div>
                    <div className="flex gap-2">
                        <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
                        <span>admin@testtest@gmail.com</span>
                    </div>
                </div>
            </SectionCenter>

            <SectionCenter className="pt-10 border-t text-white text-sm border-gray-700">
                <div className="text-center">
                    © Integrate Edutech Pvt. Ltd. All Rights Reserved 2024
                </div>
                <div className=" pt-5 flex justify-center items-center gap-6 ">
                    {socialMediaLinks.map((item, idx) => (
                        <SocialMediaIcon key={idx} icon={item.icon} href={item.href} />
                    ))}
                </div>
            </SectionCenter>
        </footer>
    );
};

export default Footer;
