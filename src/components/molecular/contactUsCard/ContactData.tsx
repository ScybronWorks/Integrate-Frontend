'use client';
import Image from 'next/image';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

type Props = {
    image: string;
    title: string;
    description: string;
};

const ContactData = ({ image, title, description }: Props) => {
    return (
        <Fade duration={2000} triggerOnce>
            <div className="flex items-start gap-6">
                <Image src={image} className="mt-4" width={38} height={38} alt="phone" />
                <div className="flex flex-col">
                    <h5 className="mt-2 text-base font-light">{title}</h5>
                    <p className="mt-2 text-base font-light md:w-72 w-full text-wrap">{description}</p>
                </div>
            </div>
        </Fade>
    );
};

export default ContactData;
