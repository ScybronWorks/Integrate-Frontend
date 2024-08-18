import Image from 'next/image';
import React from 'react';

type Props = {
    image: string;
    title: string;
    description: string;
};

const TeamCard = ({ image, title, description }: Props) => {
    return (
        <div className="grid grid-row-10 h-80 w-64 min-w-64 p-4 bg-teamCardBg rounded-br-[3rem] gap-3">
            <div className="row-span-10 relative">
                <Image
                    src={image}
                    className="object-contain w-full h-full rounded-full "
                    fill
                    alt="courseImage"
                />
            </div>
            <div className="flex justify-between w-full row-span-1 px-2">
                <div className="flex flex-col">
                    <p className="text-base font-semibold">{title}</p>
                    <p className="text-base font-light">{description}</p>
                </div>
                <div className="rounded-full bg-titleBlack flex justify-center items-center h-12 w-12">
                    <Image src="/icons/nextArrow.svg" width={14} height={14} alt="next-arrow" />
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
