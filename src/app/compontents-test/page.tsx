import ServiceCard from '@/components/molecular/serviceCard/ServiceCard';

const Components = () => {
    return (
        <div className="flex justify-center items-center h-screen gap-4">
            <ServiceCard
                title="Tutoring"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, magni at sed eius."
                image="/img/tutoring.png"
                key="1"
            />
            <ServiceCard
                title="Tutoring"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, magni at sed eius."
                image="/img/tutoring.png"
                key="1"
            />
            <ServiceCard
                title="Tutoring"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, magni at sed eius."
                image="/img/tutoring.png"
                key="1"
            />
            <ServiceCard
                title="Tutoring"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, magni at sed eius."
                image="/img/tutoring.png"
                key="1"
            />
        </div>
    );
};

export default Components;
