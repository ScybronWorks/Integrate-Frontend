'use client';
import Button from '@/components/atomic/button/Button';

import {
    faInstagram,
    faFacebook,
    faLinkedin,
    faYoutube,
    faTwitter,
    faXTwitter,
} from '@fortawesome/free-brands-svg-icons'; // Replace faTwitter for "X" icon

import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react';
import SectionCenter from '@/components/layout/sectionCenter/SectionCenter';
import Image from 'next/image';
import DemoModal from '@/components/molecular/demoModal/DemoModal';
const navLinks = [
    { title: 'HOME', href: '/' },
    { title: 'ABOUT US', href: '/about' },
    { title: 'COURSES', href: '/courses' },
    // { title: 'NEWS', href: '/' },
    { title: 'CONTACT US', href: '/contact' },
];
const socialMediaLinks = [
    { icon: faInstagram, href: 'https://www.instagram.com/integrate_edutech?igsh=cHR6eGJ2MHB4bDRk' },
    { icon: faFacebook, href: 'https://www.facebook.com/integral.edu' },
    {
        icon: faLinkedin,
        href: 'https://www.linkedin.com/in/integrate-edu-156330325/',
    },
    { icon: faYoutube, href: 'https://youtube.com/@integrateedu?si=oCOoEFHgdYjrxw8P' },
    { icon: faXTwitter, href: 'https://x.com/Integrateedu' },
   
];

const SocialMediaIcon: React.FC<{ icon: any; href: string }> = ({ icon, href }) => {
    return (
        <Link href={href}>
            <FontAwesomeIcon icon={icon} className="h-6 w-6" />
        </Link>
    );
};

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <DemoModal isOpen={isModalOpen} handleClose={toggleModal} />
            <footer className=" bg-secondary w-full min-h-[33rem] ">
                <SectionCenter className="py-20 max-xl:pl-6">
                    <div className="flex  items-center justify-between max-xl:flex-col max-xl:gap-12 max-xl:items-start ">
                        <div className=" max-w-[22.8rem] h-32  w-full">
                            <Image
                                src="/img/logo/logo.png"
                                className="h-full w-full object-contain !relative"
                                alt="logo"
                                fill
                            />
                        </div>
                        <div className="max-xl:hidden">
                            <div className="w-48 h-12 ">
                                <Button type="outline" className="flex justify-center items-center">
                                    COURSES
                                </Button>
                            </div>
                            <div className="w-48 h-12 ">
                                <Button
                                    className="mt-6  flex justify-center items-center"
                                    onClick={toggleModal}
                                >
                                    DEMO
                                </Button>
                            </div>
                        </div>
                        <div className="flex max-xl:flex-col max-xl:gap-7 gap-10 text-white text-xs">
                            {navLinks.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <span className="w-12 h-[1px] bg-white hidden max-xl:block"></span>
                                    <Link href={item.href}>{item.title}</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        className="flex mt-12 items-start justify-between text-white text-sm
                max-xl:flex-col max-xl:gap-7"
                    >
                        <div className="flex gap-2">
                            <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
                            <div className="flex flex-col gap-1">
                                <span>
                                    <strong>Contact Number</strong>:
                                </span>
                                <span className="pl-4">8129177072 </span>
                                <span className="pl-4">9061707144 </span>
                                <span>
                                    <strong>For admissions</strong>:
                                </span>
                                <span className="pl-4">8129927078 (CBSE)</span>
                                <span className="pl-4">7592849406 (State)</span>
                            </div>
                        </div>

                        <div className="flex gap-2 max-w-[24.5rem] ">
                            <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5" />
                            <span>
                                Integrate Edutech 
                                House no: 370
                                Mannam P O, N.Paravoor
                                Ernakulam, Kerala
                            </span>
                        </div>
                        <div className="flex gap-2">
                            <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
                            <span>edutechintegrate@gmail.com</span>
                        </div>
                    </div>
                </SectionCenter>

                <SectionCenter className="py-10 border-t text-white text-sm border-gray-700">
                    <div className="text-center">
                        © Integrate Edutech Pvt. Ltd. All Rights Reserved 2024
                    </div>
                    <br/>
                    <div className="text-center">
                        Powered by Scybron Digital Solutions
                    </div>
                    <div className=" pt-5 flex justify-center items-center gap-6 ">
                        {socialMediaLinks.map((item, idx) => (
                            <SocialMediaIcon key={idx} icon={item.icon} href={item.href} />
                        ))}
                    </div>
                </SectionCenter>
            </footer>
        </>
    );
};

export default Footer;
