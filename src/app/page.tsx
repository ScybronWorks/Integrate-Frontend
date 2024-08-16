import Button from '@/components/atomic/button/Button';
import Header from '@/components/layout/header/Header';
import SectionCenter from '@/components/layout/sectionCenter/SectionCenter';

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
        </main>
    );
}
