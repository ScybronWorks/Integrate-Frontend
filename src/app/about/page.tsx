'use client';
import HeaderTitle from '@/components/common/HeaderTitle';
import Header from '@/components/layout/header/Header';
import SectionCenter from '@/components/layout/sectionCenter/SectionCenter';
import VisionCard from '@/components/molecular/visionCard/VisionCard';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <>
            <Header type="md">
                <HeaderTitle title="About Us" />
            </Header>
            <SectionCenter className="py-20 w-full">
                <div className="space-y-8 flex flex-col">
                    <div className="py-10 relative">
                        <Slide direction="left" duration={1000} triggerOnce>
                            <h1 className="text-2xl md:text-4xl font-bold md:w-[70%]">
                                Innovating education through technology, we empower students to
                                achieve excellence in academics and competitive exams.
                            </h1>
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
                                    type="secondary"
                                    description="The organization is committed to empowering every student striving to reach their full potential in high school and higher secondary education by leveraging modern technologies and innovations, thereby anticipating the transformative possibilities within the educational system through the integration of technology."
                                />
                            </Slide>
                            <Slide duration={1000} direction="right" triggerOnce>
                                <VisionCard
                                    title="Aims included"
                                    type="secondary"
                                    description="The firm aims to provide quality education for students who are striving to achieve their maximum in different subjects in high school and higher secondary. We are committed to providing online as well as offline classes for a variety of essential subjects like chemistry, physics, mathematics, and more, focusing entirely on helping students excel in their academic journey and succeed in their school-level education."
                                />
                            </Slide>
                        </div>
                    </div>

                    <div className="bg-primary px-5 py-6 rounded-lg flex items-center space-x-20">
                        <div className="flex flex-col space-y-4 md:w-3/5">
                            <h2 className={twMerge(italianno.className, 'text-3xl ml-2')}>
                                Highlights
                            </h2>
                            <h1 className="text-secondary text-2xl md:text-3xl font-bold flex items-center space-x-3">
                                <span className="text-white">Why</span>
                                <p>Integrate?</p>
                            </h1>
                            <ul className="flex flex-col md:pt-2 divide-y-2 divide-white/40">
                                <li className="flex items-center md:items-start space-x-4 py-4">
                                    <FontAwesomeIcon
                                        icon={faLocationArrow}
                                        className="size-6 md:size-7 rotate-45"
                                    />
                                    <p className="font-light text-titleBlack text-sm md:text-base">
                                        The evaluation of portions covered each day based on daily
                                        exams.
                                    </p>
                                </li>
                                <li className="flex items-center md:items-start space-x-4 py-4">
                                    <FontAwesomeIcon
                                        icon={faLocationArrow}
                                        className="size-6 md:size-7 rotate-45"
                                    />
                                    <p className="font-light text-titleBlack text-sm md:text-base">
                                        Comprehensive tracking system to ensure studies.(Student
                                        Monitoring System)
                                    </p>
                                </li>
                                <li className="flex items-center md:items-start space-x-4 py-4">
                                    <FontAwesomeIcon
                                        icon={faLocationArrow}
                                        className="size-6 md:size-7 rotate-45"
                                    />
                                    <p className="font-light text-titleBlack text-sm md:text-base">
                                        A high quality of education provided by a team of
                                        experienced faculty.
                                    </p>
                                </li>
                                <li className="flex items-center md:items-start space-x-4 py-4">
                                    <FontAwesomeIcon
                                        icon={faLocationArrow}
                                        className="size-6 md:size-7 rotate-45"
                                    />
                                    <p className="font-light text-titleBlack text-sm md:text-base">
                                        Personalised monitoring
                                    </p>
                                </li>
                                <li className="flex items-center md:items-start space-x-4 py-4">
                                    <FontAwesomeIcon
                                        icon={faLocationArrow}
                                        className="size-6 md:size-7 rotate-45"
                                    />
                                    <p className="font-light text-titleBlack text-sm md:text-base">
                                        A tailored monitoring system designed for individuals
                                        requiring personalised attention
                                    </p>
                                </li>
                                <li className="flex items-center md:items-start space-x-4 py-4">
                                    <FontAwesomeIcon
                                        icon={faLocationArrow}
                                        className="size-6 md:size-7 rotate-45"
                                    />
                                    <p className="font-light text-titleBlack text-sm md:text-base">
                                        A complete course material that offers a wide range of
                                        information based on the curriculum.
                                    </p>
                                </li>
                                <li className="flex items-center md:items-start space-x-4 py-4">
                                    <FontAwesomeIcon
                                        icon={faLocationArrow}
                                        className="size-6 md:size-7 rotate-45"
                                    />
                                    <p className="font-light text-titleBlack text-sm md:text-base">
                                        Additional doubt-clearing sessions conducted based on
                                        identified needs.
                                    </p>
                                </li>
                                <li className="flex items-center md:items-start space-x-4 py-4">
                                    <FontAwesomeIcon
                                        icon={faLocationArrow}
                                        className="size-6 md:size-7 rotate-45"
                                    />
                                    <p className="font-light text-titleBlack text-sm md:text-base">
                                        Guaranteed revision modules prior to examinations
                                    </p>
                                </li>
                                <li className="flex items-center md:items-start space-x-4 py-4">
                                    <FontAwesomeIcon
                                        icon={faLocationArrow}
                                        className="size-6 md:size-7 rotate-45"
                                    />
                                    <p className="font-light text-titleBlack text-sm md:text-base">
                                        Consistent communication with parents.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className="hidden md:flex items-center justify-center">
                            <Image
                                src="/img/about/Boy.png"
                                alt="boy-image"
                                width={400}
                                height={300}
                                className="w-full object-contain mx-auto"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 pt-5 px-4 md:px-0">
                        <Fade duration={2000} triggerOnce>
                            <h6 className="text-xl md:text-2xl font-bold">
                                The firm aims to provide quality education for students who are
                                thriving to achieve their maximum for different subjects in high
                                school, higher secondary and for competitive examinations.
                            </h6>
                            <p className="text-sm md:text-base leading-6 md:leading-8 ">
                                We are dedicated to providing both online and offline classes for
                                various prime subjects such as chemistry, physics, mathematics, and
                                more. The classes come with expert teaching faculties and
                                supplementary mentor support, guiding students through all academic
                                challenges. We provide proper model examinations for each subject,
                                offering weekly analysis for each student to track their progress
                                and initiate personalized correction procedures. Our courses,
                                designed at every level of study, are oriented to facilitate easy
                                and comfortable study patterns for students, helping them feel
                                stress-free and confident.
                            </p>
                        </Fade>
                    </div>

                    <div className="flex items-center justify-between w-full md:w-1/2 pt-6 gap-2">
                        <span className="flex flex-col space-y-3 max-md:items-center text-center">
                            <span className="flex items-center space-x-0 relative">
                                <p className="text-3xl md:text-5xl font-semibold text-primary">
                                    <CountUp end={12} duration={3} />
                                </p>
                                <p className="text-xl items-end justify-end bottom-0 relative text-primary">
                                    +
                                </p>
                            </span>
                            <p className="text-base font-bold max-sm:text-xs">Courses Available</p>
                        </span>

                        <span className="flex flex-col space-y-3 max-md:items-center text-center">
                            <span className="flex items-center space-x-0 relative ">
                                <p className="text-3xl md:text-5xl font-semibold text-primary">
                                    <CountUp end={5000} duration={3} />
                                </p>
                                <p className="text-xl items-end justify-end bottom-0 relative text-primary">
                                    +
                                </p>
                            </span>
                            <p className="text-base font-bold max-sm:text-xs">
                                Successful Students
                            </p>
                        </span>

                        <span className="flex flex-col space-y-3 max-md:items-center text-center">
                            <span className="flex items-center space-x-0 relative">
                                <p className="text-3xl md:text-5xl font-semibold text-primary">
                                    <CountUp end={30} duration={3} />
                                </p>
                                <p className="text-xl items-end justify-end bottom-0 relative text-primary">
                                    +
                                </p>
                            </span>
                            <p className="text-base font-bold max-sm:text-xs">
                                Qualified Instructors
                            </p>
                        </span>
                    </div>

                    <div className="py-10">
                        <Slide direction="up" duration={1000} triggerOnce>
                            <div
                                className=" h-auto relative aspect-[5/2] max-md:aspect-[3/2]
                            "
                            >
                                <Image
                                    src="/img/about/AboutImage.png"
                                    alt="about-image"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </Slide>
                    </div>
                </div>
            </SectionCenter>
        </>
    );
};

export default AboutUs;
