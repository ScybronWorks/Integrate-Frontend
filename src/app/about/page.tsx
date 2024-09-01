'use client';
import HeaderTitle from '@/components/common/HeaderTitle';
import ClipEdgeSection from '@/components/layout/clipEdgeSection/ClipEdgeSection';
import Header from '@/components/layout/header/Header';
import VisionCard from '@/components/molecular/visionCard/VisionCard';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Metadata } from 'next';
import { Italianno } from 'next/font/google';
import Image from 'next/image';
import { Fade, Slide } from 'react-awesome-reveal';
import CountUp from 'react-countup';
import { twMerge } from 'tailwind-merge';

const italianno = Italianno({ subsets: ['latin'], weight: ['400'] });

// export const metadata: Metadata = {
//     title: 'About Us',
//     description:
//         'Integrate is a leading online learning platform that offers quality education for students who are thriving to achieve their maximum for different subjects in high school, higher secondary and for competitive examinations.',
// };

const AboutUs = () => {
    return (
        <main className="relative pb-[100rem] md:pb-[40rem]">
            <Header type="md">
                <HeaderTitle title="About Us" />
            </Header>
            <ClipEdgeSection className="text-white py-20 w-full md:pb-[20rem]">
                <div className="space-y-8 flex flex-col">
                    <div className="flex flex-col space-y-4">
                        <Fade duration={2000} triggerOnce>
                            <h6 className="text-2xl">
                                The firm aims to provide quality education for students who are
                                thriving to achieve their maximum for different subjects in high
                                school, higher secondary, and for competitive examinations.
                            </h6>
                            <ul className="text-base leading-8 text-white/80 list-disc list-inside mt-4">
                                <li>
                                    We are dedicated to providing online as well as offline classes
                                    for prime subjects such as chemistry, physics, mathematics, and
                                    others.
                                </li>
                                <li>
                                    Our courses cater to both school-level and career-oriented
                                    competitive exams such as JEE, NEET, KEAM, etc.
                                </li>
                                <li>
                                    Classes are led by expert teaching faculties with supplementary
                                    mentor support.
                                </li>
                                <li>
                                    We offer proper model examinations for each subject with weekly
                                    analysis for each student and initiate correction procedures.
                                </li>
                                <li>
                                    Our courses are designed to facilitate easy and comfortable
                                    study patterns, helping students feel stress-free.
                                </li>
                            </ul>
                        </Fade>
                    </div>

                    <div className="flex items-center justify-between w-full md:w-1/2 pt-6">
                        <span className="flex flex-col space-y-2">
                            <span className="flex items-center space-x-2 relative">
                                <p className="text-3xl md:text-5xl font-semibold">
                                    <CountUp end={12} duration={3} />
                                </p>
                                <p className="text-xl items-end justify-end bottom-0 relative">+</p>
                            </span>
                            <p className="text-base font-light text-white/80">Courses Available</p>
                        </span>

                        <span className="flex flex-col space-y-2">
                            <span className="flex items-center space-x-2 relative">
                                <p className="text-3xl md:text-5xl font-semibold">
                                    <CountUp end={5000} duration={3} />
                                </p>
                                <p className="text-xl items-end justify-end bottom-0 relative">+</p>
                            </span>
                            <p className="text-base font-light text-white/80">
                                Successful Graduates
                            </p>
                        </span>

                        <span className="flex flex-col space-y-2">
                            <span className="flex items-center space-x-2 relative">
                                <p className="text-3xl md:text-5xl font-semibold">
                                    <CountUp end={100} duration={3} />
                                </p>
                                <p className="text-xl items-end justify-end bottom-0 relative">+</p>
                            </span>
                            <p className="text-base font-light text-white/80">
                                Qualified Instructors
                            </p>
                        </span>
                    </div>

                    <div className="py-10">
                        <Slide direction="up" duration={1000} triggerOnce>
                            <Image
                                src="/img/about/AboutImage.png"
                                alt="about-image"
                                width={1400}
                                height={800}
                                className="w-full h-full object-cover clip-path-image"
                            />
                        </Slide>
                    </div>

                    <div>
                        <hr className="border border-white/20" />
                    </div>

                    <div className="py-10 relative">
                        <Slide direction="left" duration={1000} triggerOnce>
                            <h1 className="text-4xl font-bold">
                                Innovating education through technology, we empower students to
                                achieve excellence in academics and competitive exams.
                            </h1>
                        </Slide>

                        <div
                            className="grid grid-cols-1 md:grid-cols-2  gap-x-12 gap-y-12 mt-20 mb-10
                            grid-rows-1
                            "
                        >
                            {/* Map this and add slide left for odd and right for even index */}
                            <Slide duration={1000} direction="left" triggerOnce>
                                <VisionCard
                                    title="Vision"
                                    description="The prime objective of Integrate is to improve the learning outcomes with enhanced technology, providing individualised education and ensuring students with diverse learning styles, thereby making your dreams come true."
                                />
                            </Slide>
                            <Slide duration={1000} direction="right" triggerOnce>
                                <VisionCard
                                    title="Vision Aims included"
                                    description="The firm aims to provide quality education for students who are thriving to achieve their maximum for different subjects in high school, higher secondary, and for competitive examinations. We are dedicated to providing online as well as offline classes for various prime subjects such as chemistry, physics, mathematics, etc."
                                />
                            </Slide>
                            <Slide duration={1000} direction="right" triggerOnce>
                                <VisionCard
                                    title="Highlights"
                                    description={
                                        <ul className="list-disc list-inside">
                                            <li>
                                                The evaluation of portions covered each day based on
                                                daily exams.
                                            </li>
                                            <li>
                                                Comprehensive tracking system to ensure studies.
                                                (Student Monitoring System)
                                            </li>
                                            <li>
                                                A high quality of education provided by a team of
                                                experienced faculty.
                                            </li>
                                            <li>Personalised monitoring.</li>
                                        </ul>
                                    }
                                />
                            </Slide>
                            <Slide duration={1000} direction="right" triggerOnce>
                                <VisionCard
                                    title="Why integrate?"
                                    description={
                                        <ul className="list-disc list-inside">
                                            <li>
                                                A tailored monitoring system designed for
                                                individuals requiring personalised attention.
                                            </li>
                                            <li>
                                                A complete course material that offers a wide range
                                                of information based on the curriculum.
                                            </li>
                                            <li>
                                                Additional doubt-clearing sessions conducted based
                                                on identified needs.
                                            </li>
                                            <li>
                                                Guaranteed revision modules prior to examinations.
                                            </li>
                                            <li>Consistent communication with parents.</li>
                                        </ul>
                                    }
                                />
                            </Slide>
                        </div>
                    </div>
                </div>
            </ClipEdgeSection>

            <div
                className="grid grid-cols-1 gap-6 absolute md:- max-w-5xl mx-auto w-full left-1/2 -translate-x-1/2
                md:grid-cols-2 px-4 md:px-0 bottom-[3rem] md:bottom-[10rem]"
            >
                <Slide direction="up" duration={1000} triggerOnce>
                    <Image
                        src="/img/about/AboutImage2.png"
                        alt="about-image"
                        width={1400}
                        height={800}
                        className="w-full h-full object-cover"
                    />
                </Slide>

                <div className="bg-[#CDC7ED] rounded-lg p-6">
                    <Fade duration={3000} triggerOnce>
                        <div className="px-4">
                            <h1 className={twMerge(italianno.className, 'text-3xl')}>The Growth</h1>
                            <span className="text-3xl text-white font-bold">
                                Our <span className="text-primary">Strategies</span> for Success
                            </span>
                        </div>

                        <ul className="py-4 flex flex-col space-y-5">
                            <li className="flex items-start space-x-4">
                                <FontAwesomeIcon
                                    icon={faLocationArrow}
                                    className="size-8 rotate-45"
                                />
                                <p className="font-light text-titleBlack">
                                    Leverage data-driven insights to tailor learning experiences for
                                    individual student needs.
                                </p>
                            </li>
                            <li className="flex items-start space-x-4">
                                <FontAwesomeIcon
                                    icon={faLocationArrow}
                                    className="size-8 rotate-45"
                                />
                                <p className="font-light text-titleBlack">
                                    Develop comprehensive content and resources aligned with the
                                    latest curriculum standards.
                                </p>
                            </li>
                            <li className="flex items-start space-x-4">
                                <FontAwesomeIcon
                                    icon={faLocationArrow}
                                    className="size-8 rotate-45"
                                />
                                <p className="font-light text-titleBlack">
                                    Foster collaboration with educators and industry experts to
                                    enhance educational offerings.
                                </p>
                            </li>
                            <li className="flex items-start space-x-4">
                                <FontAwesomeIcon
                                    icon={faLocationArrow}
                                    className="size-8 rotate-45"
                                />
                                <p className="font-light text-titleBlack">
                                    Utilize cutting-edge technology to provide interactive and
                                    engaging exam preparation tools.
                                </p>
                            </li>
                        </ul>
                    </Fade>
                </div>

                <div className="bg-[#CDC7ED] rounded-lg p-6 z-10">
                    <Fade duration={3000} triggerOnce>
                        <div className="px-4">
                            <h1 className={twMerge(italianno.className, 'text-3xl')}>
                                The Excellence
                            </h1>
                            <span className="text-3xl text-white font-bold">
                                Why <span className="text-primary">Choose</span> Us?
                            </span>
                        </div>

                        <ul className="py-4 flex flex-col space-y-5">
                            <li className="flex items-start space-x-4">
                                <FontAwesomeIcon
                                    icon={faLocationArrow}
                                    className="size-8 rotate-45"
                                />
                                <p className="font-light text-titleBlack">
                                    Personalized learning plans based on data-driven insights and
                                    student progress.
                                </p>
                            </li>
                            <li className="flex items-start space-x-4">
                                <FontAwesomeIcon
                                    icon={faLocationArrow}
                                    className="size-8 rotate-45"
                                />
                                <p className="font-light text-titleBlack">
                                    Comprehensive resources designed to meet and exceed current
                                    educational standards.
                                </p>
                            </li>
                            <li className="flex items-start space-x-4">
                                <FontAwesomeIcon
                                    icon={faLocationArrow}
                                    className="size-8 rotate-45"
                                />
                                <p className="font-light text-titleBlack">
                                    Collaborative partnerships with educators and experts to enhance
                                    content quality.
                                </p>
                            </li>
                            <li className="flex items-start space-x-4">
                                <FontAwesomeIcon
                                    icon={faLocationArrow}
                                    className="size-8 rotate-45"
                                />
                                <p className="font-light text-titleBlack">
                                    Innovative technology to create interactive and engaging exam
                                    preparation tools.
                                </p>
                            </li>
                        </ul>
                    </Fade>
                </div>

                <Slide direction="left" duration={1000} triggerOnce>
                    <Image
                        src="/img/about/AboutImage3.png"
                        alt="about-image"
                        width={1400}
                        height={800}
                        className="w-full h-full object-cover"
                    />
                </Slide>
            </div>
        </main>
    );
};

export default AboutUs;
