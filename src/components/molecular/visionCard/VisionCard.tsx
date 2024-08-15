import React from 'react';

type Props = {};

const VisionCard = ({}: Props) => {
    return (
        <div className="w-full p-4 bg-gradient-primary-linear text-white flex-col rounded-tr-lg rounded-br-[3rem]">
            <h2 className="font-italianno text-4xl">Our Aim</h2>
            <p className="text-sm font-normal">
                The prime objective of Integrate is to improve the learning outcomes with enhanced
                technology, providing individualized education and ensuring student with diverse
                learning styles, thereby making your dreams come true.
            </p>
        </div>
    );
};

export default VisionCard;
