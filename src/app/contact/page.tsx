import HeaderTitle from '@/components/common/HeaderTitle';
import Header from '@/components/layout/header/Header';
import ClipEdgeSection from '@/components/layout/clipEdgeSection/ClipEdgeSection';
import ContactUsCard from '@/components/molecular/contactUsCard/ContactUsCard';
import SectionCenter from '@/components/layout/sectionCenter/SectionCenter';

const ContactUs = () => {
    return (
        <>
            <Header type="md">
                <HeaderTitle title="Contact Us" />
            </Header>

            <SectionCenter className="flex justify-center md:p-12 w-full mb-0">
                <ContactUsCard />
            </SectionCenter>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8752307983627!2d76.30561067585604!3d10.027153572565224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080dafbed183bf%3A0x5951f316ba13a37e!2sLuLu%20International%20Shopping%20Mall!5e0!3m2!1sen!2sin!4v1724041891287!5m2!1sen!2sin"
                width="100%"
                height="450"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
                className="mb-20"
            ></iframe>
        </>
    );
};

export default ContactUs;
