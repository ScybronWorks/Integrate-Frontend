'use client';

import { courseData } from '@/@db/course';
import HeaderTitle from '@/components/common/HeaderTitle';
import ClipEdgeSection from '@/components/layout/clipEdgeSection/ClipEdgeSection';
import Header from '@/components/layout/header/Header';
import SectionCenter from '@/components/layout/sectionCenter/SectionCenter';
import CourseCard from '@/components/molecular/courseCard/CourseCard';
import { Zoom } from 'react-awesome-reveal';

const Courses = () => {
    return (
        <>
            <Header type="md">
                <HeaderTitle
                    title="Our Courses"
                    titleStyles="max-sm:text-[2.3rem] max-xss:text-[1.8rem] "
                />
            </Header>

            <SectionCenter className="mb-16">
                <div
                    className="pt-24 grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-y-16 justify-center items-center
                max-xss:grid-cols-1 text-
                "
                >
                    <Zoom className="flex justify-center" cascade damping={0.2} triggerOnce>
                        {courseData.map((item, idx) => (
                            <CourseCard
                                key={idx}
                                description={item.description}
                                image={item.image}
                                title={item.title}
                                discountedPrice={item.discountPrice}
                                originalPrice={item.originalPrice}
                            />
                        ))}
                    </Zoom>
                </div>
            </SectionCenter>
        </>
    );
};

export default Courses;
