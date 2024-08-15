import Image from 'next/image';

type Props = {
    text: string;
    image: string;
};

const GalleryCard = ({ image, text }: Props) => {
    return (
        <div className="w-96 h-60 flex flex-col gap-3">
            <div className="relative w-full h-full">
                <Image src={image} className="object-cover" fill alt="Gallery-Image" />
            </div>
            <p className="text-sm font-light text-white">{text}</p>
        </div>
    );
};

export default GalleryCard;
