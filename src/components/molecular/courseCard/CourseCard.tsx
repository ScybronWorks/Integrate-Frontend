import Image from 'next/image';
import React from 'react';

type Props = {
    image: string;
    title: string;
    description: string;
    originalPrice?: string;
    discountedPrice?: string;
};

const CourseCard = ({ description, image, title,discountedPrice='2999',originalPrice='3999' }: Props) => {
    return (
        <div className="grid grid-rows-12 h-[34rem] w-80  rounded-lg bg-cardBrown hover:bg-gradient-primary-linear">
            <div className="row-span-6 relative">
                <Image src={image} className="object-cover" fill alt="courseImage" />
            </div>
            <div className="row-span-9 flex flex-col justify-center items-center gap-3 p-8 py-16 text-center text-white">
                <div className="w-40">
                    <h3 className="text-2xl">{title}</h3>
                </div>
                <p className="text-sm font-light">{description}</p>
                <div className="mt-4 ">
                    <p className="text-xm font-light line-through text-priceCross">
                        ${originalPrice}
                    </p>
                    <p className="text-xl font-semibold ">${discountedPrice}</p>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
