import Image from 'next/image';
import './testimonials.css';

type Props = {
    text: string;
    name: string;
    location: string;
    image: string;
};

const TestimonialCard = ({ image, location, name, text }: Props) => {
    return (
        <div className="w-[28rem] p-8 flex flex-col _testimonials-card-shadow justify-between items-start rounded-lg gap-12">
            <p className='text-[1rem] font-light text-titleBlack leading-6'>{text}</p>
            <div className="flex justify-between w-full">
                <div className="flex items-center gap-3">
                    <div className="rounded-full relative h-16 w-16 flex">
                        <Image src={image} alt="profile" fill />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-base font-bold">{name}</p>
                        <p className="text-base font-light">{location}</p>
                    </div>
                </div>
                <div className="rounded-full relative h-16 w-16 right-2 bottom-7">
                    <Image src="/icons/quoteIcon.svg" width={56} height={56} alt="quote" />
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
