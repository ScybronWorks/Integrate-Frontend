import React, { ReactNode } from 'react';
import SectionCenter from '../layout/sectionCenter/SectionCenter';

interface IProps {
    title: string;
    titleStyles?: string;
}

const HeaderTitle: React.FC<IProps> = ({ title, titleStyles }) => {
    return (
        <SectionCenter className="h-full text-white ">
            <div className="h-full flex items-end pb-[5.6rem] max-sm:pb-[8rem]">
                <div className="flex items-center">
                    <span
                        className={`text-6xl  font-semibold leading-[5.4rem] max-w-[279rem] max-sm:text-4xl
                            ${titleStyles}`}
                    >
                        {title}
                    </span>
                    <div className="w-[89px] h-[1.5px] mt-3 ml-6   bg-white"></div>
                </div>
            </div>
        </SectionCenter>
    );
};

export default HeaderTitle;
