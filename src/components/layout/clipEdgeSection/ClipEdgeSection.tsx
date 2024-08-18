import React, { ReactNode } from 'react';
import SectionCenter from '../sectionCenter/SectionCenter';
interface IProps {
    children?: ReactNode;
    className?: string;
    sectionCenterClassName?: string;
}
const ClipEdgeSection: React.FC<IProps> = ({ children, className, sectionCenterClassName }) => {
    return (
        <section className={`clip-edge-section mb-20 pb-24 ${className}`}>
            <SectionCenter className={`min-h-screen ${sectionCenterClassName}`}>
                {children}
            </SectionCenter>
        </section>
    );
};

export default ClipEdgeSection;
