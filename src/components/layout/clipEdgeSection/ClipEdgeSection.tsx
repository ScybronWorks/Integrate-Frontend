import React, { ReactNode } from 'react';
import SectionCenter from '../sectionCenter/SectionCenter';
interface IProps {
    children?: ReactNode;
    className?: string;
}
const ClipEdgeSection: React.FC<IProps> = ({ children, className }) => {
    return (
        <section className={`clip-edge-section mb-20 pb-24 ${className}`}>
            <SectionCenter className="min-h-screen">{children}</SectionCenter>
        </section>
    );
};

export default ClipEdgeSection;
