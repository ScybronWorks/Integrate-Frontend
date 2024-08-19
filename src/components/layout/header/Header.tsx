import { url } from 'inspector';
import React, { ReactNode } from 'react';
import Navbar from '../navbar/Navbar';

interface IProps {
    backgroundImageType?: 'home' | 'other';
    type: 'lg' | 'md';
    ClassName?: string;
    children?: ReactNode;
}

const Header: React.FC<IProps> = ({ backgroundImageType = 'other', type, ClassName, children }) => {
    const backgroundImageUrl =
        backgroundImageType === 'home'
            ? '/img/header/headerBackgroundHome.png'
            : '/img/header/headerBackgroundOther.png';
    const heightClass = type === 'lg' ? 'h-[100vh]' : 'h-[55vh]';
    return (
        <header
            className={` w-full bg-fixed  max-xl:!bg-top-left-1rem
            ${ClassName} ${heightClass}`}
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                url(${backgroundImageUrl}) center/cover no-repeat`,
            }}
        >
            {children}
        </header>
    );
};

export default Header;
