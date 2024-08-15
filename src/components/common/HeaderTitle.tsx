import React, { ReactNode } from 'react';
import SectionCenter from './SectionCenter';

interface IProps {
    title: string;
}

const HeaderTitle: React.FC<IProps> = ({ title }) => {
    return (
        <SectionCenter className="h-full text-white ">
            <div className="h-full flex items-end pb-[90px]">
                <div className="flex items-center">
                    <span className="text-[70px] font-[600] leading-[87.5px]">{title}</span>
                    <div className="w-[89px] h-[1.5px] mt-3 ml-6  bg-white"></div>
                </div>
            </div>
        </SectionCenter>
    );
};

export default HeaderTitle;
