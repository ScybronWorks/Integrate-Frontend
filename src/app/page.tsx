'use client';
import { courseData } from '@/@db/course';
import { serviceData } from '@/@db/service';
import { testimonialsData } from '@/@db/testimonials';
import Arrow from '@/components/atomic/arrow/Arrow';
import Button from '@/components/atomic/button/Button';
import ClipEdgeSection from '@/components/layout/clipEdgeSection/ClipEdgeSection';
import Header from '@/components/layout/header/Header';
import Loading from '@/components/layout/loading/Loading';
import SectionCenter from '@/components/layout/sectionCenter/SectionCenter';
import CallScheduleModal from '@/components/molecular/callScheduleModal/CallScheduleModel';
import CourseCard from '@/components/molecular/courseCard/CourseCard';
import ServiceCard from '@/components/molecular/serviceCard/ServiceCard';
import TeamCard from '@/components/molecular/teamCard/TeamCard';
import TestimonialCard from '@/components/molecular/testimonialsCard/TestimonialCard';
import VisionCard from '@/components/molecular/visionCard/VisionCard';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
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
    const serviceScrollView = useRef<HTMLDivElement | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
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
            courseScrollView.current.scrollLeft -= 200;
        } else if (type == 'right' && courseScrollView.current) {
            courseScrollView.current.scrollLeft += 200;
        }
    }
    function onServiceScrollClick(type: 'right' | 'left') {
        if (!serviceScrollView) return;

        if (type == 'left' && serviceScrollView.current) {
            serviceScrollView.current.scrollLeft -= 256;
        } else if (type == 'right' && serviceScrollView.current) {
            serviceScrollView.current.scrollLeft += 256;
        }
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <main className="">
            <CallScheduleModal handleClose={() => toggleModal()} isOpen={isModalOpen} />
            <Header backgroundImageType="home" type="lg" ClassName="text-white">
                <SectionCenter className="h-full">
                    <div className="flex items-start justify-center h-full flex-col">
                        <div
                            className="text-6xl font-semibold leading-[5.4rem] max-w-[279rem] max-xl:text-4xl
                            max-lg:text-2xl"
                        >
                            <Zoom duration={2000} triggerOnce>
                                Unlock Your Potential with Expert Guidance and Resources
                            </Zoom>
                        </div>
                        <div className="pt-5">
                            <Slide duration={1000} direction="up" triggerOnce>
                                <Link href="/courses">
                                    <Button className="text-lg w-40 h-14">Discover More</Button>
                                </Link>
                            </Slide>
                        </div>
                    </div>
                </SectionCenter>
            </Header>

            <section className="w-full pt-24 pb-16">
                <SectionCenter className="max-1/2lx:px-5 max-xss:px-2">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-24 lg:gap-x-1 lg:mb-16">
                        <Slide
                            duration={1000}
                            direction="left"
                            triggerOnce
                            className="max-lg:order-1"
                        >
                            <div className="h-full px-10 max-md:px-0 max-lg:order-1">
                                <div
                                    className="relative w-full h-[22rem] bg-titleBlack rounded-2xl
                                max-xss:h-[17rem]
                                "
                                >
                                    <div
                                        className=" absolute  h-[24rem] top-9 left-9 right-9 max-md:right-6
                                max-md:bottom-6 max-md:left-6 max-xss:h-[19rem]
                                "
                                    >
                                        <Image
                                            src="/img/home/about.jpg"
                                            fill
                                            className="rounded-2xl text-4xl object-cover"
                                            alt="About image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <div className="max-sm:px-10 max-small:px-8">
                            <Slide
                                duration={1000}
                                direction="right"
                                triggerOnce
                                cascade
                                damping={0.025}
                            >
                                <h6 className="text-3xl font-italianno text-secondary">About us</h6>
                                <h1
                                    className="text-4xl font-semibold text-primary *:
                                max-sm:text-2xl
                                "
                                >
                                    Empowering Minds <br />
                                </h1>

                                {/* <h1 className="text-4xl font-semibold"></h1> */}
                                <p
                                    className=" max-sm:hidden font-lexend text-[1rem] font-light leading-8 tracking-tight mt-3
                                max-sm:text-[0.9rem] max-sm:leading-7
                                "
                                >
                                    The firm aims to provide quality education for students who are
                                    striving to achieve their maximum potential in different
                                    subjects in high school and higher secondary. We are dedicated
                                    to providing online as well as offline classes for various prime
                                    subjects such as chemistry, physics, mathematics, and more,
                                    helping students build a strong foundation. The classes come
                                    with expert teaching faculties and supplementary mentor support,
                                    ensuring personalized attention for every student.
                                </p>
                                <p
                                    className=" sm:hidden font-lexend text-[1rem] font-light leading-8 tracking-tight mt-3
                                max-sm:text-[0.9rem] max-sm:leading-7
                                "
                                >
                                    We offer quality education for high school and higher secondary
                                    students. Our online and offline classes cover key subjects like
                                    chemistry, physics, and mathematics. With expert teachers and
                                    personalized mentor support, we help students build a strong
                                    foundation and reach their full potential.
                                </p>
                                <Button
                                    href="/about"
                                    isLink={true}
                                    type="secondary"
                                    className="!w-36 !h-11 mt-3"
                                >
                                    Learn More
                                </Button>
                            </Slide>
                        </div>
                    </div>
                </SectionCenter>
            </section>

            <section className="bg-secondary max-1/2xl:mt-24 pb-20 ">
                <SectionCenter className="text-white mb-0 pt-14 max-md:pt-10 !max-xss:px-0 relative">
                    <div className=" max-2xl:hidden absolute top-10 -right-80 w-[19.8rem] h-[34rem]">
                        <Image
                            src="/img/home/childOpacity.png"
                            fill
                            className="rounded-2xl text-4xl object-cover"
                            alt="About image"
                        />
                    </div>
                    <div className="relative" id="course">
                        <Slide duration={1000} direction="down" triggerOnce>
                            <h3 className="font-extrabold text-primary text-[2.5rem] max-md:text-[1.75rem]  max-md:text-start max-sm:text-[1.5rem]">
                                Innovating education through technology, we empower students to
                                achieve excellence in academics and competitive exams.
                            </h3>
                        </Slide>
                        <div
                            className="grid grid-cols-1 md:grid-cols-2  gap-x-12 gap-y-12 mt-20
                                grid-rows-1 max-sm:mt-14
                        "
                        >
                            {/* Map this and add slide left for odd and right for even index */}
                            <Slide duration={1000} direction="left" triggerOnce>
                                <VisionCard
                                    title="Vision"
                                    description="The organization is committed to empowering every student striving to reach their full potential in high school and higher secondary education by leveraging modern technologies and innovations, thereby anticipating the transformative possibilities within the educational system through the integration of technology."
                                />
                            </Slide>
                            <Slide duration={1000} direction="right" triggerOnce>
                                <VisionCard
                                    title="Aims included"
                                    description="The firm aims to provide quality education for students who are striving to achieve their maximum in different subjects in high school and higher secondary. We are committed to providing online as well as offline classes for a variety of essential subjects like chemistry, physics, mathematics, and more, focusing entirely on helping students excel in their academic journey and succeed in their school-level education."
                                />
                            </Slide>
                        </div>
                    </div>
                </SectionCenter>
            </section>

            <section className="max-1/2xl:mt-24 pb-20 ">
                <SectionCenter className="text-black mb-0 max-md:pt-10  relative">
                    <div className="mt-20">
                        <h6 className="text-3xl font-italianno text-center text-secondary">
                            Our Courses
                        </h6>
                        <h3 className="font-extrabold text-[2.5rem] max-w-[43rem] text-center mx-auto max-sm:text-[2rem] max-xss:text-[1.5rem]">
                            Master Your Exams: Expert Courses for Every Stage
                        </h3>

                        <div className="mt-16 relative">
                            <div
                                className="grid grid-flow-col overflow-scroll scrollbar-hide gap-x-5 scroll-smooth
                                max-xss:flex  snap-mandatory  snap-x
                                "
                                ref={courseScrollView}
                            >
                                {courseData.map((item, idx) => (
                                    <Slide
                                        className="snap-center"
                                        key={idx}
                                        duration={1000}
                                        direction="right"
                                        triggerOnce
                                    >
                                        <CourseCard
                                            description={item.description}
                                            image={item.image}
                                            title={item.title}
                                            discountedPrice={item.discountPrice}
                                            originalPrice={item.originalPrice}
                                            isScrolling={true}
                                        />
                                    </Slide>
                                ))}
                            </div>
                            <span
                                className="absolute -left-8 top-[30%] w-8 h-8 flex justify-center items-center  rounded-full text-black bg-primary cursor-pointer max-1/2lx:left-0 "
                                onClick={() => onCourseScrollClick('left')}
                            >
                                <FontAwesomeIcon icon={faAngleLeft} className="w-4 h-4" />
                            </span>
                            <span
                                className="absolute -right-8 top-[30%] w-8 h-8 rounded-full text-black bg-primary cursor-pointer flex justify-center items-center max-1/2lx:right-0  "
                                onClick={() => onCourseScrollClick('right')}
                            >
                                <FontAwesomeIcon icon={faAngleRight} className="w-4 h-4" />
                            </span>
                        </div>
                    </div>
                </SectionCenter>
            </section>
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
                                    fill
                                    alt="About image"
                                    className="!relative  object-center-top object-contain md:object-right-top "
                                />
                            </div>
                        </Slide>
                        <div className="md:order-1 max-sm:px-10 max-small:px-8">
                            <Slide
                                duration={1000}
                                direction="left"
                                cascade
                                damping={0.25}
                                triggerOnce
                            >
                                <h6 className="text-3xl font-italianno ">
                                    Schedule a Call with Us
                                </h6>
                                <h1 className="text-4xl font-semibold max-xss:text-[1.7rem]">
                                    <span className="text-primary">Connect</span> with our experts
                                    to discuss how we can support your educational goals.
                                </h1>
                                {/* <h1 className="text-4xl font-semibold"></h1> */}
                                <p className=" font-lexend text-[1rem] text-gray-500 font-light leading-8 tracking-tight mt-3">
                                    Choose a convenient time to speak with our team and get
                                    personalized assistance tailored to your needs.
                                </p>
                                <Button
                                    isLink={false}
                                    type="secondary"
                                    className="!h-11 mt-8 pr-8 pl-8 pt-6 pb-6 w-fit max-md:text-sm"
                                    onClick={() => toggleModal()}
                                >
                                    Schedule a Call?
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
                    <div className="">
                        <Slide
                            duration={1000}
                            direction="right"
                            cascade
                            damping={0.025}
                            triggerOnce
                        >
                            <div className="flex flex-row justify-between">
                                <div className="text-left w-full">
                                    <div className="text-[2rem] max-sm:text-[1.75rem] font-italianno text-white leading-[2.5rem] font-normal max-sm:w-full max-sm:text-center">
                                        Our Services
                                    </div>
                                    <div className="text-[2.4375rem] max-sm:text-[1.75rem] max-xs:text-[1.2rem] max-xs:leading-[1.5] font-lexend text-white leading-[3rem] font-bold mt-[1px] max-sm:w-full max-sm:text-center">
                                        We Give You The Best <br />
                                        Facilities to Learning
                                    </div>
                                </div>
                                <div className="flex gap-4 mr-16 max-sm:hidden ">
                                    <Arrow
                                        onClick={() => onServiceScrollClick('left')}
                                        type="left"
                                    />
                                    <Arrow
                                        onClick={() => onServiceScrollClick('right')}
                                        type="right"
                                    />
                                </div>
                            </div>
                        </Slide>
                        <div className="flex gap-10 mt-11 w-full justify-start items-start flex-row max-1/2xl:flex-col max-sm:items-center">
                            <div
                                className="flex flex-row gap-10 max-sm:flex-col  overflow-auto max-w-[1150px] snap-mandatory scroll-smooth snap-x scrollbar-hide"
                                ref={serviceScrollView}
                            >
                                {serviceData.map((item, idx) => (
                                    <ServiceCard
                                        title={item.title}
                                        description={item.description}
                                        image={item.image}
                                        key={idx}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </SectionCenter>
            </section>
            {/* Our Team Section */}
            <section className="hidden w-full pt-[0.25rem] pb-[6.25rem] bg-white relative z-0">
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
                                        fill
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
            <section className="w-full pt-[5.625rem] pb-[6.25rem] bg-primary relative">
                <div
                    className="absolute max-md:bottom-16 max-md:-right-16 max-md:w-[550px] mad-md:h-[170px] w-[600px] h-[135px] -right-16 bottom-20  max-md:hidden
                "
                >
                    <Image
                        src={'/img/logo/logo.png'}
                        alt="logo"
                        fill
                        className="!relative opacity-[20%]  -rotate-[25deg]"
                    />
                </div>
                <SectionCenter className="h-full ">
                    <div className="flex gap-16 max-sm:px-10 max-small:px-8">
                        <div className="relative max-md:hidden">
                            <Image
                                alt="integrate boy logo"
                                src={'/img/home/boy.png'}
                                width={342}
                                height={417}
                            />
                        </div>
                        <div className="flex justify-center items-start flex-col w-[100%] z-50">
                            <div className="text-[3.5rem] max-sm:text-[2.5rem] max-sm:leading-none font-italianno text-white leading-[4.25rem] font-normal z-20 max-[350px]:text-[2.25rem]">
                                Subscribe to Our Newsletter...
                            </div>
                            <div className="text-[1rem] font-lexend text-white leading-[1.625rem] font-light max-w-[41rem] mt-[1.4375rem] max-sm:mt-[0.6875rem] max-sm:text-[0.8125rem] z-20">
                                Subscribe to our Gmail notifications for timely updates and
                                important announcements. Never miss out on valuable information and
                                new resources!
                            </div>
                            {/* Newsletter Input Component */}
                            <NewsletterInput />
                        </div>
                    </div>
                </SectionCenter>
            </section>

            {/* Testimonials Section */}
            <section className="w-full py-[6.25rem]">
                <SectionCenter className="h-full !sm:px-2 !px-0">
                    <div className="flex justify-center items-center flex-col w-[100%]">
                        <Slide duration={1000} direction="down" triggerOnce cascade damping={0.025}>
                            <div className="text-[2rem] font-italianno text-black leading-10 text-center">
                                Testimonials
                            </div>
                            <div className="text-[1.5rem] sm:text-[2rem] font-bold text-titleBlack leading-10 text-center">
                                What Our Students Say
                            </div>
                            <div className="text-[0.8rem] sm:text-[1rem] font-light leading-6 text-primary text-center mt-[1rem] max-w-[500px]">
                                Hear from Our Satisfied Clients and Students. Real Stories of
                                Success and Satisfaction.
                            </div>
                        </Slide>
                        <div className="w-full relative">
                            <div
                                className="flex max-xl:overflow-auto max-xl:justify-start justify-center gap-6 w-full pt-12 scrollbar-hide overflow-x-auto md:pl-[72rem] scroll-smooth snap-x scrollbar-hide"
                                ref={testScrollView}
                            >
                                <Zoom duration={0} triggerOnce cascade>
                                    {testimonialsData?.map((testimonial, index) => (
                                        <TestimonialCard
                                            key={testimonial?.id}
                                            image={testimonial?.image}
                                            location={testimonial?.role}
                                            name={testimonial?.name}
                                            text={testimonial?.text}
                                        />
                                    ))}
                                </Zoom>
                            </div>

                            <span
                                className="absolute -left-8 top-[50%] w-8 h-8 flex justify-center items-center  rounded-full text-black bg-white cursor-pointer max-md:left-0 "
                                onClick={() => onTestScrollClick('left')}
                            >
                                <FontAwesomeIcon icon={faAngleLeft} className="w-4 h-4" />
                            </span>
                            <span
                                className="absolute -right-8 top-[50%] w-8 h-8 rounded-full text-black bg-white cursor-pointer flex justify-center items-center max-md:right-0  "
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
