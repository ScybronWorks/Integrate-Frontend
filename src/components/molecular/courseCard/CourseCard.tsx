import Image from 'next/image';
import React from 'react';

type Props = {
    image: string;
    title: string;
    description: string;
    originalPrice?: string;
    discountedPrice?: string;
};

const CourseCard = ({
    description,
    image,
    title,
    discountedPrice = '2,999',
    originalPrice = '3,999',
}: Props) => {
    return (
        <div
            className="grid grid-rows-12 h-[38rem] w-96 max-xss:w-full  rounded-lg bg-cardBrown hover:bg-primary p-4 
        "
        >
            <div className="row-span-6 relative min-h-[20rem] max-xss:h-full">
                <Image src={image} className="object-cover" fill alt="courseImage" />
            </div>
            <div className="row-span-9 flex flex-col   gap-3  pt-12  text-white max-xss:w-full">
                <div className="">
                    <h3 className="text-2xl font-bold">{title}</h3>
                </div>
                <p className="text-sm font-extralight h-[8rem]">{description}</p>
                <div className="flex gap-2 items-end">
                    <p className="text-xl font-semibold ">
                        Rs:
                        <span className="text-3xl font-semibold "> ${discountedPrice}</span>
                    </p>
                    <p className="text-xl  line-through text-gray-500 font-semibold">
                        ${originalPrice}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
