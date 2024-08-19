'use client';

import { courseData } from '@/@db/course';
import HeaderTitle from '@/components/common/HeaderTitle';
import ClipEdgeSection from '@/components/layout/clipEdgeSection/ClipEdgeSection';
import Header from '@/components/layout/header/Header';
import CourseCard from '@/components/molecular/courseCard/CourseCard';
import { Zoom } from 'react-awesome-reveal';

const Courses = () => {
    return (
        <>
            <Header type="md">
                <HeaderTitle title="Our Courses" titleStyles="max-sm:text-[2.3rem]" />
            </Header>

            <ClipEdgeSection>
                <div className="pt-24 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-16 justify-center items-center">
                    <Zoom cascade damping={0.2} triggerOnce>
                        {courseData.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex justify-center hover:scale-105 transition-transform"
                            >
                                <CourseCard
                                    description={item.description}
                                    image={item.image}
                                    title={item.title}
                                />
                            </div>
                        ))}
                    </Zoom>
                </div>
            </ClipEdgeSection>
        </>
    );
};

export default Courses;
