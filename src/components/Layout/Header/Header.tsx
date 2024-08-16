import { url } from 'inspector';
import React, { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';

interface IProps {
    backgroundImageType?: 'home' | 'other';
    type: 'lg' | 'md';
    ClassName?: string;
    children?: ReactNode;
}

const Header: React.FC<IProps> = ({ backgroundImageType = 'other', type, ClassName, children }) => {
    const backgroundImageUrl =
        backgroundImageType === 'home'
            ? 'assets/images/header-background-home.png'
            : 'assets/images/header-background-other.png';
    const heightClass = type === 'lg' ? 'h-screen' : 'h-[55vh]';
    return (
        <header
            className={` w-full 
            bg-fixed ${ClassName} ${heightClass} background-image-property`}
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImageUrl})`,
            }}
        >
            {children}
        </header>
    );
};

export default Header;
