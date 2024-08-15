import Button from '@/components/atomic/button/Button';
import SectionCenter from '@/components/common/SectionCenter';
import {
    faFacebook,
    faInstagram,
    faLinkedinIn,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <footer className=" bg-[#1E1E1C] w-full h-[532px]">
            <SectionCenter className="py-20">
                <div className="flex  items-center justify-between">
                    <div className="wi-[366px] h-[140px]">
                        <img
                            className="h-full w-full object-cover"
                            src="https://thumbs.dreamstime.com/b/sample-stamp-sample-stamp-sign-icon-editable-vector-illustration-isolated-white-background-123951468.jpg"
                            alt=""
                        />
                    </div>
                    <div className="">
                        <div className="w-[202px] h-[50px] ">
                            <Button type="outline" className="flex justify-center items-center">
                                COURSES
                            </Button>
                        </div>
                        <div className="w-[202px] h-[50px] ">
                            <Button className="mt-6  flex justify-center items-center">
                                BLOGS
                            </Button>
                        </div>
                    </div>
                    <div className="flex gap-10 text-white text-xs">
                        <div>
                            <a href="">HOME</a>
                        </div>
                        <div>
                            <a href="">ABOUT US</a>
                        </div>
                        <div>
                            <a href="">COURSES</a>
                        </div>
                        <div>
                            <a href="">NEWS</a>
                        </div>
                        <div>
                            <a href="">CONTACT US</a>
                        </div>
                    </div>
                </div>
                <div className="flex mt-12 items-start justify-between text-white text-sm">
                    <div className="flex gap-2">
                        <FontAwesomeIcon icon={faPhone} className="w-[20px] h-[20px]" />
                        <span>0123456789 | 0123456789</span>
                    </div>
                    <div className="flex gap-2 max-w-[395px] ">
                        <FontAwesomeIcon icon={faPhone} className="w-[20px] h-[20px]" />
                        <span>
                            4904 Robson Street, Vancouver, British Columbia - V6B 3K9, Canada
                        </span>
                    </div>
                    <div className="flex gap-2">
                        <FontAwesomeIcon icon={faEnvelope} className="w-[20px] h-[20px]" />
                        <span>admin@testtest@gmail.com</span>
                    </div>
                </div>
            </SectionCenter>

            <SectionCenter className="py-10 border-t-[1px] text-white text-sm border-gray-700">
                <div className="text-center">
                    © Integrate Edutech Pvt. Ltd. All Rights Reserved 2024
                </div>
                <div className=" pt-5 flex justify-center items-center gap-6 ">
                    <a href="#">
                        <FontAwesomeIcon icon={faFacebook} className="h-[23px] w-[23px]" />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faInstagram} className="h-[23px] w-[23px]" />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faYoutube} className="h-[23px] w-[23px]" />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faLinkedinIn} className="h-[23px] w-[23px]" />
                    </a>
                </div>
            </SectionCenter>
        </footer>
    );
};

export default Footer;
