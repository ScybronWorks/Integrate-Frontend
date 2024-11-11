'use client';

import { useRouter } from 'next/navigation';
import ButtonProps from './types';
import { FormEvent } from 'react';
import Loader from './Loader';

const Button = ({
    children,
    type = 'primary',
    className,
    onClick,
    isLink = false,
    href,
    isSubmitting = false,
    isLightBg = false,
}: ButtonProps) => {
    const router = useRouter();
    const buttonStyle = {
        outline: 'border border-white text-white hover:border-primary hover:bg-primary',
        primary: `border border-primary bg-primary text-white ${isLightBg ? 'hover:text-gray-500 hover:border-grey-500' : 'hover:border-white hover:text-white'}  hover:bg-transparent`,
        secondary: `border border-primary bg-secondary text-white ${isLightBg ? 'hover:text-gray-500 hover:border-grey-500' : 'hover:border-black hover:text-black'}  hover:bg-transparent`,
    };

    const handleOnClick = (e: FormEvent) => {
        onClick && onClick(e);
        isLink && href && router.push(href);
    };
    return (
        <button
            onClick={handleOnClick}
            className={`${buttonStyle[type]} transition-colors duration-700 font-bold py-2 px-4 rounded-md text-center h-[100%]  w-[100%] cursor-pointer flex justify-center items-center ${className}`}
        >
            {isSubmitting ? <Loader isLoading /> : children}
        </button>
    );
};

export default Button;
