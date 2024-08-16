'use client';

import Button from '@/components/atomic/button/Button';
import HeaderTitle from '@/components/common/HeaderTitle';
import Header from '@/components/layout/Header/Header';
import Navbar from '@/components/layout/Navbar/Navbar';
import CourseCard from '@/components/molecular/courseCard/CourseCard';
import GalleryCard from '@/components/molecular/galleryCard/GalleryCard';
import ServiceCard from '@/components/molecular/serviceCard/ServiceCard';
import TeamCard from '@/components/molecular/teamCard/TeamCard';
import TestimonialCard from '@/components/molecular/testimonialsCard/TestimonialCard';
import VisionCard from '@/components/molecular/visionCard/VisionCard';

const Components = () => {
    return (
        <>
            <Header type="md">
                <HeaderTitle title="Our Courses" />
            </Header>
            <div className="flex flex-col gap-4 my-48">
                <ServiceCard
                    title="Tutoring"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, magni at sed eius."
                    image="/img/tutoring.png"
                    key="1"
                />
                <div className="grid grid-col-2 grid-flow-col gap-4 w-full px-6">
                    <VisionCard />
                    <VisionCard />
                    <VisionCard />
                </div>
                <div className="grid grid-col-2 grid-flow-col gap-4 w-full px-6 h-36 bg-black items-center justify-center ">
                    <Button onClick={() => alert('hello')}>Submit</Button>
                    <Button type="outline">Submit</Button>
                    <Button isLink href="/">
                        Link
                    </Button>
                </div>
                <div className="flex justify-center gap-4 bg-[#1E1E1C] w-full p-6">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <CourseCard
                            key={index}
                            image="/img/course/maths.png"
                            title="A+ Cracker for 10th"
                            description="3 Months Course for Both +1 and +2 Students"
                        />
                    ))}
                </div>
                <div className="flex justify-center gap-4 w-full p-6">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <TeamCard
                            key={index}
                            image="/img/team/David.png"
                            title="Dr. Emily Carter"
                            description="Lorem ipsum dolor"
                        />
                    ))}
                </div>
                <div className="flex justify-center gap-4 w-full p-6">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <TestimonialCard
                            key={index}
                            image="/img/team/David.png"
                            location="France"
                            name="Sarah M"
                            text="Indiginite has been a game-changer for my exam preparation. 
                        The resources are top-notch, and the personalized support made all the difference. 
                        I highly recommend their services!"
                        />
                    ))}
                </div>
                <div className="grid grid-cols-3 justify-center gap-4 bg-[#1E1E1C] w-full p-6">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <GalleryCard
                            key={index}
                            image="/img/photoGallery/photoGallery1.png"
                            text="Educational Workshops"
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Components;
