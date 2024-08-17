import Button from '@/components/atomic/button/Button';
import Header from '@/components/layout/header/Header';
import SectionCenter from '@/components/layout/sectionCenter/SectionCenter';
import Image from 'next/image';

export default function Home() {
    return (
        <main className="">
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


            <section className="w-full py-28">
                <SectionCenter>
                    <div className="grid grid-cols-2 gap-x-1">
                        <div className="h-full  px-10">
                            <div className="relative w-full h-96 bg-titleBlack rounded-2xl">
                                <div className=" absolute w-[85%] h-[26rem] top-9 left-9">
                                    <Image
                                        src="/img/home/about.png"
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-2xl"
                                        alt="About image"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <h6 className="text-2xl font-italianno text-primary">About us</h6>
                            <h1 className="text-4xl font-semibold"> Empowering Minds</h1>
                            <h1 className="text-4xl font-semibold">Shoping Futrues</h1>
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
                                className="w-36 h-11 mt-3"
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
