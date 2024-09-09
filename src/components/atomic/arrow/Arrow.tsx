interface ArrowProps {
    type: 'left' | 'right';
    onClick: () => void;
}

const Arrow = ({ onClick, type }: ArrowProps) => {
    return (
        <div
            onClick={onClick}
            className=" cursor-pointer w-20 h-20 rounded-[3.1rem] border-[1px] border-white flex justify-center items-center"
        >
            {type == 'left' ? (
                <svg
                    width="29"
                    height="22"
                    viewBox="0 0 29 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M28 11H1"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M11 21L0.999999 11L11 1"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            ) : (
                <svg
                    width="29"
                    height="22"
                    viewBox="0 0 29 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1.00195 11L28.002 11"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M18.002 1L28.002 11L18.002 21"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            )}
        </div>
    );
};

export default Arrow;
