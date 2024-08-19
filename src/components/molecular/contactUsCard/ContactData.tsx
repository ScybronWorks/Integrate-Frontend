import Image from 'next/image';
import React from 'react';

type Props = {
    image: string;
    title: string;
    description: string;
};

const ContactData = ({ image, title, description }: Props) => {
    return (
        <div className="flex items-start gap-6">
            <Image src={image} className="mt-4" width={38} height={38} alt="phone" />
            <div className="flex flex-col">
                <h5 className="mt-2 text-base font-light">{title}</h5>
                <p className="mt-2 text-base font-light w-72">{description}</p>
            </div>
        </div>
    );
};

export default ContactData;
