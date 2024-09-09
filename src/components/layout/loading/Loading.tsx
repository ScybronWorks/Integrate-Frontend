// components/Loading.js
'use client';
import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from './loading.json';
import { preloadImages } from '@/utils/preloadImage';
const Loading = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const imageUrls = [
            '/img/logo/logo.png',
            '/img/header/headerBackgroundHome.png',
            '/img/header/headerBackgroundOther.png',
        ];
        preloadImages(imageUrls);
        // Simulate loading complete after mount
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Adjust timing as needed

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);
    return (
        <>
            {loading ? (
                <div className="fixed inset-0 flex items-center justify-center bg-white z-[100]">
                    <Lottie animationData={loadingAnimation} loop={true} />
                </div>
            ) : (
                children
            )}
        </>
    );
};

export default Loading;
