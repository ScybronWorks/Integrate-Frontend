'use client';
import { courseData } from '@/@db/course';
import Button from '@/components/atomic/button/Button';
import ClipEdgeSection from '@/components/layout/clipEdgeSection/ClipEdgeSection';
import Header from '@/components/layout/header/Header';
import SectionCenter from '@/components/layout/sectionCenter/SectionCenter';
import CourseCard from '@/components/molecular/courseCard/CourseCard';
import ServiceCard from '@/components/molecular/serviceCard/ServiceCard';
import TeamCard from '@/components/molecular/teamCard/TeamCard';
import TestimonialCard from '@/components/molecular/testimonialsCard/TestimonialCard';
import VisionCard from '@/components/molecular/visionCard/VisionCard';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useRef } from 'react';
import { Bounce, Slide, Zoom } from 'react-awesome-reveal';

const NewsletterInput = () => {
    return (
        <div className="flex flex-row justify-start items-start bg-transparent p-0 mt-[2rem]">
            <input
                type="email"
                placeholder="Enter your Email...."
                className="outline-none w-[25rem] max-sm:w-[15rem] max-xs:w-[10rem] p-[1.2rem] rounded-tl-[0.4375rem] rounded-bl-[0.4375rem] font-light text-subtitleGray leading-[0.78125rem] text-[0.625rem] h-[50px] max-sm:h-[40px]"
            />
            <button className="flex justify-center items-center px-[2rem] bg-titleBlack rounded-tr-[0.4375rem] rounded-br-[0.4375rem] text-white font-bold h-[50px] max-sm:h-[40px] text-[0.8125rem]">
                Submit
            </button>
        </div>
    );
};

