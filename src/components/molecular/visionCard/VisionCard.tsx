import React, { ReactNode } from 'react';

type Props = {
    title: string;
    description: string | ReactNode;
};

const VisionCard = ({ title, description }: Props) => {
    return (
        <div className="w-full h-full p-8 bg-gradient-primary-linear text-white flex-col rounded-tr-lg rounded-br-[3rem] ">
            <h2 className="font-italianno text-4xl">{title}</h2>
            <p className="leading-8 text-left text-sm">{description}</p>
        </div>
    );
};

export default VisionCard;
