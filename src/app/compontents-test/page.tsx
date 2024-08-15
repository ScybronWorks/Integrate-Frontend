'use client';

import Button from '@/components/atomic/button/Button';
import CourseCard from '@/components/molecular/courseCard/CourseCard';
import ServiceCard from '@/components/molecular/serviceCard/ServiceCard';
import VisionCard from '@/components/molecular/visionCard/VisionCard';

const Components = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-4 my-48">
            <ServiceCard
                title="Tutoring"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, magni at sed eius."
                image="/img/tutoring.png"
                key="1"
            />
            <div className="grid grid-col-2 grid-flow-col gap-4 w-full px-6">
                <VisionCard />
                <VisionCard />
            </div>
            <div className="grid grid-col-2 grid-flow-col gap-4 w-full px-6 h-36 bg-black items-center justify-center">
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
        </div>
    );
};

export default Components;
