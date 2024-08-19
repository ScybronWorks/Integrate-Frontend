import React from 'react';
import './style.css';

type Props = {
    isLoading: boolean;
};

const Loader = ({ isLoading }: Props) => {
    return isLoading ? (
        <>
            <div className="loader flex justify-center items-center w-fit h-fit" id="loader-4">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    ) : (
        ''
    );
};

export default Loader;
