import Button from '@/components/atomic/button/Button';
import SectionCenter from '@/components/common/SectionCenter';
import Header from '@/components/layout/Header/Header';

export default function Home() {
    return (
        <main className="">
            <Header
                backgroundImage="https://s3-alpha-sig.figma.com/img/50f2/e657/225029f2a4b24d86be0508c1339e4ff9?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hjIcGuWCKaJk1BJQoWld8NDQok72qHogc~ImK5p0aZeeDf-N35UUcDxbz7wNXmqVSJGM3oy~7wBc8GSlGV8QBkpJu2Dqdr4XP66D8LehA7ZToqLZhif-xsYw1DMHg5frx7jd6P-rmyHEO~kHEZwqdO8EEfSb8pNxg3T8CPAgFG25yQGdGCgFwNEVOgnFYGeLjkOY01EsYjlm0WbsWfTpz8mqJS21qDz2sWrbcx-Z9kfwXtCEzYTTnAp7IgnLzU3XoO5fIOH9PzE9KnSy9JR6Yt4jpj600hU~CzZxXbzvgOi-rRleUWdiQbMygPm9xak7FvpR6Vb7wZARlVBvdiCwfw__"
                type="lg"
                ClassName="text-white"
            >
                <SectionCenter className="h-full">
                    <div className="flex items-start justify-center h-full flex-col">
                        <div className="text-[59px] font-semibold leading-[87.5px] max-w-[1118px]">
                            Unlock Your Potential with Expert Guidance and Resources
                        </div>
                        <div className="pt-5">
                            <Button className="text-[14px] w-[160px] h-[55px]">
                                Discover More
                            </Button>
                        </div>
                    </div>
                </SectionCenter>
            </Header>
        </main>
    );
}

