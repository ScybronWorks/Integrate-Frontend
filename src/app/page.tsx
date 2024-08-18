'use client';
import { courseData } from '@/@db/course';
import Button from '@/components/atomic/button/Button';
import ClipEdgeSection from '@/components/layout/clipEdgeSection/ClipEdgeSection';
import Header from '@/components/layout/header/Header';
import SectionCenter from '@/components/layout/sectionCenter/SectionCenter';
import CourseCard from '@/components/molecular/courseCard/CourseCard';
import VisionCard from '@/components/molecular/visionCard/VisionCard';
import { faAngleLeft, faAngleRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useRef } from 'react';

export default function Home() {
    const courseScrollView = useRef<HTMLDivElement | null>(null);

    function onCourseScrollClick(type: 'right' | 'left') {
        if (!courseScrollView) return;

        if (type == 'left' && courseScrollView.current) {
            courseScrollView.current.scrollLeft -= 335;
        } else if (type == 'right' && courseScrollView.current) {
            courseScrollView.current.scrollLeft += 335;
        }
    }
    return (
        <main className="scroll-smooth">
            <Header backgroundImageType="home" type="lg" ClassName="text-white">
                <SectionCenter className="h-full">
                    <div className="flex items-start justify-center h-full flex-col">
                        <div className="text-6xl  font-semibold leading-[5.4rem] max-w-[279rem]">
                            Unlock Your Potential with Expert Guidance and Resources
                        </div>
                        <div className="pt-5">
                            <Button className="text-sm  w-40 h-14">Discover More</Button>
                        </div>
                    </div>
                </SectionCenter>
            </Header>

            {/* ABout section */}
            <section className="w-full pt-24 pb-16">
                <SectionCenter>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-24 lg:gap-x-1">
                        <div className="h-full px-10">
                            <div className="relative w-full h-96 bg-titleBlack rounded-2xl">
                                <div className=" absolute  h-[26rem] top-9 left-9 right-9">
                                    <Image
                                        src="/img/home/about.png"
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-2xl text-4xl"
                                        alt="About image"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <h6 className="text-3xl font-italianno text-primary">About us</h6>
                            <h1 className="text-4xl font-semibold">Empowering Minds</h1>
                            <h1 className="text-4xl font-semibold">Shoping Futrues</h1>
                            {/* <h1 className="text-4xl font-semibold"></h1> */}
                            <p className=" font-lexend text-[1rem] font-light leading-8 tracking-tight mt-3">
                                The firm aims to provide quality education for students who are
                                thriving to achieve their maximum for different subjects in high
                                school, higher secondary and for competitive examinations. We are
                                dedicated in providing online as well as offline class for various
                                prime subjects such as chemistry, physics, mathematics and other;
                                for both school level and career oriented competitive level
                                examinations such as JEE, NEET, KEAM etc. The classes comes with
                                expert teaching faculties and supplementary mentor support.
                            </p>
                            <Button
                                href="/about"
                                isLink={true}
                                type="primary"
                                className="!w-36 !h-11 mt-3"
                            >
                                Learn More
                            </Button>
                        </div>
                    </div>
                </SectionCenter>
            </section>

            {/* Oue Courses section */}
            <ClipEdgeSection className="text-white mb-0" sectionCenterClassName="pt-14">
                <div className="" id="course">
                    <h3 className="font-extrabold text-[2.5rem] ">
                        Innovating education through technology, we empower students to achieve
                        excellence in academics and competitive exams.
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mt-20 ">
                        <VisionCard />
                        <VisionCard />
                    </div>
                </div>
                <div className="mt-20">
                    <h6 className="text-3xl font-italianno text-center">Our Courses</h6>
                    <h3 className="font-extrabold text-[2.5rem] max-w-[43rem] text-center mx-auto">
                        Master YOur Exams: Expert Courses for Every Stage
                    </h3>

                    <div className="mt-16 relative">
                        <div
                            className="grid grid-flow-col overflow-auto scrollbar-hide gap-x-5 scroll-smooth "
                            ref={courseScrollView}
                        >
                            {courseData.map((item, idx) => (
                                <CourseCard
                                    key={idx}
                                    description={item.description}
                                    image={item.image}
                                    title={item.title}
                                />
                            ))}
                        </div>
                        <span
                            className="absolute -left-8 top-[50%] w-8 h-8 flex justify-center items-center  rounded-full text-black bg-white cursor-pointer"
                            onClick={() => onCourseScrollClick('left')}
                        >
                            <FontAwesomeIcon icon={faAngleLeft} className="w-4 h-4" />
                        </span>
                        <span
                            className="absolute -right-8 top-[50%] w-8 h-8 rounded-full text-black bg-white cursor-pointer flex justify-center items-center  "
                            onClick={() => onCourseScrollClick('right')}
                        >
                            <FontAwesomeIcon icon={faAngleRight} className="w-4 h-4" />
                        </span>
                    </div>
                </div>
            </ClipEdgeSection>
            {/* Connect me section */}
            <section>
                <SectionCenter className="py-24">
                    <div className="grid grid-cols-2  max-md:grid-cols-1 max-md:gap-y-10">
                        <div className="w-full h-full max-h-[22.2rem] max-md:max-h-80 flex justify-start md:order-2">
                            <Image
                                src={'/img/home/brain.png'}
                                layout="fill"
                                objectFit="contain"
                                alt="About image"
                                className="!relative  object-center-top md:object-right-top "
                            />
                        </div>
                        <div className="md:order-1">
                            <h6 className="text-3xl font-italianno ">Schedule a Call with Us</h6>
                            <h1 className="text-4xl font-semibold">
                                <span className="text-primary">Connect</span> with our experts to
                                discuss how we can support your educational goals.
                            </h1>
                            {/* <h1 className="text-4xl font-semibold"></h1> */}
                            <p className=" font-lexend text-[1rem] font-light leading-8 tracking-tight mt-3">
                                Choose a convenient time to speak with our team and get personalized
                                assistance tailored to your needs.
                            </p>
                            <Button
                                href="/about"
                                isLink={true}
                                type="primary"
                                className="!w-36 !h-11 mt-8"
                            >
                                Learn More
                            </Button>
                        </div>
                    </div>
                </SectionCenter>
            </section>
        </main>
    );
}
