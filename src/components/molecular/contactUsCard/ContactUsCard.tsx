'use client';
import React from 'react';
import ContactData from './ContactData';
import ContactUsForm from './ContactUsForm';
import { Fade } from 'react-awesome-reveal';
import { contactDetails } from '@/@db/contact';

type Props = {};

const ContactUsCard = ({}: Props) => {
    return (
        <>
            <div className="w-full h-[34rem] bg-secondary hidden md:flex flex-col p-8 rounded-br-[3rem] rounded-tr-lg text-white mb-44 mt-20">
                <Fade triggerOnce>
                    <div className="w-fit flex flex-col gap-2 py-2">
                        <h2 className="text-6xl font-semibold">Let{`'`}s connect now</h2>
                        <p className="text-lg  font-italianno">
                            Get in Touch: We{`'`}re Here to Assist with Your Educational Needs.
                        </p>
                        <div className="border-b w-5/6" />
                    </div>
                </Fade>
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

            {/* mdall Screen */}
            <div className="flex flex-col gap-10">
                <div className="w-full h-fit flex md:hidden flex-col p-8 rounded-br-[3rem] rounded-tr-lg bg-secondary mt-20 text-white">
                    <Fade triggerOnce>
                        <div className="w-fit flex flex-col gap-2 py-2">
                            <h2 className="text-6xl font-semibold">Let{`'`}s connect now</h2>
                            <p className="text-lg  font-italianno">
                                Get in Touch: We{`'`}re Here to Assist with Your Educational Needs.
                            </p>
                            <div className="border-b w-5/6" />
                        </div>
                    </Fade>
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
                    </div>
                </div>
                <div className="mb-12 md:hidden">
                    <ContactUsForm />
                </div>
            </div>
        </>
    );
};

export default ContactUsCard;
