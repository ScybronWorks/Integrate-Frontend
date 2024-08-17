/* eslint-disable jsx-a11y/alt-text */
import { galleryData } from '@/@db/gallery';
import HeaderTitle from '@/components/common/HeaderTitle';
import ClipEdgeSection from '@/components/layout/clipEdgeSection/ClipEdgeSection';
import Header from '@/components/layout/header/Header';
import GalleryCard from '@/components/molecular/galleryCard/GalleryCard';
import Image from 'next/image';

const Gallery = () => {
    return (
        <>
            <Header type="md">
                <HeaderTitle title="Gallery" />
            </Header>

            <ClipEdgeSection className="pt-1 text-white min-h-screen">
                <div className="flex justify-end mb-52">
                    <div
                        className="mt-20 w-[75%] h-[27.1rem]  bg-gradient-primary-linear rounded-tr-lg rounded-br-[3.1rem] relative
                flex justify-end items-center"
                    >
                        <div className="absolute top-32 -left-36">
                            <Image
                                className="rounded-tr-lg rounded-br-[3.1rem]
                                w-[32.6rem]
                                h-[27.2rem]
                                object-cover
                                "
                                src={'/img/gallery/hero.png'}
                                width={523}
                                height={436}
                                alt="Hero image"
                            />
                        </div>
                        <div className="max-w-[33.4rem]  p-5">
                            <h1 className="text-7xl font-semibold">Photos</h1>
                            <h4
                                className="font-italianno font-thin text-xl mt-2 underline underline-offset-[0.625rem]
                        "
                            >
                                Explore Our Educational Journey: Captured Moments of Learning and
                                Growth.
                            </h4>

                            <p className="font-light text-sm leading-loose tracking-tight mt-5">
                                Explore our vibrant learning environment, featuring snapshots of
                                classroom activities, events, and student achievements. Our photo
                                gallery captures the essence of our commitment to providing a
                                dynamic and supportive educational experience.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid justify-center gap-4 grid-cols-[repeat(auto-fill,minmax(24rem,1fr))]">
                    {galleryData.map((item, idx) => (
                        <div key={idx} className="flex justify-center">
                            <GalleryCard
                                key={idx} // Adding a key prop for better performance in lists
                                src={item.src}
                                isImage={item.isImage}
                                text={item.title}
                                thumbnail={item.thumnail}
                            />
                        </div>
                    ))}
                </div>
            </ClipEdgeSection>
        </>
    );
};

export default Gallery;
