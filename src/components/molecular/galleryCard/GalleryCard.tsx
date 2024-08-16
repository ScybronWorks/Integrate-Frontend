'use client';

import PlayIcon from '@/components/atomic/PlayIcon';
import { faCirclePlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useRef, useState } from 'react';

type Props = {
    text: string;
    src: string;
    isImage: boolean;
    thumbnail?: string;
};

const GalleryCard = ({ isImage, text, src, thumbnail }: Props) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };
    return (
        <div className="w-96 h-60 flex flex-col gap-3">
            <div className="relative w-full h-full">
                {isImage ? (
                    <Image src={src} className="object-cover" fill alt="Gallery-Image" />
                ) : (
                    <video
                        src={src}
                        className="object-cover w-full h-full"
                        ref={videoRef}
                        poster={thumbnail}
                    />
                )}
                {!isImage && (
                    <div
                        className="absolute top-3 right-3 text-5xl cursor-pointer opacity-80"
                        onClick={handlePlayPause}
                    >
                        {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <PlayIcon />}
                    </div>
                )}
            </div>
            <p className="text-sm font-light text-white">{text}</p>
        </div>
    );
};

export default GalleryCard;
