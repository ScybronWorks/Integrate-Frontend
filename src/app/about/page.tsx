import HeaderTitle from '@/components/common/HeaderTitle';
import ClipEdgeSection from '@/components/layout/clipEdgeSection/ClipEdgeSection';
import Header from '@/components/layout/header/Header';
import VisionCard from '@/components/molecular/visionCard/VisionCard';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Metadata } from 'next';
import { Italianno } from 'next/font/google';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

const italianno = Italianno({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
    title: 'About Us',
    description:
        'Integrate is a leading online learning platform that offers quality education for students who are thriving to achieve their maximum for different subjects in high school, higher secondary and for competitive examinations.',
};

const AboutUs = () => {
    return (
        <main className="relative pb-[40rem]">
            <Header type="md">
                <HeaderTitle title="About Us" />
            </Header>
            <ClipEdgeSection className="text-white py-20  w-full pb-[20rem]">
                <div className="space-y-8 flex flex-col">
                    <div className="flex flex-col space-y-4">
                        <h6 className="text-2xl">
                            The firm aims to provide quality education for students who are thriving
                            to achieve their maximum for different subjects in high school, higher
                            secondary and for competitive examinations.
                        </h6>
                        <p className="text-base leading-8 text-white/80">
                            We are dedicated in providing online as well as offline class for
                            various prime subjects such as chemistry, physics, mathematics and
                            other; for both school level and career oriented competitive level
                            examinations such as JEE, NEET, KEAM etc. The classes comes with expert
                            teaching faculties and supplementary mentor support. We provide proper
                            model examinations of each subject with weekly analysis for each student
                            and initiate correction procedures. Our courses at each level of studies
                            are oriented to facilitate easy and comfortable study patterns for
                            students, feeling stress free.
                        </p>
                    </div>

                    <div className="flex items-center justify-between w-1/2 pt-6">
                        <span className="flex flex-col space-y-2">
                            <span className="flex items-center space-x-2 relative">
                                <p className="text-5xl font-semibold">12</p>
                                <p className="text-4xl items-end justify-end bottom-0 relative">
                                    +
                                </p>
                            </span>
                            <p className="text-base font-light text-white/80">Courses Available</p>
                        </span>

                        <span className="flex flex-col space-y-2">
                            <span className="flex items-center space-x-2 relative">
                                <p className="text-5xl font-semibold">5,000</p>
                                <p className="text-4xl items-end justify-end bottom-0 relative">
                                    +
                                </p>
                            </span>
                            <p className="text-base font-light text-white/80">
                                Successful Graduates
                            </p>
                        </span>

                        <span className="flex flex-col space-y-2">
                            <span className="flex items-center space-x-2 relative">
                                <p className="text-5xl font-semibold">100+</p>
                                <p className="text-4xl items-end justify-end bottom-0 relative">
                                    +
                                </p>
                            </span>
                            <p className="text-base font-light text-white/80">
                                Qualified Instructors
                            </p>
                        </span>
                    </div>

                    <div className="py-10">
                        <Image
                            src="/img/about/AboutImage.png"
                            alt="about-image"
                            width={1400}
                            height={800}
                            className="w-full h-full object-cover clip-path-image"
                        />
                    </div>

                    <div>
                        <hr className="border border-white/20" />
                    </div>

                    <div className="py-10 relative">
                        <h1 className="text-4xl font-bold">
                            Innovating education through technology, we empower students to achieve
                            excellence in academics and competitive exams.
                        </h1>

                        <div className="flex items-center space-x-8 py-16">
                            <VisionCard
                                title="Our Aim"
                                description="The prime objective of Integrate is to improve the learning outcomes with enhanced
                technology, providing individualized education and ensuring student with diverse
                learning styles, thereby making your dreams come true."
                            />
                            <VisionCard
                                title="Our Vision"
                                description="Our vision is to culture globally resourceful citizens by nurturing them with quality education and innovative learning style and powering their success."
                            />
                        </div>
                    </div>
                </div>
            </ClipEdgeSection>
            <div
                className="grid grid-cols-2 gap-6 absolute h-fit -bottom-[15rem] left-1/2 transform -translate-x-1/2
             -translate-y-1/2 max-w-5xl mx-auto w-full pb8"
            >
                <Image
                    src="/img/about/AboutImage2.png"
                    alt="about-image"
                    width={1400}
                    height={800}
                    className="w-full h-full object-cover"
                />

                <div className="bg-[#CDC7ED] rounded-lg p-6">
                    <div className="px-4">
                        <h1 className={twMerge(italianno.className, 'text-3xl')}>The Growth</h1>
                        <span className="text-3xl text-white font-bold">
                            Our <span className="text-primary">Strategies</span> for Success
                        </span>
                    </div>

                    <ul className="py-4 flex flex-col space-y-5">
                        <li className="flex items-start space-x-4">
                            <FontAwesomeIcon icon={faLocationArrow} className="size-8 rotate-45" />
                            <p className="font-light text-titleBlack">
                                Leverage data-driven insights to tailor learning experiences for
                                individual student needs.
                            </p>
                        </li>
                        <li className="flex items-start space-x-4">
                            <FontAwesomeIcon icon={faLocationArrow} className="size-8 rotate-45" />
                            <p className="font-light text-titleBlack">
                                Develop comprehensive content and resources aligned with the latest
                                curriculum standards.
                            </p>
                        </li>
                        <li className="flex items-start space-x-4">
                            <FontAwesomeIcon icon={faLocationArrow} className="size-8 rotate-45" />
                            <p className="font-light text-titleBlack">
                                Foster collaboration with educators and industry experts to enhance
                                educational offerings.
                            </p>
                        </li>
                        <li className="flex items-start space-x-4">
                            <FontAwesomeIcon icon={faLocationArrow} className="size-8 rotate-45" />
                            <p className="font-light text-titleBlack">
                                Utilize cutting-edge technology to provide interactive and engaging
                                exam preparation tools.
                            </p>
                        </li>
                    </ul>
                </div>

                <div className="bg-[#CDC7ED] rounded-lg p-6">
                    <div className="px-4">
                        <h1 className={twMerge(italianno.className, 'text-3xl')}>The Excellence</h1>
                        <span className="text-3xl text-white font-bold">
                            Why <span className="text-primary">Choose</span> Us?
                        </span>
                    </div>

                    <ul className="py-4 flex flex-col space-y-5">
                        <li className="flex items-start space-x-4">
                            <FontAwesomeIcon icon={faLocationArrow} className="size-8 rotate-45" />
                            <p className="font-light text-titleBlack">
                                Personalized learning plans based on data-driven insights and
                                student progress.
                            </p>
                        </li>
                        <li className="flex items-start space-x-4">
                            <FontAwesomeIcon icon={faLocationArrow} className="size-8 rotate-45" />
                            <p className="font-light text-titleBlack">
                                Comprehensive resources designed to meet and exceed current
                                educational standards.
                            </p>
                        </li>
                        <li className="flex items-start space-x-4">
                            <FontAwesomeIcon icon={faLocationArrow} className="size-8 rotate-45" />
                            <p className="font-light text-titleBlack">
                                Collaborative partnerships with educators and experts to enhance
                                content quality.
                            </p>
                        </li>
                        <li className="flex items-start space-x-4">
                            <FontAwesomeIcon icon={faLocationArrow} className="size-8 rotate-45" />
                            <p className="font-light text-titleBlack">
                                Innovative technology to create interactive and engaging exam
                                preparation tools.
                            </p>
                        </li>
                    </ul>
                </div>

                <Image
                    src="/img/about/AboutImage3.png"
                    alt="about-image"
                    width={1400}
                    height={800}
                    className="w-full h-full object-cover"
                />
            </div>
        </main>
    );
};

export default AboutUs;