export default function Home() {
    const courseScrollView = useRef<HTMLDivElement | null>(null);
    const testScrollView = useRef<HTMLDivElement | null>(null);
    const teamScrollView = useRef<HTMLDivElement | null>(null);

    function onTeamScrollClick(type: 'right' | 'left') {
        if (!teamScrollView) return;

        if (type == 'left' && teamScrollView.current) {
            teamScrollView.current.scrollLeft -= 266;
        } else if (type == 'right' && teamScrollView.current) {
            teamScrollView.current.scrollLeft += 266;
        }
    }

    function onTestScrollClick(type: 'right' | 'left') {
        if (!testScrollView) return;

        if (type == 'left' && testScrollView.current) {
            testScrollView.current.scrollLeft -= 380;
        } else if (type == 'right' && testScrollView.current) {
            testScrollView.current.scrollLeft += 380;
        }
    }

    function onCourseScrollClick(type: 'right' | 'left') {
        if (!courseScrollView) return;

        if (type == 'left' && courseScrollView.current) {
            courseScrollView.current.scrollLeft -= 335;
        } else if (type == 'right' && courseScrollView.current) {
            courseScrollView.current.scrollLeft += 335;
        }
    }

    return (
        <main className="">
            <Header backgroundImageType="home" type="lg" ClassName="text-white">
                <SectionCenter className="h-full">
                    <div className="flex items-start justify-center h-full flex-col">
                        <div
                            className="text-6xl  font-semibold leading-[5.4rem] max-w-[279rem] max-xl:text-4xl
                            max-lg:text-2xl"
                        >
                            <Zoom duration={2000} triggerOnce>
                                Unlock Your Potential with Expert Guidance and Resources
                            </Zoom>
                        </div>
                        <div className="pt-5">
                            <Slide duration={1000} direction="up" triggerOnce>
                                <Button className="text-sm  w-40 h-14">Discover More</Button>
                            </Slide>
                        </div>
                    </div>
                </SectionCenter>
            </Header>

            <section className="w-full pt-24 pb-16">
                <SectionCenter>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-24 lg:gap-x-1">
                        <Slide duration={1000} direction="left" triggerOnce>
                            <div className="h-full px-10 max-md:px-0 max-lg:order-1">
                                <div className="relative w-full h-96 bg-titleBlack rounded-2xl">
                                    <div
                                        className=" absolute  h-[26rem] top-9 left-9 right-9 max-md:right-6
                                max-md:bottom-6 max-md:left-6 
                                "
                                    >
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
                        </Slide>
                        <div className="">
                            <Slide
                                duration={1000}
                                direction="right"
                                triggerOnce
                                cascade
                                damping={0.025}
                            >
                                <h6 className="text-3xl font-italianno text-primary">About us</h6>
                                <h1 className="text-4xl font-semibold">Empowering Minds</h1>
                                <h1 className="text-4xl font-semibold">Shoping Futrues</h1>
                                {/* <h1 className="text-4xl font-semibold"></h1> */}
                                <p className=" font-lexend text-[1rem] font-light leading-8 tracking-tight mt-3">
                                    The firm aims to provide quality education for students who are
                                    thriving to achieve their maximum for different subjects in high
                                    school, higher secondary and for competitive examinations. We
                                    are dedicated in providing online as well as offline class for
                                    various prime subjects such as chemistry, physics, mathematics
                                    and other; for both school level and career oriented competitive
                                    level examinations such as JEE, NEET, KEAM etc. The classes
                                    comes with expert teaching faculties and supplementary mentor
                                    support.
                                </p>
                                <Button
                                    href="/about"
                                    isLink={true}
                                    type="primary"
                                    className="!w-36 !h-11 mt-3"
                                >
                                    Learn More
                                </Button>
                            </Slide>
                        </div>
                    </div>
                </SectionCenter>
            </section>

            <ClipEdgeSection
                className="text-white mb-0"
                sectionCenterClassName="pt-14 max-md:pt-16"
            >
                <div className="" id="course">
                    <Slide duration={1000} direction="down" triggerOnce>
                        <h3 className="font-extrabold text-[2.5rem] max-md:text-[1.75rem]  max-md:text-center">
                            Innovating education through technology, we empower students to achieve
                            excellence in academics and competitive exams.
                        </h3>
                    </Slide>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mt-20">
                        {/* Map this and add slide left for odd and right for even index */}
                        <Slide duration={1000} direction="left" triggerOnce>
                            <VisionCard
                                title="Our Aim"
                                description="The prime objective of Integrate is to improve the learning outcomes with enhanced
                            technology, providing individualized education and ensuring student with diverse
                            learning styles, thereby making your dreams come true."
                            />
                        </Slide>
                        <Slide duration={1000} direction="right" triggerOnce>
                            <VisionCard
                                title="Our Aim"
                                description="The prime objective of Integrate is to improve the learning outcomes with enhanced
                            technology, providing individualized education and ensuring student with diverse
                            learning styles, thereby making your dreams come true."
                            />
                        </Slide>
                    </div>
                </div>
                <div className="mt-20">
                    <h6 className="text-3xl font-italianno text-center">Our Courses</h6>
                    <h3 className="font-extrabold text-[2.5rem] max-w-[43rem] text-center mx-auto">
                        Master YOur Exams: Expert Courses for Every Stage
                    </h3>

                    <div className="mt-16 relative">
                        <div
                            className="grid grid-flow-col overflow-auto scrollbar-hide gap-x-5 scroll-smooth"
                            ref={courseScrollView}
                        >
                            {courseData.map((item, idx) => (
                                <Slide key={idx} duration={1000} direction="right" triggerOnce>
                                    <CourseCard
                                        description={item.description}
                                        image={item.image}
                                        title={item.title}
                                    />
                                </Slide>
                            ))}
                        </div>
                        <span
                            className="absolute -left-8 top-[50%] w-8 h-8 flex justify-center items-center  rounded-full text-black bg-white cursor-pointer max-md:left-0 "
                            onClick={() => onCourseScrollClick('left')}
                        >
                            <FontAwesomeIcon icon={faAngleLeft} className="w-4 h-4" />
                        </span>
                        <span
                            className="absolute -right-8 top-[50%] w-8 h-8 rounded-full text-black bg-white cursor-pointer flex justify-center items-center max-md:right-0  "
                            onClick={() => onCourseScrollClick('right')}
                        >
                            <FontAwesomeIcon icon={faAngleRight} className="w-4 h-4" />
                        </span>
                    </div>
                </div>
            </ClipEdgeSection>
            {/*  */}
            <section>
                <SectionCenter className="py-24 max-md:py-10">
                    <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-y-10">
                        <Slide
                            duration={1000}
                            direction="left"
                            triggerOnce
                            className="max-md:hidden order-2"
                        >
                            <div className="w-full h-full max-h-[22.2rem] max-md:max-h-80 flex justify-start ">
                                <Image
                                    src={'/img/home/brain.png'}
                                    layout="fill"
                                    objectFit="contain"
                                    alt="About image"
                                    className="!relative  object-center-top md:object-right-top "
                                />
                            </div>
                        </Slide>
                        <div className="md:order-1">
                            <Slide
                                duration={1000}
                                direction="right"
                                cascade
                                damping={0.25}
                                triggerOnce
                            >
                                <h6 className="text-3xl font-italianno ">
                                    Schedule a Call with Us
                                </h6>
                                <h1 className="text-4xl font-semibold">
                                    <span className="text-primary">Connect</span> with our experts
                                    to discuss how we can support your educational goals.
                                </h1>
                                {/* <h1 className="text-4xl font-semibold"></h1> */}
                                <p className=" font-lexend text-[1rem] text-gray-500 font-light leading-8 tracking-tight mt-3">
                                    Choose a convenient time to speak with our team and get
                                    personalized assistance tailored to your needs.
                                </p>
                                <Button
                                    href="/about"
                                    isLink={true}
                                    type="primary"
                                    className="!h-11 mt-8 pr-8 pl-8 pt-6 pb-6 w-fit max-md:text-sm"
                                >
                                    Shedule a Call?
                                </Button>
                            </Slide>
                        </div>
                    </div>
                </SectionCenter>
            </section>

            {/* Our Services Section */}
            <section className="w-full pt-[5.625rem] pb-[6.25rem] bg-white relative z-0">
                <div className="w-full h-[75%] absolute top-0 -z-10 bg-services bg-cover bg-no-repeat bg-center max-sm:h-[90%]"></div>
                <SectionCenter className="h-full">
                    <div className="flex justify-center items-start flex-col w-[100%]">
                        <Slide
                            duration={1000}
                            direction="right"
                            cascade
                            damping={0.025}
                            triggerOnce
                        >
                            <div className="text-[2rem] max-sm:text-[1.75rem] font-italianno text-white leading-[2.5rem] font-normal max-sm:w-full max-sm:text-center">
                                Our Services
                            </div>
                            <div className="text-[2.4375rem] max-sm:text-[1.75rem] max-xs:text-[1.2rem] max-xs:leading-[1.5] font-lexend text-white leading-[3rem] font-bold mt-[1px] max-sm:w-full max-sm:text-center">
                                We Give You The Best <br />
                                Facilities to Learning
                            </div>
                        </Slide>
                        <div className="flex gap-10 mt-11 w-full justify-start items-start flex-row max-1/2xl:flex-col max-sm:items-center">
                            <div className="flex flex-row gap-10 max-sm:flex-col">
                                {Array.from({ length: 2 }).map((_, index) => (
                                    <ServiceCard
                                        title="Tutoring"
                                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, magni at sed eius."
                                        image="/img/tutoring.png"
                                        key="1"
                                    />
                                ))}
                            </div>
                            <div className="flex flex-row gap-10 max-sm:flex-col">
                                {Array.from({ length: 2 }).map((_, index) => (
                                    <ServiceCard
                                        title="Tutoring"
                                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, magni at sed eius."
                                        image="/img/tutoring.png"
                                        key="1"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </SectionCenter>
            </section>

            {/* Our Team Section */}
            <section className="w-full pt-[0.25rem] pb-[6.25rem] bg-white relative z-0">
                <SectionCenter className="h-full">
                    <div className="flex flex-row justify-start items-start w-[100%] gap-[3.5rem]">
                        <div className="flex flex-col items-start justify-start gap-[3.375rem] max-1/2xl:hidden">
                            <Slide
                                duration={1000}
                                direction="left"
                                triggerOnce
                                cascade
                                damping={0.025}
                            >
                                <div className="">
                                    <Image
                                        src="/icons/teams.svg"
                                        alt="teams"
                                        layout="fill"
                                        className="!relative max-h-28"
                                    />
                                </div>
                                <div className="w-[320px] font-light leading-[2rem] text-[1.125rem]">
                                    &quot;Meet our dedicated team of expert tutors committed to
                                    helping you excel. With years of experience and a passion for
                                    teaching, they provide personalized guidance to ensure you reach
                                    your academic goals.&quot;
                                </div>
                            </Slide>
                        </div>
                        <div className="w-full">
                            <Slide
                                duration={1000}
                                direction="right"
                                triggerOnce
                                cascade
                                damping={0.025}
                            >
                                <div className="text-[2rem] max-sm:text-[1.75rem] max-sm:leading-none font-italianno text-titleBlack leading-[2.5rem] font-normal">
                                    Our Team
                                </div>
                                <div className="text-[2.75rem] max-sm:text-[1.75rem] max-sm:leading-[2.5625rem] font-lexend text-titleBlack leading-[3.4375rem] font-bold">
                                    Meet Our Team..
                                </div>
                            </Slide>
                            <div className="w-full relative flex flex-col items-center gap-8">
                                <div
                                    className="flex justify-start gap-[1.125rem] w-full pt-[2.5625rem] max-lg:overflow-auto max-lg:justify-start scroll-smooth scrollbar-hide"
                                    ref={teamScrollView}
                                >
                                    <Zoom duration={1000} cascade triggerOnce>
                                        {Array.from({ length: 3 }).map((_, index) => (
                                            <TeamCard
                                                key={index}
                                                image="/img/team/David.png"
                                                title="Dr. Emily Carter"
                                                description="Lorem ipsum dolor"
                                            />
                                        ))}
                                    </Zoom>
                                </div>
                                <div className="flex flex-row gap-4 justify-center items-center">
                                    <span
                                        className="xl:hidden w-8 h-8 flex justify-center items-center  rounded-full text-black bg-white cursor-pointer max-md:left-0 "
                                        onClick={() => onTeamScrollClick('left')}
                                    >
                                        <FontAwesomeIcon icon={faAngleLeft} className="w-6 h-6" />
                                    </span>
                                    <span
                                        className="xl:hidden w-8 h-8 rounded-full text-black bg-white cursor-pointer flex justify-center items-center max-md:right-0  "
                                        onClick={() => onTeamScrollClick('right')}
                                    >
                                        <FontAwesomeIcon icon={faAngleRight} className="w-6 h-6" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionCenter>
            </section>

            {/* Newsletter Section */}
            <section className="w-full pt-[5.625rem] pb-[6.25rem] bg-gradient-primary-linear">
                <SectionCenter className="h-full">
                    <div className="flex justify-center items-start flex-col w-[100%]">
                        <div className="text-[3.5rem] max-sm:text-[1.75rem] max-sm:leading-none font-italianno text-white leading-[4.25rem] font-normal">
                            Subscribe to Our Newsletter...
                        </div>
                        <div className="text-[1rem] font-lexend text-white leading-[1.625rem] font-light max-w-[41rem] mt-[1.4375rem] max-sm:mt-[0.6875rem] max-sm:text-[0.8125rem]">
                            Subscribe to our Gmail notifications for timely updates and important
                            announcements. Never miss out on valuable information and new resources!
                        </div>
                        {/* Newsletter Input Component */}
                        <NewsletterInput />
                    </div>
                </SectionCenter>
            </section>

            {/* Testimonials Section */}
            <section className="w-full py-[6.25rem]">
                <SectionCenter className="h-full">
                    <div className="flex justify-center items-center flex-col w-[100%]">
                        <Slide duration={1000} direction="down" triggerOnce cascade damping={0.025}>
                            <div className="text-[2rem] font-italianno text-primary leading-10 text-center">
                                Testimonials
                            </div>
                            <div className="text-[1.5rem] sm:text-[2rem] font-bold text-titleBlack leading-10 text-center">
                                What Our Students Say
                            </div>
                            <div className="text-[0.8rem] sm:text-[1rem] font-light leading-6 text-subtitleGray text-center mt-[1rem] max-w-[500px]">
                                Hear from Our Satisfied Clients and Students. Real Stories of
                                Success and Satisfaction.
                            </div>
                        </Slide>
                        <div className="w-full relative">
                            <div
                                className="flex flex-row max-xl:overflow-auto max-xl:justify-start justify-center gap-6 w-full pt-12 scrollbar-hide scroll-smooth"
                                ref={testScrollView}
                            >
                                <Zoom duration={1000} triggerOnce cascade>
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
                                </Zoom>
                            </div>

                            <span
                                className="absolute -left-8 top-[50%] xl:hidden w-8 h-8 flex justify-center items-center  rounded-full text-black bg-white cursor-pointer max-md:left-0 "
                                onClick={() => onTestScrollClick('left')}
                            >
                                <FontAwesomeIcon icon={faAngleLeft} className="w-4 h-4" />
                            </span>
                            <span
                                className="absolute -right-8 top-[50%] xl:hidden w-8 h-8 rounded-full text-black bg-white cursor-pointer flex justify-center items-center max-md:right-0  "
                                onClick={() => onTestScrollClick('right')}
                            >
                                <FontAwesomeIcon icon={faAngleRight} className="w-4 h-4" />
                            </span>
                        </div>
                    </div>
                </SectionCenter>
            </section>
        </main>
    );
}
