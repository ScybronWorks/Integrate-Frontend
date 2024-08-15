'use client';

import Button from '@/components/atomic/Button';
import ServiceCard from '@/components/molecular/serviceCard/ServiceCard';
import VisionCard from '@/components/molecular/visionCard/VisionCard';

const Components = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-4">
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
        </div>
    );
};

export default Components;
