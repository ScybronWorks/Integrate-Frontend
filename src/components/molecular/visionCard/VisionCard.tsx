import React, { ReactNode } from 'react';

type Props = {
    title: string;
    description: string | ReactNode;
    type?: 'primary' | 'secondary';
    className?: string;
};

const VisionCard = ({ title, description, type = 'primary', className }: Props) => {
    return (
        <div
            className={`w-full h-full p-8 flex-col rounded-tr-lg rounded-br-[3rem] ${className}  ${type === 'primary' ? 'bg-white text-black' : 'bg-secondary text-white'}`}
        >
            <h2 className="font-italianno text-4xl">{title}</h2>
            <p className="leading-8 text-left text-sm max-sm:text-[0.9rem] max-sm:leading-6">
                {description}
            </p>
        </div>
    );
};

export default VisionCard;
