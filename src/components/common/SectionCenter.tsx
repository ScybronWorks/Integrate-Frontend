
import React, { ReactNode } from 'react'
const SectionCenter: React.FC<{ children: ReactNode; className?: string }> = ({
    children,
    className,
}) => {
    return <div className={`px-[5%] sm:px-[10%] lg:px-[15%] ${className}`}>{children}</div>;
};

export default SectionCenter;