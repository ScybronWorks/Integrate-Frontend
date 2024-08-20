'use client';
/* eslint-disable jsx-a11y/alt-text */
import { galleryData } from '@/@db/gallery';
import HeaderTitle from '@/components/common/HeaderTitle';
import ClipEdgeSection from '@/components/layout/clipEdgeSection/ClipEdgeSection';
import Header from '@/components/layout/header/Header';
import GalleryCard from '@/components/molecular/galleryCard/GalleryCard';
import Image from 'next/image';
import { Slide, Zoom } from 'react-awesome-reveal';

const Gallery = () => {
    return (
        <>
            <Header type="md">
                <HeaderTitle title="Gallery" />
            </Header>

            <ClipEdgeSection className="pt-1 text-white min-h-screen">
                <div className=" mb-52">
                    <Slide
                        duration={1000}
                        direction="right"
                        triggerOnce
                        className="flex justify-end"
                    >
                        <div
                            className="mt-20 w-[75%] h-[435px]  bg-gradient-primary-linear rounded-tr-lg rounded-br-[50px] relative flex justify-end items-center max-3xl:w-full max-3xl:justify-start max-3xl:gap-10 max-xl:flex-col max-xl:h-auto max-xl:w-full max-xl:items-start
                            max-xl:rounded-br-none max-xl:gap-2
                        "
                        >
                            <div className="absolute max-3xl:static top-32 -left-36 max-xl:w-full ">
                                <Image
                                    className="rounded-tr-lg rounded-br-[50px] w-[32rem] h-[27rem] object-cover
                                    max-3xl:bg-center max-xl:h-[15rem] max-xl:w-full 
                                    max-xl:rounded-t-lg max-xl:rounded-br-none 
                                "
                                    src={'/img/gallery/hero.png'}
                                    width={523}
                                    height={436}
                                    alt="Hero image"
                                />
                            </div>
                            <div className="max-w-[535px]  p-5">
                                <h1 className="text-7xl font-semibold max-3xl:mb-6">Photos</h1>
                                <h4
                                    className="font-italianno font-thin text-xl mt-2 underline underline-offset-[10px]
                                    max-3xl:mb-6
                        "
                                >
                                    Explore Our Educational Journey: Captured Moments of Learning
                                    and Growth.
                                </h4>

                                <p className="font-light text-sm leading-loose tracking-tight mt-5">
                                    Explore our vibrant learning environment, featuring snapshots of
                                    classroom activities, events, and student achievements. Our
                                    photo gallery captures the essence of our commitment to
                                    providing a dynamic and supportive educational experience.
                                </p>
                            </div>
                        </div>
                    </Slide>
                    {/* <div className="flex justify-end mb-52 mt-28">
                        <div className="max-w-full  h-auto w-auto">
                            <Image
                                src={'/img/gallery/gallery.PNG'}
                                layout="fill"
                                alt="gallery hero"
                                className="!relative"
                            />
                        </div>
                    </div> */}
                </div>
                <div
                    className="grid justify-center gap-4 grid-cols-[repeat(auto-fill,minmax(384px,1fr))]
                max-xss:grid-cols-1
                "
                >
                    <Zoom cascade damping={0.25} triggerOnce>
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
                    </Zoom>
                </div>
            </ClipEdgeSection>
        </>
    );
};

export default Gallery;
