import { courseData } from '@/@db/course';
import HeaderTitle from '@/components/common/HeaderTitle';
import ClipEdgeSection from '@/components/layout/clipEdgeSection/ClipEdgeSection';
import Header from '@/components/layout/Header/Header';
import CourseCard from '@/components/molecular/courseCard/CourseCard';

const Courses = () => {
    return (
        <>
            <Header type="md">
                <HeaderTitle title="Our Courses" />
            </Header>

            <ClipEdgeSection>
                <div className="pt-24 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-16 justify-center items-center">
                    {courseData.map((item, idx) => (
                        <div key={idx} className="flex justify-center">
                            <CourseCard
                                description={item.description}
                                image={item.image}
                                title={item.title}
                            />
                        </div>
                    ))}
                </div>
            </ClipEdgeSection>
        </>
    );
};

export default Courses;
