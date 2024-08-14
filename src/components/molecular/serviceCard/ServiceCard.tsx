import Image from 'next/image';
import './serviceCard.css';

type Props = {
    image: string;
    title: string;
    description: string;
};

const ServiceCard = ({ image, title, description }: Props) => {
    return (
        <div className="bg-white flex flex-col justify-center items-center w-64 rounded-lg h-64 p-6 gap-6 _service-card-box-shadow">
            <Image src={image} alt="tutoring" className="me-4" width={50} height={50} />
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold text-titleBlack capitalize">{title}</h2>
                <p className="text-base font-light text-textMuted">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;