import React, { ReactNode } from 'react';
const SectionCenter: React.FC<{ children: ReactNode; className?: string }> = ({
    children,
    className,
}) => {
    return (
        <div
            className={`
        max-w-[75rem] 
        mx-auto
        max-1/2xl:p-2
        ${className}`}
        >
            {children}
        </div>
    );
};

export default SectionCenter;
