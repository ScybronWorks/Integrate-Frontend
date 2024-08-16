import React, { ReactNode } from 'react';
import SectionCenter from '../layout/SectionCenter/SectionCenter';

interface IProps {
    title: string;
}

const HeaderTitle: React.FC<IProps> = ({ title }) => {
    return (
        <SectionCenter className="h-full text-white ">
            <div className="h-full flex items-end pb-[5.6rem]">
                <div className="flex items-center">
                    <span className="text-[4.3rem] font-[600] leading-[5.4rem]">{title}</span>
                    <div className="w-24 h-[1.5px] mt-3 ml-6  bg-white"></div>
                </div>
            </div>
        </SectionCenter>
    );
};

export default HeaderTitle;
