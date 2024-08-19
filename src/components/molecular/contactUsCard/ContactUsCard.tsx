import React from 'react';
import ContactData from './ContactData';
import ContactUsForm from './ContactUsForm';

type Props = {};

const ContactUsCard = ({}: Props) => {
    const contactDetails = [
        {
            title: 'Address',
            description: `Integrate Edutech Pvt. Ltd. House no 370,Manedath house, Near Mannam Post office Mannam P.O, N. Paravoor, Ernakulam Kerala – 683520`,
            image: '/icons/address.svg',
        },
        {
            title: 'Email',
            description: `edutechintegrate@gmail.com`,
            image: '/icons/email.svg',
        },
        {
            title: 'Phone',
            description: `+91 9061707144, +91 8129927073`,
            image: '/icons/phone.svg',
        },
    ];
    return (
        <div className="w-full h-[34rem] bg-gradient-primary-linear flex flex-col p-8 rounded-br-[3rem] rounded-tr-lg text-white mb-44 mt-20">
            <div className="w-fit flex flex-col gap-2 py-2">
                <h2 className="text-6xl font-semibold">Let{`'`}s connect now</h2>
                <p className="text-lg  font-italianno">
                    Get in Touch: We{`'`}re Here to Assist with Your Educational Needs.
                </p>
                <div className="border-b w-5/6" />
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-5 p-6">
                <div className="col-span-2">
                    <div className="flex flex-col gap-6">
                        {contactDetails.map((item, index) => (
                            <ContactData
                                key={index}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </div>
                </div>
                <div className="col-span-3 relative left-6 top-10">
                    <ContactUsForm />
                </div>
            </div>
        </div>
    );
};

export default ContactUsCard;
