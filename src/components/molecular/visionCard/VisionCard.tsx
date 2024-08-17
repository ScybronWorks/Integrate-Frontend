import React from 'react';

type Props = {
    title: string;
    description: string;
};

const VisionCard = ({ title, description }: Props) => {
    return (
        <div className="w-full p-4 bg-gradient-primary-linear text-white flex-col rounded-tr-lg rounded-br-[3rem] pb-20">
            <h2 className="font-italianno text-4xl">{title}</h2>
            <p className="text-sm font-normal">{description}</p>
        </div>
    );
};

export default VisionCard;
