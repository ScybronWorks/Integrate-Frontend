import Image from 'next/image';
import React from 'react';

type Props = {
    image: string;
    title: string;
    description: string;
};

const CourseCard = ({ description, image, title }: Props) => {
    return (
        <div className="grid grid-rows-5 h-[28rem] w-72 rounded-lg bg-cardBrown hover:bg-gradient-primary-linear">
            <div className="row-span-3 relative">
                <Image src={image} className="object-cover" layout="fill" alt="courseImage" />
            </div>
            <div className="row-span-2 flex flex-col justify-center items-center gap-2 p-8 text-center text-white">
                <div className="w-40">
                    <h3 className="text-2xl">{title}</h3>
                </div>
                <p className="text-sm font-light">{description}</p>
            </div>
        </div>
    );
};

export default CourseCard;
