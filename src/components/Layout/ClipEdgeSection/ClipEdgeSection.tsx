
import React, { ReactNode } from 'react'
import SectionCenter from '../SectionCenter/SectionCenter';
interface IProps {
    children?: ReactNode;
    className?:string
    
}
const ClipEdgeSection: React.FC<IProps> = ({children,className}) => {
    return (
        <section className={`clip-edge-section mb-20 pb-24 ${className}`}>
            <SectionCenter>{children}</SectionCenter>
        </section>
    );
};

export default ClipEdgeSection;